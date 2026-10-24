// Filter buttons on the Work page. Without JavaScript every group stays visible.
(function () {
  const bar = document.querySelector('.filter-bar');
  if (!bar) return;
  const buttons = bar.querySelectorAll('.filter-btn');
  const groups = document.querySelectorAll('.work-group');
  bar.hidden = false;

  function apply(filter) {
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
    groups.forEach(g => { g.hidden = filter !== 'all' && g.dataset.group !== filter; });
  }

  buttons.forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.filter);
    history.replaceState(null, '', b.dataset.filter === 'all' ? location.pathname : '#' + b.dataset.filter);
  }));

  const initial = location.hash.slice(1);
  if (['professional', 'independent', 'academic'].includes(initial)) apply(initial);
})();
