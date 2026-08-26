import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <Link href="/" className="brand" aria-label="CAAS home">
            <img src="/images/logo_ondark.png" alt="CAAS logo" className="footer__logo"/>
          </Link>
          <nav className="footer__links" aria-label="Footer">
            <Link href="/knowledge-centre">Knowledge Centre</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.1-5.4L6.6 21H3.5l7-8L2.9 3h6l3.7 4.9zm-1 16h1.6L8.1 4.6H6.4z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9v10H3V9zm-1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM9 9h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.5V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/></svg></a>
          </div>
        </div>
      </div>
      <div className="wordmark">
        <b>CAAS</b>
        <small>Cameraman as a Service</small>
      </div>
      <div className="wrap">
        <div className="footer__copy">
          <span>© 2026 CAAS — Cameraman as a Service. All rights reserved.</span>
          <span>Made with 🔥 by <a href="https://labs.theangaarbatch.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#fff' }}>The Angaar Labs</a></span>
        </div>
      </div>
    </footer>
  );
}
