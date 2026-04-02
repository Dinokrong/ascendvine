/**
 * One-time migration script.
 * Run: node migrate.js
 * Outputs: questions/, questions.json, questions.service.js, types.ts, review.json
 */

const fs = require('fs');
const path = require('path');

// ─── Load source ─────────────────────────────────────────────────────────────

const raw = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8');
const json = raw.replace(/^const QUESTIONS\s*=\s*/, '').replace(/;?\s*$/, '');
const data = JSON.parse(json);
console.log(`Loaded ${data.length} questions`);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function topicToFilename(topic) {
  if (!topic || topic.trim() === '') return 'uncategorized';
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')   // strip punctuation
    .trim()
    .replace(/\s+/g, '-');          // spaces to hyphens
}

function topicToVarName(topic) {
  if (!topic || topic.trim() === '') return 'UNCATEGORIZED';
  return topic
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_');
}

// Similarity: normalize both strings and check if answer starts with question
function normalize(s) {
  return s
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();
}

function detectContamination(question, answer) {
  if (!answer || !question) return { type: 'none' };

  const nq = normalize(question);
  const na = normalize(answer);

  if (na.length === 0) return { type: 'none' };

  // Case 1: answer starts with full question text (verbatim/near-verbatim)
  if (na.startsWith(nq)) {
    return { type: 'prefix', stripLength: answer.indexOf(answer.match(/\S/g)?.[0]) };
  }

  // Case 2: answer starts with a significant prefix of the question (>=40 chars)
  const qPrefix = nq.substring(0, Math.min(60, nq.length));
  if (qPrefix.length >= 40 && na.startsWith(qPrefix)) {
    return { type: 'prefix' };
  }

  // Case 3: question appears somewhere inside the answer — flag for review
  const qStart = nq.substring(0, Math.min(50, nq.length));
  if (qStart.length >= 30 && na.includes(qStart)) {
    return { type: 'embedded' };
  }

  return { type: 'none' };
}

// Strip the leading question text from an answer string (raw, not normalized)
function stripLeadingQuestion(question, answer) {
  // Try to find where the question ends in the answer and cut there
  const rawQ = question.trim();

  // Direct prefix match (case-insensitive)
  if (answer.toLowerCase().startsWith(rawQ.toLowerCase())) {
    const remainder = answer.slice(rawQ.length).replace(/^[\s.:?!]+/, '').trim();
    return remainder || answer; // don't return empty string
  }

  // Question ends mid-answer with a separator like ". " or "? "
  // Find the first sentence that doesn't look like the question
  const lines = answer.split(/\n/);
  if (lines.length > 1) {
    // Check if first line is essentially the question
    const firstLine = normalize(lines[0]);
    const nq = normalize(question);
    if (firstLine === nq || nq.startsWith(firstLine.substring(0, 40))) {
      return lines.slice(1).join('\n').replace(/^[\s.:?!]+/, '').trim() || answer;
    }
  }

  // Fallback: find where question prefix ends in the raw answer text
  const qStart60 = rawQ.substring(0, Math.min(60, rawQ.length));
  const idx = answer.toLowerCase().indexOf(qStart60.toLowerCase());
  if (idx !== -1) {
    // find end of that occurrence
    const afterQ = answer.slice(idx + qStart60.length);
    // scan forward to find end of full question
    const cutPoint = afterQ.search(/[A-Z\d]/); // next sentence starts
    if (cutPoint > -1 && cutPoint < 200) {
      return afterQ.slice(cutPoint).trim() || answer;
    }
  }

  return answer;
}

// ─── Process questions ────────────────────────────────────────────────────────

const reviewItems = [];
const cleaned = data.map(q => {
  const out = { ...q };

  // 1. Strip empty firms
  if (!out.firms || out.firms.length === 0) {
    delete out.firms;
  }

  // 2. Fix empty topic
  if (!out.topic || out.topic.trim() === '') {
    out.topic = 'Uncategorized';
  }

  // 3. Fix answer contamination
  const contamination = detectContamination(out.question, out.answer);
  if (contamination.type === 'prefix') {
    const fixed = stripLeadingQuestion(out.question, out.answer);
    if (fixed !== out.answer && fixed.length > 20) {
      out.answer = fixed;
      out._fixed = true;
    } else {
      // Ambiguous — flag for review
      reviewItems.push({
        id: out.id,
        topic: out.topic,
        issue: 'prefix — could not cleanly strip',
        question: out.question,
        answer: out.answer,
      });
    }
  } else if (contamination.type === 'embedded') {
    reviewItems.push({
      id: out.id,
      topic: out.topic,
      issue: 'question text embedded in answer — manual review needed',
      question: out.question,
      answer: out.answer,
    });
  }

  // Remove internal migration flag
  delete out._fixed;

  return out;
});

console.log(`Flagged ${reviewItems.length} items for review`);

// ─── Group by topic ───────────────────────────────────────────────────────────

const byTopic = {};
cleaned.forEach(q => {
  const t = q.topic;
  if (!byTopic[t]) byTopic[t] = [];
  byTopic[t].push(q);
});

