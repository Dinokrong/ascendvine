/* ================================
   AUTH GUARD
================================ */
(function guard() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') return; // login page is always public
  if (!sessionStorage.getItem('auth')) {
    window.location.replace('index.html');
  }
})();

/* ================================
   ACTIVE NAV LINK
================================ */
(function setActiveNavLink() {
  var page = window.location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nav-center a').forEach(function(link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
})();


/* ================================
   LOGIN PAGE
================================ */
(function initLogin() {
  var form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value.trim();
    var passcode = document.getElementById('passcode').value;
    var errorEl  = document.getElementById('error-msg');

    if (username === 'ascend' && passcode === 'emory2025') {
      sessionStorage.setItem('auth', '1');
      window.location.href = 'home.html';
    } else {
      errorEl.style.display = 'block';
      var card = document.querySelector('.login-card');
      card.style.transform = 'translateX(6px)';
      setTimeout(function() { card.style.transform = 'translateX(-6px)'; }, 80);
      setTimeout(function() { card.style.transform = 'translateX(4px)';  }, 160);
      setTimeout(function() { card.style.transform = 'translateX(0)';    }, 240);
    }
  });

  ['username', 'passcode'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', function() {
      document.getElementById('error-msg').style.display = 'none';
    });
  });
})();


/* ================================
   QUESTION BANK
================================ */
(function initQuestionBank() {
  if (!document.getElementById('flashcard-card')) return;
  if (typeof QUESTIONS === 'undefined') {
    document.getElementById('card-question').textContent = 'Error: questions.js not loaded.';
    return;
  }

  var filteredCards = [];
  var currentIndex  = 0;

  // DOM refs
  var cardQuestion   = document.getElementById('card-question');
  var cardAnswerText = document.getElementById('card-answer-text');
  var cardAnswerSec  = document.getElementById('card-answer-section');
  var cardTopicBadge = document.getElementById('card-topic-badge');
  var cardCounter    = document.getElementById('card-counter');
  var showAnswerBtn  = document.getElementById('show-answer-btn');
  var hideAnswerBtn  = document.getElementById('hide-answer-btn');
  var prevBtn        = document.getElementById('prev-btn');
  var nextBtn        = document.getElementById('next-btn');
  var flashcardNav   = document.getElementById('flashcard-nav');
  var noResults      = document.getElementById('no-results');
  var qbCount        = document.getElementById('qb-count');
  var filterType     = document.getElementById('filter-type');
  var filterTopic    = document.getElementById('filter-topic');
  var filterDiff     = document.getElementById('filter-difficulty');
  var filterFirm     = document.getElementById('filter-firm');
  var resetBtn       = document.getElementById('btn-reset-filters');

  // ---- Hide / show answer ----
  function hideAnswer() {
    cardAnswerSec.classList.remove('visible');
    showAnswerBtn.style.display = 'inline-block';
    hideAnswerBtn.style.display = 'none';
  }

  function showAnswer() {
    cardAnswerSec.classList.add('visible');
    showAnswerBtn.style.display = 'none';
    hideAnswerBtn.style.display = 'inline-block';
  }

  // ---- Render card ----
  function renderCard() {
    // Always hide answer FIRST before updating text, so old answer never flashes
    hideAnswer();

    if (filteredCards.length === 0) {
      flashcardNav.style.display = 'none';
      noResults.style.display    = 'block';
      cardCounter.textContent    = '';
      qbCount.textContent        = '0 questions';
      return;
    }

    flashcardNav.style.display = 'flex';
    noResults.style.display    = 'none';

    var card = filteredCards[currentIndex];
    cardTopicBadge.textContent = card.topic || 'General';
    cardQuestion.textContent   = card.question;
    cardAnswerText.textContent = card.answer || 'No answer provided for this question.';
    cardCounter.textContent    = 'Card ' + (currentIndex + 1) + ' of ' + filteredCards.length;
    qbCount.textContent        = filteredCards.length.toLocaleString() + ' questions';

    // Badge color: warm tint for behavioral, neutral for technical
    if (card.type === 'behavioral') {
      cardTopicBadge.style.background = 'transparent';
      cardTopicBadge.style.color      = '#B8762A';
      cardTopicBadge.style.borderColor = '#D4C4A0';
    } else {
      cardTopicBadge.style.background = 'transparent';
      cardTopicBadge.style.color      = '#888888';
      cardTopicBadge.style.borderColor = '#DDD7CD';
    }
  }

  // ---- Apply filters ----
  function applyFilters() {
    var type  = filterType.value;
    var topic = filterTopic.value;
    var diff  = filterDiff.value;
    var firm  = filterFirm.value;

    filteredCards = QUESTIONS.filter(function(q) {
      if (type  !== 'all' && q.type       !== type)  return false;
      if (topic !== 'all' && q.topic      !== topic) return false;
      if (diff  !== 'all' && q.difficulty !== diff)  return false;
      if (firm  !== 'all') {
        if (!q.firms || q.firms.indexOf(firm) === -1) return false;
      }
      return true;
    });

    // Shuffle on each new filter set
    for (var i = filteredCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = filteredCards[i];
      filteredCards[i] = filteredCards[j];
      filteredCards[j] = tmp;
    }

    currentIndex = 0;
    renderCard();
  }

  // ---- Filter event listeners ----
  var BEHAVIORAL_TOPICS = new Set([
    'Background & Fit','Career Vision & Future','Conflict & Difficult Situations',
    'Strengths, Weaknesses & Feedback','Team & Leadership',
    'Work Ethic & Commitment','General Banking Knowledge'
  ]);

  filterType.addEventListener('change', function() {
    var type  = filterType.value;
    var topic = filterTopic.value;
    if (type === 'technical' && BEHAVIORAL_TOPICS.has(topic)) {
      filterTopic.value = 'all';
    }
    if (type === 'behavioral' && topic !== 'all' && !BEHAVIORAL_TOPICS.has(topic)) {
      filterTopic.value = 'all';
    }
    applyFilters();
  });

  filterTopic.addEventListener('change', applyFilters);
  filterDiff.addEventListener('change', applyFilters);
  filterFirm.addEventListener('change', applyFilters);

  // ---- Reset button ----
  resetBtn.addEventListener('click', function() {
    filterType.value  = 'all';
    filterTopic.value = 'all';
    filterDiff.value  = 'all';
    filterFirm.value  = 'all';
    applyFilters();
  });

  // ---- Navigation ----
  showAnswerBtn.addEventListener('click', showAnswer);
  hideAnswerBtn.addEventListener('click', hideAnswer);

  nextBtn.addEventListener('click', function() {
    if (!filteredCards.length) return;
    currentIndex = (currentIndex + 1) % filteredCards.length;
    renderCard();
  });

  prevBtn.addEventListener('click', function() {
    if (!filteredCards.length) return;
    currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
    renderCard();
  });

  // Keyboard shortcuts: ← → to navigate, Space to toggle answer
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'SELECT') return; // don't hijack dropdown keyboard nav
    if (e.key === 'ArrowRight') {
      if (!filteredCards.length) return;
      currentIndex = (currentIndex + 1) % filteredCards.length;
      renderCard();
    } else if (e.key === 'ArrowLeft') {
      if (!filteredCards.length) return;
      currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
      renderCard();
    } else if (e.key === ' ') {
      e.preventDefault();
      cardAnswerSec.classList.contains('visible') ? hideAnswer() : showAnswer();
    }
  });

  // ---- Initial load ----
  applyFilters();
})();
