import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const heading = headingRef.current;
    if (!heading) return;

    // Split heading into letter spans for stagger animation
    const words = heading.querySelectorAll('.hero__word');
    words.forEach((word, wi) => {
      const letters = word.querySelectorAll('.hero__letter');
      letters.forEach((letter, li) => {
        letter.style.transitionDelay = `${wi * 80 + li * 30}ms`;
      });
    });

    // Trigger on next frame (after loader delay handled in App.jsx)
    const raf = requestAnimationFrame(() => {
      heading.classList.add('hero__heading--visible');
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReserveClick = (e) => {
    e.preventDefault();
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero" aria-label="Fabryka Smaku — restauracja w Płocku">
      {/* Background image with overlay */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__overlay" />
        <div className="hero__vignette" />
      </div>

      {/* Grain texture */}
      <div className="hero__grain" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__body">
          {/* Eyebrow */}
          <span className="hero__eyebrow reveal stagger-1" aria-hidden="true">
            Płock · Armii Krajowej 35
          </span>

          {/* Main heading — letter-split for stagger */}
          <h1 className="hero__heading" ref={headingRef}>
            <span className="hero__word">
              {'Fabryka'.split('').map((l, i) => (
                <span key={i} className="hero__letter">{l}</span>
              ))}
            </span>
            <span className="hero__word hero__word--accent">
              {'Smaku'.split('').map((l, i) => (
                <span key={i} className="hero__letter">{l}</span>
              ))}
            </span>
          </h1>

          {/* Tagline */}
          <p className="hero__tagline reveal stagger-3">
            Gdzie domowa kuchnia staje się sztuką
          </p>

          {/* CTAs */}
          <div className="hero__ctas reveal stagger-4">
            <a href="#menu" className="btn btn--copper" onClick={handleMenuClick}>
              Odkryj menu
            </a>
            <a href="#kontakt" className="btn btn--outline" onClick={handleReserveClick}>
              Zadzwoń do nas
            </a>
          </div>

          {/* Values strip */}
          <div className="hero__values reveal stagger-5">
            {['Świeżość', 'Jakość', 'Tradycja'].map((v, i) => (
              <span key={v} className="hero__value">
                {i > 0 && <span className="hero__value-sep" aria-hidden="true">·</span>}
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent — secondary read moment */}
      <div className="hero__bottom" aria-hidden="true">
        <span className="hero__hours">Pon.–Ndz. · 12:00 – 18:00</span>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
