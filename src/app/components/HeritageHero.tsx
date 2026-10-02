import type { ReactNode } from 'react';

type HeritageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  video?: string;
  poster?: string;
  actions?: ReactNode;
  meta?: string[];
  variant?: 'atlas' | 'archive' | 'night';
  className?: string;
};

export default function HeritageHero({
  eyebrow,
  title,
  description,
  image,
  video,
  poster,
  actions,
  meta = [],
  variant = 'atlas',
  className = '',
}: HeritageHeroProps) {
  return (
    <section className={`heritage-hero heritage-hero--${variant} ${className}`.trim()} aria-labelledby="heritage-hero-title">
      <div className="heritage-hero-media" aria-hidden="true">
        {video ? (
          <video className="heritage-hero-video" src={video} poster={poster} autoPlay muted loop playsInline preload="metadata" />
        ) : image ? (
          <img src={image} alt="" />
        ) : null}
      </div>
      <div className="heritage-hero-wash" aria-hidden="true" />
      <div className="heritage-hero-grid" aria-hidden="true" />
      <div className="heritage-hero-inner">
        <div className="heritage-hero-copy">
          <span className="heritage-hero-eyebrow">{eyebrow}</span>
          <h1 id="heritage-hero-title">{title}</h1>
          <p>{description}</p>
          {actions && <div className="heritage-hero-actions">{actions}</div>}
        </div>
        <aside className="heritage-hero-index" aria-label="Museum archive details">
          <span className="heritage-hero-index-mark">IHM</span>
          <span className="heritage-hero-index-line" />
          {meta.map((item) => <span key={item}>{item}</span>)}
        </aside>
      </div>
      <div className="heritage-hero-caption" aria-hidden="true">
        <span>INDONESIAN ARCHIPELAGO</span>
        <span>OPEN ARCHIVE / 17 ZONES</span>
      </div>
    </section>
  );
}
