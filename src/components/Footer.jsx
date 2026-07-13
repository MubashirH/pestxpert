import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-black mb-4">PEST<span className="text-forest">X</span>PERT</h3>
          <p className="text-cream/60">
            Professional pest management solutions to keep your home safe and healthy.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Contact Us</h4>
          <div className="flex flex-col gap-2">
            <a href="tel:9916407740" className="hover:text-gold transition-colors" aria-label="Call Pest Xpert at 99164 07740">
              9916407740
            </a>
            {/* <a href="tel:9916407740" className="hover:text-gold transition-colors" aria-label="Call Pest Xpert at 98453 55690">
              98453 55690
            </a> */}
          </div>
        </div>

        {/* Location Badge */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-gold font-bold mb-2">Location</h4>
          <p className="text-sm">Bhatkal — Your Space. Our Care. Pest Free Everywhere.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-cream/40">
        &copy; {new Date().getFullYear()} Pest Xpert. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
