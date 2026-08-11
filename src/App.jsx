import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import About from './components/About';
import ProfileSection from './components/ProfileSection';
import Services from './components/Services';
import Differentials from './components/Differentials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Disable Lenis on touch/mobile devices to prevent iOS WebKit touchmove blocking & render freezes
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);

    if (isTouchDevice) {
      return;
    }

    // Initialize Lenis smooth scroll exclusively for Desktop mouse interaction
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 0,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenisInstance = lenis;

    return () => {
      lenis.destroy();
      window.lenisInstance = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      <Header />
      <main className="pt-24 lg:pt-28">
        <Hero />
        <Approach />
        <About />
        <ProfileSection />
        <Services />
        <Differentials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
