/**
 * script.js — Shakuntalites
 * Animation engine, cursor, observers, UI interactions.
 * No framework dependencies. Works on GitHub Pages.
 */

'use strict';

/* ============================================================
   ── MOBILE DETECTION ────────────────────────────────────────
   ============================================================ */

const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   ── PAGE TRANSITION ─────────────────────────────────────────
   ============================================================ */

window.addEventListener('load', function () {
  const pt = document.getElementById('pageTransition');
  if (!pt) return;
  pt.classList.add('reveal-in');
  setTimeout(function () {
    pt.style.transition = 'clip-path 1s cubic-bezier(0.77,0,0.18,1)';
    pt.classList.remove('reveal-in');
    pt.classList.add('reveal-out');
    setTimeout(function () { pt.style.display = 'none'; }, 1000);
  }, 400);

  // Reveal hero title text clip
  document.querySelectorAll('.text-clip-reveal').forEach(el => {
    setTimeout(() => el.classList.add('revealed'), 500);
  });
});

/* ============================================================
   ── SCROLL PROGRESS BAR ─────────────────────────────────────
   ============================================================ */

const scrollBar = document.getElementById('scrollBar');

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  if (scrollBar) scrollBar.style.width = ((scrollTop / docHeight) * 100) + '%';

  // Nav scroll state
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', scrollTop > 60);

  // Parallax hero — only on desktop to save mobile CPU
  if (!isMobile) {
    const heroBg = document.querySelector('.hero-bg');
    const heroBokeh = document.querySelector('.bokeh-container');
    const heroContent = document.querySelector('.hero-content');
    if (heroBg) heroBg.style.transform = `translateY(${scrollTop * 0.4}px)`;
    if (heroBokeh) heroBokeh.style.transform = `translateY(${scrollTop * 0.25}px)`;
    if (heroContent) heroContent.style.transform = `translateY(${scrollTop * 0.15}px)`;
  }
}, { passive: true });

/* ============================================================
   ── INTERSECTION OBSERVERS ──────────────────────────────────
   ============================================================ */

// Cinematic reveal (sections)
const cinematicObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('in-view');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.cinematic-reveal').forEach(el => cinematicObs.observe(el));

// Stagger children — expose as global so gallery.js can reuse
window._staggerObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('in-view');
  });
}, { threshold: 0.05 });

document.querySelectorAll('.stagger-children').forEach(el => window._staggerObs.observe(el));

// Simple scroll reveal
window._revealObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => window._revealObs.observe(el));

// Section line wipe
const sectionObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('in-view');
    else e.target.classList.remove('in-view');
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => sectionObs.observe(s));

// Stat counter animation
function animCount(el) {
  const target = +el.dataset.count;
  let current = 0;
  const step = target / 60;
  const timer = setInterval(function () {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 20);
}

const statObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { animCount(e.target); statObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => statObs.observe(el));

// School image quote reveal
(function () {
  const frame = document.querySelector('.school-img-frame');
  if (!frame) return;

  // Spark particles
  const wrap = document.getElementById('schoolImgWrap');
  if (wrap && !prefersReducedMotion) {
    for (let s = 0; s < 10; s++) {
      const sp = document.createElement('div');
      sp.className = 'spark';
      const size = Math.random() * 5 + 2;
      sp.style.cssText = [
        `width:${size}px`, `height:${size}px`,
        `left:${Math.random() * 100}%`, `bottom:${Math.random() * 40}%`,
        `animation-duration:${Math.random() * 3 + 2}s`,
        `animation-delay:${Math.random() * -5}s`,
      ].join(';');
      wrap.appendChild(sp);
    }
  }

  const sqObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sq-line').forEach(function (l, i) {
          setTimeout(function () { l.classList.add('animate-in'); }, 300 + i * 500);
        });
        const badge = document.getElementById('sqBadge');
        if (badge) badge.classList.add('show');
        sqObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.35 });
  sqObs.observe(frame);
})();

/* ============================================================
   ── BOKEH PARTICLES ─────────────────────────────────────────
   ============================================================ */

