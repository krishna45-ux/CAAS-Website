export default function TermsPage() {
  return (
    <main id="top" className="page-main">
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <h1 className="hero__title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
            <span className="line"><span>Terms of Service</span></span>
          </h1>
          <p className="hero__sub">Last updated: August 2026</p>
        </div>
      </section>

      <section className="page-section wrap">
        <div className="legal-layout">
          <aside className="legal-sidebar">
            <nav className="legal-nav">
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#services">Description of Services</a>
              <a href="#payment">Payment Terms</a>
              <a href="#cancellation">Cancellation Policy</a>
              <a href="#liability">Limitation of Liability</a>
            </nav>
          </aside>
          
          <div className="legal-content">
            <h2 id="acceptance">Acceptance of Terms</h2>
            <p>By accessing and using the CAAS (Cameraman as a Service) platform, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

            <h2 id="services">Description of Services</h2>
            <p>CAAS provides a platform connecting clients with professional freelance cameramen, videographers, and related production crew. We facilitate the booking, payment, and delivery of raw or edited media files as requested by the client.</p>

            <h2 id="payment">Payment Terms</h2>
            <p>All bookings require a 100% upfront payment to secure the crew and date unless a custom monthly retainer agreement is in place. Payments are processed securely via our third-party payment providers. Additional hours or services requested on set will be billed subsequently.</p>

            <h2 id="cancellation">Cancellation Policy</h2>
            <p>Cancellations made more than 48 hours before the scheduled shoot time will receive a full refund minus processing fees. Cancellations made within 24-48 hours will receive a 50% refund. Cancellations made less than 24 hours before the shoot are non-refundable.</p>

            <h2 id="liability">Limitation of Liability</h2>
            <p>CAAS acts as an intermediary. While we vet all professionals on our platform, CAAS is not liable for indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
