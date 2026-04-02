// Auto-generated — do not edit directly
const { ACCOUNTING } = require('./accounting');
const { BACKGROUND_FIT } = require('./background-fit');
const { CAREER_VISION_FUTURE } = require('./career-vision-future');
const { CONFLICT_DIFFICULT_SITUATIONS } = require('./conflict-difficult-situations');
const { DCF } = require('./dcf');
const { ENTERPRISE_EQUITY_VALUE } = require('./enterprise-equity-value');
const { FINANCE_BRAIN_TEASERS } = require('./finance-brain-teasers');
const { FINANCIAL_INSTITUTIONS_GROUP } = require('./financial-institutions-group');
const { GENERAL_BANKING_KNOWLEDGE } = require('./general-banking-knowledge');
const { GENERAL_BRAIN_TEASERS } = require('./general-brain-teasers');
const { HEALTHCARE_GROUP } = require('./healthcare-group');
const { INDUSTRIALS_GROUP } = require('./industrials-group');
const { LEVERAGED_BUYOUTS_LBOS } = require('./leveraged-buyouts-lbos');
const { MARKET_KNOWLEDGE } = require('./market-knowledge');
const { MEDIA_TELECOM_GROUP } = require('./media-telecom-group');
const { MERGER_MODEL_MA } = require('./merger-model-ma');
const { NATURAL_RESOURCES_GROUP } = require('./natural-resources-group');
const { RESTRUCTURING_DISTRESSED_MA } = require('./restructuring-distressed-ma');
const { STRENGTHS_WEAKNESSES_FEEDBACK } = require('./strengths-weaknesses-feedback');
const { TEAM_LEADERSHIP } = require('./team-leadership');
const { TECHNOLOGY_BANKING } = require('./technology-banking');
const { UNCATEGORIZED } = require('./uncategorized');
const { VALUATION } = require('./valuation');
const { WORK_ETHIC_COMMITMENT } = require('./work-ethic-commitment');

/** @type {import('../types').Question[]} */
const QUESTIONS = [
  ...ACCOUNTING,
  ...BACKGROUND_FIT,
  ...CAREER_VISION_FUTURE,
  ...CONFLICT_DIFFICULT_SITUATIONS,
  ...DCF,
  ...ENTERPRISE_EQUITY_VALUE,
  ...FINANCE_BRAIN_TEASERS,
  ...FINANCIAL_INSTITUTIONS_GROUP,
  ...GENERAL_BANKING_KNOWLEDGE,
  ...GENERAL_BRAIN_TEASERS,
  ...HEALTHCARE_GROUP,
  ...INDUSTRIALS_GROUP,
  ...LEVERAGED_BUYOUTS_LBOS,
  ...MARKET_KNOWLEDGE,
  ...MEDIA_TELECOM_GROUP,
  ...MERGER_MODEL_MA,
  ...NATURAL_RESOURCES_GROUP,
  ...RESTRUCTURING_DISTRESSED_MA,
  ...STRENGTHS_WEAKNESSES_FEEDBACK,
  ...TEAM_LEADERSHIP,
  ...TECHNOLOGY_BANKING,
  ...UNCATEGORIZED,
  ...VALUATION,
  ...WORK_ETHIC_COMMITMENT,
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
