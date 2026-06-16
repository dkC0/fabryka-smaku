import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Craft.css';

// This section uses GSAP for a pinned scroll reveal on desktop
// On mobile: purpose-built static layout (not a degraded desktop)

const PILLARS = [
  {
    number: '01',
    title: 'Lokalne produkty',
    body: 'Współpracujemy z lokalnymi dostawcami z Mazowsza. Mięso, warzywa, nabiał — wiemy, skąd pochodzi każdy składnik na talerzu.',
    img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80&auto=format&fit=crop',
    imgAlt: 'Świeże warzywa od lokalnego dostawcy',
  },
  {
    number: '02',
    title: 'Kuchnia bez kompromisów',
    body: 'Żadnych półproduktów, żadnych skrótów. Bułki na zakwasie od rzemieślniczego piekarza. Mięso marynowane przez dobę. Sosy robione od podstaw.',
    img: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80&auto=format&fit=crop',
    imgAlt: 'Przygotowywanie potrawy w kuchni restauracji',
  },
  {
    number: '03',
    title: 'Ciepłe jak z domu',
    body: 'Niezależnie od tego, czy jadasz u nas, czy zamawiasz dostawę — każdy talerz wychodzi z kuchni tak, jakbyś był gościem w naszym domu.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
    imgAlt: 'Danie podane przy stole restauracji',
  },
];

export default function Craft() {
  const gsapRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    // GSAP ScrollTrigger — desktop only
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) return;

    let ctx;
    let gsap, ScrollTrigger;

    const load = async () => {
      try {
        const gsapModule = await import('gsap');
        const stModule = await import('gsap/ScrollTrigger');
        gsap = gsapModule.gsap || gsapModule.default;
        ScrollTrigger = stModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const items = gsapRef.current?.querySelectorAll('.craft__pillar');
          if (!items?.length) return;

          items.forEach((item, i) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 48, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 82%',
                  toggleActions: 'play none none none',
                },
                delay: i * 0.12,
              }
            );
          });
        }, gsapRef);
      } catch (e) {
        // GSAP failed to load — CSS reveal handles it
        console.warn('GSAP not loaded, falling back to CSS reveals');
      }
    };

    load();
    return () => ctx?.revert();
  }, []);

  return (
    <section className="craft section section--dark" aria-label="Nasze podejście do kuchni">
      {/* Header */}
      <div className="container" ref={revealRef}>
        <div className="craft__header">
          <span className="eyebrow reveal stagger-1">Nasze podejście</span>
          <div className="copper-rule reveal stagger-2" />
          <h2 className="craft__heading reveal stagger-2">
            Fabryka, która<br />
            <em>gotuje z duszą</em>
          </h2>
          <p className="craft__sub reveal stagger-3">
            Nazwa "Fabryka Smaku" to nie opis procesu — to obietnica. Każdy talerz jest wytworzony z uwagą, jakiej nie znajdziesz w fast-foodzie.
          </p>
        </div>

        {/* Pillars */}
        <div className="craft__pillars" ref={gsapRef}>
          {PILLARS.map((pillar, i) => (
            <article key={pillar.number} className="craft__pillar" aria-label={pillar.title}>
              <div className="craft__pillar-img-wrap">
                <img
                  src={pillar.img}
                  alt={pillar.imgAlt}
                  className="craft__pillar-img"
                  loading="lazy"
                />
                <div className="craft__pillar-num" aria-hidden="true">{pillar.number}</div>
              </div>
              <div className="craft__pillar-body">
                <h3 className="craft__pillar-title">{pillar.title}</h3>
                <p className="craft__pillar-text">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
