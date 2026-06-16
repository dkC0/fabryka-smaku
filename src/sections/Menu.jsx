import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { MENU } from '../lib/data';
import './Menu.css';

const TAG_LABELS = {
  bestseller: 'Bestseller',
  new: 'Nowość',
  vegetarian: 'Weget.',
  tuesday: 'Wtorek',
};

function MenuRow({ item }) {
  return (
    <div className="menu-row">
      <div className="menu-row__left">
        <span className="menu-row__name">
          {item.name}
          {item.tags?.filter(t => t !== 'popular').map(t => (
            <span key={t} className={`menu-row__tag menu-row__tag--${t}`}>
              {TAG_LABELS[t]}
            </span>
          ))}
        </span>
        {item.description && (
          <span className="menu-row__desc">{item.description}</span>
        )}
      </div>
      <span className="menu-row__dots" aria-hidden="true" />
      <span className="menu-row__price" aria-label={`${item.priceFrom ? 'od ' : ''}${item.price} złotych`}>
        {item.priceFrom && <span className="menu-row__from">od </span>}
        {item.price} <span className="menu-row__currency">zł</span>
      </span>
    </div>
  );
}

function MenuCategory({ cat }) {
  return (
    <div className="menu-cat" id={`cat-${cat.id}`}>
      <div className="menu-cat__head">
        <span className="menu-cat__num" aria-hidden="true">{cat.chapter}</span>
        <div className="menu-cat__meta">
          <h3 className="menu-cat__title">{cat.title}</h3>
          {cat.subtitle && <p className="menu-cat__sub">{cat.subtitle}</p>}
        </div>
      </div>
      <div
        className={`menu-cat__items${cat.items.length <= 3 ? ' menu-cat__items--short' : ''}`}
        role="list"
        aria-label={cat.title}
      >
        {cat.items.map(item => (
          <div key={item.name} role="listitem">
            <MenuRow item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const sectionRef = useReveal();
  const [activeId, setActiveId] = useState(MENU[0].id);
  const navRef = useRef(null);
  const hasMounted = useRef(false);

  // Highlight active category on scroll
  useEffect(() => {
    const observers = [];
    MENU.forEach(cat => {
      const el = document.getElementById(`cat-${cat.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(cat.id); },
        { rootMargin: '-25% 0px -65% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Keep active tab visible in sticky nav — skip on first render
  useEffect(() => {
    if (!hasMounted.current) { hasMounted.current = true; return; }
    const nav = navRef.current;
    if (!nav) return;
    const btn = nav.querySelector('.menu-nav__btn--active');
    btn?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [activeId]);

  const scrollToCategory = (id) => {
    const el = document.getElementById(`cat-${id}`);
    if (!el) return;
    const fixedNav = document.querySelector('.nav');
    const stickyNav = navRef.current;
    const offset = (fixedNav?.offsetHeight ?? 68) + (stickyNav?.offsetHeight ?? 48) + 16;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  return (
    <section id="menu" className="menu section section--dark" ref={sectionRef} aria-label="Nasze menu">
      {/* Header */}
      <div className="container">
        <div className="menu__header reveal stagger-1">
          <div className="menu__header-left">
            <span className="eyebrow">Menu</span>
            <h2 className="menu__heading">Co dziś gotujemy</h2>
          </div>
          <p className="menu__header-note">
            Świeże produkty, tradycyjne smaki, nowoczesne podejście.
            <br /><br />
            <span className="menu__allergen-note">Alergeny podane przy daniach. Zapytaj nas o szczegóły.</span>
          </p>
        </div>
      </div>

      {/* Full-bleed food image */}
      <div className="menu__hero-img reveal stagger-2" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=85&auto=format&fit=crop"
          alt="Burger w bułce na zakwasie — Fabryka Smaku"
          className="menu__hero-img-el"
          loading="lazy"
        />
        <div className="menu__hero-img-overlay" />
      </div>

      {/* Sticky category nav */}
      <nav className="menu-nav" ref={navRef} aria-label="Kategorie menu">
        <div className="container">
          <div className="menu-nav__list" role="list">
            {MENU.map(cat => (
              <button
                key={cat.id}
                className={`menu-nav__btn${activeId === cat.id ? ' menu-nav__btn--active' : ''}`}
                onClick={() => scrollToCategory(cat.id)}
                aria-current={activeId === cat.id ? 'true' : undefined}
              >
                <span className="menu-nav__num" aria-hidden="true">{cat.chapter}</span>
                <span className="menu-nav__label">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu document */}
      <div className="container">
        <div className="menu__doc reveal stagger-3">
          {MENU.map(cat => (
            <MenuCategory key={cat.id} cat={cat} />
          ))}
        </div>

        <div className="menu__loyalty reveal stagger-4">
          <span className="menu__loyalty-icon" aria-hidden="true">★</span>
          <p>Program lojalnościowy: <strong>20% rabatu na następne zamówienie</strong> po 5 zakupach.</p>
        </div>
      </div>
    </section>
  );
}
