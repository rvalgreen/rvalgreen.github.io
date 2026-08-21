function checkOverflow(entry) {
  const el = entry.querySelector('.project-description');
  const button = entry.querySelector('.show-more-btn');
  if (!el || !button || el.classList.contains('expanded')) return;

  el.classList.add('expanded');
  const fullHeight = el.scrollHeight;
  el.classList.remove('expanded');
  const visibleHeight = el.offsetHeight;

  button.classList.toggle('hidden', fullHeight <= visibleHeight);
}

function toggleEntry(entry) {
  const el = entry.querySelector('.project-description');
  const button = entry.querySelector('.show-more-btn');
  const expanded = el.classList.toggle('expanded');
  button.textContent = expanded ? 'Show less' : 'Show more';
}

const entries = document.querySelectorAll('.project-entry');

entries.forEach((entry) => {
  entry.querySelector('.show-more-btn')?.addEventListener('click', () => toggleEntry(entry));
  checkOverflow(entry);
});

window.addEventListener('resize', () => entries.forEach(checkOverflow));
