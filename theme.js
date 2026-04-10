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

// ─── Visitor Counter (text-based, same font as page) ─────────────
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('visitor-count');
    if (!el) return;
    const url = 'https://hits.sh/www.cianmccarroll.me.svg?style=flat&label=visitors&color=a490ff&labelColor=333333&extraCount=0';
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.text();
      })
      .then(svg => {
        // Try last <text> element with a number
        const match = svg.match(/<text[^>]*>(\d+)<\/text>\s*$/);
        if (match) {
          el.textContent = match[1] + ' visitors';
          return;
        }
        // Fallback: find any number in text tags
        const nums = svg.match(/>(\d+)</g);
        if (nums && nums.length) {
          const last = nums[nums.length - 1].replace(/[><]/g, '');
          el.textContent = last + ' visitors';
          return;
        }
        el.textContent = 'visitors';
      })
      .catch(() => {
        // CORS blocks on localhost — still register the hit via image ping
        new Image().src = url;
      });
  });
})();
