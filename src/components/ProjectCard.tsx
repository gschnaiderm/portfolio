"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export interface ProjectCardProps {
  titulo: string;
  imagenes: string[];
  descripcion: string;
  caracteristicas: string[];
  github?: string;
}

export default function ProjectCard({ titulo, imagenes, descripcion, caracteristicas, github }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validImages = imagenes.filter(img => img && !img.includes("placeholder"));
  const hasImages = validImages.length > 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <article className="w-full h-full flex flex-col md:flex-row bg-bg-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700 group">
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-slate-800 flex items-center justify-center overflow-hidden">
        {hasImages ? (
          <>
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {validImages.map((src, idx) => (
                <div 
                  key={idx} 
                  className="relative min-w-full h-full cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image 
                    src={src} 
                    alt={`${titulo} - Imagen ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Image Navigation Arrows (only if multiple images) */}
            {validImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10"
                  aria-label="Imagen anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10"
                  aria-label="Imagen siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {validImages.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-4 bg-primary" : "w-2 bg-white/50"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-slate-500 font-medium flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-start gap-4 mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading">
            {titulo}
          </h3>
          {github && (
            <a 
              href={github.startsWith('http') ? github : `https://${github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-text-muted hover:text-white transition-all flex-shrink-0" 
              title="Ver código en GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium text-sm">Código</span>
            </a>
          )}
        </div>
        <p className="text-text-muted leading-relaxed mb-8">
          {descripcion}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {caracteristicas.map((char, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/30"
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Modal para ver la imagen maximizada (usando Portal para evitar recortes por overflow y transforms) */}
      {mounted && isModalOpen && hasImages && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 text-white hover:text-primary transition-all bg-black/50 hover:bg-black/80 hover:scale-110 rounded-full z-50 shadow-2xl"
            onClick={() => setIsModalOpen(false)}
            aria-label="Cerrar imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={validImages[currentImageIndex]} 
              alt={`${titulo} - Imagen maximizada`}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            
            {validImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 p-4 rounded-full bg-black/70 text-white hover:bg-black hover:scale-110 hover:text-primary transition-all z-50 shadow-2xl backdrop-blur-md"
                  aria-label="Imagen anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 p-4 rounded-full bg-black/70 text-white hover:bg-black hover:scale-110 hover:text-primary transition-all z-50 shadow-2xl backdrop-blur-md"
                  aria-label="Imagen siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots indicator dentro del modal */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-50 bg-black/20 py-2 w-max mx-auto px-4 rounded-full backdrop-blur-md">
                  {validImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${idx === currentImageIndex ? "w-8 bg-primary" : "w-2.5 bg-white/50 hover:bg-white"}`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </article>
  );
}
