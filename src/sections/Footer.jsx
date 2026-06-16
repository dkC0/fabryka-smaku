import { RESTAURANT } from '../lib/data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Copper top rule */}
      <div className="footer__top-rule" aria-hidden="true" />

      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={e => handleNavClick(e, '#hero')}>
              <span className="footer__logo-main">Fabryka</span>
              <span className="footer__logo-accent">Smaku</span>
            </a>
            <p className="footer__tagline">
              Gdzie domowa kuchnia<br />staje się sztuką.
            </p>
            <p className="footer__address">
              {RESTAURANT.address}<br />
              {RESTAURANT.postcode} {RESTAURANT.city}
            </p>
          </div>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Stopka — nawigacja">
            <span className="footer__nav-label">Nawigacja</span>
            <ul>
              {[
                { label: 'O nas', href: '#o-nas' },
                { label: 'Menu', href: '#menu' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Opinie', href: '#opinie' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="footer__nav-link link-hover" onClick={e => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <span className="footer__nav-label">Kontakt</span>
            <ul>
              <li>
                <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`} className="footer__contact-link link-hover">
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${RESTAURANT.email}`} className="footer__contact-link link-hover">
                  {RESTAURANT.email}
                </a>
              </li>
              <li>
                <a href={RESTAURANT.facebook} target="_blank" rel="noopener noreferrer" className="footer__contact-link link-hover">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="footer__hours">
            <span className="footer__nav-label">Godziny</span>
            <p className="footer__hours-val">Pon.–Ndz.</p>
            <p className="footer__hours-time">12:00 – 18:00</p>
            <a href="tel:+48243512088" className="btn btn--outline-copper footer__cta">
              Zamów teraz
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Fabryka Smaku · Płock. Wszelkie prawa zastrzeżone.
          </p>
          <p className="footer__credit">
            Strona stworzona z dbałością o każdy szczegół.
          </p>
        </div>
      </div>
    </footer>
  );
}
