"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
  }[];
}

export function HeroCarousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[6000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-20 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-12"
                : "bg-white/50 hover:bg-white/75 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
