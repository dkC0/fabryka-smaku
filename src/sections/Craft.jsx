import { useReveal } from '../hooks/useReveal';
import './Craft.css';

const PILLARS = [
  {
    number: '01',
    title: 'Lokalne produkty',
    body: 'Współpracujemy z lokalnymi dostawcami z Mazowsza. Mięso, warzywa, nabiał — wiemy, skąd pochodzi każdy składnik na talerzu.',
    detail: 'Płock i okolice',
  },
  {
    number: '02',
    title: 'Kuchnia bez kompromisów',
    body: 'Żadnych półproduktów, żadnych skrótów. Bułki na zakwasie od rzemieślniczego piekarza. Mięso marynowane przez dobę. Sosy robione od podstaw.',
    detail: 'Ręcznie, codziennie',
  },
  {
    number: '03',
    title: 'Ciepłe jak z domu',
    body: 'Niezależnie od tego, czy jadasz u nas, czy zamawiasz dostawę — każdy talerz wychodzi z kuchni tak, jakbyś był gościem w naszym domu.',
    detail: '99,2% zadowolonych',
  },
];

export default function Craft() {
  const ref = useReveal();

  return (
    <section className="craft section section--lift" aria-label="Nasze podejście do kuchni" ref={ref}>
      <div className="container">
        <div className="craft__grid">

          {/* Left: large ambient photograph */}
          <div className="craft__visual reveal-left">
            <div className="craft__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85&auto=format&fit=crop"
                alt="Wnętrze Fabryki Smaku — ciepła atmosfera restauracji"
                className="craft__img"
                loading="lazy"
                width="900"
                height="1100"
              />
              <div className="craft__img-caption">
                <span className="craft__img-caption-text">Armii Krajowej 35, Płock</span>
              </div>
            </div>
          </div>

          {/* Right: header + editorial numbered list */}
          <div className="craft__content">
            <div className="craft__header reveal stagger-1">
              <span className="eyebrow">Nasze podejście</span>
              <h2 className="craft__heading reveal stagger-2">
                Fabryka, która<br /><em>gotuje z duszą</em>
              </h2>
            </div>

            <div className="craft__list" role="list">
              {PILLARS.map((pillar, i) => (
                <article
                  key={pillar.number}
                  className={`craft__item reveal stagger-${i + 3}`}
                  role="listitem"
                  aria-label={pillar.title}
                >
                  <div className="craft__item-num" aria-hidden="true">{pillar.number}</div>
                  <div className="craft__item-content">
                    <div className="craft__item-top">
                      <h3 className="craft__item-title">{pillar.title}</h3>
                      <span className="craft__item-detail">{pillar.detail}</span>
                    </div>
                    <p className="craft__item-body">{pillar.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
