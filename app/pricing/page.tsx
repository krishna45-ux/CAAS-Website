export default function PricingPage() {
  return (
    <main id="top" className="page-main">
      {/* PAGE HERO */}
      <section className="page-hero dark">
        <div className="wrap page-hero__inner" style={{ textAlign: 'center' }}>
          <span className="eyebrow eyebrow--center">— TRANSPARENT PRICING</span>
          <h1 className="hero__title" style={{ margin: '0 auto' }}>
            <span className="line"><span>No arguments,</span></span><br/>
            <span className="line"><span>no <span className="u-gold">complicated</span> quotes.</span></span>
          </h1>
          <p className="hero__sub" style={{ margin: '1rem auto' }}>Whether it's a one-off drop or a monthly retainer — one crew, one price, zero drama.</p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="page-section wrap">
        <div className="pricing-grid">
          
          <div className="pricing__card reveal">
            <span className="pricing__badge">The Base Package</span>
            <div>
              <div className="pricing__price">₹3,500</div>
              <div className="pricing__rate">Base rate · 3-hour session</div>
              <p className="pricing__quote">Perfect for quick social media drops, portraits, and short event coverage.</p>
            </div>
            <div>
              <ul className="pricing__list">
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional cameraman</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>3-hour production shoot</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Cinema-grade kit & lighting</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Raw deliverables within 24h</li>
              </ul>
              <div className="pricing__cta-row">
                <a href="#" className="btn btn--coral btn--lg">Book Now</a>
              </div>
            </div>
          </div>

          <div className="pricing__card reveal d1 is-featured">
            <span className="pricing__badge">The Pro Package</span>
            <div>
              <div className="pricing__price">₹8,000</div>
              <div className="pricing__rate">Full Day · 8-hour session</div>
              <p className="pricing__quote">Ideal for corporate films, full-day events, and extensive brand shoots.</p>
            </div>
            <div>
              <ul className="pricing__list">
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional cameraman + assistant</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>8-hour production shoot</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Advanced lighting & audio rig</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Raw + basic edited deliverables</li>
              </ul>
              <div className="pricing__cta-row">
                <a href="#" className="btn btn--blue btn--lg">Book Now</a>
              </div>
            </div>
          </div>

          <div className="pricing__card reveal d2">
            <span className="pricing__badge">Monthly Retainer</span>
            <div>
              <div className="pricing__price">Custom</div>
              <div className="pricing__rate">Ongoing content partnership</div>
              <p className="pricing__quote">For brands that need a constant stream of high-quality content every month.</p>
            </div>
            <div>
              <ul className="pricing__list">
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Dedicated crew assignment</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Multiple shoot days per month</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Priority booking & availability</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Full post-production suite</li>
              </ul>
              <div className="pricing__cta-row">
                <a href="/contact" className="btn btn--dark btn--lg">Contact Sales</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="page-section section--tight wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid reveal d1">
          <div className="faq-item">
            <h4>What equipment do you use?</h4>
            <p>Our crews carry cinema-grade 4K/6K cameras (RED, Sony, Canon), prime and zoom lenses, professional gimbals, and broadcast audio recording gear as standard.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer editing services?</h4>
            <p>Yes. By default, we provide raw footage within 24 hours. We also offer full post-production services including editing, color grading, and sound design as an add-on.</p>
          </div>
          <div className="faq-item">
            <h4>Can I extend the shoot time?</h4>
            <p>Absolutely. If a 3-hour shoot runs over, we simply charge a transparent hourly overage rate. You will always be informed before we go into overtime.</p>
          </div>
          <div className="faq-item">
            <h4>Do I need to pay for travel?</h4>
            <p>Travel within city limits (in our 12 operational cities) is included. Shoots outside these zones may incur a standard travel fee.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
