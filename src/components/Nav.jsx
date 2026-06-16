import { useState, useEffect, useCallback } from 'react';
import './Nav.css';

const NAV_LINKS = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${menuOpen ? ' nav--open' : ''}`} role="navigation" aria-label="Nawigacja główna">
        <div className="nav__inner container">
          {/* Logo */}
          <a href="#hero" className="nav__logo" onClick={e => handleNavClick(e, '#hero')} aria-label="Fabryka Smaku — powrót na górę">
            <span className="nav__logo-main">Fabryka</span>
            <span className="nav__logo-accent">Smaku</span>
          </a>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav__link link-hover"
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA — always visible in nav */}
          <a
            href="tel:+48243512088"
            className="btn btn--copper nav__cta"
            aria-label="Zadzwoń do nas: 24 351 20 88"
          >
            Zamów: 24 351 20 88
          </a>

          {/* Mobile hamburger */}
          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <span className="nav__hamburger-line" />
            <span className="nav__hamburger-line" />
            <span className="nav__hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menu mobilne"
      >
        <ul className="nav__mobile-links" role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a
                href={link.href}
                className="nav__mobile-link"
                onClick={e => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+48243512088"
          className="btn btn--copper nav__mobile-cta"
          tabIndex={menuOpen ? 0 : -1}
        >
          Zamów: 24 351 20 88
        </a>
      </div>
    </>
  );
}
