"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  durationClass?: string;
  distanceClass?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", durationClass = "duration-1000", distanceClass }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = domRef.current;
    if (!current) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current); // Stop observing once it has faded in (trigger only once)
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px" // Slightly before it actually hits the bottom
    });

    observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Determine initial transform based on direction
  const getInitialTransform = () => {
    if (distanceClass) return distanceClass;
    switch (direction) {
      case "up": return "translate-y-10";
      case "down": return "-translate-y-10";
      case "left": return "translate-x-10";
      case "right": return "-translate-x-10";
      case "none": return "";
      default: return "translate-y-10";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${durationClass} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getInitialTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
