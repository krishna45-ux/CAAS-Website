import Link from 'next/link';

export default function BookShoot() {
  return (
    <div className="page-main">
      <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img className="page-hero__bg" src="/images/hero_cinematic.jpg" alt="" aria-hidden="true" />
        <div className="page-hero__inner wrap" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <h1 className="hero__title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontFamily: 'var(--display)', fontWeight: 800 }}>Coming Soon!</h1>
          <p className="hero__sub" style={{ fontSize: '1.2rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            Our booking platform is currently under construction. Check back shortly to schedule your next shoot.
          </p>
          <Link href="/" className="btn btn--cyan" style={{ marginTop: '16px' }}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
