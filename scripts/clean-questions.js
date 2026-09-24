// Cleans the AscendVine Question Bank (questions.js).
// Usage: node clean-questions.js <in questions.js> <out questions.js> <report.json>
const fs = require('fs');

const [, , inPath, outPath, reportPath] = process.argv;
const raw = fs.readFileSync(inPath, 'utf8');
const Q = JSON.parse(raw.replace(/^const QUESTIONS\s*=\s*/, '').replace(/;?\s*$/, ''));
const TOPICS = [...new Set(Q.map(q => q.topic).filter(Boolean))].sort((a, b) => b.length - a.length);
const report = { questionRepeated: [], sourceLabel: [], ibvineLabel: [], questionReflowed: [], unchanged: 0, needsLook: [] };

// ---------- Questions: restore lost line breaks ----------
const KEEP_CAMEL = ['CapEx', 'OpEx', 'FinTech', 'LevFin', 'HoldCo', 'SubCos', 'SubCo', 'ParentCo', 'CoffeeCo', 'DonutCo', 'ConEdison', 'BlackRock', 'JPMorgan', 'LinkedIn', 'PowerPoint', 'YouTube', 'iPhone', 'McKinsey', 'PitchBook', 'FactSet', 'DoorDash', 'WeWork', 'eBay', 'PayPal', 'NextEra', 'ExxonMobil'];

function reflowQuestion(text) {
  const protectedWords = [];
  let s = text.replace(new RegExp(KEEP_CAMEL.join('|'), 'g'), word => {
    protectedWords.push(word);
    return '\u0000' + (protectedWords.length - 1) + '\u0001';
  });
  // "?Part", ":Net", "!Now" -> new line
  s = s.replace(/([?:!])(?=[A-Z$(\u0000])/g, '$1\n');
  // "rate.Walk", "EBITDA.What", "2.How" -> new line (but not "U.S." or "e.g.")
  s = s.replace(/(\b[\w)%]{2,}|\d)\.(?=[A-Z][a-z]|\u0000)/g, '$1.\n');
  // "$200Share", "10%Tax", "write-upUsing", "(straight-line)Total" -> new line
  s = s.replace(/([a-z0-9%)])(?=[A-Z][a-z])/g, '$1\n');
  s = s.replace(/\u0000(\d+)\u0001/g, (_, i) => protectedWords[Number(i)]);
  return s.replace(/[ \t]+\n/g, '\n').replace(/\n{2,}/g, '\n').trim();
}

