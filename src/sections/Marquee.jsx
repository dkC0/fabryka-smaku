import './Marquee.css';

const ITEMS = [
  'Świeżość',
  'Jakość',
  'Tradycja',
  'Domowa kuchnia',
  'Płock',
  'Z pasją',
  'Każdego dnia',
  'Fabryka Smaku',
];

export default function MarqueeBanner() {
  return (
    <div className="marquee-banner" aria-hidden="true">
      <div className="marquee-banner__inner">
        <div className="marquee-track">
          {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="marquee-banner__item">
              <span className="marquee-banner__dot">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
