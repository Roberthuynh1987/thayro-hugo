/* ── Thấy Rõ · main.js ── */
(function() {
  'use strict';

  /* Scroll reveal */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!window.IntersectionObserver) {
      els.forEach(function(el){ el.classList.add('on'); });
      return;
    }
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function(el){ io.observe(el); });
  }

  /* Subscribe */
  window.handleSub = function(e) {
    e.preventDefault();
    var btn = e.target.querySelector('.sub-btn');
    var orig = btn.textContent;
    btn.textContent = '✓';
    btn.style.background = '#7a6a52';
    btn.style.borderColor = '#7a6a52';
    e.target.querySelector('.sub-input').value = '';
    setTimeout(function(){ btn.textContent = orig; btn.style.background = ''; btn.style.borderColor = ''; }, 3000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    initReveal();
    /* Stagger card reveals */
    document.querySelectorAll('.posts-grid .post-card').forEach(function(el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.08) + 's';
    });
    document.querySelectorAll('.manifesto-item').forEach(function(el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
    });
    initReveal();
  });
})();
