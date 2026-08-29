import React from 'react';
import { OFFERINGS } from '../data/content';
import { OfferingItem, ModalType } from '../types';

interface KeyOfferingsProps {
  onOpenModal: (modal: ModalType) => void;
}

export const KeyOfferings: React.FC<KeyOfferingsProps> = ({ onOpenModal }) => {
  return (
    <section id="offerings" className="w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 
            id="offerings-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Our Key Offerings
          </h2>
          <p 
            id="offerings-subheading"
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal"
          >
            Explore our specialized services tailored for digital-first enterprises
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {OFFERINGS.map((item) => (
            <div
              key={item.id}
              id={`offering-card-${item.id}`}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-2">
                  <button
                    id={`offering-btn-${item.id}`}
                    onClick={() => onOpenModal({ type: 'offering', data: item })}
                    className="w-full py-2.5 px-4 rounded-lg border border-blue-600/70 text-blue-600 font-semibold text-sm hover:bg-blue-50/80 hover:border-blue-600 active:bg-blue-100 transition-colors duration-200 cursor-pointer text-center"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
