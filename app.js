/* ================================
   AUTHORIZATION GUARD
================================ */
(function guardProtectedPages() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var publicPages = new Set(['index.html', 'reset-password.html', '']);
  if (publicPages.has(page)) return;

  document.documentElement.style.visibility = 'hidden';

  import('./js/auth-client.js')
    .then(async function(auth) {
      var user = await auth.requireApprovedUser();
      if (!user) return;

      document.documentElement.style.visibility = '';

      // Pages every member uses sit in the center, next to Question Bank.
      var navCenter = document.querySelector('.nav-center');
      if (navCenter && !navCenter.querySelector('a[href="leaderboard.html"]')) {
        var leaderboardLink = document.createElement('a');
        leaderboardLink.href = 'leaderboard.html';
        leaderboardLink.textContent = 'Leaderboard';
        if (page === 'leaderboard.html') leaderboardLink.classList.add('active');
        navCenter.appendChild(leaderboardLink);
      }

      var navRight = document.querySelector('.nav-right');
      if (!navRight) return;

      var memberships = await auth.getMyMemberships();
      var roles = memberships.map(function(item) { return item.role; });
      function has(role) { return roles.indexOf(role) !== -1; }

      // Role-only pages live in a menu under the member's role badge.
      var ROLE_LABELS = { admin: 'Admin', senior: 'Senior', vp: 'VP', associate: 'Associate', analyst: 'Analyst' };
      var topRole = ['admin', 'senior', 'vp', 'associate', 'analyst'].filter(has)[0];
      var roleLinks = [['groups.html', 'Groups']];
      if (has('associate') || has('analyst')) roleLinks.push(['quizzes.html', 'Quizzes']);
      if (has('senior')) roleLinks.push(['quiz-release.html', 'Release quizzes']);
      if (has('admin') || has('senior') || has('vp')) roleLinks.push(['grading.html', 'Grading']);
      if (has('admin')) roleLinks.push(['quiz-admin.html', 'Quiz Admin'], ['admin.html', 'Accounts & groups']);

      var onRolePage = roleLinks.some(function(link) { return link[0] === page; });
      var roleMenu = topRole
        ? '<div class="role-menu">' +
            '<button type="button" class="role-badge' + (onRolePage ? ' active' : '') + '" aria-haspopup="true" aria-expanded="false">' +
              ROLE_LABELS[topRole] + '<span class="role-caret" aria-hidden="true"></span>' +
            '</button>' +
            '<div class="role-menu-panel">' +
              roleLinks.map(function(link) {
                return '<a href="' + link[0] + '"' + (link[0] === page ? ' class="active"' : '') + '>' + link[1] + '</a>';
              }).join('') +
            '</div>' +
          '</div>'
        : '';

      navRight.classList.add('account-nav');
      navRight.innerHTML =
        roleMenu +
        '<a href="profile.html">Profile</a>' +
        '<button type="button" class="nav-sign-out">Sign out</button>';

      navRight.querySelector('.nav-sign-out').addEventListener('click', auth.signOut);

      var menu = navRight.querySelector('.role-menu');
      if (menu) {
        var badge = menu.querySelector('.role-badge');
        function setOpen(open) {
          menu.classList.toggle('open', open);
          badge.setAttribute('aria-expanded', String(open));
        }
        // Hover opens it on desktop; tapping toggles it on phones.
        badge.addEventListener('click', function() { setOpen(!menu.classList.contains('open')); });
        document.addEventListener('click', function(event) {
          if (!menu.contains(event.target)) setOpen(false);
        });
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') setOpen(false);
        });
      }
    })
    .catch(function() {
      window.location.replace('index.html');
    });
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
  var viewMode      = 'single'; // 'single' | 'grid'

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
  var viewToggle     = document.getElementById('view-mode-toggle');
  var gridContainer  = document.getElementById('grid-cards-container');

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

  // ---- Grid render ----
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function renderGrid() {
    gridContainer.innerHTML = '';
    if (filteredCards.length === 0) {
      gridContainer.innerHTML = '<p class="no-results" style="padding:4rem 2.5rem;">No questions match the selected filters.</p>';
      qbCount.textContent = '0 questions';
      return;
    }
    qbCount.textContent = filteredCards.length.toLocaleString() + ' questions';

    filteredCards.forEach(function(card) {
      var isBehav   = card.type === 'behavioral';
      var tagColor  = isBehav ? '#B8762A' : '#888888';
      var tagBorder = isBehav ? '#D4C4A0' : '#DDD7CD';

      var el = document.createElement('div');
      el.className = 'gc-card';
      el.innerHTML =
        '<div class="gc-card-inner">' +
          '<div class="gc-card-front">' +
            '<span class="gc-badge" style="color:' + tagColor + ';border-color:' + tagBorder + '">' + escHtml(card.topic || 'General') + '</span>' +
            '<p class="gc-question">' + escHtml(card.question) + '</p>' +
            '<div class="gc-hint">Click to reveal answer</div>' +
          '</div>' +
          '<div class="gc-card-back">' +
            '<span class="gc-badge" style="color:' + tagColor + ';border-color:' + tagBorder + '">' + escHtml(card.topic || 'General') + '</span>' +
            '<p class="gc-answer-label">Answer</p>' +
            '<p class="gc-answer">' + escHtml(card.answer || 'No answer provided.') + '</p>' +
          '</div>' +
        '</div>';

      el.addEventListener('click', function() { el.classList.toggle('flipped'); });
      gridContainer.appendChild(el);
    });
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
    if (viewMode === 'grid') {
      renderGrid();
    } else {
      renderCard();
    }
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

  // Swipe to navigate (single card mode)
  var touchStartX = 0;
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', function(e) {
    if (viewMode !== 'single' || !filteredCards.length) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) {
      currentIndex = (currentIndex + 1) % filteredCards.length;
    } else {
      currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
    }
    renderCard();
  }, { passive: true });

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

  // ---- View mode toggle ----
  viewToggle.addEventListener('change', function() {
    viewMode = this.checked ? 'grid' : 'single';
    if (viewMode === 'grid') {
      flashcardNav.style.display  = 'none';
      cardCounter.style.display   = 'none';
      noResults.style.display     = 'none';
      gridContainer.style.display = 'block';
      renderGrid();
    } else {
      gridContainer.style.display = 'none';
      cardCounter.style.display   = '';
      renderCard();
    }
  });

  // ---- Initial load ----
  applyFilters();
})();