// ---------- Answers: remove the repeated question and source labels ----------
// Returns the index in `answer` just past a leading copy of `question`,
// comparing letters and digits only, or -1 if the answer does not start with it.
function endOfRepeatedQuestion(question, answer) {
  const q = question.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (q.length < 12) return -1;
  let qi = 0;
  for (let ai = 0; ai < answer.length; ai++) {
    const ch = answer[ai];
    if (!/[A-Za-z0-9]/.test(ch)) continue;
    if (ch.toLowerCase() !== q[qi]) return -1;
    qi++;
    if (qi === q.length) {
      let end = ai + 1;
      while (end < answer.length && /[\s?.:!)"'”%]/.test(answer[end])) end++;
      return end;
    }
  }
  return -1;
}

// Interview details that follow "Reported in <Firm> Interview".
const DETAIL = new RegExp('^(?:' + [
  '(?:SA|FT|Summer Analyst|Full[- ]Time) ?\\d{4}',
  'off-cycle', 'on-cycle', 'Lateral', 'Generalist', '[Ss]uperday', 'HireVue', 'Phone screen',
  '(?:First|Second|Third|Final|Phone|Video|first|second|third|final) [Rr]ound',
  '(?:[A-Z][\\w.&/-]*|&)(?: (?:[A-Z][\\w.&/-]*|&)){0,3} [Oo]ffice',
  '(?:[A-Z][\\w.&/-]*|&)(?: (?:[A-Z][\\w.&/-]*|&)){0,3} group',
  'Industrials M&A', 'FIG', 'M&A', 'Power', 'TMT', 'DCM', 'ECM', 'LevFin', 'Restructuring'
].join('|') + ')(?=,? |$)');

function stripSource(q, text) {
  let s = text;
  let source = null;
  const ib = s.match(/^IB Vine Select\s+/);
  if (ib) {
    s = s.slice(ib[0].length);
    report.ibvineLabel.push(q.id);
  }
  const rep = s.match(/^Reported in (.+?) Interview\b[,:]?\s*/);
  if (rep) {
    s = s.slice(rep[0].length);
    const details = [];
    let m;
    while ((m = s.match(DETAIL))) {
      // Only treat a bare group word ("Power", "M&A") as a detail when a comma follows.
      const token = m[0];
      const after = s.slice(token.length);
      const bare = /^(?:FIG|M&A|Power|TMT|DCM|ECM|LevFin|Restructuring|Industrials M&A)$/.test(token);
      if (bare && !after.startsWith(',') && !DETAIL.test(after.replace(/^,?\s*/, ''))) {
        if (!TOPICS.some(t => after.trim().startsWith(t))) break;
      }
      details.push(token);
      s = after.replace(/^,?\s*/, '');
    }
    source = { firm: rep[1], details: details.join(', ') };
    report.sourceLabel.push(q.id);
  }
  // The topic label ("Valuation", "Merger Model (M&A)") often comes next.
  if (ib || rep) {
    const topic = TOPICS.find(t => s.startsWith(t + ' ') || s === t);
    if (topic) s = s.slice(topic.length).trim();
  }
  return { text: s.trim(), source };
}

const cleaned = Q.map(q => {
  const out = { ...q };
  let answer = q.answer || '';
  let changed = false;

  const qEnd = endOfRepeatedQuestion(q.question, answer);
  if (qEnd > 0) {
    answer = answer.slice(qEnd).trim();
    report.questionRepeated.push(q.id);
    changed = true;
  }
  // A label partway in means the text before it is (part of) the question,
  // e.g. just "Part 2: ..." of a two-part question.
  const label = answer.search(/(?:IB Vine Select\s|Reported in .+? Interview\b)/);
  if (label > 0) {
    const letters = t => t.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const before = letters(answer.slice(0, label));
    if (before && letters(q.question).includes(before)) {
      answer = answer.slice(label);
      if (!report.questionRepeated.includes(q.id)) report.questionRepeated.push(q.id);
      changed = true;
    } else {
      report.needsLook.push({ id: q.id, why: 'text before label is not the question' });
    }
  }
  const { text, source } = stripSource(q, answer);
  if (text !== answer) changed = true;
  answer = text;
  // Where the question was asked, shown under the answer. "Unspecified" firms
  // show only the interview details, or nothing.
  if (source) {
    const firm = source.firm === 'Unspecified' ? '' : source.firm + ' interview';
    const parts = [firm || (source.details ? 'Interview' : ''), source.details].filter(Boolean);
    if (parts.length) out.reported = parts.join(' · ');
  }

  const question = reflowQuestion(q.question.trim());
  if (question !== q.question) {
    report.questionReflowed.push(q.id);
    changed = true;
  }
  out.question = question;
  out.answer = answer;

  if (!changed) report.unchanged++;
  if (q.answer && !answer) report.needsLook.push({ id: q.id, why: 'answer became empty' });
  if (/^(?:IB Vine|Reported in )/.test(answer)) report.needsLook.push({ id: q.id, why: 'label still at start' });
  if (/Reported in .+ Interview/.test(answer)) report.needsLook.push({ id: q.id, why: 'label still inside' });
  return out;
});

fs.writeFileSync(outPath, 'const QUESTIONS = ' + JSON.stringify(cleaned) + ';\n');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 1));
console.log({
  total: Q.length,
  answersThatRepeatedTheQuestion: report.questionRepeated.length,
  answersWithSourceLabel: report.sourceLabel.length,
  answersWithIBVineLabel: report.ibvineLabel.length,
  questionsWithLineBreaksRestored: report.questionReflowed.length,
  unchanged: report.unchanged,
  needsLook: report.needsLook
});
