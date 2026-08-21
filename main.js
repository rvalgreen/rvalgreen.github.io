const CLAMP_CLASSES = ['line-clamp-2', 'sm:line-clamp-3', 'lg:line-clamp-4'];

function checkOverflow(entry) {
  const el = entry.querySelector('.project-description');
  const button = entry.querySelector('.show-more-btn');
  if (!el || !button || el.dataset.expanded === 'true') return;

  el.classList.remove(...CLAMP_CLASSES);
  const fullHeight = el.scrollHeight;
  el.classList.add(...CLAMP_CLASSES);
  const visibleHeight = el.offsetHeight;

  button.classList.toggle('hidden', fullHeight <= visibleHeight);
}

function toggleEntry(entry) {
  const el = entry.querySelector('.project-description');
  const button = entry.querySelector('.show-more-btn');
  const expanded = el.dataset.expanded === 'true';

  el.classList.toggle('line-clamp-2', expanded);
  el.classList.toggle('sm:line-clamp-3', expanded);
  el.classList.toggle('lg:line-clamp-4', expanded);
  button.textContent = expanded ? 'Show more' : 'Show less';
  el.dataset.expanded = expanded ? 'false' : 'true';
}

const entries = document.querySelectorAll('.project-entry');

entries.forEach((entry) => {
  entry.querySelector('.show-more-btn')?.addEventListener('click', () => toggleEntry(entry));
  checkOverflow(entry);
});

window.addEventListener('resize', () => entries.forEach(checkOverflow));
