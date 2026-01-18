import { cn } from "@/app/lib/utils";

type ProjectCardProps = Readonly<{
  title: string;
  year: string;
  status: string;
  location?: string;
  beneficiaries?: string;
  budget?: string;
  image?: string;
  description: string;
  className?: string;
}>;

export default function ProjectCard({
  title,
  year,
  status,
  location,
  beneficiaries,
  budget,
  image,
  description,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border-2 border-secondary-300 shadow-sm overflow-hidden min-h-[560px] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={
        image
          ? {
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Overlay de base pour la lisibilité (toujours présent) */}
      <div className="absolute inset-0 bg-background-100/70 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-secondary-500/75 group-focus-within:bg-secondary-500/75" />

      {/* Contenu */}
      <div className="relative z-10 p-6 flex-1 flex flex-col justify-end">
        <div className="space-y-4">
          {/* Badge avec année et statut */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block px-3 py-1 bg-secondary-500 text-blue-logo text-sm font-semibold rounded-full shadow-sm group-hover:bg-white group-focus-within:bg-white transition-colors">
              {year}
            </span>
            <span className="inline-block px-3 py-1 bg-blue-logo text-white text-xs font-medium rounded-full shadow-sm">
              {status}
            </span>
          </div>

          {/* Titre en bleu foncé */}
          <h3 className="text-2xl font-bold text-blue-logo group-hover:text-white group-focus-within:text-white transition-colors">
            {title}
          </h3>

          {/* Location, bénéficiaires et budget */}
          <div className="space-y-1 text-sm">
            {location && (
              <p className="text-blue-logo/90 group-hover:text-white/95 group-focus-within:text-white/95 transition-colors">
                <span className="font-semibold">Lieu :</span> {location}
              </p>
            )}
            {beneficiaries && (
              <p className="text-blue-logo/90 group-hover:text-white/95 group-focus-within:text-white/95 transition-colors">
                <span className="font-semibold">Bénéficiaires :</span>{" "}
                {beneficiaries}
              </p>
            )}
            {budget && (
              <p className="text-blue-logo/90 group-hover:text-white/95 group-focus-within:text-white/95 transition-colors">
                <span className="font-semibold">Budget :</span> {budget}
              </p>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-blue-logo/80 text-sm leading-relaxed group-hover:text-white/90 group-focus-within:text-white/90 transition-colors">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
