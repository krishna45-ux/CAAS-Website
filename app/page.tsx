'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [navTc, setNavTc] = useState('00:00:00:00');
  const [heroTc, setHeroTc] = useState('00:00:00:00');
  const [scrubberWidth, setScrubberWidth] = useState('0%');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDay, setActiveDay] = useState('tue');
  const [isPreload, setIsPreload] = useState(true);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
    const t = setTimeout(() => setIsPreload(false), 100);
    return () => clearTimeout(t);
  }, []);

  // Helper functions
  const pad = (n: number) => (n < 10 ? '0' : '') + n;
  const tc = (totalFrames: number) => {
    const f = totalFrames % 24;
    const s = Math.floor(totalFrames / 24) % 60;
    const m = Math.floor(totalFrames / (24 * 60)) % 60;
    const h = Math.floor(totalFrames / (24 * 3600)) % 24;
    return pad(h) + ':' + pad(m) + ':' + pad(s) + ':' + pad(f);
  };

  // Removed Intro Video Logic

  useEffect(() => {
    // Scroll and timecode logic
    const REEL = 24 * 180;
    const onScroll = () => {
      const y = window.scrollY;

      // Parallax for hero grid
      setParallaxY(y * 0.35);

      // Nav stuck state
      setIsNavStuck(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? y / docH : 0;
      setScrubberWidth((p * 100).toFixed(2) + '%');
      setNavTc(tc(Math.floor(p * REEL)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hero timecode loop
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animFrame: number;
    let start: number | null = null;
    if (!reduceMotion) {
      const tick = (t: number) => {
        if (start === null) start = t;
        const frames = Math.floor(((t - start) / 1000) * 24);
        setHeroTc(tc(frames));
        animFrame = requestAnimationFrame(tick);
      };
      animFrame = requestAnimationFrame(tick);
    } else {
      setHeroTc(tc(0));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Intersection Observers for reveals and counters
    if ('IntersectionObserver' in window && !reduceMotion) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
          }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-text-down, .reveal-text-up, .reveal-shutter, .reveal-deal, .reveal-lens, .reveal-scan').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-text-down, .reveal-text-up, .reveal-shutter, .reveal-deal, .reveal-lens, .reveal-scan').forEach(el => el.classList.add('is-in'));
    }

    const animateCount = (el: Element) => {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) {
        el.textContent = target.toLocaleString('en-IN') + suffix;
        return;
      }
      const dur = 1400;
      let t0: number | null = null;
      const step = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(el => cio.observe(el));
    } else {
      counters.forEach(animateCount);
    }
  }, [isPreload]); // run after preload removes

  const handleDayClick = (day: string) => {
    setActiveDay(day);
  };

  const dayMessages: Record<string, string> = {
    mon: 'Mondays are perfect for pre-production and quick corporate drop-ins.',
    tue: 'Tuesdays offer the highest availability for our elite RED camera kits.',
    wed: 'Mid-week shoots are ideal for multi-location brand films.',
    thu: 'Thursdays are the sweet spot for influencer and social media batches.',
    fri: 'Fridays book out fast for event coverage and weekend prep.'
  };

  return (
    <div className={isPreload ? "preload" : ""}>

      {/* scrubber */}
      <div className="scrubber" id="scrubber" style={{ width: scrubberWidth }}></div>

      {/* NAV */}
      <header className={`nav ${isNavStuck ? 'is-stuck' : ''} ${isNavOpen ? 'is-open' : ''}`} id="nav">
        <div className="nav__pill">
          <a href="#top" className="brand" aria-label="CAAS — home">
            <img src="/images/nav_logo.png" className="brand__logo" alt="" width="776" height="236" />
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#find" onClick={() => setIsNavOpen(false)}>Find a Cameraman</a>
            <a href="#shoot" onClick={() => setIsNavOpen(false)}>Services</a>
            <a href="#how" onClick={() => setIsNavOpen(false)}>How It Works</a>
            <a href="#portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</a>
            <a href="#blog" onClick={() => setIsNavOpen(false)}>Blog</a>
            <a href="#login" className="mobile-only" onClick={() => setIsNavOpen(false)}>Log in</a>
            <a href="#join" className="btn nav__cta mobile-only" onClick={() => setIsNavOpen(false)}>Join as Cameraman</a>
          </nav>
          <div className="nav__right">
            <a href="#login" className="nav__login">Log in</a>
            <a href="#join" className="btn nav__cta">Join as Cameraman</a>
          </div>
          <button 
            className="nav__burger" 
            id="burger" 
            aria-label="Menu" 
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <video src="/Video/Hero_video.mp4" autoPlay loop muted playsInline className="hero__bg desktop-video"></video>
          <video src="/Video/Hero_mobile.mp4" autoPlay loop muted playsInline className="hero__bg mobile-video"></video>
          
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="eyebrow">— GET THE MOMENT</span>
              <h1 className="hero__title">
                <span className="line"><span>Find the right</span></span><br/>
                <span className="line"><span>person to <span className="u-blue">capture</span></span></span><br/>
                <span className="line"><span>your moment.</span></span>
              </h1>
              <p className="hero__sub">Discover talented photographers and videographers for weddings, parties, corporate events, celebrations, concerts and more.</p>
              <div className="hero__cta">
                <a href="#find" className="btn btn--blue btn--lg">Find a Cameraman &rarr;</a>
                <a href="#join" className="btn btn--ghost btn--lg">Join as Cameraman</a>
              </div>
            </div>
            
            <div className="hero__bottom-row">
              <div className="hero__features">
                <div className="feature">
                  <span className="feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </span>
                  <div><b>Verified Professionals</b><p>Trusted by thousands</p></div>
                </div>
                <div className="feature">
                  <span className="feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </span>
                  <div><b>Easy Booking</b><p>Quick & hassle-free</p></div>
                </div>
                <div className="feature">
                  <span className="feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                  <div><b>Secure & Reliable</b><p>Quality you can trust</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>Social Media</span><span>Product &amp; Retail</span><span>Real Estate</span><span>Events</span><span>Corporate</span><span>Hospitality</span><span>Brand Films</span><span>Influencer</span>
            <span>Social Media</span><span>Product &amp; Retail</span><span>Real Estate</span><span>Events</span><span>Corporate</span><span>Hospitality</span><span>Brand Films</span><span>Influencer</span>
          </div>
        </div>

        {/* STATEMENT */}
        <section className="section statement wrap">
          <h2 className="reveal">Not Just <span className="u-strike">Camera</span>,<br/>a <span className="u-gold u-italic">Cameraman&nbsp;…</span></h2>
          <div className="lead-card reveal d1">
            <b>CAAS (Cameraman as a Service)</b> connects businesses, creators, influencers and brands with professional cameramen on demand. From social media content, influencer and personal-brand shoots to product, business, real-estate and event coverage — you book the right cameraman for exactly what you need. Starting at <span className="price-chip">₹3,500 for a 3-hour shoot</span>, with flexible additional hours and production requirements based on the project.
          </div>
        </section>

        {/* SHOOT */}
        <section className="section section--tight wrap" id="shoot">
          <div className="head head--center">
            <span className="eyebrow eyebrow--center">Usually where we shoot</span>
            <h2 className="h-section reveal">Usually Where We <span className="u-gold">Shoot</span></h2>
            <p className="lead-txt reveal d1">Our crew is ready to deploy across a range of real-world scenarios and environments — no brief too big or too small.</p>
          </div>
          <div className="shoot__grid">
            <article className="shoot-card reveal d1"><img className="shot" src="/images/storyteller.jpg" alt="Cameraman filming social-media content in a studio"/>
              <div className="shoot-card__caption"><b>Social Media Content</b><span>f/2.0 · 35mm</span></div></article>
            <article className="shoot-card reveal d2"><img className="shot" src="/images/blog_wedding.jpg" alt="Crew covering an outdoor event"/>
              <div className="shoot-card__caption"><b>Events &amp; Exhibitions</b><span>f/2.8 · 24mm</span></div></article>
            <article className="shoot-card reveal d3"><img className="shot" src="/images/blog_corporate.jpg" alt="Corporate team on a real-estate shoot"/>
              <div className="shoot-card__caption"><b>Real Estate &amp; Infra</b><span>f/4.0 · 16mm</span></div></article>
          </div>
        </section>

        <section className="section section--tight wrap">
          <div className="crew__top">
            <div className="reveal-left">
              <p className="note">We are nothing without them. They're the reason clients return, deadlines are met, and every story is captured with excellence.
                <span className="who">— The CAAS promise</span></p>
            </div>
            <div className="crew__cta reveal-right d1">
              <span className="eyebrow">The professionals</span>
              <h2 className="h-section">Meet the Sar<span className="u-gold">CAAS</span>tic Crew</h2>
              <a href="#stories" className="btn btn--coral btn--lg">They're waiting to capture
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              <p className="crew__note">Vetted specialists. No hobbyists. No weddings. Just high-end production units.</p>
            </div>
          </div>
          <div className="crew__band reveal">
            <img className="shot" src="/images/sarcastic_crew_2.png" alt="The SarCAASstic crew on location"/>
          </div>
        </section>

        {/* BOTTLENECK (dark) */}
        <section className="section dark bottleneck">
          <img className="bottleneck__bg" src="/images/blog_lighting.jpg" alt="" aria-hidden="true"/>
          <div className="wrap bottleneck__grid">
            <div className="reveal">
              <span className="eyebrow">Content OS</span>
              <h2 className="h-section">Why Content Creation <span className="u-coral">Shouldn't</span> Be a Bottleneck.</h2>
              <p className="lead-txt bottleneck__body">We've spent 12,000+ hours on set so you don't have to. CAAS is the engineering answer to production logistics — one system, any shoot, on demand.</p>
              <div className="bottleneck__trust">
                <div className="avatars"><span>AR</span><span>PK</span><span>MS</span><span>+</span></div>
                <small>Trusted by our full-time crew</small>
              </div>
            </div>
            <div className="chat">
              <div className="msg msg--q reveal"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.6"/></svg>Pricing pain</div><p>"Freelancers take weeks to quote — and even longer to deliver."</p></div>
              <div className="msg msg--a reveal d1"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>CAAS</div><p>Book instantly at a fixed rate. Get your footage the same day.</p></div>
              <div className="msg msg--q reveal d2"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.6"/></svg>The challenge</div><p>"Every videographer pushes the cost up 40% past our budget."</p></div>
              <div className="msg msg--a reveal d3"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>CAAS</div><p>One transparent price. Every add-on included — zero surprises.</p></div>
              <div className="msg msg--q reveal d4"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.6"/></svg>Pricing pain</div><p>"Quality is inconsistent, and there's always a brand risk."</p></div>
              <div className="msg msg--a reveal d5"><div className="msg__tag"><svg className="ic" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>CAAS</div><p>Standardised, vetted crews. Consistent output on every single shoot.</p></div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="section wrap">
          <div className="booking__grid">
            <div className="reveal">
              <span className="eyebrow">No one's here to waste time &amp; money</span>
              <h2 className="h-section">Book Smart</h2>
              <p className="lead-txt">Manage your whole production calendar in one place. Certain days unlock faster turnarounds and premium kit availability.</p>
            </div>
            <div className="calendar reveal d1">
              <div className="calendar__days" role="tablist" aria-label="Availability by day">
                {['mon', 'tue', 'wed', 'thu', 'fri'].map(day => (
                  <button 
                    key={day}
                    className={`calendar__day ${activeDay === day ? 'is-active is-prime' : ''}`} 
                    role="tab" 
                    aria-selected={activeDay === day}
                    onClick={() => handleDayClick(day)}
                  >
                    {day.toUpperCase()} <span className="tick"></span>
                  </button>
                ))}
              </div>
              <div className="calendar__panel">
                <h4><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-3.8L6 21l1.5-7L2 9.5 9 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>Prime Availability</h4>
                <p id="dayMsg">{dayMessages[activeDay]}</p>
                <div className="calendar__meta">
                  <span>CREW <b>Ready</b></span><span>KIT <b>RED / Sony</b></span><span>TURNAROUND <b>24h</b></span>
                </div>
                <a href="#pricing" className="btn btn--coral">Check if slots are available
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* STORIES (dark) */}
        <section className="section dark" id="stories">
          <div className="wrap">
            <div className="head head--center">
              <span className="eyebrow eyebrow--center">The chronicle</span>
              <h2 className="h-section reveal">Real Life <span className="u-gold">Stories</span> on Set</h2>
              <p className="lead-txt reveal d1">Ones who pay off well to our efforts. Our biggest strength was never the cameras — it's the people behind them.</p>
            </div>
            <div className="stories__grid">
              <article className="story reveal-deal">
                <div className="story__body"><div className="story__label"><b>Priya · Brand Lead</b><span>ON SET / 01</span></div>
                  <p>"The CAAS crew turned up fully organised — I didn't have to babysit a thing. One shift, full setup, cleanup and capture, handled."</p></div>
                <div className="story__pic"><img className="shot" src="/images/storyteller.jpg" alt="Priya's brand shoot on set"/></div>
              </article>
              <article className="story reveal-deal d1">
                <div className="story__body"><div className="story__label"><b>Arjun · NGO Launch</b><span>ON SET / 02</span></div>
                  <p>"The rig they brought for our launch was insane — RED Komodo, the works. The final cut looks like it belongs on Netflix."</p></div>
                <div className="story__pic"><img className="shot" src="/images/blog_lighting.jpg" alt="Cinematic lighting on the NGO launch shoot"/></div>
              </article>
              <article className="story reveal-deal d2">
                <div className="story__body"><div className="story__label"><b>Meera · Real Estate</b><span>ON SET / 03</span></div>
                  <p>"I used to underestimate turnaround. Booked at noon, had the high-res edit the same evening. The result? Priceless."</p></div>
                <div className="story__pic"><img className="shot" src="/images/blog_wedding.jpg" alt="Real-estate property capture"/></div>
              </article>
            </div>
          </div>
        </section>

        {/* FUN FACT */}
        <div className="funfact wrap">
          <div className="funfact__inner reveal">
            <div className="funfact__tag">FUN FACT</div>
            <h3>You don't need to know what kind of shoot you need.</h3>
            <strong>THAT'S OUR JOB.</strong>
          </div>
        </div>

        {/* INDUSTRIES */}
        <section className="section wrap" id="industries">
          <div className="head">
            <span className="eyebrow">Industries</span>
            <h2 className="h-section reveal">Industries We Serve</h2>
            <p className="lead-txt reveal d1">Deep expertise, translated into the unique visual language of your business.</p>
          </div>
          <div className="ind">
            <article className="ind-row">
              <div className="ind-row__txt">
                <span className="ind-row__num reveal-text-down">01 — Creators</span>
                <h3 className="reveal-text-up d1">Brands, Creators &amp; Social Media</h3>
                <p className="reveal-text-up d2">Built for businesses and individuals who create content consistently and need a crew that keeps up.</p>
              </div>
              <div className="ind-row__pic reveal-shutter"><img className="shot" src="/images/storyteller.jpg" alt="Creator filming branded content"/></div>
            </article>
            <article className="ind-row">
              <div className="ind-row__txt">
                <span className="ind-row__num reveal-text-down">02 — Commerce</span>
                <h3 className="reveal-text-up d1">Products, Retail &amp; Hospitality</h3>
                <p className="reveal-text-up d2">Everything a customer should feel about you before they ever visit or buy.</p>
              </div>
              <div className="ind-row__pic reveal-shutter"><img className="shot" src="/images/professional_lens.jpg" alt="Close-up product photography with a cinema lens"/></div>
            </article>
            <article className="ind-row">
              <div className="ind-row__txt">
                <span className="ind-row__num reveal-text-down">03 — Enterprise</span>
                <h3 className="reveal-text-up d1">Corporate, Manufacturing &amp; Industrial</h3>
                <p className="reveal-text-up d2">Professional storytelling for businesses that build, manufacture and operate at scale.</p>
              </div>
              <div className="ind-row__pic reveal-shutter"><img className="shot" src="/images/blog_corporate.jpg" alt="Corporate team being filmed at the office"/></div>
            </article>
            <article className="ind-row">
              <div className="ind-row__txt">
                <span className="ind-row__num reveal-text-down">04 — Spaces</span>
                <h3 className="reveal-text-up d1">Properties, Spaces &amp; Experiences</h3>
                <p className="reveal-text-up d2">Made for businesses where the space itself is the product worth showing off.</p>
              </div>
              <div className="ind-row__pic reveal-shutter"><img className="shot" src="/images/blog_wedding.jpg" alt="Wide capture of an event space"/></div>
            </article>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="section section--tight wrap" id="portfolio">
          <div className="head">
            <span className="eyebrow">Fresh from the field</span>
            <h2 className="h-section reveal">Our Latest Appearance, <span className="u-gold">Fresh From the Field</span></h2>
            <p className="lead-txt reveal d1">A living feed of our most recent work — straight off the memory card.</p>
          </div>
          <div className="portfolio__grid">
            <figure className="pf reveal"><img className="shot" src="/images/professional_lens.jpg" alt="Cinema prime lens detail"/><figcaption className="pf__cap">STILL 01 · f/2.8</figcaption></figure>
            <figure className="pf reveal d1"><img className="shot" src="/images/blog_lighting.jpg" alt="Golden-hour silhouette shoot"/><figcaption className="pf__cap">STILL 02 · f/1.8</figcaption></figure>
            <figure className="pf reveal d2"><img className="shot" src="/images/storyteller.jpg" alt="Studio storyteller in frame"/><figcaption className="pf__cap">STILL 03 · f/4.0</figcaption></figure>
            <figure className="pf reveal d3"><img className="shot" src="/images/blog_wedding.jpg" alt="Outdoor event coverage"/><figcaption className="pf__cap">STILL 04 · f/2.0</figcaption></figure>
            <figure className="pf reveal"><img className="shot" src="/images/blog_corporate.jpg" alt="Corporate team on set"/><figcaption className="pf__cap">STILL 05 · f/2.8</figcaption></figure>
            <figure className="pf reveal d1"><img className="shot" src="/images/hero_poster.jpg" alt="Frame from a recent brand film"/><figcaption className="pf__cap">STILL 06 · f/5.6</figcaption></figure>
            <div className="portfolio__more reveal d2">
              <h3>Wanna See More ???</h3>
              <a href="#" className="btn btn--coral btn--lg">Check Out Our Portfolio
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>
        </section>

        {/* GEAR (dark) */}
        <section className="section dark gear-section">
          <img className="gear__bg" src="/images/professional_lens.jpg" alt="" aria-hidden="true"/>
          <div className="wrap gear__grid">
            <div className="gear__txt">
              <span className="eyebrow">The equipment</span>
              <h2 className="h-section reveal-scan">What Our<br/>Team Carries.</h2>
              <p className="lead-txt reveal-scan d1">Precision tools for precision results. We never compromise on gear, glass or stabilisation — every unit ships with our advanced cinema-grade kit.</p>
              
              <ul className="gear__list">
                <li className="reveal-scan d2"><span className="n">01</span><span><b>Cinema-grade 4K/6K Cameras</b><span>RED, Sony &amp; Canon bodies</span></span></li>
                <li className="reveal-scan d3"><span className="n">02</span><span><b>Prime &amp; Zoom Lenses</b><span>35mm · 50mm · 85mm &amp; beyond</span></span></li>
                <li className="reveal-scan d4"><span className="n">03</span><span><b>Motion &amp; Anti-shake Systems</b><span>Pro gimbals &amp; stabilisers</span></span></li>
                <li className="reveal-scan d5"><span className="n">04</span><span><b>Lightweight RGB Lighting</b><span>Full studio rigs, on location</span></span></li>
                <li className="reveal-scan d6"><span className="n">05</span><span><b>Broadcast Audio &amp; Recording</b><span>Clean sound, every take</span></span></li>
              </ul>
              
              <div className="reveal-scan">
                <a href="#booking" className="btn btn--gold">&amp; expertise to deliver the best
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </div>
            <div className="gear__pic reveal-lens">
              <div className="gear__circle">
                <img className="shot" src="/images/gear_2.png" alt="Cinema-grade gear layout"/>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section wrap" id="pricing">
          <div className="pricing__card reveal">
            <span className="pricing__badge">The package</span>
            <div>
              <div className="pricing__price">₹3500</div>
              <div className="pricing__rate">Base rate · 3-hour session</div>
              <p className="pricing__quote">"Whether it's a one-off drop or a monthly retainer — one crew, one price, zero drama."</p>
            </div>
            <div>
              <ul className="pricing__list">
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional cameraman &amp; crew</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>3-hour production shoot</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Cinema-grade kit &amp; lighting</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Raw + edited deliverables</li>
                <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Fully vetted &amp; insured</li>
              </ul>
              <div className="pricing__cta-row">
                <a href="#" className="btn btn--coral btn--lg">Yes, that's what I'm looking for
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* MONTHLY */}
        <section className="section section--tight monthly wrap">
          <div className="monthly__card reveal">
            <div className="monthly__ey">Need shoots every month?</div>
            <h3>We've already planned for this.</h3>
            <p>Whether you're managing 3 brands or 30, our monthly production plans make sure you always have a professional crew ready — exactly when your content calendar demands it.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section final wrap">
          <h2 className="reveal">Ready to Capture<br/><span className="u-gold u-italic">Precision?</span></h2>
          <p className="reveal d1">Join 500+ brands using CAAS to produce high-end content at scale. No arguments, no complicated quotes — just results.</p>
          <div className="final__row reveal d2">
            <a href="#pricing" className="btn btn--dark btn--lg">Get Started</a>
            <a href="#pricing" className="btn btn--ghost btn--lg">View Pricing</a>
          </div>
          <p className="final__small reveal d3">Available across 12 cities · Book in under 60 seconds</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <a href="#top" className="brand" aria-label="CAAS home">
              <img src="/images/logo_ondark.png" alt="CAAS logo" className="footer__logo"/>
            </a>
            <nav className="footer__links" aria-label="Footer">
              <a href="#top">About Us</a><a href="#shoot">Services</a><a href="#portfolio">Portfolio</a>
              <a href="#pricing">Pricing</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Contact</a>
            </nav>
            <div className="footer__social">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.1-5.4L6.6 21H3.5l7-8L2.9 3h6l3.7 4.9zm-1 16h1.6L8.1 4.6H6.4z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9v10H3V9zm-1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM9 9h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.5V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/></svg></a>
            </div>
          </div>
        </div>
        <div className="wordmark">
          <b>CAAS</b>
          <small>Cameraman as a Service</small>
        </div>
        <div className="wrap">
          <div className="footer__copy">
            <span>© 2026 CAAS — Cameraman as a Service. All rights reserved.</span>
            <span>Made with 🔥 by <a href="https://labs.theangaarbatch.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#fff' }}>The Angaar Labs</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
