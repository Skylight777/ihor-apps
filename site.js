'use strict';
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
const filterStatus = document.querySelector('#filter-status');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  cards.forEach(card => {
    card.hidden = selected !== 'All apps' && card.dataset.category !== selected;
    if (!card.hidden) count += 1;
  });
  if (filterStatus) filterStatus.textContent = `Showing ${count} ${selected === 'All apps' ? 'apps' : selected.toLowerCase() + ' apps'}`;
}));
