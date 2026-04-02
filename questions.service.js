const data = require('./questions.json');

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
