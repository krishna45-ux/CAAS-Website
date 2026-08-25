/* ============================================================
   CAAS — interactions & motion
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- intro sequence and preload gate ---- */
  function startHeroAnimations() {
    requestAnimationFrame(function () { document.body.classList.remove('preload'); });
  }

  var introOverlay = document.getElementById('introOverlay');
  var introVideo = document.getElementById('introVideo');
  var hasSeenIntro = localStorage.getItem('caas_intro_seen');

  if (introOverlay && introVideo && !hasSeenIntro) {
    document.body.style.overflow = 'hidden';
    localStorage.setItem('caas_intro_seen', 'true');

    var playPromise = introVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        dismissIntro();
      });
    }

    var dismissed = false;
    function dismissIntro() {
      if (dismissed) return;
      dismissed = true;
      introOverlay.classList.add('is-hidden');
      document.body.style.overflow = '';
      setTimeout(function () {
        if (introOverlay.parentNode) introOverlay.parentNode.removeChild(introOverlay);
      }, 1000);
      startHeroAnimations();
    }

    introVideo.addEventListener('timeupdate', function () {
      if (introVideo.currentTime >= 6) dismissIntro();
    });
    setTimeout(dismissIntro, 8000); // Fallback
  } else {
    if (introOverlay) introOverlay.style.display = 'none';
    window.addEventListener('load', startHeroAnimations);
    setTimeout(startHeroAnimations, 1200); // Safety fallback
  }

  /* ---- helpers ---- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tc(totalFrames) {
    var f = totalFrames % 24;
    var s = Math.floor(totalFrames / 24) % 60;
    var m = Math.floor(totalFrames / (24 * 60)) % 60;
    var h = Math.floor(totalFrames / (24 * 3600)) % 24;
    return pad(h) + ':' + pad(m) + ':' + pad(s) + ':' + pad(f);
  }

  /* ---- nav sticky + scrubber + scroll-driven timecode ---- */
  var nav = document.getElementById('nav');
  var scrubber = document.getElementById('scrubber');
  var navTc = document.getElementById('navTc');
  var REEL = 24 * 180; // a 3-minute "reel"

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('is-stuck', y > 24);
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var p = docH > 0 ? y / docH : 0;
    scrubber.style.width = (p * 100).toFixed(2) + '%';
    if (navTc) navTc.textContent = tc(Math.floor(p * REEL));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- hero video: honour reduced-motion (hold on poster frame) ---- */
  var heroVideo = document.querySelector('.hero__video');
  if (heroVideo && reduce) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.addEventListener('loadedmetadata', function () { heroVideo.pause(); });
    try { heroVideo.pause(); } catch (e) {}
  }

  /* ---- hero timecode: real-time counter at 24fps ---- */
  var heroTc = document.getElementById('heroTc');
  if (heroTc) {
    if (reduce) {
      heroTc.textContent = tc(0);
    } else {
      var start = null;
      (function tick(t) {
        if (start === null) start = t;
        var frames = Math.floor(((t - start) / 1000) * 24);
        heroTc.textContent = tc(frames);
        requestAnimationFrame(tick);
      })(performance.now());
    }
  }

  /* ---- scroll reveals (rack focus) ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- animated stat counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target.toLocaleString('en-IN') + suffix; return; }
    var dur = 1400, t0 = null;
    (function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- booking day selector ---- */
  var messages = {
    mon: 'Mondays fill fast — book by Friday to lock a morning slot.',
    tue: 'Tuesdays offer the highest availability for our elite RED camera kits.',
    wed: 'Midweek slots include priority editing turnaround.',
    thu: 'Thursdays are ideal for multi-location shoots.',
    fri: 'Fridays are in high demand for weekend content drops.'
  };
  var dayMsg = document.getElementById('dayMsg');
  var days = document.querySelectorAll('.calendar__day');
  days.forEach(function (btn) {
    btn.addEventListener('click', function () {
      days.forEach(function (d) { d.classList.remove('is-active'); d.removeAttribute('aria-selected'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      var key = btn.getAttribute('data-day');
      if (dayMsg && messages[key]) {
        dayMsg.style.opacity = '0';
        setTimeout(function () { dayMsg.textContent = messages[key]; dayMsg.style.opacity = '1'; }, 160);
      }
    });
  });
  if (dayMsg) dayMsg.style.transition = 'opacity .18s ease';

  /* ---- mobile menu ---- */
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); });
    });
  }
})();
