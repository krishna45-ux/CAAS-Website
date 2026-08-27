import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Normally you would fetch the post data based on params.slug
  // For now, using placeholder data
  const postTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main id="top" className="page-main">
      {/* ARTICLE HERO */}
      <section className="article-hero dark">
        <div className="wrap">
          <div className="article-hero__meta">
            <span className="tag">Industry</span>
            <span className="date">Aug 14, 2026</span>
          </div>
          <h1 className="article-hero__title">{postTitle || 'How to Prepare Your Team for a Corporate Brand Shoot'}</h1>
          
          <div className="article-hero__author">
            <div className="avatar">AK</div>
            <div>
              <b>Amit K.</b>
              <span>Head of Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE FEATURED IMAGE */}
      <div className="wrap">
        <div className="article-featured-img">
          <img src="/images/blog_thumb_1.jpg" alt="Featured image" />
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="article-content wrap">
        <div className="article-body">
          <p className="lead">Getting your executives and employees comfortable on camera is half the battle. When you book a high-end corporate shoot, the crew and the gear will be flawless, but the subjects need to be ready too.</p>
          
          <h2>1. Share the Brief Early</h2>
          <p>Don't surprise your team. Let them know what the shoot is for, where it will be used, and what they need to wear. Confidence starts with clarity. When subjects understand the "why" behind the video, they are much more likely to participate enthusiastically.</p>
          
          <p>If you're conducting interviews, share a rough outline of the questions a few days in advance. Don't script the answers—you want authenticity—but give them time to organize their thoughts.</p>

          <blockquote>
            "The camera amplifies everything. If someone is nervous or unprepared, it shows up in the final edit. Preparation is the best lighting."
          </blockquote>

          <h2>2. Coordinate Wardrobe</h2>
          <p>Wardrobe makes a huge difference in the final color grade. Advise your team to avoid tight patterns (like houndstooth or thin stripes) as they can cause moiré patterns on camera. Solid colors work best. Neutral tones with a pop of brand color are usually the safest and most professional choice.</p>

          <h2>3. Trust the Cameraman</h2>
          <p>When the CAAS crew arrives, they are the experts in the room for lighting and composition. Let them guide the subjects on where to stand and how to pose. A professional cameraman knows how to make people look their best, so encourage your team to take direction.</p>
          
          <br/><br/>
          <hr/>
          <div className="article-share">
            <b>Share this article:</b>
            <div className="social-links">
              <a href="#">X (Twitter)</a>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="page-section dark wrap">
        <h3 className="h-section">Read More</h3>
        <div className="blog-grid" style={{ marginTop: '20px' }}>
          
          <article className="blog-card reveal">
            <Link href={`/blog/best-cinema-cameras-2026`} className="blog-card__pic">
              <img src="/images/blog_thumb_2.jpg" alt="Post" />
              <span className="blog-card__cat">Gear</span>
            </Link>
            <div className="blog-card__body">
              <span className="blog-card__date">Aug 02, 2026</span>
              <h4><Link href={`/blog/best-cinema-cameras-2026`}>The Best Cinema Cameras for 2026</Link></h4>
              <Link href={`/blog/best-cinema-cameras-2026`} className="blog-card__read">Read Article &rarr;</Link>
            </div>
          </article>

          <article className="blog-card reveal d1">
            <Link href={`/blog/lighting-for-real-estate`} className="blog-card__pic">
              <img src="/images/blog_thumb_3.jpg" alt="Post" />
              <span className="blog-card__cat">Tips</span>
            </Link>
            <div className="blog-card__body">
              <span className="blog-card__date">Jul 28, 2026</span>
              <h4><Link href={`/blog/lighting-for-real-estate`}>Mastering Light for Real Estate</Link></h4>
              <Link href={`/blog/lighting-for-real-estate`} className="blog-card__read">Read Article &rarr;</Link>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
