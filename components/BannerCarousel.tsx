'use client'
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from 'react';

type BannerSlide = {
  image: string;
  title: string;
  description: string;
};

interface BannerCarouselProps {
  slides: readonly BannerSlide[];
}

export default function BannerCarousel({ slides }: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Create an array with duplicated slides for infinite effect
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTransitionEnd = useCallback(() => {
    if (currentSlide >= slides.length) {
      setIsTransitioning(true);
      setCurrentSlide(0);
      if (slideContainerRef.current) {
        slideContainerRef.current.style.transition = 'none';
        slideContainerRef.current.style.transform = `translateX(0%)`;
      }
      setTimeout(() => {
        if (slideContainerRef.current) {
          slideContainerRef.current.style.transition = 'transform 700ms ease-in-out';
        }
        setIsTransitioning(false);
      }, 50);
    }
  }, [currentSlide, slides.length]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else if (!isTransitioning) {
      setCurrentSlide(slides.length - 1);
    }
  }, [isTransitioning, currentSlide, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  }, [isTransitioning]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div 
          ref={slideContainerRef}
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${slide.image}-${index}`} className="relative flex-shrink-0 w-full">
              <div className="relative h-[400px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <h2 className="text-4xl font-bold mb-2 text-center">{slide.title}</h2>
                  <p className="text-xl text-center max-w-2xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-20 group items-center justify-center"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-20 group items-center justify-center"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide % slides.length
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
