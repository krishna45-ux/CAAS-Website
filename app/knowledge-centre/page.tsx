import React from 'react';
import Link from 'next/link';

export default function KnowledgeCentrePage() {
  return (
    <main id="top" className="page-main kc-page">
      {/* 1. KNOWLEDGE CENTRE HERO */}
      <section className="kc-hero">
        <div className="wrap kc-hero__inner">
          <div className="kc-hero__content">
            <div className="kc-hero__breadcrumbs">
              Resources &gt; Blogs
            </div>
            <div className="kc-hero__badge">
              <span className="kc-hero__badge-icon">🎯</span> Curiosity has its Answer here
            </div>
            <h1 className="kc-hero__title">Resources to Make Your Decision Making Easier</h1>
            <p className="kc-hero__desc">Focused on advising companies on long-term strategy, growth plans, and market positioning.</p>
          </div>
          <div className="kc-hero__image">
            <img src="/images/hero_poster.jpg" alt="Knowledge Centre Team" />
          </div>
        </div>
      </section>

      {/* 2. EXPERT KNOWLEDGE HUB */}
      <section className="kc-hub">
        <div className="wrap">
          <div className="kc-hub__header">
            <h2>Expert Knowledge Hub</h2>
            <a href="#" className="kc-hub__browse">BROWSE CATEGORIES</a>
          </div>
          <div className="kc-hub__grid">
            {/* Blogs */}
            <div className="kc-hub-card">
              <h3 className="kc-hub-card__title" style={{color: '#00d2ff'}}>Blogs</h3>
              <p className="kc-hub-card__text">"Just finished a 14-hour factory shoot. The client was shocked we got the drone shots while they were on lunch. Efficiency is everything."</p>
              <div className="kc-hub-card__img">
                <img src="/images/blog_corporate.jpg" alt="Blogs" />
              </div>
            </div>
            {/* Shoot Guide */}
            <div className="kc-hub-card kc-hub-card--dark">
              <h3 className="kc-hub-card__title">Shoot Guide</h3>
              <p className="kc-hub-card__text">"Just finished a 14-hour factory shoot. The client was shocked we got the drone shots while they were on lunch. Efficiency is everything."</p>
              <div className="kc-hub-card__img">
                <img src="/images/blog_corporate.jpg" alt="Shoot Guide" />
              </div>
            </div>
            {/* Latest News */}
            <div className="kc-hub-card">
              <h3 className="kc-hub-card__title" style={{color: '#00d2ff'}}>Latest News</h3>
              <p className="kc-hub-card__text">"Just finished a 14-hour factory shoot. The client was shocked we got the drone shots while they were on lunch. Efficiency is everything."</p>
              <div className="kc-hub-card__img">
                <img src="/images/blog_corporate.jpg" alt="Latest News" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER BENEFICIAL */}
      <section className="kc-discover">
        <div className="wrap">
          <h2 className="kc-section-title">Discover something <span className="u-cyan" style={{fontStyle:'italic'}}>beneficial for your next shoot!</span></h2>
          <div className="kc-discover__grid">
            <div className="kc-discover-main">
              <div className="kc-discover-main__img">
                <img src="/images/blog_corporate.jpg" alt="New Economic Era" />
              </div>
              <div className="kc-discover-main__content">
                <h3>New Economic Era</h3>
                <p>Develop and execute comprehensive marketing strategies to meet business objectives.</p>
                <div className="kc-discover-main__footer">
                  <span className="kc-tag">Business</span>
                  <a href="#" className="kc-link">Learn More &gt;</a>
                </div>
              </div>
            </div>
            <div className="kc-discover-side">
              <div className="kc-discover-item">
                <div className="kc-discover-item__img">
                  <img src="/images/blog_corporate.jpg" alt="Managing Workforce" />
                </div>
                <div className="kc-discover-item__content kc-discover-item__content--dark">
                  <h4>Managing Workforce</h4>
                  <p>Employers strategically allocate people and resources, track attendance and comply...</p>
                  <div className="kc-discover-item__footer">
                    <span className="kc-tag">Business</span>
                    <a href="#" className="kc-link">Learn More &gt;</a>
                  </div>
                </div>
              </div>
              <div className="kc-discover-item">
                <div className="kc-discover-item__img">
                  <img src="/images/blog_corporate.jpg" alt="Women as Entrepreneurs" />
                </div>
                <div className="kc-discover-item__content">
                  <h4>Women as Entrepreneurs</h4>
                  <p>Working in tech industry demands a high level of expertise. Meanwhile...</p>
                  <div className="kc-discover-item__footer">
                    <span className="kc-tag">Business</span>
                    <a href="#" className="kc-link">Learn More &gt;</a>
                  </div>
                </div>
              </div>
              <div className="kc-discover-item">
                <div className="kc-discover-item__img">
                  <img src="/images/blog_corporate.jpg" alt="Get Users Hooked On Your Product" />
                </div>
                <div className="kc-discover-item__content kc-discover-item__content--dark">
                  <h4>Get Users Hooked On Your Product</h4>
                  <p>It all comes down to the user experience from the moment they set eyes...</p>
                  <div className="kc-discover-item__footer">
                    <span className="kc-tag">Business</span>
                    <a href="#" className="kc-link">Learn More &gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DELIVERING RESULTS ACROSS INDUSTRIES */}
      <section className="kc-industries">
        <div className="wrap kc-industries__inner">
          <div className="kc-industries__left">
            <span className="kc-badge-small">Proven Success</span>
            <h2>Delivering<br/>Results<br/>Across<br/>Industries</h2>
            <div className="kc-industries__box">
              We don't just shoot video; we solve business problems. Our case studies highlight the tangible impact CAAS has on brand growth and operational efficiency.
            </div>
            <Link href="/services" className="btn btn--cyan">View Services</Link>
          </div>
          <div className="kc-industries__right">
            <div className="kc-case-study">
              <img src="/images/blog_corporate.jpg" alt="Restaurant" />
              <div className="kc-case-study__info">
                <div className="kc-case-study__meta">
                  <span className="u-cyan">RESTAURANT</span> • ARTISAN KITCHENS
                </div>
                <h3>34% Increase in Online Bookings</h3>
                <a href="#" className="kc-case-study__link">View Study &gt;</a>
              </div>
            </div>
            <div className="kc-case-study">
              <img src="/images/blog_corporate.jpg" alt="Corporate" />
              <div className="kc-case-study__info">
                <div className="kc-case-study__meta">
                  <span className="u-cyan">CORPORATE</span> • GLOBAL TECH HUB
                </div>
                <h3>20+ Interview Deliverables in 48h</h3>
                <a href="#" className="kc-case-study__link">View Study &gt;</a>
              </div>
            </div>
            <div className="kc-case-study">
              <img src="/images/blog_corporate.jpg" alt="Real Estate" />
              <div className="kc-case-study__info">
                <div className="kc-case-study__meta">
                  <span className="u-cyan">REAL ESTATE</span> • APEX LIVING
                </div>
                <h3>Featured in Architectural Digest</h3>
                <a href="#" className="kc-case-study__link">View Study &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SARCAASTIC FEEDBACK */}
      <section className="kc-feedback">
        <div className="wrap">
          <h2 className="kc-section-title">You should read <strong>sar<span className="u-cyan">CAAS</span>tic</strong> Feedback!!!!</h2>
          <div className="kc-feedback__card">
            <div className="kc-feedback__left">
              <span className="kc-feedback__label">CUSTOMER REVIEWS</span>
              <p className="kc-feedback__quote">I had a great experience with the service pet care. They were very professional and attentive to my pet's needs.</p>
              <div className="kc-feedback__author">
                <div className="kc-feedback__avatar"><img src="/images/storyteller.jpg" alt="Andrea Sanchez" /></div>
                <div>
                  <strong>Andrea Sanchez</strong>
                  <div className="kc-feedback__stars">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <div className="kc-feedback__nav">
                <button className="kc-feedback__btn">&lt;</button>
                <button className="kc-feedback__btn kc-feedback__btn--active">&gt;</button>
              </div>
            </div>
            <div className="kc-feedback__right">
              <img src="/images/hero_poster.jpg" alt="Happy dog" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. MUST READ FEATURED POSTS */}
      <section className="kc-featured-posts">
        <div className="wrap">
          <h2 className="kc-section-title">Must Read <span className="u-cyan" style={{fontStyle:'italic'}}>Featured Posts</span></h2>
          <div className="kc-posts-grid">
            <div className="kc-post-card">
              <div className="kc-post-card__img"><img src="/images/blog_corporate.jpg" alt="New Era" /></div>
              <div className="kc-post-card__content">
                <h3>New Era</h3>
                <p>Embrace the dawn of a new economic era with fresh opportunities and challenges.</p>
                <div className="kc-post-card__footer">
                  <span className="kc-tag">Economic</span>
                  <a href="#" className="kc-link">Learn More &gt;</a>
                </div>
              </div>
            </div>
            <div className="kc-post-card kc-post-card--dark">
              <div className="kc-post-card__img"><img src="/images/blog_corporate.jpg" alt="Negotiation skill" /></div>
              <div className="kc-post-card__content">
                <h3>Negotiation skill</h3>
                <p>In order to achieve a desirable outcome, it may be useful to follow a structured approach to negotiation.</p>
                <div className="kc-post-card__footer">
                  <span className="kc-tag kc-tag--white">Skills</span>
                  <a href="#" className="kc-link">Learn More &gt;</a>
                </div>
              </div>
            </div>
            <div className="kc-post-card">
              <div className="kc-post-card__img"><img src="/images/blog_corporate.jpg" alt="Money" /></div>
              <div className="kc-post-card__content">
                <h3>Money</h3>
                <p>Before the development of a medium of exchange—that is, money—people would barter to obtain the goods...</p>
                <div className="kc-post-card__footer">
                  <span className="kc-tag">Economic</span>
                  <a href="#" className="kc-link">Learn More &gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BLOCK */}
      <section className="kc-cta">
        <div className="wrap kc-cta__inner">
          <h2>Can't find what you're<br/>looking for?</h2>
          <p>Our specialists are available for technical consultations regarding specific equipment needs or unique production environments.</p>
          <div className="kc-cta__buttons">
            <a href="#" className="btn btn--cyan">Speak to a Specialist</a>
            <a href="#" className="btn btn--outline" style={{borderColor:'rgba(255,255,255,0.3)', color:'#fff'}}>Download Equipment Kit</a>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="kc-newsletter">
        <div className="wrap">
          <div className="kc-newsletter__inner">
            <div className="kc-newsletter__text">
              <h3>The Monthly Viewfinder.</h3>
              <p>A curated monthly digest of cinematography techniques, platform updates, and industry insights.</p>
            </div>
            <div className="kc-newsletter__form">
              <input type="email" placeholder="Enter your professional email" className="kc-newsletter__input" />
              <button className="btn btn--dark kc-newsletter__btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
