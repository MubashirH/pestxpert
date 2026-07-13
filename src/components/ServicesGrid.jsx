import React from 'react';
import termiteIcon from '../assets/icons/termite.png';
import cockroachIcon from '../assets/icons/Cockroach.png';
import rodentIcon from '../assets/icons/Rodent.png';
import antIcon from '../assets/icons/Ant.png';
import mosquitoIcon from '../assets/icons/Mosquito.png';
import flyIcon from '../assets/icons/Fly.png';
import bedBugIcon from '../assets/icons/Bed Bug.png';
import snakeIcon from '../assets/icons/Snake.png';

const services = [
  {
    name: 'Termite Control',
    description: 'Protects your property from termite damage.',
    icon: termiteIcon,
  },
  {
    name: 'Cockroach Control',
    description: 'Eliminates cockroaches and prevents re-infestation.',
    icon: cockroachIcon,
  },
  {
    name: 'Rodent Control',
    description: 'Keeps your space rodent-free and safe.',
    icon: rodentIcon,
  },
  {
    name: 'Ant Control',
    description: 'Effective solutions for ant problems.',
    icon: antIcon,
  },
  {
    name: 'Mosquito Control',
    description: 'Reduces mosquitoes and prevents diseases.',
    icon: mosquitoIcon,
  },
  {
    name: 'Fly Control',
    description: 'Controls flies and keeps hygiene intact.',
    icon: flyIcon,
  },
  {
    name: 'Bed Bug Control',
    description: 'Eliminates bed bugs for restful living.',
    icon: bedBugIcon,
  },
  {
    name: 'Snake Control',
    description: 'Safe and professional snake removal.',
    icon: snakeIcon,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            Complete Pest Control Solutions
          </h2>
          <p className="text-lg text-charcoal/60 font-medium">
            Targeted treatments for every pest problem.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const whatsappMessage = encodeURIComponent(
              `Hello Pest Xpert, I need inquiries regarding ${service.name}.`
            );
            const whatsappLink = `https://wa.me/919916407740?text=${whatsappMessage}`;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border border-charcoal/10 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <img src={service.icon} alt={service.name} className="w-6 h-6 object-contain" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {service.name}
                </h3>
                <p className="text-charcoal/70 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Conversion Trigger */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-forest font-bold hover:text-charcoal transition-colors group-hover:gap-2"
                >
                  Book This Service
                  <span className="ml-1 transition-all">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