const topicList = Object.keys(byTopic).sort();
console.log(`Topics: ${topicList.join(', ')}`);

// ─── Write questions/*.js topic files ────────────────────────────────────────

const questionsDir = path.join(__dirname, 'questions');
fs.mkdirSync(questionsDir, { recursive: true });

const topicMeta = []; // { topic, filename, varName, count }

topicList.forEach(topic => {
  const filename = topicToFilename(topic);
  const varName = topicToVarName(topic);
  const questions = byTopic[topic];
  topicMeta.push({ topic, filename, varName, count: questions.length });

  const body = JSON.stringify(questions, null, 2);
  const content = `// Auto-generated — do not edit directly. Source of truth is questions.json\n/** @type {import('../types').Question[]} */\nconst ${varName} = ${body};\n\nmodule.exports = { ${varName} };\n`;
  fs.writeFileSync(path.join(questionsDir, `${filename}.js`), content);
  console.log(`  Wrote questions/${filename}.js (${questions.length} questions)`);
});

// ─── Write questions/index.js ─────────────────────────────────────────────────

const imports = topicMeta
  .map(m => `const { ${m.varName} } = require('./${m.filename}');`)
  .join('\n');

const spread = topicMeta.map(m => `  ...${m.varName}`).join(',\n');

const indexContent = `// Auto-generated — do not edit directly
${imports}

/** @type {import('../types').Question[]} */
const QUESTIONS = [
${spread},
];

/** @param {string} topic */
function getByTopic(topic) {
  return QUESTIONS.filter(q => q.topic === topic);
}

/** @param {'Basic'|'Advanced'} difficulty */
function getByDifficulty(difficulty) {
  return QUESTIONS.filter(q => q.difficulty === difficulty);
}

/** @param {number} id */
function getById(id) {
  return QUESTIONS.find(q => q.id === id) || null;
}

/** @param {'technical'|'behavioral'} type */
function getByType(type) {
  return QUESTIONS.filter(q => q.type === type);
}

module.exports = { QUESTIONS, getByTopic, getByDifficulty, getById, getByType };
`;

fs.writeFileSync(path.join(questionsDir, 'index.js'), indexContent);
console.log('Wrote questions/index.js');

// ─── Write questions.json ─────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'questions.json'),
  JSON.stringify(cleaned, null, 2)
);
console.log('Wrote questions.json');

// ─── Write questions.service.js ───────────────────────────────────────────────

const serviceContent = `const data = require('./questions.json');

/** @type {import('./types').Question[]} */
const QUESTIONS = data;

/** @param {string} topic */
function getByTopic(topic) {
  return QUESTIONS.filter(q => q.topic === topic);
}

/** @param {'Basic'|'Advanced'} difficulty */
function getByDifficulty(difficulty) {
  return QUESTIONS.filter(q => q.difficulty === difficulty);
}

/** @param {number} id */
function getById(id) {
  return QUESTIONS.find(q => q.id === id) || null;
}

/** @param {'technical'|'behavioral'} type */
function getByType(type) {
  return QUESTIONS.filter(q => q.type === type);
}

module.exports = { QUESTIONS, getByTopic, getByDifficulty, getById, getByType };
`;

fs.writeFileSync(path.join(__dirname, 'questions.service.js'), serviceContent);
console.log('Wrote questions.service.js');

// ─── Write types.ts ───────────────────────────────────────────────────────────

const allTopics = topicList.map(t => `  | '${t.replace(/'/g, "\\'")}'`).join('\n');

const typesContent = `export type Difficulty = 'Basic' | 'Advanced';

export type QuestionType = 'technical' | 'behavioral';

export type Topic =
${allTopics};

export interface Question {
  id: number;
  question: string;
  answer: string;
  topic: Topic;
  difficulty: Difficulty;
  type: QuestionType;
  firms?: string[];
}
`;

fs.writeFileSync(path.join(__dirname, 'types.ts'), typesContent);
console.log('Wrote types.ts');

// ─── Second pass: catch remaining contamination patterns ─────────────────────
// Covers: follow-up questions, multi-step answers, partial question prefixes

cleaned.forEach(q => {
  if (!q.answer) return;
  // Already flagged
  if (reviewItems.find(r => r.id === q.id)) return;

  const a = q.answer.trim();
  const firstSentenceEnd = a.search(/[.?!]/);
  const firstSentence = (firstSentenceEnd > -1 ? a.substring(0, firstSentenceEnd) : a.substring(0, 80)).toLowerCase().trim();
  const qLower = q.question.toLowerCase();

  if (firstSentence.length > 15 && qLower.includes(firstSentence)) {
    reviewItems.push({
      id: q.id,
      topic: q.topic,
      issue: 'answer first sentence found in question — possible repetition or multi-part format',
      question: q.question,
      answer: q.answer,
    });
  }
});

// ─── Write review.json ────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'review.json'),
  JSON.stringify(reviewItems, null, 2)
);
console.log(`Wrote review.json (${reviewItems.length} items)`);

console.log('\nMigration complete.');
