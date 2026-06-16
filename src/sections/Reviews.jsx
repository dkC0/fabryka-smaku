import { useReveal } from '../hooks/useReveal';
import { REVIEWS } from '../lib/data';
import './Reviews.css';

function StarRating({ count = 5 }) {
  return (
    <div className="stars" aria-label={`Ocena: ${count} na 5 gwiazdek`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`star${i < count ? ' star--filled' : ''}`} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M8 1l1.796 3.639 4.014.583-2.905 2.83.686 3.994L8 10.112l-3.591 1.934.686-3.994-2.905-2.83 4.014-.583L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useReveal();

  return (
    <section id="opinie" className="reviews section section--cream" ref={ref} aria-label="Opinie gości">
      <div className="container">
        {/* Header */}
        <div className="reviews__header">
          <span className="eyebrow eyebrow--dark reveal stagger-1">Opinie</span>
          <div className="copper-rule copper-rule--center reveal stagger-2" />
          <h2 className="reviews__heading reveal stagger-2">
            Co mówią o nas goście
          </h2>
          <p className="reviews__sub reveal stagger-3">
            100% polecają nas znajomym. Nie dlatego, że prosimy — ale dlatego, że gotujemy z sercem.
          </p>
        </div>

        {/* Reviews marquee */}
        <div className="reviews__marquee-wrap" aria-label="Opinie klientów">
          <div className="reviews__marquee">
            <div className="marquee-track">
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <article key={`${review.id}-${i}`} className="review-card" aria-label={`Opinia od ${review.name}`}>
                  <StarRating count={review.rating} />
                  <blockquote className="review-card__quote">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <footer className="review-card__footer">
                    <div className="review-card__avatar" aria-hidden="true">
                      {review.name[0]}
                    </div>
                    <div>
                      <cite className="review-card__name">{review.name}</cite>
                      <span className="review-card__source">{review.source}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="reviews__signals reveal stagger-4">
          <div className="reviews__signal">
            <span className="reviews__signal-value">100%</span>
            <span className="reviews__signal-label">Polecają znajomym</span>
          </div>
          <div className="reviews__signal-sep" aria-hidden="true" />
          <div className="reviews__signal">
            <span className="reviews__signal-value">23+</span>
            <span className="reviews__signal-label">Opinii na Facebooku</span>
          </div>
          <div className="reviews__signal-sep" aria-hidden="true" />
          <div className="reviews__signal">
            <span className="reviews__signal-value">★ 5.0</span>
            <span className="reviews__signal-label">Średnia ocena</span>
          </div>
        </div>
      </div>
    </section>
  );
}
