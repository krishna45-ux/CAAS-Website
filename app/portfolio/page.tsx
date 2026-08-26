'use client';

import { useState } from 'react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');

  const portfolioItems = [
    { id: 1, category: 'Social Media', src: '/images/storyteller.jpg', title: 'Studio Storyteller', meta: 'f/4.0 · 35mm' },
    { id: 2, category: 'Events', src: '/images/blog_wedding.jpg', title: 'Outdoor Event Coverage', meta: 'f/2.0 · 24mm' },
    { id: 3, category: 'Corporate', src: '/images/blog_corporate.jpg', title: 'Corporate Team', meta: 'f/2.8 · 50mm' },
    { id: 4, category: 'Product', src: '/images/professional_lens.jpg', title: 'Cinema Prime Detail', meta: 'f/2.8 · 85mm' },
    { id: 5, category: 'Real Estate', src: '/images/blog_lighting.jpg', title: 'Golden Hour Silhouette', meta: 'f/1.8 · 35mm' },
    { id: 6, category: 'Corporate', src: '/images/hero_poster.jpg', title: 'Brand Film Frame', meta: 'f/5.6 · 24mm' },
  ];

  const filteredItems = activeTab === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);

  return (
    <main id="top" className="page-main">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <span className="eyebrow">— OUR PORTFOLIO</span>
          <h1 className="hero__title">
            <span className="line"><span>Fresh from the</span></span><br/>
            <span className="line"><span><span className="u-blue">Field</span>.</span></span>
          </h1>
          <p className="hero__sub">A living feed of our most recent work — straight off the memory card.</p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="page-section wrap">
        {/* Filters */}
        <div className="portfolio-filters reveal">
          {['All', 'Social Media', 'Events', 'Corporate', 'Real Estate', 'Product'].map((tab) => (
            <button 
              key={tab} 
              className={`filter-btn ${activeTab === tab ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-gallery">
          {filteredItems.map((item, index) => (
            <figure key={item.id} className="pf reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <img className="shot" src={item.src} alt={item.title} />
              <div className="pf__overlay">
                <span className="pf__cat">{item.category}</span>
                <span className="pf__title">{item.title}</span>
              </div>
              <figcaption className="pf__cap">{item.meta}</figcaption>
            </figure>
          ))}
        </div>

        <div className="portfolio-cta reveal" style={{ marginTop: '60px', textAlign: 'center' }}>
          <h3>Want similar results for your brand?</h3>
          <br/>
          <a href="/pricing" className="btn btn--coral btn--lg">Book a Shoot Today</a>
        </div>
      </section>
    </main>
  );
}
