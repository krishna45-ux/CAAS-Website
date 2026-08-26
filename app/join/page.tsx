'use client';

import Link from 'next/link';

export default function JoinPage() {
  return (
    <main id="top" className="page-main auth-page">
      <img className="auth-bg" src="/images/blog_wedding.jpg" alt="" aria-hidden="true" />
      
      <section className="auth-section wrap">
        <div className="auth-card auth-card--large reveal">
          <div className="auth-header">
            <h2>Join the CAAS Crew</h2>
            <p>Apply to become a vetted professional on our platform.</p>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="city">Primary City of Operation</label>
              <select id="city" required>
                <option value="">Select a city...</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi NCR</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="primaryCamera">Primary Camera System</label>
              <input type="text" id="primaryCamera" placeholder="e.g. Sony FX3, RED Komodo" required />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio">Portfolio Link</label>
              <input type="url" id="portfolio" placeholder="https://vimeo.com/..." required />
              <small style={{ color: 'var(--muted)', marginTop: '4px', display: 'block' }}>Please provide a link to your reel or best work.</small>
            </div>

            <button type="submit" className="btn btn--coral btn--lg btn--full" style={{ marginTop: '20px' }}>
              Submit Application
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link href="/login">Log in</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
