// ===== TAB / MODAL NAVIGATION =====

let currentSection = null;

function openSection(name) {
  // Close any open
  if (currentSection) {
    document.getElementById('modal-' + currentSection).classList.remove('active');
    document.querySelector(`.tab-btn[data-section="${currentSection}"]`)?.classList.remove('active');
  }

  currentSection = name;
  const overlay = document.getElementById('modal-overlay');
  const panel = document.getElementById('modal-' + name);

  overlay.classList.add('active');
  panel.classList.add('active');

  // Highlight active tab
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.tab-btn[data-section="${name}"]`)?.classList.add('active');
}

function closeSection() {
  if (!currentSection) return;
  document.getElementById('modal-' + currentSection).classList.remove('active');
  document.getElementById('modal-overlay').classList.remove('active');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  currentSection = null;
}

// Close on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSection();
});
