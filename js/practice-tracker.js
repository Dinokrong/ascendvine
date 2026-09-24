// Reports active Question Bank time for the practice leaderboard.
// The page only says "still here and in use"; the database measures the time
// between reports and credits at most 60 seconds per report.
import { supabase } from './auth-client.js';

const HEARTBEAT_MS = 30000;
const IDLE_AFTER_MS = 60000;

let lastInteraction = Date.now();
let reporting = false;

function isActive() {
  return document.visibilityState === 'visible' &&
    Date.now() - lastInteraction < IDLE_AFTER_MS;
}

function beat(resume) {
  if (!supabase) return;
  supabase.rpc('record_practice_heartbeat', { resume }).then(({ error }) => {
    if (error) reporting = false;
  });
}

function tick() {
  if (isActive()) {
    // The first report after a pause only restarts the clock.
    beat(!reporting);
    reporting = true;
  } else {
    // Gone idle: stop without crediting the idle minute.
    reporting = false;
  }
}

function onInteraction() {
  lastInteraction = Date.now();
  if (!reporting) tick();
}

function onHide() {
  if (document.visibilityState === 'hidden') {
    // Credit the time up to leaving the tab, then pause.
    if (reporting) beat(false);
    reporting = false;
  } else {
    onInteraction();
  }
}

['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach(type =>
  window.addEventListener(type, onInteraction, { passive: true })
);
document.addEventListener("visibilitychange", onHide);
window.setInterval(tick, HEARTBEAT_MS);
tick();
