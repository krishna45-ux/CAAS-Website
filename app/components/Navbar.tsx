'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrubberWidth, setScrubberWidth] = useState('0%');
  const pathname = usePathname();

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
  const isLightPage = pathname === '/pricing' || pathname === '/knowledge-centre' || pathname === '/portfolio' || pathname === '/industries';

  return (
    <>
      <div className="scrubber" id="scrubber" style={{ width: scrubberWidth, display: isStatic ? 'none' : 'block' }}></div>
      <header className={`nav ${isNavStuck ? 'is-stuck' : ''} ${isNavOpen ? 'is-open' : ''} ${isLightPage && !isStatic ? 'is-light' : ''} ${isStatic ? 'is-static' : ''}`} id="nav">
        <div className="nav__pill">
          <Link href="/" className="brand" aria-label="CAAS — home" onClick={() => setIsNavOpen(false)}>
            <img src="/images/nav_logo.png" className="brand__logo" alt="" width="776" height="236" />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <Link href="/industries" onClick={() => setIsNavOpen(false)}>Industries</Link>
            <Link href="/portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</Link>
            <Link href="/pricing" onClick={() => setIsNavOpen(false)}>Pricing</Link>
            <Link href="/knowledge-centre" onClick={() => setIsNavOpen(false)}>Knowledge Centre</Link>
            <div className="nav__dropdown">
              <span className="nav__dropdown-trigger" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', padding: '6px 2px' }}>
                More <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '4px' }}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="nav__dropdown-menu">
                <Link href="#" onClick={() => setIsNavOpen(false)}>Blog</Link>
              </div>
            </div>
            <Link href="/book" className="btn btn--cyan mobile-only" onClick={() => setIsNavOpen(false)}>Book a Shoot</Link>
          </nav>
          <div className="nav__right" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/book" className="btn btn--cyan">Book a Shoot</Link>
          </div>
          <button 
            className="nav__burger" 
            id="burger" 
            aria-label="Menu" 
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
