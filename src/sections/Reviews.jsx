import { useReveal } from '../hooks/useReveal';
import { REVIEWS } from '../lib/data';
import './Reviews.css';

const FEATURED = [0, 2, 4];

export default function Reviews() {
  const ref = useReveal();

  return (
    <section id="opinie" className="reviews section section--cream" ref={ref} aria-label="Opinie gości">
      <div className="container">
        <div className="reviews__header reveal stagger-1">
          <span className="eyebrow eyebrow--dark">Opinie</span>
          <div className="copper-rule reveal stagger-2" />
          <h2 className="reviews__heading reveal stagger-2">Co mówią goście</h2>
        </div>

        <div className="reviews__quotes" role="list">
          {FEATURED.map((idx, i) => {
            const review = REVIEWS[idx];
            const alignClass = i === 1 ? 'reviews__quote--center' : i === 2 ? 'reviews__quote--right' : '';
            return (
              <article
                key={review.id}
                className={`reviews__quote reveal stagger-${i + 2} ${alignClass}`}
                role="listitem"
              >
                <span className="reviews__quote-mark" aria-hidden="true">"</span>
                <blockquote className="reviews__quote-text">
                  {review.text}
                </blockquote>
                <footer className="reviews__quote-footer">
                  <span className="reviews__quote-stars" aria-label="5 gwiazdek">
                    {'★'.repeat(review.rating)}
                  </span>
                  <cite className="reviews__quote-name">{review.name}</cite>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="reviews__signals reveal stagger-5">
          <div className="reviews__signal">
            <span className="reviews__signal-value">100%</span>
            <span className="reviews__signal-label">Polecają znajomym</span>
          </div>
          <div className="reviews__signal-sep" aria-hidden="true" />
          <div className="reviews__signal">
            <span className="reviews__signal-value">99,2%</span>
            <span className="reviews__signal-label">Zadowolonych klientów</span>
          </div>
          <div className="reviews__signal-sep" aria-hidden="true" />
          <div className="reviews__signal">
            <span className="reviews__signal-value">★ 5,0</span>
            <span className="reviews__signal-label">Średnia ocena</span>
          </div>
        </div>
      </div>
    </section>
  );
}
