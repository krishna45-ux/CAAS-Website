import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'how-to-prep-for-corporate-shoot',
      title: 'How to Prepare Your Team for a Corporate Brand Shoot',
      excerpt: 'Getting your executives and employees comfortable on camera is half the battle. Here are 5 ways to prepare your team.',
      date: 'Aug 14, 2026',
      category: 'Tips',
      img: '/images/blog_corporate.jpg'
    },
    {
      slug: 'best-cinema-cameras-2026',
      title: 'The Best Cinema Cameras for Independent Creators in 2026',
      excerpt: 'From RED Komodo to Sony FX6, we break down the most versatile A-cams our crews are using on set this year.',
      date: 'Aug 02, 2026',
      category: 'Gear',
      img: '/images/professional_lens.jpg'
    },
    {
      slug: 'lighting-for-real-estate',
      title: 'Mastering Natural Light for High-End Real Estate',
      excerpt: 'Why shooting at the right time of day matters more than having the biggest lighting rig for property videos.',
      date: 'Jul 28, 2026',
      category: 'Behind the Scenes',
      img: '/images/blog_lighting.jpg'
    },
    {
      slug: 'why-hire-professional-cameraman',
      title: 'Why You Should Stop Relying on iPhone Footage for Your Brand',
      excerpt: 'Smartphones are great, but there is a distinct line between consumer content and professional brand perception. Heres why.',
      date: 'Jul 15, 2026',
      category: 'Industry',
      img: '/images/storyteller.jpg'
    },
    {
      slug: 'event-coverage-checklist',
      title: 'The Ultimate Event Videography Checklist',
      excerpt: 'Don\'t miss a single crucial moment. This is the exact shot list our crews use when covering large-scale exhibitions.',
      date: 'Jul 04, 2026',
      category: 'Tips',
      img: '/images/blog_wedding.jpg'
    },
    {
      slug: 'future-of-cameraman-as-a-service',
      title: 'The Future of On-Demand Content Production',
      excerpt: 'How CAAS is changing the way brands think about their monthly content pipelines and production budgets.',
      date: 'Jun 22, 2026',
      category: 'Industry',
      img: '/images/hero_poster.jpg'
    }
  ];

  return (
    <main id="top" className="page-main">
      {/* PAGE HERO */}
      <section className="page-hero dark">
        <div className="wrap page-hero__inner">
          <span className="eyebrow">— THE CAAS BLOG</span>
          <h1 className="hero__title">
            <span className="line"><span>Insights from</span></span><br/>
            <span className="line"><span>behind the <span className="u-gold">lens</span>.</span></span>
          </h1>
          <p className="hero__sub">Tips, gear reviews, and industry insights from our network of professional cinematographers.</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="page-section wrap">
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article key={post.slug} className={`blog-card reveal d${i % 4}`}>
              <Link href={`/blog/${post.slug}`} className="blog-card__pic">
                <img src={post.img} alt={post.title} />
                <span className="blog-card__cat">{post.category}</span>
              </Link>
              <div className="blog-card__body">
                <span className="blog-card__date">{post.date}</span>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="blog-card__read">Read Article &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
