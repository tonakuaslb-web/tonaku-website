import Image from "next/image";
import { MapPin } from "lucide-react";

type ProjectHeroProps = Readonly<{
  title: string;
  year?: string | null;
  status?: string | null;
  location?: string | null;
  image?: string | null;
}>;

export default function ProjectHero({
  title,
  year,
  status,
  location,
  image,
}: ProjectHeroProps) {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-logo/90 via-blue-logo/50 to-transparent" />

      {/* Titre par-dessus l'image */}
      <div className="absolute bottom-0 left-0 right-0 p-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            {year && (
              <span className="px-4 py-2 bg-secondary-500 text-blue-logo font-bold rounded-full">
                {year}
              </span>
            )}
            {status && (
              <span className="px-4 py-2 bg-white/20 backdrop-blur text-white font-medium rounded-full border border-white/30">
                {status}
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {location && (
            <p className="text-xl text-white/90 flex items-center gap-2">
              <MapPin size={24} />
              {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
