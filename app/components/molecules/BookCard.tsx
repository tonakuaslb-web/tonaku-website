import Image from "next/image";
import { BookOpen, Download, Calendar, User } from "lucide-react";
import { cn } from "@/app/lib/utils";

type BookCardProps = Readonly<{
  title: string;
  author: string;
  year: string;
  category?: string;
  description?: string;
  coverImage?: string;
  downloadLink?: string;
  featured?: boolean;
  className?: string;
}>;

export default function BookCard({
  title,
  author,
  year,
  category,
  description,
  coverImage,
  downloadLink,
  featured = false,
  className = "",
}: BookCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-background-100 rounded-xl overflow-hidden transition-all duration-300 shrink-0 w-[92vw] max-w-6xl",
        "border-2 hover:shadow-xl",
        featured
          ? "border-secondary-400 shadow-lg"
          : "border-primary-300 hover:border-primary-400",
        className
      )}
    >
      {/* Badge Featured */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-secondary-400 text-blue-logo text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ⭐ À la une
        </div>
      )}

      <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
        {/* Couverture du livre */}
        <div className="flex justify-center md:justify-start">
          <div
            className={cn(
              "relative w-40 h-56 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105",
              "bg-linear-to-br from-primary-200 to-primary-400"
            )}
          >
            {coverImage ? (
              <Image
                src={coverImage}
                alt={`Couverture de ${title}`}
                fill
                unoptimized
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-blue-logo p-4">
                <BookOpen size={48} strokeWidth={1.5} />
                <p className="text-xs text-center mt-2 font-semibold">
                  Couverture à venir
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Détails du livre */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Catégorie */}
            {category && (
              <span className="inline-block text-xs font-semibold text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full mb-3">
                {category}
              </span>
            )}

            {/* Titre */}
            <h3 className="text-xl font-bold text-blue-logo mb-3 leading-tight group-hover:text-primary-700 transition-colors">
              {title}
            </h3>

            {/* Métadonnées */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary-600" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary-600" />
                <span>{year}</span>
              </div>
            </div>

            {/* Description */}
            {description && (
              <p className="text-neutral-700 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
                "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md"
              )}
            >
              <BookOpen size={18} />
              En savoir plus
            </button>

            {downloadLink && (
              <button
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
                  "border-2 border-secondary-400 text-blue-logo hover:bg-secondary-100 hover:shadow-md"
                )}
              >
                <Download size={18} />
                Télécharger
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
