import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('show'); // 'show' | 'fadeout' | 'done'

  useEffect(() => {
    // Skip loader on session refresh
    if (sessionStorage.getItem('fabryka-loaded')) {
      setPhase('done');
      onComplete?.();
      return;
    }

    // Phase 1: show wordmark for 1.8s
    const t1 = setTimeout(() => {
      setPhase('fadeout');
    }, 1800);

    // Phase 2: fade out over 600ms then fire onComplete
    const t2 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('fabryka-loaded', '1');
      onComplete?.();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`loader${phase === 'fadeout' ? ' loader--fadeout' : ''}`} aria-hidden="true">
      <div className="loader__inner">
        <span className="loader__eyebrow">Płock</span>
        <h1 className="loader__wordmark">
          <span className="loader__word">Fabryka</span>
          <span className="loader__word loader__word--accent">Smaku</span>
        </h1>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
