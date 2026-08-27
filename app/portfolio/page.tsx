'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [nicheTab, setNicheTab] = useState('inspiration'); 

  return (
    <main id="top" className="page-main pf-page">
      {/* 1. HERO */}
      <section className="pf-hero wrap page-section">
        <div className="pf-hero__inner">
          <div className="pf-hero__content reveal">
            <span className="pf-hero__badge">WORK SHOWCASE</span>
            <h1 className="pf-hero__title">
              We've Been<br/>
              Busy Behind the<br/>
              <span className="u-coral u-italic">Camera.</span>
            </h1>
            <p className="pf-hero__sub">From restaurant kitchens and factory floors to creators, products, properties and brand campaigns — here's what CAAS has been capturing lately.</p>
            
            <div className="pf-stats">
              <div className="pf-stat">
                <h3>500+</h3>
                <span>SUCCESSFUL SHOOTS</span>
              </div>
              <div className="pf-stat">
                <h3>12k+</h3>
                <span>HOURS FILMED</span>
              </div>
              <div className="pf-stat">
                <h3>98%</h3>
                <span>CLIENT RETENTION</span>
              </div>
            </div>


          </div>
          <div className="pf-hero__image-wrap reveal d1">
            <div className="pf-hero__image">
              <img src="/images/storyteller.jpg" alt="Camera Operator" />
            </div>
            <p className="pf-hero__hint">btw we know the editing part too</p>
          </div>
        </div>
      </section>

      {/* 1b. VIDEO REEL SECTION */}
      <section className="pf-reel page-section wrap">
        <div className="pf-reel__inner reveal">
          <div className="pf-reel__bg">
            <img src="/images/ind_cinema.jpg" alt="Behind the lens" />
            <div className="pf-reel__overlay"></div>
          </div>
          <button className="pf-reel__play" aria-label="Watch our showreel">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </section>

      {/* 2. NICHE / INSPIRATION TOGGLE */}
      <section className="pf-niche wrap page-section">
        <div className="pf-niche__head text-center reveal">
          <h2 className="pf-niche__headline">
            <span className="u-cyan">Great shoots</span> don't just happen.<br/>
            The <span className="u-coral u-italic">Camera</span> is only one part of the job.<br/>
            Here's what happens behind the scenes to<br/>
            make them happen & <span className="u-cyan u-italic">Deliver Results.</span>
          </h2>
          
          <p className="pf-niche__btw">btw What brings you here?</p>
          
          <div className="pf-toggle-wrap">
            <div className="pf-toggle">
              <button 
                className={`pf-toggle__btn ${nicheTab === 'inspiration' ? 'is-active' : ''}`} 
                onClick={() => setNicheTab('inspiration')}
              >
                I'M HERE FOR INSPIRATION
              </button>
              <button 
                className={`pf-toggle__btn ${nicheTab === 'mind' ? 'is-active' : ''}`} 
                onClick={() => setNicheTab('mind')}
              >
                I HAVE A SHOOT IN MIND
              </button>
            </div>
            <div className="pf-toggle__subs">
              <span className={nicheTab === 'inspiration' ? 'is-active' : ''}>Show me what CAAS can create.</span>
              <span className={nicheTab === 'mind' ? 'is-active' : ''}>Let's turn the idea into a shoot.</span>
            </div>
          </div>
          
          <h3 className="pf-niche__title u-coral">Specific Niche in Mind?</h3>
        </div>

        <div className="pf-niche-grid">
          {/* Card 1 */}
          <div className="pf-niche-card reveal">
            <div className="pf-niche-card__img">
              <span className="pf-badge pf-badge--dark">FASHION</span>
              <img src="/images/blog_corporate.jpg" alt="Business" />
            </div>
            <div className="pf-niche-card__content">
              <h4 className="u-cyan">BUSINESS & SPACES</h4>
              <p>For businesses where the place, people or process tell the story.</p>
              <ul className="pf-niche-list">
                <li><span className="icon">🏠</span> Real Estate Shoot</li>
                <li><span className="icon">🏥</span> Healthcare Shoot</li>
                <li><span className="icon">🏭</span> Manufacturing Shoot</li>
                <li><span className="icon">🎓</span> Education Shoot</li>
                <li><span className="icon">🏢</span> Corporate Shoot</li>
                <li><span className="icon">🏨</span> Hotel & Hospitality Shoot</li>
              </ul>
              <div className="pf-niche-footer">
                <span>📷 PHOTOGRAPHY</span><span>/</span><span>VIDEOGRAPHY</span><span>/</span><span>EDITS</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="pf-niche-card reveal d1">
            <div className="pf-niche-card__img">
              <span className="pf-badge pf-badge--cyan">FEATURED</span>
              <img src="/images/ind_product.jpg" alt="Apple" />
            </div>
            <div className="pf-niche-card__content">
              <h4 className="u-cyan">PEOPLE & PERSONAL BRANDS</h4>
              <p>For people who are the content.</p>
              <ul className="pf-niche-list">
                <li><span className="icon">🎙️</span> Podcast Shoot</li>
                <li><span className="icon">🏋️</span> Gym & Fitness Shoot</li>
                <li><span className="icon">📱</span> Influencer Shoot</li>
                <li><span className="icon">👠</span> Model Shoot</li>
                <li><span className="icon">🎬</span> Creator Shoot</li>
                <li><span className="icon">🖊️</span> Personal Branding Shoot</li>
              </ul>
              <div className="pf-niche-footer">
                <span>📷 PHOTOGRAPHY</span><span>/</span><span>VIDEOGRAPHY</span><span>/</span><span>EDITS</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="pf-niche-card reveal">
            <div className="pf-niche-card__img">
              <span className="pf-badge pf-badge--dark">RESTAURANT</span>
              <img src="/images/blog_wedding.jpg" alt="Restaurant" />
            </div>
            <div className="pf-niche-card__content">
              <h4 className="u-cyan">EVENTS & EXPERIENCES</h4>
              <p>For moments where everything happens once—and the camera can't miss it.</p>
              <ul className="pf-niche-list">
                <li><span className="icon">🎉</span> Corporate Event</li>
                <li><span className="icon">🎪</span> Exhibition</li>
                <li><span className="icon">🎤</span> Brand Event</li>
                <li><span className="icon">🛍️</span> Store Launch</li>
                <li><span className="icon">🚀</span> Product Launch</li>
                <li><span className="icon">🎟️</span> Promotional Event</li>
              </ul>
              <div className="pf-niche-footer">
                <span>📷 PHOTOGRAPHY</span><span>/</span><span>VIDEOGRAPHY</span><span>/</span><span>EDITS</span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="pf-niche-card reveal d1">
            <div className="pf-niche-card__img">
              <span className="pf-badge pf-badge--dark">AUTOMOTIVE</span>
              <img src="/images/hero_poster.jpg" alt="Car" />
            </div>
            <div className="pf-niche-card__content">
              <h4 className="u-cyan">PRODUCTS & BRANDS</h4>
              <p>For things that need to look as good on camera as they do in real life.</p>
              <ul className="pf-niche-list">
                <li><span className="icon">📦</span> Product Shoot</li>
                <li><span className="icon">☕</span> Cafe Shoot</li>
                <li><span className="icon">🛒</span> E-Commerce Shoot</li>
                <li><span className="icon">🚗</span> Automobile Shoot</li>
                <li><span className="icon">🍽️</span> Restaurant Shoot</li>
                <li><span className="icon">👗</span> Fashion Shoot</li>
              </ul>
              <div className="pf-niche-footer">
                <span>📷 PHOTOGRAPHY</span><span>/</span><span>VIDEOGRAPHY</span><span>/</span><span>EDITS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link href="/services" className="btn btn--cyan btn--lg" style={{ borderRadius: '999px', padding: '12px 32px' }}>See What Lens Delivers</Link>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Dark) */}
      <section className="pf-expertise dark">
        <div className="wrap reveal">
          <div className="pf-expertise__head">
            <div className="left">
              <h2 className="u-cyan">Expertise Comes With On-Field Execution,</h2>
              <p>We don't just point and shoot. We understand the specific nuances, lighting requirements, and audience expectations of your niche.</p>
            </div>
            <div className="right">
              <Link href="/services" className="link-cyan">View All Services &gt;</Link>
            </div>
          </div>
          
          <div className="pf-icon-boxes">
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg></span>
              <span>RESTAURANT</span>
            </div>
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg></span>
              <span>CORPORATE</span>
            </div>
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg></span>
              <span>TECH</span>
            </div>
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
              <span>REAL ESTATE</span>
            </div>
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg></span>
              <span>FASHION</span>
            </div>
            <div className="pf-icon-box">
              <span className="icon"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></span>
              <span>EVENTS</span>
            </div>
          </div>

          <div className="pf-expertise__text text-center">
            <p>Just like chefs have their cuisine specialty, cameramen have their lens specialty.</p>
            <p className="u-italic">
              A pastry chef isn't expected to master a Tandoor.<br/>
              Likewise, a product shoot needs a different eye than a real estate shoot.
            </p>
            <p>That's why our cameramen specialize in the kind of shoots they know best.</p>
          </div>
        </div>
        
        {/* Curved area inside dark section */}
        <div className="pf-curve">
           <div className="pf-avatars">
              <div className="pf-avatar-card sm">
                 <div className="name">Ravi M.</div>
                 <img src="/images/storyteller.jpg" alt="Ravi M." />
              </div>
              <div className="pf-avatar-card md">
                 <div className="name">Priya S.</div>
                 <img src="/images/sarcastic_crew_2.png" alt="Priya S." />
              </div>
              <div className="pf-avatar-card lg">
                 <div className="name">Arjun K.</div>
                 <img src="/images/storyteller.jpg" alt="Arjun K." />
              </div>
              <div className="pf-avatar-card md">
                 <div className="name">Meera D.</div>
                 <img src="/images/sarcastic_crew_2.png" alt="Meera D." />
              </div>
              <div className="pf-avatar-card sm">
                 <div className="name">Sanya T.</div>
                 <img src="/images/storyteller.jpg" alt="Sanya T." />
              </div>
           </div>
           <h2 className="pf-curve__title text-center" style={{ marginTop: '40px' }}>Latest Client Feedback for<br/><span className="u-cyan u-italic">Our Masters</span></h2>
        </div>
      </section>

      {/* 4. THE 3500 CONCEPT (Cyan) */}
      <section className="pf-concept">
        <div className="wrap">
          <div className="pf-concept__header text-center reveal">
            <h2>The <span className="u-red">₹3500</span> Concept</h2>
            <p>Professional camera. Real results. Fixed start. Flexible beyond.</p>
          </div>
          
          <div className="pf-concept__grid">
            <div className="pf-concept__left reveal">
              {/* Pricing Card Replica */}
              <div className="pf-price-card">
                <div className="stars">★★★★★</div>
                <div className="pkg">STARTING PACKAGE</div>
                <div className="price">₹3500</div>
                <div className="title">CAMERAMAN FOR A DAY (5 HOURS)</div>
                <p>5 hours of professional shooting with an experienced cameraman.</p>
                <div className="addon">
                  <div className="icon">🕒</div>
                  <div className="info">
                    <strong>Need More Time?</strong>
                    <div className="u-cyan price">₹500 <span className="small">/ Extra Hour</span></div>
                    <p className="small">Extend as per your requirement. You only pay for what you need.</p>
                  </div>
                </div>
                <div className="note">
                  <span className="icon">ℹ️</span>
                  <span><span className="u-cyan">Note:</span> Equipment, travel, and other add-ons will be as per requirement.</span>
                </div>
              </div>
            </div>
            
            <div className="pf-concept__right reveal d1">
              <h2>Shoot what moves your world.<br/>We capture it, <span className="u-white u-italic">perfectly.</span></h2>
              <p>From content that connects to events that matter, we've got your shoot covered.</p>
              
              <div className="pf-features-grid">
                <div className="f-box">
                  <div className="f-icon">📱</div>
                  <strong>Social Media Content</strong>
                  <span>Reels, Shorts, Posts & more</span>
                </div>
                <div className="f-box">
                  <div className="f-icon">📅</div>
                  <strong>Event Coverage</strong>
                  <span>Birthdays, Functions, Corporate & more</span>
                  <span className="sub">*Photo & video pricing differs</span>
                </div>
                <div className="f-box">
                  <div className="f-icon">👤</div>
                  <strong>Influencer Shoots</strong>
                  <span>Lifestyle, Fashion, Collabs & more</span>
                </div>
                <div className="f-box">
                  <div className="f-icon">💼</div>
                  <strong>Business Shoots</strong>
                  <span>Offices, Products, Brand Stories & more</span>
                </div>
              </div>

              <div className="pf-concept__ctas">
                <Link href="/book" className="btn btn--white"><span className="icon">📅</span> Book a Shoot</Link>
                <Link href="/contact" className="btn btn--ghost-white"><span className="icon">🎧</span> Contact Us Now!</Link>
              </div>
              <p className="pf-trusted">
                <span className="icon">🛡️</span> Trusted professionals. On-time delivery. Hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DONT JUST OVERSPEND */}
      <section className="pf-guide wrap page-section">
        <h2 className="pf-guide__title">
          <span className="u-cyan">Dont Just Overspend,</span><br/>
          <span className="u-italic" style={{ color: 'var(--ink)' }}>Check out the User Guide to get the correct shoot planned</span>
        </h2>

        <div className="pf-guide-cards">
          <div className="pf-guide-card reveal">
            <h3>Plan Your Shoot</h3>
            <p>"Think through your content goals before the day. The best shoots start with a clear brief — saves time, money and retakes."</p>
            <img src="/images/blog_lighting.jpg" alt="Planning" />
          </div>
          <div className="pf-guide-card dark">
            <h3>Choose the Right Crew</h3>
            <p>"Not every shoot needs a 10-person team. Match your crew size to the scope — a tight brief, a focused crew, a sharper result."</p>
            <img src="/images/sarcastic_crew_2.png" alt="Crew" />
          </div>
          <div className="pf-guide-card reveal">
            <h3>Review Before Delivery</h3>
            <p>"Always do a quick review pass before sending files. A well-checked delivery sets the tone for a long-term client relationship."</p>
            <img src="/images/home_corporate.jpg" alt="Delivery" />
          </div>
        </div>

        <div className="pf-glance reveal">
          <div className="pf-glance__text">
            <h3 className="u-cyan u-italic">Last Week at Glance</h3>
            <p className="u-italic" style={{ color: 'var(--ink)', fontWeight: 600 }}>showing up with intent is only thing<br/>that matters</p>
          </div>
          <div className="pf-glance__circles">
            <div className="circle"><img src="/images/home_studio.jpg" alt="Studio shoot" /></div>
            <div className="circle"><img src="/images/home_event.jpg" alt="Event shoot" /></div>
            <div className="circle"><img src="/images/home_creator.jpg" alt="Creator shoot" /></div>
          </div>
        </div>
      </section>

      {/* 6. BEHIND THE SCENES */}
      <section className="pf-bts dark">
        <div className="pf-bts__bg">
          <img src="/images/ind_camera_rig.jpg" alt="Camera Rig" />
        </div>
        <div className="pf-bts__content wrap reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--cyan-bright)' }}></div>
            <span className="pf-bts__eyebrow" style={{ margin: 0 }}>BEHIND THE SCENES</span>
          </div>
          <h2>Crafting premium<br/>narratives<br/>through cinema-<br/>grade lenses.</h2>
          <button className="btn btn--cyan" style={{ borderRadius: '0', padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            WATCH REEL 2024
          </button>
        </div>
      </section>

      {/* 7. SURFING WEBSITES */}
      <section className="pf-surf page-section text-center">
        <div className="wrap reveal">
          <h2 className="u-italic" style={{ color: 'var(--ink)' }}>
            Surfing Websites and Reaching out to Random<br/>
            Connections won't solve your problem ...
          </h2>
          <p>Join 200+ brands using CAAS to produce high-end content at scale.<br/>Book your first 6-hour session today.</p>
          <div className="pf-surf__ctas">
            <Link href="/book" className="btn btn--white">BOOK A SHOOT NOW</Link>
            <Link href="/pricing" className="btn btn--ghost-dark">VIEW PRICING</Link>
          </div>
        </div>
      </section>


    </main>
  );
}
