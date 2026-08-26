'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrubberWidth, setScrubberWidth] = useState('0%');

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

  return (
    <>
      <div className="scrubber" id="scrubber" style={{ width: scrubberWidth }}></div>
      <header className={`nav ${isNavStuck ? 'is-stuck' : ''} ${isNavOpen ? 'is-open' : ''}`} id="nav">
        <div className="nav__pill">
          <Link href="/" className="brand" aria-label="CAAS — home" onClick={() => setIsNavOpen(false)}>
            <img src="/images/nav_logo.png" className="brand__logo" alt="" width="776" height="236" />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <Link href="/services" onClick={() => setIsNavOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</Link>
            <Link href="/pricing" onClick={() => setIsNavOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={() => setIsNavOpen(false)}>About Us</Link>
            <Link href="/blog" onClick={() => setIsNavOpen(false)}>Blog</Link>
            <Link href="/login" className="mobile-only" onClick={() => setIsNavOpen(false)}>Log in</Link>
            <Link href="/join" className="btn nav__cta mobile-only" onClick={() => setIsNavOpen(false)}>Join as Cameraman</Link>
          </nav>
          <div className="nav__right">
            <Link href="/login" className="nav__login">Log in</Link>
            <Link href="/join" className="btn nav__cta">Join as Cameraman</Link>
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
