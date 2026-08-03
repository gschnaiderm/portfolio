"use client";

import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface CarouselProps {
  projects: ProjectCardProps[];
}

export default function Carousel({ projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Header Controls (Arrows + Indicators) */}
      <div className="flex items-center gap-4 md:gap-8 mb-6">
        {/* Navigation Button (Left) */}
        <button 
          onClick={prevSlide}
          className="hidden md:flex flex-shrink-0 p-2 md:p-3 rounded-full bg-bg-surface border border-slate-700 text-text-base hover:bg-slate-800 hover:text-primary transition-all focus:outline-none shadow-md"
          aria-label="Proyecto anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Button (Right) */}
        <button 
          onClick={nextSlide}
          className="hidden md:flex flex-shrink-0 p-2 md:p-3 rounded-full bg-bg-surface border border-slate-700 text-text-base hover:bg-slate-800 hover:text-primary transition-all focus:outline-none shadow-md"
          aria-label="Proyecto siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Project Card Wrapper */}
      <div className="w-full">
        <div 
          className="w-full overflow-hidden relative rounded-2xl shadow-xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
