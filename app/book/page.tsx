import Link from 'next/link';

export default function BookShoot() {
  return (
    <div className="page-main">
      <section className="page-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img className="page-hero__bg" src="/images/home_lighting.jpg" alt="" aria-hidden="true" style={{ opacity: 0.25 }} />
        <div className="page-hero__inner wrap" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', zIndex: 2 }}>
          <h1 className="hero__title" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontFamily: 'var(--display)', fontWeight: 800, color: '#ffffff', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Coming Soon!</h1>
          <p className="hero__sub" style={{ fontSize: '1.25rem', color: '#e2e8f0', lineHeight: 1.6, fontWeight: 500 }}>
            Our booking platform is currently under construction. Check back shortly to schedule your next shoot.
          </p>
          <Link href="/" className="btn btn--white" style={{ marginTop: '24px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
