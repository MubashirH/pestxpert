import React from 'react';

const faqData = [
  {
    question: "Do you provide emergency snake removal in Bhatkal?",
    answer: "Yes, we prioritize emergency calls for snake removal in Bhatkal and surrounding areas. Our expert technicians are equipped with safe removal tools to handle dangerous situations immediately. Please call our emergency line now."
  },
  {
    question: "Are your pest control chemicals safe and eco-friendly?",
    answer: "We use only government-approved, low-toxicity, and eco-friendly chemical solutions. Our treatments are designed to be safe for your family, pets, and the environment while being highly effective against pests."
  },
  {
    question: "How long does it take for your technicians to arrive?",
    answer: "We aim for same-day service for emergency calls. For standard bookings, our team arrives at your doorstep within the scheduled 2-hour window, ensuring on-time and reliable service."
  },
  {
    question: "Do you offer a warranty on Termite Control treatments?",
    answer: "Absolutely. We stand behind our work with a comprehensive service warranty. Depending on the level of infestation and the treatment plan, our termite control solutions come with an extended protection warranty."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl font-black text-charcoal text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group border border-charcoal/10 rounded-xl bg-cream hover:border-gold transition-all duration-300"
            >
              <summary className="font-bold text-charcoal p-6 cursor-pointer flex justify-between items-center text-lg list-none">
                {faq.question}
                <span className="text-forest transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="px-6 pb-6 text-charcoal/70 leading-relaxed pt-0">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
