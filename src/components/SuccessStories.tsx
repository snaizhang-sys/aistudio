import React from 'react';
import { SUCCESS_STORIES } from '../data/content';
import { StoryItem, ModalType } from '../types';

interface SuccessStoriesProps {
  onOpenModal: (modal: ModalType) => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenModal }) => {
  return (
    <section id="stories" className="w-full py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 
            id="stories-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Featured Success Stories
          </h2>
          <p 
            id="stories-subheading"
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal"
          >
            How our teams have helped modern businesses scale new heights
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESS_STORIES.map((item) => (
            <div
              key={item.id}
              id={`story-card-${item.id}`}
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
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Read Story Button */}
                <div className="mt-6 pt-1">
                  <button
                    id={`story-btn-${item.id}`}
                    onClick={() => onOpenModal({ type: 'story', data: item })}
                    className="w-full py-2 px-3 rounded-lg border border-blue-600/70 text-blue-600 font-semibold text-xs sm:text-sm hover:bg-blue-50/80 hover:border-blue-600 active:bg-blue-100 transition-colors duration-200 cursor-pointer text-center"
                  >
                    Read Story
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
