"use client";

import Image from "next/image";

type HeroProps = Readonly<{
  title: string;
  subtitle: string;
  about?: string;
}>;

export default function Hero({ title, subtitle, about }: HeroProps) {

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: "url(/motif-hero.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "50px 50px",
      }}
    >
      {/* Overlay avec dégradé blanc-crème pour améliorer la lisibilité */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(254, 249, 241, 0.90) 100%)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo et titre en vertical */}
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mb-6 animate-fadeIn">
          <Image
            src="/logo.png"
            alt="Logo TONAKU"
            width={200}
            height={200}
            priority
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-blue-logo">
            {title}
          </h1>
        </div>

        {/* Sous-titre en bleu */}
        <p className="text-xl md:text-3xl text-blue-logo leading-relaxed max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>

        {/* Paragraphe "Qui sommes-nous ?" */}
        {about && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-logo mb-4">
              Qui sommes-nous ?
            </h2>
            <div 
              className="text-base md:text-lg text-blue-logo/80 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: about }}
            />
          </div>
        )}

        {/* Ornement décoratif */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse delay-75" />
          <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse delay-150" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-blue-logo/70 animate-bounce">
          <span className="text-sm">Découvrir</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
