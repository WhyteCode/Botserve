import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataLabelingSection } from './components/DataLabelingSection';
import { SyntheticMirrorSection } from './components/SyntheticMirrorSection';
import { DataScienceSection } from './components/DataScienceSection';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simple smooth scroll behavior for anchor links if needed, 
  // though we mostly rely on scroll-driven animations.
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="w-full relative bg-white text-slate-900 selection:bg-cyan-200 selection:text-black">
      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="text-xl font-semibold tracking-tight text-black">
          botserve
        </div>
        <button className="hidden md:block px-5 py-2 text-sm font-medium border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Get Access
        </button>
      </nav>

      <HeroSection />
      <DataLabelingSection />
      <SyntheticMirrorSection />
      <DataScienceSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default App;