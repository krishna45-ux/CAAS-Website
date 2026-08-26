'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Intersection Observers for reveals and counters
    if ('IntersectionObserver' in window && !reduceMotion) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            
            // if it has a counter, animate it
            if (e.target.hasAttribute('data-count')) {
              animateCount(e.target);
            }
            
            obs.unobserve(e.target); // only animate once
          }
        });
      }, { threshold: 0.15 });

      // Wait a tiny bit for the DOM to paint after route transition
      const timer = setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-text-down, .reveal-text-up, .reveal-shutter, .reveal-deal, .reveal-lens, .reveal-scan, [data-count]').forEach(el => observer.observe(el));
      }, 100);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    } else {
      const timer = setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-text-down, .reveal-text-up, .reveal-shutter, .reveal-deal, .reveal-lens, .reveal-scan, [data-count]').forEach(el => {
          el.classList.add('is-in');
          if (el.hasAttribute('data-count')) animateCount(el);
        });
      }, 100);
      return () => clearTimeout(timer);
    }

    function animateCount(el: Element) {
      if (el.getAttribute('data-animated') === 'true') return;
      el.setAttribute('data-animated', 'true');
      
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      
      if (reduceMotion) {
        el.textContent = target.toLocaleString('en-IN') + suffix;
        return;
      }
      
      const dur = 1400;
      let t0: number | null = null;
      
      const step = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease out cubic
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      
      requestAnimationFrame(step);
    }
  }, [pathname]);

  return null;
}
