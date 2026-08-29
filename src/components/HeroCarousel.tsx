import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';
import { ModalType } from '../types';

interface HeroCarouselProps {
  onOpenModal: (modal: ModalType) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section 
      id="hero-carousel-section" 
      className="relative w-full overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ minHeight: '520px', height: '62vh', maxHeight: '680px' }}
    >
      {/* Background Slide Images with smooth transition */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
            referrerPolicy="no-referrer"
          />
          {/* Cyber HUD Blueprint & Radial Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-black/70" />
        </div>
      ))}

      {/* Slide Content Layer */}
      <div className="relative z-20 h-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Subtle Cyber Title / Futuristic Badge if applicable */}
        <div className="mb-4">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-blue-400/90 uppercase px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 backdrop-blur-sm shadow-inner">
            ABSOLUTE CONTROL
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl drop-shadow-md leading-tight sm:leading-snug"
        >
          {currentSlide.title}
        </h1>

        {/* Subtitle Paragraph */}
        <p 
          id="hero-subtitle"
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-balance drop-shadow"
        >
          {currentSlide.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mt-7 sm:mt-8">
          <button
            id="hero-cta-btn"
            onClick={() => onOpenModal({ type: 'getStarted' })}
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm sm:text-base font-semibold text-white bg-[#1d68ff] hover:bg-blue-600 active:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>{currentSlide.ctaText}</span>
          </button>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        id="hero-carousel-prev-btn"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        id="hero-carousel-next-btn"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bottom Dash/Pill Indicators matching screenshot */}
      <div id="hero-carousel-indicators" className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            id={`indicator-${idx}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 h-1 rounded-full cursor-pointer ${
              idx === currentIndex
                ? 'w-8 bg-white shadow-sm'
                : 'w-6 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
