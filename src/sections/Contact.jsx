import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { RESTAURANT } from '../lib/data';
import './Contact.css';

function FormField({ label, id, type = 'text', required, ...props }) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}{required && <span className="form-field__req" aria-label="wymagane"> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea id={id} className="form-field__input form-field__textarea" required={required} {...props} />
      ) : (
        <input id={id} type={type} className="form-field__input" required={required} {...props} />
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission (no backend — visual demo)
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="kontakt" className="contact section section--lift" ref={ref} aria-label="Kontakt i rezerwacja">
      <div className="container">
        <div className="contact__grid">
          {/* Left — info */}
          <div className="contact__info">
            <span className="eyebrow reveal stagger-1">Kontakt</span>
            <div className="copper-rule reveal stagger-2" />
            <h2 className="contact__heading reveal stagger-2">
              Zarezerwuj stolik<br />lub zamów z dostawą
            </h2>
            <p className="contact__intro reveal stagger-3">
              Jesteśmy otwarci każdego dnia. Zapraszamy na miejsce lub zamów online — jedzenie dotrze do Ciebie zawsze ciepłe i świeżo zapakowane.
            </p>

            {/* Contact details */}
            <ul className="contact__details reveal stagger-4">
              <li className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Adres</span>
                  <a
                    href={`https://maps.google.com/?q=${RESTAURANT.address}+${RESTAURANT.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__detail-value link-hover"
                  >
                    {RESTAURANT.address}<br />{RESTAURANT.postcode} {RESTAURANT.city}
                  </a>
                </div>
              </li>

              <li className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Telefon</span>
                  <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`} className="contact__detail-value link-hover">
                    {RESTAURANT.phone}
                  </a>
                </div>
              </li>

              <li className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">E-mail</span>
                  <a href={`mailto:${RESTAURANT.email}`} className="contact__detail-value link-hover">
                    {RESTAURANT.email}
                  </a>
                </div>
              </li>

              <li className="contact__detail">
                <div className="contact__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Godziny otwarcia</span>
                  <span className="contact__detail-value">{RESTAURANT.hours}</span>
                </div>
              </li>
            </ul>

            {/* Map embed */}
            <div className="contact__map reveal stagger-5">
              <iframe
                title="Fabryka Smaku na mapie Google"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.4!2d19.706!3d52.546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMyJzQ2LjciTiAxOcKwNDInMjMuNiJF!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl&q=Armii+Krajowej+35+Płock"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__form-wrap reveal-right">
            <div className="contact__form-card">
              {!submitted ? (
                <>
                  <h3 className="contact__form-title">Wyślij wiadomość</h3>
                  <p className="contact__form-sub">Odpiszemy najszybciej jak możemy. W pilnych sprawach — dzwoń!</p>

                  <form className="contact__form" onSubmit={handleSubmit} noValidate>
                    <div className="contact__form-row">
                      <FormField
                        label="Imię i nazwisko"
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jan Kowalski"
                      />
                      <FormField
                        label="Numer telefonu"
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+48 500 000 000"
                      />
                    </div>
                    <FormField
                      label="E-mail"
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jan@example.pl"
                    />
                    <FormField
                      label="Wiadomość"
                      id="message"
                      type="textarea"
                      required
                      rows="4"
                      placeholder="Chciałbym zarezerwować stolik na 4 osoby..."
                    />

                    <button
                      type="submit"
                      className={`btn btn--copper contact__submit${sending ? ' contact__submit--loading' : ''}`}
                      disabled={sending}
                    >
                      {sending ? 'Wysyłam...' : 'Wyślij wiadomość'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="contact__success">
                  <div className="contact__success-icon" aria-hidden="true">✓</div>
                  <h3 className="contact__success-title">Wiadomość wysłana!</h3>
                  <p className="contact__success-msg">Odezwiemy się wkrótce. Do zobaczenia w Fabryce Smaku!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
