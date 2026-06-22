"use client";

import { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export default function Carousel({ children, className = "" }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // pixels à défiler
      const newPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Bouton Précédent */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Livre précédent"
      >
        <ChevronLeft size={24} className="text-primary-700" />
      </button>

      {/* Conteneur défilable */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-[5vw] md:px-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      {/* Bouton Suivant */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Livre suivant"
      >
        <ChevronRight size={24} className="text-primary-700" />
      </button>

      {/* Style pour cacher la scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
