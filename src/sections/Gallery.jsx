import { useReveal } from '../hooks/useReveal';
import './Gallery.css';

// Curated Unsplash food/restaurant photography for Polish casual-premium restaurant
const GALLERY_PHOTOS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop',
    alt: 'Soczysty burger w bułce na zakwasie',
    caption: 'Burgery na zakwasie',
    size: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
    alt: 'Kotlet schabowy z ziemniakami i surówką',
    caption: 'Kotlet po zbójnicku',
    size: 'small',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=80&auto=format&fit=crop',
    alt: 'Kremowy milkshake z Kinder Bueno',
    caption: 'Milkshake Kinder Bueno',
    size: 'small',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&auto=format&fit=crop',
    alt: 'Grillowane mięso z sosem grzybowym',
    caption: 'Karkówka z sosem grzybowym',
    size: 'medium',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop',
    alt: 'Świeża sałatka z warzywami',
    caption: 'Sałatka z serem Halloumi',
    size: 'small',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80&auto=format&fit=crop',
    alt: 'Naleśniki z nadzieniem wieprzowym',
    caption: 'Naleśniki z szarpaną wieprzowiną',
    size: 'large',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1484723091739-30990ff59fba?w=600&q=80&auto=format&fit=crop',
    alt: 'Panna cotta z musem malinowym — elegancki deser',
    caption: 'Panna Cotta z musem malinowym',
    size: 'small',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
    alt: 'Stylowe wnętrze restauracji przy kolacji',
    caption: 'Wnętrze Fabryki Smaku',
    size: 'medium',
  },
];

export default function Gallery() {
  const ref = useReveal({ threshold: 0.05 });

  return (
    <section id="galeria" className="gallery section section--dark" ref={ref} aria-label="Galeria">
      <div className="container">
        {/* Header */}
        <div className="gallery__header">
          <span className="eyebrow reveal stagger-1">Galeria</span>
          <div className="copper-rule reveal stagger-2" />
          <h2 className="gallery__heading reveal stagger-2">
            Jedzenie mówi<br />samo za siebie
          </h2>
        </div>

        {/* Masonry-style editorial grid */}
        <div className="gallery__grid" role="list">
          {GALLERY_PHOTOS.map((photo, i) => (
            <figure
              key={photo.id}
              className={`gallery__item gallery__item--${photo.size} reveal stagger-${Math.min(i + 1, 6)}`}
              role="listitem"
            >
              <div className="gallery__img-wrap">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="gallery__img"
                  loading="lazy"
                />
                <div className="gallery__overlay" aria-hidden="true">
                  <figcaption className="gallery__caption">{photo.caption}</figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
