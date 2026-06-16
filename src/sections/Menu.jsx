import { useState, useRef, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { MENU } from '../lib/data';
import './Menu.css';

const TAGS = {
  bestseller: { label: 'Bestseller', color: 'copper' },
  new: { label: 'Nowość', color: 'green' },
  popular: { label: 'Popularne', color: 'muted' },
  vegetarian: { label: 'Wegetariańskie', color: 'green' },
  tuesday: { label: 'Wtorek', color: 'muted' },
};

function MenuItem({ item, index }) {
  return (
    <article
      className={`menu-item reveal stagger-${Math.min(index + 1, 6)}`}
      aria-label={item.name}
    >
      <div className="menu-item__inner">
        <div className="menu-item__header">
          <h4 className="menu-item__name">{item.name}</h4>
          <span className="menu-item__price" aria-label={`Cena: ${item.priceFrom ? 'od ' : ''}${item.price} złotych`}>
            {item.priceFrom && <span className="menu-item__from">od </span>}
            {item.price} <span className="menu-item__currency">zł</span>
          </span>
        </div>
        {item.description && (
          <p className="menu-item__desc">{item.description}</p>
        )}
        {item.tags?.length > 0 && (
          <div className="menu-item__tags" role="list" aria-label="Oznaczenia">
            {item.tags.map(t => (
              <span
                key={t}
                className={`menu-item__tag menu-item__tag--${TAGS[t]?.color || 'muted'}`}
                role="listitem"
              >
                {TAGS[t]?.label || t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU[4].id); // dania-glowne by default
  const sectionRef = useReveal();
  const categoryRef = useRef(null);

  // Sticky category nav scroll handling
  useEffect(() => {
    const nav = categoryRef.current;
    if (!nav) return;
    // Ensure active tab is visible
    const activeBtn = nav.querySelector('.menu-cat__btn--active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  }, [activeCategory]);

  const activeMenu = MENU.find(c => c.id === activeCategory) || MENU[0];

  return (
    <section id="menu" className="menu section section--dark" ref={sectionRef} aria-label="Nasze menu">
      <div className="container">
        {/* Header */}
        <div className="menu__header">
          <span className="eyebrow reveal stagger-1">Menu</span>
          <div className="copper-rule reveal stagger-2" />
          <h2 className="menu__heading reveal stagger-2">
            Co dziś gotujemy
          </h2>
          <p className="menu__sub reveal stagger-3">
            Świeże produkty, tradycyjne smaki, nowoczesne podejście.
          </p>
        </div>

        {/* Category navigation */}
        <nav
          className="menu-cat"
          ref={categoryRef}
          aria-label="Kategorie menu"
          role="tablist"
        >
          {MENU.map(cat => (
            <button
              key={cat.id}
              className={`menu-cat__btn${activeCategory === cat.id ? ' menu-cat__btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`menu-panel-${cat.id}`}
              id={`menu-tab-${cat.id}`}
            >
              <span className="menu-cat__num">{cat.chapter}</span>
              <span className="menu-cat__title">{cat.title}</span>
            </button>
          ))}
        </nav>

        {/* Active category panel */}
        <div
          className="menu__panel"
          id={`menu-panel-${activeMenu.id}`}
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeMenu.id}`}
          key={activeMenu.id}
        >
          {/* Panel heading */}
          <div className="menu__panel-header">
            <span className="menu__panel-chapter" aria-hidden="true">{activeMenu.chapter}</span>
            <div>
              <h3 className="menu__panel-title">{activeMenu.title}</h3>
              {activeMenu.subtitle && (
                <p className="menu__panel-sub">{activeMenu.subtitle}</p>
              )}
            </div>
          </div>

          {/* Items grid */}
          <div className="menu__items" role="list">
            {activeMenu.items.map((item, i) => (
              <MenuItem key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* Allergens note */}
          <p className="menu__allergens">
            Alergeny podane w nawiasach przy każdym daniu. W razie pytań — chętnie pomożemy.
          </p>
        </div>
      </div>
    </section>
  );
}
