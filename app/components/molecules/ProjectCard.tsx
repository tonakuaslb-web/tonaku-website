import { cn } from "@/app/lib/utils";

type ProjectCardProps = Readonly<{
  title: string;
  year: string;
  status: string;
  location?: string;
  beneficiaries?: string;
  description: string;
  className?: string;
}>;

export default function ProjectCard({
  title,
  year,
  status,
  location,
  beneficiaries,
  description,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-secondary-300 bg-background-100/80 backdrop-blur-sm shadow-sm p-6 h-full",
        className
      )}
    >
      <div className="space-y-4">
        {/* Badge avec année et statut */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block px-3 py-1 bg-secondary-500 text-blue-logo text-sm font-semibold rounded-full">
            {year}
          </span>
          <span className="inline-block px-3 py-1 bg-blue-logo text-white text-xs font-medium rounded-full">
            {status}
          </span>
        </div>

        {/* Titre en bleu foncé */}
        <h3 className="text-xl font-bold text-blue-logo">{title}</h3>

        {/* Location et bénéficiaires */}
        <div className="space-y-1 text-sm">
          {location && (
            <p className="text-blue-logo/80">
              <span className="font-semibold">Lieu :</span> {location}
            </p>
          )}
          {beneficiaries && (
            <p className="text-blue-logo/80">
              <span className="font-semibold">Bénéficiaires :</span>{" "}
              {beneficiaries}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-blue-logo/70 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
