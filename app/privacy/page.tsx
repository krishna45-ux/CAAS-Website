export default function PrivacyPage() {
  return (
    <main id="top" className="page-main">
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <h1 className="hero__title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
            <span className="line"><span>Privacy Policy</span></span>
          </h1>
          <p className="hero__sub">Last updated: August 2026</p>
        </div>
      </section>

      <section className="page-section wrap">
        <div className="legal-layout">
          <aside className="legal-sidebar">
            <nav className="legal-nav">
              <a href="#information">Information We Collect</a>
              <a href="#usage">How We Use Information</a>
              <a href="#sharing">Information Sharing</a>
              <a href="#security">Data Security</a>
              <a href="#rights">Your Rights</a>
            </nav>
          </aside>
          
          <div className="legal-content">
            <h2 id="information">Information We Collect</h2>
            <p>At CAAS (Cameraman as a Service), we collect information to provide better services to all our users. This includes:</p>
            <ul>
              <li><strong>Information you give us:</strong> For example, many of our services require you to sign up for a CAAS Account. When you do, we'll ask for personal information, like your name, email address, telephone number or credit card to store with your account.</li>
              <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them, like when you visit our website or interact with our ads and content.</li>
            </ul>

            <h2 id="usage">How We Use Information</h2>
            <p>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect CAAS and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.</p>

            <h2 id="sharing">Information Sharing</h2>
            <p>We do not share personal information with companies, organizations and individuals outside of CAAS unless one of the following circumstances applies:</p>
            <ul>
              <li>With your consent</li>
              <li>For external processing</li>
              <li>For legal reasons</li>
            </ul>

            <h2 id="security">Data Security</h2>
            <p>We work hard to protect CAAS and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:</p>
            <ul>
              <li>We encrypt many of our services using SSL.</li>
              <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
            </ul>

            <h2 id="rights">Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact our support team.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
