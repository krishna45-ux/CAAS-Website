'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrubberWidth, setScrubberWidth] = useState('0%');
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsNavStuck(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? y / docH : 0;
      setScrubberWidth((p * 100).toFixed(2) + '%');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const isHomePage = pathname === '/';
  const isStatic = !isHomePage;
  // If static, we don't need 'is-light' logic for pill, but keeping it won't hurt.
  const isLightPage = pathname === '/pricing' || pathname === '/knowledge-centre' || pathname === '/portfolio' || pathname === '/services';

  const isDarkStatic = pathname === '/book' || pathname === '/contact' || pathname.startsWith('/blog');

  return (
    <>
      <div className="scrubber" id="scrubber" style={{ width: scrubberWidth, display: isStatic ? 'none' : 'block' }}></div>
      <header ref={navRef} className={`nav ${isNavStuck ? 'is-stuck' : ''} ${isNavOpen ? 'is-open' : ''} ${isLightPage && !isStatic ? 'is-light' : ''} ${isDarkStatic ? 'is-dark-static' : isStatic ? 'is-static' : ''}`} id="nav">
        <div className="nav__pill">
          <Link href="/" className="brand" aria-label="CAAS — home" onClick={() => setIsNavOpen(false)}>
            <img src="/images/nav_logo.png" className="brand__logo" alt="" width="776" height="236" />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <Link href="/services" onClick={() => setIsNavOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</Link>
            <Link href="/pricing" onClick={() => { setIsNavOpen(false); setIsDropdownOpen(false); }}>Pricing</Link>
            <Link href="/knowledge-centre" onClick={() => { setIsNavOpen(false); setIsDropdownOpen(false); }}>Knowledge Centre</Link>
            <div className="nav__dropdown">
              <span className="nav__dropdown-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', padding: '6px 2px' }}>
                More <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '4px', transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className={`nav__dropdown-menu ${isDropdownOpen ? 'is-open' : ''}`}>
                <Link href="/blog" onClick={() => { setIsNavOpen(false); setIsDropdownOpen(false); }}>Blog</Link>
              </div>
            </div>
            <Link href="/book" className="btn btn--cyan mobile-only" onClick={() => { setIsNavOpen(false); setIsDropdownOpen(false); }}>Book a Shoot</Link>
          </nav>
          <div className="nav__right" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/book" className="btn btn--cyan">Book a Shoot</Link>
          </div>
          <button 
            className="nav__burger" 
            id="burger" 
            aria-label="Menu" 
            aria-expanded={isNavOpen}
            onClick={() => { setIsNavOpen(!isNavOpen); setIsDropdownOpen(false); }}
          >
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
