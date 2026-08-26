'use client';

export default function ContactPage() {
  return (
    <main id="top" className="page-main">
      <section className="page-hero dark">
        <div className="wrap page-hero__inner">
          <span className="eyebrow">— GET IN TOUCH</span>
          <h1 className="hero__title">
            <span className="line"><span>Let's talk about</span></span><br/>
            <span className="line"><span>your next <span className="u-gold">shoot</span>.</span></span>
          </h1>
        </div>
      </section>

      <section className="page-section wrap">
        <div className="contact-layout">
          
          <div className="contact-form-container reveal">
            <h3>Send us a message</h3>
            <p>Fill out the form below and our production team will get back to you within 2 hours.</p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Jane Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="jane@company.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">What do you need?</label>
                <select id="service" required>
                  <option value="">Select a service...</option>
                  <option value="social">Social Media Content</option>
                  <option value="event">Event Coverage</option>
                  <option value="corporate">Corporate Brand Film</option>
                  <option value="realestate">Real Estate & Infra</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" rows={5} placeholder="Tell us a bit about what you're looking to capture..." required></textarea>
              </div>

              <button type="submit" className="btn btn--coral btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="contact-info reveal d1">
            <div className="info-block">
              <h4>Headquarters</h4>
              <p>123 Creative Studio Lane<br/>Andheri West, Mumbai 400053<br/>India</p>
            </div>
            
            <div className="info-block">
              <h4>Contact Details</h4>
              <p>Email: <a href="mailto:hello@caas.com">hello@caas.com</a><br/>
                 Phone: +91 98765 43210</p>
            </div>
            
            <div className="info-block">
              <h4>Operating Hours</h4>
              <p>Mon - Fri: 9:00 AM - 8:00 PM<br/>
                 Sat - Sun: On-shoot availability only</p>
            </div>

            <div className="info-block">
              <h4>Follow Us</h4>
              <div className="footer__social" style={{ marginTop: '10px' }}>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
                <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.1-5.4L6.6 21H3.5l7-8L2.9 3h6l3.7 4.9zm-1 16h1.6L8.1 4.6H6.4z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9v10H3V9zm-1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM9 9h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.5V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9z"/></svg></a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
