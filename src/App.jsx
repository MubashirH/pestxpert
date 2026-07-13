import React from 'react';
import './App.css';
import ServicesGrid from './components/ServicesGrid';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import logo from './assets/logo.jpeg';
import bannerImage from './assets/bannerwpeg.webp';
import mobileBannerImage from './assets/mobile-banner.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Pest Xpert Logo" className="h-10 sm:h-12 w-auto rounded-lg" />
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="tel:9916407740"
              className="bg-gold text-charcoal px-5 py-2.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 shadow-lg shadow-gold/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">9916407740</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const trustItems = [
    { text: "Safe & Eco-Friendly", icon: "🌱" },
    { text: "Effective Results", icon: "✨" },
    { text: "Expert Technicians", icon: "🛠️" },
    { text: "On-Time Service", icon: "⏰" }
  ];

  return (
    <section className="relative bg-charcoal text-cream overflow-hidden py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FDFBF7 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-row items-center justify-between gap-3 mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Complete <br />
                <span className="text-gold">Pest Control</span> <br />
                Solutions
              </h1>
              {/* Mobile-Only Illustration */}
              <div className="block lg:hidden flex-shrink-0 w-24">
                <img src={mobileBannerImage} alt="Pest Control Mobile" className="w-full h-auto" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-xl font-medium">
              We Protect What Matters — Your Space. Our Care. Pest Free Everywhere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:9916407740"
                className="bg-gold text-charcoal px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-gold/90 transition-colors shadow-xl shadow-gold/10"
              >
                Call Us Today
              </a>
              <a
                href="https://wa.me/+919916407740"
                className="border-2 border-cream/30 text-cream px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-cream/10 transition-colors"
              >
                Book Inspection
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 p-3 rounded-lg">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-square bg-gradient-to-br from-gold/20 to-transparent rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={bannerImage} alt="Pest Control" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
