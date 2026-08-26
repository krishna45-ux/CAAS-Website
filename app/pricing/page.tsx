'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "WHAT HAPPENS IF THE SHOOT EXCEEDS 6 HOURS?",
      a: "Any time beyond the initial 6-hour base package is billed at a flat rate of ₹600 per hour. We bill in 30-minute increments to keep things fair. Your operator will check in with you 15 minutes before the base time expires."
    },
    {
      q: "IS A DEPOSIT REQUIRED TO BOOK?",
      a: "Yes, a 50% deposit is required to secure your booking date and crew. The remaining balance is due upon project completion and before final file delivery."
    },
    {
      q: "DO YOU CHARGE FOR TRAVEL?",
      a: "Travel within a 15km radius of our studio is included. Beyond that, standard mileage rates apply. For out-of-station or international shoots, travel and accommodation are billed at cost."
    },
    {
      q: "WHAT IS YOUR CANCELLATION POLICY?",
      a: "Cancellations made 48 hours prior to the shoot will receive a full refund of the deposit. Cancellations within 48 hours are subject to a 50% cancellation fee."
    }
  ];

  return (
    <main id="top" className="page-main pricing-page">
      {/* 1. CONTACT HERO */}
      <section className="contact-hero wrap page-section">
        <div className="contact-hero__inner">
          <div className="contact-hero__content reveal">
            <div className="contact-btn-wrap">
              <span className="contact-badge">GET IN TOUCH</span>
            </div>
            <h1 className="hero__title" style={{ fontSize: '4.5rem', lineHeight: '1', fontFamily: 'var(--display)', marginBottom: '24px', color: 'var(--ink)' }}>
              <span className="line"><span>Let's</span></span><br/>
              <span className="line"><span>Capture</span></span><br/>
              <span className="line"><span className="u-cyan" style={{ fontStyle: 'italic' }}>Precision.</span></span>
            </h1>
            <p className="hero__sub">Whether you're looking to book a cinema setup or need advice on your next production, our team of experts is ready to assist.</p>
            <div className="hero__ctas" style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
              <Link href="#inquiry" className="btn btn--cyan btn--lg">Submit Inquiry</Link>
              <Link href="/portfolio" className="btn btn--ghost btn--lg" style={{ borderColor: 'var(--ink)' }}>View Portfolio</Link>
            </div>
          </div>
          <div className="contact-hero__bg reveal d1"></div>
        </div>
      </section>

      {/* 2. CONTACT CARDS */}
      <section className="contact-cards wrap">
        <div className="contact-card reveal">
          <div className="contact-card__icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="contact-card__info">
            <span className="eyebrow eyebrow--dark">CALL US DIRECTLY</span>
            <h3>+91 98765 43210</h3>
            <p>Available for immediate inquiries and technical support during business hours.</p>
            <a href="tel:+919876543210" className="link-cyan">Call Now →</a>
          </div>
        </div>

        <div className="contact-card reveal d1">
          <div className="contact-card__icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="contact-card__info">
            <span className="eyebrow eyebrow--dark">WHATSAPP CHAT</span>
            <h3>CAAS Business</h3>
            <p>Prefer messaging? Our agents are available for quick chat responses on WhatsApp.</p>
            <a href="#" className="link-cyan">Start Chat →</a>
          </div>
        </div>

        <div className="contact-card reveal d2">
          <div className="contact-card__icon">
            <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="contact-card__info">
            <span className="eyebrow eyebrow--dark">EMAIL INQUIRY</span>
            <h3>studio@caas.pro</h3>
            <p>Send us your brief or project requirements for a detailed proposal within 24 hours.</p>
            <a href="mailto:studio@caas.pro" className="link-cyan">Send Email →</a>
          </div>
        </div>
      </section>

      {/* 3. PRICING TRANSITION */}
      <section className="pricing-transition wrap reveal" style={{ position: 'relative', zIndex: 5, paddingBottom: 0, marginBottom: '-20px' }}>
        <h2 className="transition-title" style={{ marginBottom: 0, position: 'relative', zIndex: 2 }}>Follow Along for <span className="u-cyan">Pricing</span></h2>
        <div className="transition-path" style={{ maxWidth: '900px', height: '150px', margin: '0 auto', marginTop: '-45px', position: 'relative', zIndex: 1 }}>
          <svg viewBox="0 0 900 150" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <path d="M 620 30 L 850 30 Q 880 30 880 60 L 880 70 Q 880 100 850 100 L 150 100 Q 120 100 120 130 L 120 145" stroke="#b0b5c9" strokeWidth="4" />
            <path d="M 105 135 L 120 155 L 135 135 Z" fill="#b0b5c9" />
          </svg>
        </div>
      </section>

      {/* 4. PRICING HERO */}
      <section className="pricing-intro wrap" style={{ paddingTop: '20px', paddingBottom: '120px' }}>
        <div className="pricing-intro__inner">
          <div className="pricing-intro__content reveal">
            <span className="badge badge--cyan" style={{ border: '1px solid var(--cyan)', color: 'var(--cyan)', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', display: 'inline-block', marginBottom: '24px' }}>TRANSPARENT BILLING</span>
            <h2 className="h-section" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Clear<br/>
              <span className="u-red" style={{ color: '#ff2d55' }}>Pricing</span> for,<br/>
              <span className="u-muted" style={{ color: 'var(--muted)' }}>High-End<br/>Vision.</span>
            </h2>
            <p className="hero__sub">We've replaced complex quotes with a precision hourly model. Professional cinema gear and expert operators, bundled into a single, predictable base rate.</p>
            <div className="pricing-intro__ctas" style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
              <Link href="#inquiry" className="btn btn--cyan btn--lg">GET A CUSTOM QUOTE</Link>
              <Link href="#addons" className="btn btn--ghost btn--lg" style={{ borderColor: 'var(--ink)' }}>VIEW ADD-ONS</Link>
            </div>
          </div>
          <div className="pricing-intro__quote-wrap reveal d1">
             <div className="pricing-intro__bg"></div>
             <div className="quote-box" style={{ background: 'var(--cyan)', color: '#fff', padding: '40px', maxWidth: '300px', position: 'relative', zIndex: 2, transform: 'translateY(100px)' }}>
                <span className="eyebrow" style={{ color: '#fff', opacity: 0.8, letterSpacing: '0.1em', fontSize: '0.75rem', display: 'block', marginBottom: '16px' }}>TRUSTED BY</span>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, margin: 0 }}>"CAAS simplified our entire production budget overnight."</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. BASE PACKAGE */}
      <section className="pricing-base wrap page-section" style={{ paddingTop: '160px' }}>
        <div className="base-header text-center reveal" style={{ marginBottom: '60px' }}>
          <h2 className="h-section" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>The Baseline, to <span className="u-cyan" style={{ fontStyle: 'italic' }}>Serve Your Purpose</span></h2>
          <div className="divider divider--cyan" style={{ margin: '24px auto', width: '60px', height: '3px', background: 'var(--cyan)' }}></div>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Every production starts here. A comprehensive setup designed to cover 80% of professional content needs.</p>
        </div>
        
        <div className="base-card reveal" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
          <div className="base-card__left" style={{ padding: '60px', borderRight: '1px solid rgba(0,0,0,0.05)' }}>
            <span className="eyebrow eyebrow--cyan" style={{ color: 'var(--cyan)', fontWeight: 700, letterSpacing: '0.05em', fontSize: '0.85rem' }}>STANDARD SESSION</span>
            <div className="base-price" style={{ margin: '24px 0 8px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span className="amount" style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--display)', lineHeight: 1 }}>₹3,500</span> <span className="duration" style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>/ 6 Hours</span>
            </div>
            <p className="base-sub" style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '24px' }}>*Includes setup and simplify your local breakdown.</p>
            <p className="base-desc" style={{ fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.6, color: 'var(--ink)' }}>Flat rate for the first 6 hours. No hidden equipment, surcharges or travel fees within city limits.</p>
            <button className="btn btn--ink btn--lg" style={{ width: '100%', justifyContent: 'center', background: '#111727', color: '#fff' }}>Book This Session</button>
          </div>
          <div className="base-card__right" style={{ padding: '60px' }}>
            <div className="included-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)' }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontWeight: 700, letterSpacing: '0.05em', fontSize: '0.9rem', color: 'var(--ink)' }}>WHAT'S INCLUDED</span>
            </div>
            <ul className="included-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional Grade Camera (Sony A7SIII/FX3)</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>On-location shooting for up to 6 consecutive hours</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Basic lighting setup (Key + Fill)</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Raw footage delivery via high-speed cloud link</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Standard travel within 15km radius</li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.5 }}><svg viewBox="0 0 24 24" fill="none" width="20" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>Equipment insurance included</li>
            </ul>
            <div className="base-card__footer" style={{ display: 'flex', gap: '32px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '24px' }}>
              <div className="footer-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '0.85rem' }}>
                <svg viewBox="0 0 24 24" fill="none" width="16"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Overtime: ₹600 / additional hour
              </div>
              <div className="footer-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '0.85rem' }}>
                <svg viewBox="0 0 24 24" fill="none" width="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Liability Covered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADD ONS MENU */}
      <section id="addons" className="pricing-addons wrap page-section">
        <div className="addons-header reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '16px' }}>Menu of Services</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Tailor your session with specific post-production or specialized gear add-ons. Pay only for what your story requires.</p>
          </div>
          <div className="currency-toggle" style={{ display: 'flex', background: 'var(--bg-alt)', borderRadius: '8px', padding: '4px' }}>
            <button className="active" style={{ padding: '8px 16px', background: '#fff', border: 'none', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>INR (₹)</button>
            <button style={{ padding: '8px 16px', background: 'transparent', border: 'none', color: 'var(--muted)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>USD ($)</button>
          </div>
        </div>

        <div className="addons-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-2.4 2.4a3 3 0 0 1-4.24-4.24l2.4-2.4a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'EXPRESS EDITING', price: '₹1,500/HR', desc: 'Quick turnaround video editing. Same-day delivery for short-form content.' },
            { icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'COLOR GRADING', price: '₹2,500/MIN', desc: 'Cinema grade color correction and stylized grading for high-end look.' },
            { icon: <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'AUDIO ENGINEERING', price: '₹1,200/HR', desc: 'Advanced audio mixing, noise reduction, and studio-quality mastering.' },
            { icon: <><rect x="2" y="7" width="20" height="15" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 2l-5 5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>, title: 'LIVE STREAMING KIT', price: '₹4,000/SET', desc: 'Includes capture card, specialized encoder, and multi-platform streaming.' },
            { icon: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>, title: 'GIMBAL STABILIZATION', price: '₹1,500/DAY', desc: 'Professional 3-axis gimbal for cinematic movement and tracking shots.' },
            { icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'ADDITIONAL OPERATOR', price: '₹3,000/SHIFT', desc: 'Hire an extra set of hands for complex multi-camera shoots or lighting assistance.' }
          ].map((item, i) => (
            <div className="addon-card" key={i} style={{ padding: '32px', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', background: '#fff', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div className="addon-card__icon" style={{ background: 'var(--bg-alt)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--ink)' }}><svg viewBox="0 0 24 24" fill="none" width="20">{item.icon}</svg></div>
              <div className="addon-card__content">
                <div className="addon-card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{item.title}</h4>
                  <span className="price" style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="addons-footer text-center" style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-alt)', borderRadius: '12px' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--muted)' }}>Need something else? We offer custom quotes for multi-day shoots, international travel, and large-scale studio productions. <a href="#inquiry" className="link-cyan" style={{ fontWeight: 600 }}>Contact Sales →</a></p>
        </div>
      </section>

      {/* 7. INQUIRY FORM */}
      <section id="inquiry" className="inquiry-section wrap page-section">
        <div className="inquiry-grid reveal" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
          <div className="inquiry-form-card" style={{ background: '#fff', padding: '60px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
            <h2 className="h-section" style={{ fontSize: '2rem', marginBottom: '8px' }}>Inquiry Form</h2>
            <p className="subtitle" style={{ color: 'var(--muted)', marginBottom: '32px' }}>Fill in the details below and we'll connect you with the right specialist.</p>
            
            <form className="inquiry-form">
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '0.05em' }}>FULL NAME</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid transparent', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '0.05em' }}>COMPANY NAME</label>
                  <input type="text" placeholder="Acme Productions" style={{ width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid transparent', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                </div>
              </div>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid transparent', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '0.05em' }}>INTEREST/SERVICE</label>
                  <select style={{ width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid transparent', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', appearance: 'none' }}>
                    <option>Commercial Videography</option>
                    <option>Corporate Film</option>
                    <option>Event Coverage</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '0.05em' }}>PROJECT DETAILS</label>
                <textarea placeholder="Tell us about your requirements, date and location..." rows={4} style={{ width: '100%', padding: '16px', background: 'var(--bg)', border: '1px solid transparent', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}></textarea>
              </div>
              <button type="button" className="btn btn--cyan" style={{ marginTop: '24px', padding: '16px 32px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Send Inquiry 
                <svg viewBox="0 0 24 24" fill="none" width="16" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>

          <div className="inquiry-sidebar">
            <div className="sidebar-item" style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div className="sidebar-icon" style={{ color: 'var(--cyan)' }}>
                <svg viewBox="0 0 24 24" fill="none" width="24" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Our Studio</h4>
                <p style={{ margin: '0 0 8px', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>Precision Plaza, 4th Floor, Sector 5<br/>Tech City, Bangalore, KA - 560001</p>
                <a href="#" className="link-muted" style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>www.caas.pro</a>
              </div>
            </div>

            <div className="sidebar-box" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div className="sidebar-icon u-cyan" style={{ color: 'var(--cyan)' }}>
                  <svg viewBox="0 0 24 24" fill="none" width="24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Business Hours</h4>
              </div>
              <ul className="hours-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.95rem' }}><span style={{ color: 'var(--muted)' }}>Monday - Friday</span> <strong>09:00 AM - 07:00 PM</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.95rem' }}><span style={{ color: 'var(--muted)' }}>Saturday</span> <strong>10:00 AM - 04:00 PM</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '0.95rem' }}><span style={{ color: 'var(--muted)' }}>Sunday</span> <span className="muted" style={{ color: 'var(--muted)' }}>Closed</span></li>
              </ul>
              <p className="hours-note" style={{ margin: 0, fontSize: '0.8rem', color: 'var(--muted)' }}>* Core, On-field shoots are available 24/7 upon prior booking.</p>
            </div>

            <div className="sidebar-box text-center hq-box" style={{ background: '#f8f9fa', borderRadius: '16px', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="hq-icon" style={{ color: 'var(--cyan)', marginBottom: '16px' }}>
                <svg viewBox="0 0 24 24" fill="none" width="32" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4 style={{ margin: '0 0 8px', fontSize: '0.85rem', letterSpacing: '0.05em' }}>HQ LOCATED IN BANGALORE</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--muted)' }}>Open in Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST CTA */}
      <section className="trust-cta dark reveal" style={{ paddingBlock: '100px', backgroundColor: '#111727', margin: '40px 0', borderRadius: '24px' }}>
        <div className="wrap trust-cta__inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div className="trust-cta__content">
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--display)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Doesn't Feel Like<br/><span style={{ color: 'rgba(255,255,255,0.4)' }}>Trusting Us?</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '400px' }}>
              We're here with a clear intent — to build on trust, deliver the right service, and always put your needs first.
            </p>
          </div>
          <div className="trust-cta__buttons" style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Link href="#inquiry" className="btn btn--cyan btn--lg">BOOK A SHOOT NOW</Link>
            <Link href="#inquiry" className="btn btn--ghost btn--lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>BULK QUOTES</Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="pricing-faq wrap page-section" style={{ paddingBlock: '100px' }}>
        <div className="faq-header text-center reveal" style={{ marginBottom: '60px' }}>
          <div className="faq-icon" style={{ display: 'inline-flex', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 221, 255, 0.1)', color: 'var(--cyan)', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>?</div>
          <h2 className="h-section" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Pricing Policy & FAQ</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Everything you need to know about our billing and session management.</p>
        </div>
        <div className="faq-list reveal d1" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '24px 0' }}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}
              >
                {faq.q}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" style={{ transform: activeFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="faq-answer" style={{ maxHeight: activeFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease', opacity: activeFaq === i ? 1 : 0 }}>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, paddingTop: '16px', margin: 0 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
