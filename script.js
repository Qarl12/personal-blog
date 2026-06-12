// ============================================
// POPUP / MODAL NAVIGATION
// No page scrolling — every section opens as a
// terminal-style window over the landing screen.
// ============================================

const overlay = document.getElementById('overlay');
const windows = document.querySelectorAll('.window');
const navButtons = document.querySelectorAll('[data-target]');
const closeButtons = document.querySelectorAll('[data-close]');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.getElementById('navToggle');

function openWindow(id){
  windows.forEach(w => w.classList.remove('active'));
  const target = document.getElementById(id);
  if(target){
    target.classList.add('active');
    overlay.classList.add('active');
    target.querySelector('.window-body').scrollTop = 0;
  }
  navMenu.classList.remove('open');
}

function closeOverlay(){
  overlay.classList.remove('active');
  windows.forEach(w => w.classList.remove('active'));
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => openWindow(btn.dataset.target));
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', closeOverlay);
});

// click outside the window (on the dark backdrop) closes it
overlay.addEventListener('click', (e) => {
  if(e.target === overlay) closeOverlay();
});

// ESC key closes the active window
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeOverlay();
});

// mobile nav toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
