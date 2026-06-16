import { useReveal } from '../hooks/useReveal';
import { ABOUT_STORY, RESTAURANT } from '../lib/data';
import './About.css';

export default function About() {
  const ref = useReveal();

  return (
    <section id="o-nas" className="about section section--lift" ref={ref} aria-label="O nas">
      <div className="container">
        <div className="about__grid">
          {/* Left — photo */}
          <div className="about__visual reveal-left">
            <div className="about__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop"
                alt="Kuchnia Fabryki Smaku — przygotowywanie dań"
                className="about__img"
                loading="lazy"
                width="600"
                height="750"
              />
              <div className="about__img-accent" aria-hidden="true">
                <span className="about__img-year">od&nbsp;2024</span>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="about__content">
            <span className="eyebrow reveal stagger-1">{ABOUT_STORY.eyebrow}</span>
            <div className="copper-rule reveal stagger-2" />
            <h2 className="about__heading reveal stagger-2">{ABOUT_STORY.heading}</h2>

            <div className="about__paragraphs">
              {ABOUT_STORY.paragraphs.map((p, i) => (
                <p key={i} className={`about__p reveal stagger-${i + 3}`}>
                  {p}
                </p>
              ))}
            </div>

            {/* Values grid */}
            <div className="about__values">
              {RESTAURANT.values.map((v, i) => (
                <div key={v.label} className={`about__value reveal stagger-${i + 1}`}>
                  <span className="about__value-label">{v.label}</span>
                  <p className="about__value-desc">{v.description}</p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="about__signature reveal stagger-5">
              <div className="about__sig-line" />
              <p className="about__sig-text">
                {ABOUT_STORY.signature.split('\n').map((line, i) => (
                  <span key={i} className={i === 0 ? 'about__sig-name' : 'about__sig-role'}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
