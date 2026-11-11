// ─── Dark/Light Mode Toggle ──────────────────────────────────────
(function() {
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    html.classList.add('light');
  } else if (!stored && window.matchMedia('(prefers-color-scheme: light)').matches) {
    html.classList.add('light');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('color-mode');
    if (!checkbox) return;
    checkbox.checked = html.classList.contains('light');
    checkbox.addEventListener('change', function() {
      html.classList.toggle('light', this.checked);
      localStorage.setItem('theme', this.checked ? 'light' : 'dark');
    });
  });
})();
