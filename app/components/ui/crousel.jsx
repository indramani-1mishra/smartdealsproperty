'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ✅ Apni images yahan add karo
const slides = [
  {
    src: '/crouselimage/crousel1.png',
    alt: 'Luxury Property 1',
    title: 'Find Your Dream Home',
    subtitle: 'Premium properties in Noida & Greater Noida',
  },
  {
     src: '/crouselimage/crousel1.png',
    alt: 'Luxury Property 2',
    title: 'Invest in the Future',
    subtitle: 'Commercial spaces with high ROI',
  },
  {
    src: '/crouselimage/crousel1.png',
    alt: 'Luxury Property 3',
    title: 'Luxury Redefined',
    subtitle: 'Residential plots on Yamuna Expressway',
  },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto play
  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative  w-full overflow-hidden" style={{ height: '520px' }}>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <h2
              className={`text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg transition-all duration-700 ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              {slide.title}
            </h2>
            <p
              className={`text-white/90 text-base sm:text-lg lg:text-xl drop-shadow transition-all duration-700 delay-100 ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 text-white transition-all duration-200 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 text-white transition-all duration-200 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-7 h-2.5 bg-[#C95E2B]'
                : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          key={current}
          className="h-full bg-[#C95E2B]"
          style={{
            animation: `progress ${AUTO_PLAY_INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}