export default function AboutPage() {
  return (
    <main id="top" className="page-main">
      {/* PAGE HERO */}
      <section className="page-hero dark">
        <img className="page-hero__bg" src="/images/hero_poster.jpg" alt="" aria-hidden="true" />
        <div className="wrap page-hero__inner">
          <span className="eyebrow">— OUR STORY</span>
          <h1 className="hero__title">
            <span className="line"><span>Built by</span></span><br/>
            <span className="line"><span><span className="u-gold">Cameramen</span>,</span></span><br/>
            <span className="line"><span>for everyone.</span></span>
          </h1>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="page-section wrap">
        <h2 className="reveal">The Mission <span className="u-strike">Statement</span></h2>
        <div className="lead-card reveal d1">
          <b>CAAS (Cameraman as a Service)</b> was born out of frustration. We saw brands struggling to find reliable shooters, and talented videographers struggling to find consistent work. We built a platform that removes the friction, standardizes the quality, and makes booking a professional crew as easy as ordering a cab.
        </div>
      </section>

      {/* STATS */}
      <section className="page-section section--tight wrap">
        <div className="stats-grid">
          <div className="stat-card reveal">
            <div className="stat-card__num">500+</div>
            <div className="stat-card__label">Shoots Completed</div>
          </div>
          <div className="stat-card reveal d1">
            <div className="stat-card__num">12</div>
            <div className="stat-card__label">Cities Covered</div>
          </div>
          <div className="stat-card reveal d2">
            <div className="stat-card__num">50+</div>
            <div className="stat-card__label">Vetted Professionals</div>
          </div>
          <div className="stat-card reveal d3">
            <div className="stat-card__num">24h</div>
            <div className="stat-card__label">Average Turnaround</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="page-section dark wrap">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center">The People</span>
          <h2 className="h-section reveal">Meet the <span className="u-gold">Founders</span></h2>
          <p className="lead-txt reveal d1">The minds behind the lens and the logistics.</p>
        </div>
        
        <div className="team-grid">
          <article className="team-card reveal d1">
            <div className="team-card__pic">
              <img src="/images/storyteller.jpg" alt="Founder 1" />
            </div>
            <div className="team-card__info">
              <h3>Amit K.</h3>
              <span>Co-Founder & Head of Production</span>
            </div>
          </article>
          <article className="team-card reveal d2">
            <div className="team-card__pic">
              <img src="/images/blog_corporate.jpg" alt="Founder 2" />
            </div>
            <div className="team-card__info">
              <h3>Rahul S.</h3>
              <span>Co-Founder & Operations</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
