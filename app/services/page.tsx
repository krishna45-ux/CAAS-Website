import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main id="top" className="page-main services-page">
      
      {/* 1. HERO SECTION */}
      <section className="services-cta page-section">
        <div className="wrap services-cta__inner">
          <div className="services-cta__content reveal-left">
            <span className="eyebrow eyebrow--cyan">Let's Talk</span>
            <h1 className="h-section" style={{ marginTop: 0 }}>Ready to elevate your<br/><span className="u-cyan">brand's</span> visual identity?</h1>
            <p>Whether it's a single product shoot or a global industrial campaign, our dedicated project managers are ready to build your custom production package.</p>
            
            <div className="services-cta__buttons">
              <Link href="/contact" className="btn btn--blue btn--lg">Request a Custom Quote</Link>
              <Link href="/contact" className="btn btn--ghost btn--lg">Schedule Consultation</Link>
            </div>

            <div className="services-cta__stats">
              <div>
                <strong>1500+</strong>
                <span>PROJECTS COMPLETED</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>SPECIALIZED VERTICALS</span>
              </div>
              <div>
                <strong>48hr</strong>
                <span>DELIVERY PROMISE</span>
              </div>
            </div>
          </div>
          
          <div className="services-cta__image reveal-right">
             <Image src="/images/hero_cinematic.jpg" alt="Cameraman" fill priority style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="services-intro page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">What exactly is <span className="u-cyan">CAAS</span>?</h2>
        </div>
        <div className="services-intro__text-wrap reveal d1">
          <p className="services-intro__text">
            CAAS (<span className="u-cyan">Cameraman as a Service</span>) gives businesses, creators and agencies access to production-ready crews whenever content needs to happen.
          </p>
          <p className="services-intro__subtext">
            Instead of finding a cameraman on social media, references and trusting new profiles, you simply schedule a production that actually solves your purpose.
          </p>
        </div>
      </section>

      {/* 3. COMPARISON SECTION */}
      <section className="services-comparison page-section wrap">
        <div className="comparison-grid">
          {/* Traditional Process */}
          <div className="comparison-card comparison-card--traditional reveal-left">
            <div className="comparison-card__header">
              <span className="comparison-card__badge">Traditional Process</span>
            </div>
            <ul className="comparison-card__list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Ask friends</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Search Instagram</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Wait for replies</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Compare prices</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Hope they arrive</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Explain everything again</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Worry about equipment</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg> Repeat next month</li>
            </ul>
            <div className="comparison-card__alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round"/></svg>
              <span><strong>Unpredictable. Time-Consuming. Stressful.</strong><br/>The traditional way costs you more than money.</span>
            </div>
            
            {/* Hand-drawn arrow note */}
            <div className="comparison-card__note">
              Time Consuming,<br/>Unreliable,<br/>Stressful!
            </div>
          </div>

          <div className="comparison-divider reveal">VS</div>

          {/* With CAAS */}
          <div className="comparison-card comparison-card--caas reveal-right">
            <div className="comparison-card__header">
              <span className="comparison-card__badge">With CAAS</span>
            </div>
            <ul className="comparison-card__steps">
              <li>
                <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                <div className="step-content">
                  <strong>Book</strong>
                  <span className="step-num">01</span>
                </div>
              </li>
              <li>
                <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                <div className="step-content">
                  <strong>Confirm</strong>
                  <span className="step-num">02</span>
                </div>
              </li>
              <li>
                <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
                <div className="step-content">
                  <strong>Shoot</strong>
                  <span className="step-num">03</span>
                </div>
              </li>
              <li>
                <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                <div className="step-content">
                  <strong>Receive Files</strong>
                  <span className="step-num">04</span>
                </div>
              </li>
              <li>
                <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg></div>
                <div className="step-content">
                  <strong>Done.</strong>
                  <span className="step-num">05</span>
                </div>
              </li>
            </ul>
            <div className="comparison-card__slogan">Simple. Reliable. Every Time.</div>
            <div className="comparison-card__alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span><strong>Predictable. Efficient. Professional.</strong><br/>CAAS makes content creation effortless.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE BENTO GRID */}
      <section className="services-expertise page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">Explore our <span className="u-cyan" style={{ fontStyle: 'italic' }}>Expertise</span>.</h2>
          <p className="head__sub reveal d1">Specialized production units for every industry. Choose your vertical to see how we bring your vision to life.</p>
        </div>

        <div className="expertise-bento">
          {/* Top Row: 2 large cards */}
          <div className="bento-card bento-card--large reveal d1">
            <div className="bento-card__img">
              <Image src="/images/ind_real_estate.jpg" alt="Real Estate" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                <h3>Real Estate</h3>
              </div>
              <p>Luxury real estate needs a luxury lens. High-dynamic range photography and cinematic walkthroughs that highlight architectural brilliance.</p>
            </div>
          </div>

          <div className="bento-card bento-card--large reveal d2">
            <div className="bento-card__img">
              <Image src="/images/ind_manufacturing.jpg" alt="Manufacturing" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                <h3>Manufacturing Set-up</h3>
              </div>
              <p>Industrial environments require specialized lighting and safety compliance. We capture your scale and operations with precision.</p>
            </div>
          </div>

          <div className="expertise-bento__center-btn reveal d3">
            <a href="#niche-section" className="btn btn--cyan">View More Services</a>
          </div>

          {/* Middle Row: 3 small cards */}
          <div className="bento-card bento-card--small reveal d4">
            <div className="bento-card__img">
              <Image src="/images/ind_influencers.jpg" alt="Influencers" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                <h4>Influencers</h4>
              </div>
              <p>Comprehensive coverage for summits, conferences, and launches, capturing key moments and high energy.</p>
              <div className="bento-card__tags">
                <span>VLOG</span><span>VERTICAL</span><span>YOUTUBE</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          <div className="bento-card bento-card--small reveal d5">
            <div className="bento-card__img">
              <Image src="/images/ind_product.jpg" alt="Personal Branding" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
                <h4>Personal Branding</h4>
              </div>
              <p>Professional home studio setups and content production support for the modern digital influencer.</p>
              <div className="bento-card__tags">
                <span>PODCAST</span><span>SOCIAL</span><span>ARTIST</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          <div className="bento-card bento-card--small reveal d6">
            <div className="bento-card__img">
              <Image src="/images/ind_food.jpg" alt="Food & Restaurant" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                <h4>Food & Restaurant</h4>
              </div>
              <p>Reliable white-label production services for creative and marketing agencies worldwide.</p>
              <div className="bento-card__tags">
                <span>INGREDIENT</span><span>AMBIENCE</span><span>REEL</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          {/* Bottom Row: 1 wide card */}
          <div className="bento-card bento-card--wide reveal d7">
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div>
                <h3>Agencies</h3>
              </div>
              <p>Clean, professional visual content for modern enterprises. We handle everything from executive headshots to full-scale corporate brand films.</p>
              <ul className="bento-card__check-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Executive Portraits</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Company Culture Films</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Meeting Coverage</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Internal Comms</li>
              </ul>
              <div className="bento-card__ctas">
                <Link href="/contact" className="btn btn--cyan">Book Corporate Shoot</Link>
                <Link href="/portfolio" className="btn btn--outline">View Showcase</Link>
              </div>
            </div>
            <div className="bento-card__img">
              <Image src="/images/home_corporate.jpg" alt="Agencies" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NICHE DIAGRAM */}
      <section id="niche-section" className="services-niche page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">Specialized <span className="u-red">Expertise</span> for<br/>Every Niche.</h2>
        </div>
        
        <div className="niche-diagram reveal">
          <div className="niche-diagram__pill">
            <div className="niche-diagram__line"></div>
            
            {/* Left Branches */}
            <div className="niche-item niche-item--left" style={{ top: '5%' }}>
              <div className="niche-item__box">Product Shoot</div>
              <div className="niche-item__arrow"></div>
            </div>
            <div className="niche-item niche-item--left" style={{ top: '23%' }}>
              <div className="niche-item__box">Fashion & Models Shoot</div>
              <div className="niche-item__arrow"></div>
            </div>
            <div className="niche-item niche-item--left" style={{ top: '41%' }}>
              <div className="niche-item__box">Interviews & Podcasts Shoot</div>
              <div className="niche-item__arrow"></div>
            </div>
            <div className="niche-item niche-item--left" style={{ top: '59%' }}>
              <div className="niche-item__box">Travel & Hospitality Shoot</div>
              <div className="niche-item__arrow"></div>
            </div>
            <div className="niche-item niche-item--left" style={{ top: '77%' }}>
              <Link href="/contact" className="niche-item__box niche-item__box--cyan">
                Don't Look Confused,<br/><strong>Reach Out to us Directly</strong>
              </Link>
              <div className="niche-item__arrow"></div>
            </div>

            {/* Right Branches */}
            <div className="niche-item niche-item--right" style={{ top: '14%' }}>
              <div className="niche-item__arrow"></div>
              <div className="niche-item__box">Brand Campaigns Shoot</div>
            </div>
            <div className="niche-item niche-item--right" style={{ top: '32%' }}>
              <div className="niche-item__arrow"></div>
              <div className="niche-item__box">Events & Experiences Shoot</div>
            </div>
            <div className="niche-item niche-item--right" style={{ top: '50%' }}>
              <div className="niche-item__arrow"></div>
              <div className="niche-item__box">Fitness & Sports Shoot</div>
            </div>
            <div className="niche-item niche-item--right" style={{ top: '68%' }}>
              <div className="niche-item__arrow"></div>
              <div className="niche-item__box">Corporate Shoot</div>
            </div>
            <div className="niche-item niche-item--right" style={{ top: '86%' }}>
              <div className="niche-item__arrow"></div>
              <div className="niche-item__box">Office Party & MEET UPS</div>
            </div>
          </div>
        </div>
        <div className="niche-diagram__footer reveal" style={{ position: 'static', margin: '40px auto 0', transform: 'none', color: 'var(--text)' }}>
          It all Starts with Shoot<br/>&<br/><span className="u-cyan">Ends with Planning for Next</span>
        </div>
      </section>

      {/* 6. SOCIAL PROOF / STATS */}
      <section className="services-social-proof">
        <div className="wrap">
          <div className="head head--center">
            <h2 className="h-section reveal">Trusted by the <span className="u-red">NCR's</span> most<br/>ambitious brands.</h2>
          </div>
        </div>
        
        <div className="social-proof-block reveal">
          <div className="wrap">
            <div className="social-proof__stats">
              <div className="stat-item">
                <div className="stat-num" data-count="12" data-suffix="+">12+</div>
                <div className="stat-label">CITIES</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" data-count="98" data-suffix="%">98%</div>
                <div className="stat-label">SUCCESS</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" data-count="50" data-suffix="k+">50k+</div>
                <div className="stat-label">PHOTOS/VIDEOS</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" data-count="24" data-suffix="/7">24/7</div>
                <div className="stat-label">AVAILABILITY</div>
              </div>
            </div>

            <div className="social-proof__testimonials">
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>"CAAS completely transformed how we handle our monthly social content. No more calling freelancers, we just book a slot and the quality is consistently world-class."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundColor: '#2b2b2b' }}></div>
                  <div>
                    <strong>Sarah Jenkins</strong>
                    <span>Marketing Director, Lumera</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>"The turnaround time is what hooked us. Getting high-end drone footage delivered within 48 hours is unheard of in this industry. A total game-changer for our workflow."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundColor: '#4a4a4a' }}></div>
                  <div>
                    <strong>Marcus Chen</strong>
                    <span>Founder of Apex Creatives</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-proof__ctas">
              <Link href="/pricing" className="btn btn--white">Book a Shoot</Link>
              <Link href="/portfolio" className="btn btn--outline-cyan">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREELANCERS VS CAAS */}
      <section className="services-features page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">What Makes <span className="u-cyan">CAAS</span> Different from <span className="u-red">Freelancers</span></h2>
          <p className="head__sub reveal d1">Freelancers can be great at what they do. But when your shoot depends on availability, equipment, communication and consistency, you need more than one person with a camera.</p>
        </div>

        <div className="features-grid reveal d2">
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <div className="feature-content">
              <h4>AVAILABILITY</h4>
              <p>A network of professionals. Not just one person's schedule.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
            <div className="feature-content">
              <h4>ONE POINT OF CONTACT</h4>
              <p>One team. One number. Everything is managed for you.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
            <div className="feature-content">
              <h4>PRODUCTION-READY</h4>
              <p>The right crew, gear and backup — planned for your shoot.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg></div>
            <div className="feature-content">
              <h4>BUILT AROUND THE SHOOT</h4>
              <p>Every niche has a different need. We adapt to your shoot.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
            <div className="feature-content">
              <h4>CONSISTENCY</h4>
              <p>Standard process for communication, execution and delivery.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
            <div className="feature-content">
              <h4>QUALITY ASSURED</h4>
              <p>Checked equipment, experienced crew and professional workflow.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
            <div className="feature-content">
              <h4>SCALABILITY</h4>
              <p>One shoot or one hundred. We're built to scale with you.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></div>
            <div className="feature-content">
              <h4>ORGANISED DELIVERY</h4>
              <p>Files delivered in structured way. On time. Every time.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            <div className="feature-content">
              <h4>RELIABLE CREW</h4>
              <p>Trained, verified and professional cameraman & crew.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div className="feature-content">
              <h4>SUPPORT BEYOND THE SHOOT</h4>
              <p>We don't disappear after delivery. We're here for the long run.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></div>
            <div className="feature-content">
              <h4>ALWAYS PREPARED</h4>
              <p>Backup batteries, storage, gear and plan B — always.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
            <div className="feature-content">
              <h4>TRANSPARENT & FAIR</h4>
              <p>Clear pricing. No hidden charges. What we say is what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7b. SAME PRODUCTION STANDARD */}
      <section className="services-standard page-section wrap">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center">THE CAAS DIFFERENCE</span>
          <h2 className="h-section reveal">Different Shoots.<br/><span className="u-cyan">Same Production Standard.</span></h2>
          <p className="head__sub reveal d1">Whether it's a product shoot in a studio or a 4-camera setup at a corporate summit — the crew, process and quality bar never changes.</p>
        </div>
        <div className="standard-grid reveal d2">
          <div className="standard-card">
            <div className="standard-card__num">01</div>
            <h4>Same Crew Quality</h4>
            <p>Every cameraman on our roster is vetted, trained and briefed before they set foot on your shoot.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">02</div>
            <h4>Same Communication Flow</h4>
            <p>One point of contact. One pre-shoot brief. No information gets lost between you and the crew on the ground.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">03</div>
            <h4>Same Delivery Process</h4>
            <p>Files organised, labelled and handed off on time — every single time. No follow-ups required from your end.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">04</div>
            <h4>Same Equipment Grade</h4>
            <p>Cinema-grade cameras, lenses and lighting — regardless of the shoot size or budget tier you've chosen.</p>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE DON'T SHOOT */}
      <section className="services-exclusion page-section wrap">
        <div className="exclusion-card reveal">
          <div className="exclusion-card__content">
            <div className="exclusion-card__left">
              <span className="eyebrow eyebrow--red">ONE THING</span>
              <h2>WE DON'T<br/><span className="u-red">SHOOT.</span></h2>
              <p>We choose not to cover weddings, pre-weddings, family functions or personal gatherings.</p>
              <div className="exclusion-alert">
                <div className="exclusion-alert__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg></div>
                <div>
                  <strong>THAT'S INTENTIONAL.</strong><br/>
                  <span>CAAS is built for businesses, brands, creators and commercial productions.</span>
                </div>
              </div>
            </div>
            
            <div className="exclusion-card__center">
              <div className="red-cross">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            </div>

            <div className="exclusion-card__right">
              <ul>
                <li><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg></div> WEDDINGS</li>
                <li><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg></div> PRE-WEDDINGS</li>
                <li><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg></div> FAMILY FUNCTIONS &<br/>PERSONAL GATHERINGS</li>
              </ul>
            </div>
          </div>
          <div className="exclusion-card__banner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <strong>WE AREN'T TRYING TO BE EVERYONE'S CAMERAMAN. <span className="u-cyan">WE'RE BUILDING EXPERTISE AROUND COMMERCIAL CONTENT.</span></strong>
          </div>
        </div>
      </section>

      {/* 9. GALLERY & QUOTE */}
      <section className="services-gallery dark">
        <div className="wrap">
          <div className="head head--flex">
            <div>
              <span className="eyebrow eyebrow--red">Visually</span>
              <h2 className="h-section reveal">Exceptional work<br/>across Our Paid Collabs.</h2>
            </div>
            <Link href="/portfolio" className="btn-text u-cyan reveal d1">View Full Portfolio &rarr;</Link>
          </div>
        </div>
        
        <div className="gallery-grid reveal d2">
          <div className="gallery-img">
             <Image src="/images/ind_event.jpg" alt="Gallery 1" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/hero_cinematic.jpg" alt="Gallery 2" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/ind_cinema.jpg" alt="Gallery 3" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/ind_drone.jpg" alt="Gallery 4" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="wrap">
          <div className="gallery-quote reveal d3">
            <p>"We didn't build CAAS just to book cameras. We built it to solve the friction of production. In a world that runs on video, quality shouldn't be a gamble."</p>
            <div className="gallery-quote__author">
              <div className="author-logo">SG</div>
              <div>
                <strong>Shaurya Goyal</strong><br/>
                <span>FOUNDER & CEO, CAAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
