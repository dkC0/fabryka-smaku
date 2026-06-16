import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import MarqueeBanner from './sections/Marquee';
import Craft from './sections/Craft';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
    // Trigger hero letter animation after loader
    requestAnimationFrame(() => {
      const heading = document.querySelector('.hero__heading');
      if (heading) {
        heading.classList.add('hero__heading--visible');
      }
      // Trigger initial reveal for hero elements
      document.querySelectorAll('.hero .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 80 + 200);
      });
    });
  }, []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />

      <div
        className={`site${loaded ? ' site--loaded' : ''}`}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}
      >
        <a href="#main" className="skip-nav">Przejdź do treści</a>

        <Nav />

        <main id="main">
          <Hero />
          <MarqueeBanner />
          <About />
          <Craft />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