(function () {
  const bc = document.getElementById('bokehContainer');
  if (!bc) return;
  // Fewer particles on mobile
  const count = isMobile ? 8 : 20;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'bokeh';
    const size = Math.random() * 80 + 20;
    const op = (Math.random() * 0.1 + 0.02).toFixed(2);
    b.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;--op:${op};animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*-20}s;`;
    bc.appendChild(b);
  }
})();

/* ============================================================
   ── MAGNETIC CURSOR (desktop only) ──────────────────────────
   ============================================================ */

if (!isMobile) {
  const magCursor = document.getElementById('magnetCursor');
  const magTrail  = document.getElementById('magnetTrail');
  let mcx = 0, mcy = 0, mtx = 0, mty = 0, cursorVisible = false;

  document.addEventListener('mousemove', function (e) {
    mcx = e.clientX; mcy = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      magCursor && magCursor.classList.add('visible');
      magTrail  && magTrail.classList.add('visible');
    }
    if (magCursor) { magCursor.style.left = mcx + 'px'; magCursor.style.top = mcy + 'px'; }
  });

  // Smooth trail with RAF
  (function animTrail() {
    mtx += (mcx - mtx) * 0.08;
    mty += (mcy - mty) * 0.08;
    if (magTrail) { magTrail.style.left = mtx + 'px'; magTrail.style.top = mty + 'px'; }
    requestAnimationFrame(animTrail);
  })();

  // Hover state
  const interactiveSelector = 'a, button, .photo-card, .teacher-card, .video-card, .wish-card, .polaroid, .year-tab';
  document.querySelectorAll(interactiveSelector).forEach(function (el) {
    el.addEventListener('mouseenter', function () { magCursor && magCursor.classList.add('hovering'); });
    el.addEventListener('mouseleave', function () { magCursor && magCursor.classList.remove('hovering'); });
  });

  // Magnetic pull on key buttons
  document.querySelectorAll('.btn-submit, .year-tab, .mem-upload-btn').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.25;
      btn.style.transform = `translate(${x}px,${y}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
  });

  // 3D tilt on teacher cards — desktop only (expensive on mobile)
  document.addEventListener('mousemove', function (e) {
    document.querySelectorAll('.teacher-card').forEach(function (card) {
      const rect = card.getBoundingClientRect();
      const isHovered = e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom;
      if (isHovered) {
        const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 16;
        const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -16;
        card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px) scale(1.03)`;
        card.style.boxShadow = `0 30px 60px rgba(0,0,0,0.6), ${-x/2}px ${-y/2}px 30px rgba(212,168,67,0.1)`;
      } else {
        card.style.transform = '';
        card.style.boxShadow = '';
      }
    });
  });

  // 3D mouse parallax on hero
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.width  / 2) / rect.width;
      const y = (e.clientY - rect.height / 2) / rect.height;
      const content = this.querySelector('.hero-content');
      const bg = this.querySelector('.hero-bg');
      if (content) content.style.transform = `translate(${x * 15}px,${y * 15}px)`;
      if (bg) bg.style.transform = `translate(${-x * 25}px,${-y * 25}px)`;
    });
  }
}

/* ============================================================
   ── SMOOTH NAV LINKS WITH FLASH ─────────────────────────────
   ============================================================ */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const pt = document.getElementById('pageTransition');
    if (pt && !prefersReducedMotion) {
      pt.style.display = '';
      pt.style.transition = 'clip-path 0.3s ease';
      pt.classList.add('reveal-in');
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth' });
        pt.style.transition = 'clip-path 0.5s ease';
        pt.classList.remove('reveal-in');
        pt.classList.add('reveal-out');
        setTimeout(function () { pt.style.display = 'none'; pt.classList.remove('reveal-out'); }, 500);
      }, 300);
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================================
   ── MOBILE MENU ─────────────────────────────────────────────
   ============================================================ */

function toggleMobileMenu() {
  const menu   = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   ── KEYBOARD NAVIGATION ─────────────────────────────────────
   ============================================================ */

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox && closeLightbox();
    closeMemories && closeMemories();
    closeViewer   && closeViewer();
    closeEventAlbum && closeEventAlbum();
    closeEvtViewer  && closeEvtViewer();
    closeMobileMenu();
  }
  const evtOpen = document.getElementById('evtViewer')?.classList.contains('open');
  const memOpen = document.getElementById('memViewer')?.classList.contains('open');
  if (e.key === 'ArrowRight') { if (evtOpen) evtViewerNav(1); else if (memOpen) viewerNav(1); }
  if (e.key === 'ArrowLeft')  { if (evtOpen) evtViewerNav(-1); else if (memOpen) viewerNav(-1); }
});

/* ============================================================
   ── LAZY LOAD IMAGES VIA INTERSECTION OBSERVER ──────────────
   ── (browsers without native loading="lazy" support) ─────────
   ============================================================ */

if ('IntersectionObserver' in window) {
  const lazyObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        const img = e.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        lazyObs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  // Observe any image using data-src (opt-in lazy loading)
  document.querySelectorAll('img[data-src]').forEach(img => lazyObs.observe(img));
}
