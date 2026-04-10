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

// ─── Visitor Counter (SVG badge styled to match page) ────────────
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById('visitor-count');
    if (!el) return;
    var url = 'https://hits.sh/www.cianmccarroll.me.svg?style=flat&label=visitors&color=a490ff&labelColor=333333&extraCount=0';
    var img = document.createElement('img');
    img.src = url;
    img.alt = 'visitors';
    img.style.cssText = 'height: 18px; vertical-align: middle; border-radius: 3px;';
    el.appendChild(img);
  });
})();
