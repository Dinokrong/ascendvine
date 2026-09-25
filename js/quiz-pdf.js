// Downloads a quiz submission as a PDF for Seniors, Vice Presidents, and Admins.
// The PDF is built in the browser from data the grader can already see.
const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
const JSPDF_SRI = 'sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==';

function loadJsPdf() {
  if (window.jspdf) return Promise.resolve(window.jspdf.jsPDF);
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = JSPDF_URL;
    script.integrity = JSPDF_SRI;
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    script.onload = () => resolve(window.jspdf.jsPDF);
    script.onerror = () => reject(new Error('Could not load the PDF tool. Check your connection and try again.'));
    document.head.appendChild(script);
  });
}

// The built-in PDF fonts only cover basic Latin characters, so swap common
// typographic characters for plain equivalents.
const PLAIN = [
  [/[‘’‛′]/g, "'"], [/[“”″]/g, '"'], [/[‐‑‒–—―−]/g, '-'], [/…/g, '...'],
  [/[⇒→]/g, '->'], [/←/g, '<-'], [/≈/g, '~'], [/≤/g, '<='], [/≥/g, '>='],
  [/•/g, '-'], [/[   ]/g, ' ']
];
function plain(value) {
  let text = String(value ?? '');
  for (const [pattern, replacement] of PLAIN) text = text.replace(pattern, replacement);
  return text.replace(/[^\t\n\r\x20-\x7e\xa0-\xff]/g, '?');
}

function nameOf(profile) {
  return ((profile?.first_name || '') + ' ' + (profile?.last_name || '')).trim()
    || profile?.email || 'Avine member';
}

function formatDate(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat(undefined, {
    month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit'
  }).format(new Date(value));
}

function formatAway(events) {
  const seconds = Math.round(events.reduce((sum, event) =>
    event.returned_at ? sum + Math.max(0, (new Date(event.returned_at) - new Date(event.left_at)) / 1000) : sum, 0));
  return seconds >= 60 ? Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's' : seconds + 's';
}

async function loadSubmission(supabase, attemptId) {
  const attemptResult = await supabase.from('quiz_attempts')
    .select('id, quiz_id, user_id, group_id, status, submitted_at, graded_at, score, overall_feedback')
    .eq('id', attemptId)
    .single();
  if (attemptResult.error) throw attemptResult.error;
  const attempt = attemptResult.data;

  const [quizResult, profileResult, groupResult, questionResult, responseResult, awayResult] = await Promise.all([
    supabase.from('quizzes').select('title').eq('id', attempt.quiz_id).single(),
    supabase.from('profiles').select('email, first_name, last_name').eq('id', attempt.user_id).maybeSingle(),
    supabase.from('groups').select('name').eq('id', attempt.group_id).maybeSingle(),
    supabase.from('quiz_questions').select('id, position, chapter, prompt, max_points')
      .eq('quiz_id', attempt.quiz_id).order('position'),
    supabase.from('quiz_responses').select('question_id, response_text, points_awarded, grader_feedback')
      .eq('attempt_id', attempt.id),
    supabase.from('quiz_away_events').select('question_id, left_at, returned_at').eq('attempt_id', attempt.id)
  ]);
  for (const result of [quizResult, questionResult, responseResult]) if (result.error) throw result.error;

  const questions = questionResult.data || [];
  const keyResult = questions.length
    ? await supabase.from('quiz_answer_keys').select('question_id, answer_key').in('question_id', questions.map(q => q.id))
    : { data: [] };

  return {
    attempt,
    quizTitle: quizResult.data?.title || 'Weekly quiz',
    memberName: nameOf(profileResult.data),
    sortName: [profileResult.data?.last_name, profileResult.data?.first_name].filter(Boolean).join(' '),
    groupName: groupResult.data?.name || '',
    questions,
    responses: responseResult.data || [],
    keys: keyResult.data || [],
    away: awayResult.error ? [] : awayResult.data || []
  };
}

