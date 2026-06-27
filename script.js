(() => {
  const nav = document.getElementById('rglNav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealNow = (el) => {
      el.classList.remove('pre-reveal');
      el.classList.add('is-revealed');
    };

    // Only hide elements that are below the fold; everything else stays visible.
    const toObserve = [];
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) return;
      el.classList.add('pre-reveal');
      toObserve.push(el);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const parent = el.parentElement;
        const siblings = parent
          ? Array.from(parent.querySelectorAll(':scope > [data-reveal].pre-reveal'))
          : [];
        const idx = siblings.indexOf(el);
        const delay = Math.min(Math.max(idx, 0) * 40, 160);
        setTimeout(() => revealNow(el), delay);
        observer.unobserve(el);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    toObserve.forEach((el) => observer.observe(el));
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      if (nav) nav.classList.remove('is-open');
    };
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      if (nav) nav.classList.toggle('is-open', open);
    });
    navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  const archiveToggle = document.querySelector('.archive-toggle');
  const archiveContent = document.getElementById('archive-content');
  if (archiveToggle && archiveContent) {
    const label = archiveToggle.querySelector('.archive-toggle-label');
    archiveToggle.addEventListener('click', () => {
      const open = archiveToggle.getAttribute('aria-expanded') === 'true';
      archiveToggle.setAttribute('aria-expanded', String(!open));
      archiveContent.hidden = open;
      if (label) label.textContent = open ? '+ Expand' : '− Close';
    });
  }

  const alumniToggle = document.querySelector('.alumni-toggle');
  const alumniContent = document.getElementById('alumni-content');
  if (alumniToggle && alumniContent) {
    const label = alumniToggle.querySelector('.archive-toggle-label');
    alumniToggle.addEventListener('click', () => {
      const open = alumniToggle.getAttribute('aria-expanded') === 'true';
      alumniToggle.setAttribute('aria-expanded', String(!open));
      alumniContent.hidden = open;
      if (label) label.textContent = open ? '+ Expand' : '− Close';
    });
  }
})();