function writeSubmission(doc, s) {
  const margin = 54;
  const width = doc.internal.pageSize.getWidth() - margin * 2;
  const bottom = doc.internal.pageSize.getHeight() - margin;
  let y = margin;

  function line(text, { size = 10, bold = false, color = 17, indent = 0, after = 4 } = {}) {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    if (Array.isArray(color)) doc.setTextColor(color[0], color[1], color[2]);
    else doc.setTextColor(color);
    const lineHeight = size * 1.35;
    for (const row of doc.splitTextToSize(plain(text), width - indent)) {
      if (y + lineHeight > bottom) { doc.addPage(); y = margin; }
      doc.text(row, margin + indent, y + size);
      y += lineHeight;
    }
    y += after;
  }

  const possible = s.questions.reduce((sum, q) => sum + Number(q.max_points), 0);
  line(s.quizTitle, { size: 18, bold: true, after: 2 });
  line(s.memberName + (s.groupName ? ' · ' + s.groupName : ''), { size: 11, color: 90, after: 2 });
  line('Submitted ' + formatDate(s.attempt.submitted_at) +
    (s.attempt.status === 'graded'
      ? ' · Graded ' + formatDate(s.attempt.graded_at) + ' · Score ' + (s.attempt.score ?? 0) + ' / ' + possible
      : ' · Not graded yet'), { size: 9, color: 110, after: 10 });

  if (s.away.length) {
    line('Left the quiz page ' + s.away.length + (s.away.length === 1 ? ' time' : ' times') +
      ' (' + formatAway(s.away) + ' away in total)', { size: 9, bold: true, color: [163, 58, 43], after: 10 });
  }
  if (s.attempt.overall_feedback) {
    line('Overall comment', { size: 9, bold: true, color: 90, after: 1 });
    line(s.attempt.overall_feedback, { after: 12 });
  }

  for (const q of s.questions) {
    const response = s.responses.find(r => r.question_id === q.id) || {};
    const key = s.keys.find(k => k.question_id === q.id);
    const awayHere = s.away.filter(e => e.question_id === q.id).length;
    doc.setDrawColor(220);
    if (y + 60 > bottom) { doc.addPage(); y = margin; }
    doc.line(margin, y, margin + width, y);
    y += 10;
    line('Question ' + q.position + (q.chapter ? ' · ' + q.chapter : '') + '   ' +
      (response.points_awarded != null ? response.points_awarded + ' / ' : '') + q.max_points +
      (Number(q.max_points) === 1 ? ' point' : ' points'), { size: 9, bold: true, color: 110, after: 2 });
    line(q.prompt, { size: 11, bold: true, after: 8 });
    line('Response', { size: 9, bold: true, color: 90, after: 1 });
    line(response.response_text || 'No response', { indent: 8, after: 8 });
    line('Answer key', { size: 9, bold: true, color: [36, 83, 60], after: 1 });
    line(key?.answer_key || 'Not available', { indent: 8, color: [36, 83, 60], after: 8 });
    if (response.grader_feedback) {
      line('Grader comment', { size: 9, bold: true, color: 90, after: 1 });
      line(response.grader_feedback, { indent: 8, after: 8 });
    }
    if (awayHere) {
      line('Left the quiz page ' + awayHere + (awayHere === 1 ? ' time' : ' times') + ' on this question',
        { size: 9, color: [163, 58, 43], after: 8 });
    }
    y += 4;
  }
}

function fileName(text) {
  return plain(text).replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, ' ').trim().slice(0, 120) || 'quiz';
}

export async function downloadSubmissionPdf(supabase, attemptId) {
  const [jsPDF, submission] = await Promise.all([loadJsPdf(), loadSubmission(supabase, attemptId)]);
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  writeSubmission(doc, submission);
  doc.save(fileName(submission.quizTitle + ' - ' + submission.memberName) + '.pdf');
}

// All submissions for one quiz in one file, one member per page, A to Z by last name.
export async function downloadQuizPdf(supabase, attemptIds, title) {
  const jsPDF = await loadJsPdf();
  const submissions = [];
  for (const id of attemptIds) submissions.push(await loadSubmission(supabase, id));
  submissions.sort((a, b) => a.sortName.localeCompare(b.sortName, undefined, { sensitivity: 'base' }));
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  submissions.forEach((submission, index) => {
    if (index) doc.addPage();
    writeSubmission(doc, submission);
  });
  doc.save(fileName(title + ' - all responses') + '.pdf');
}
