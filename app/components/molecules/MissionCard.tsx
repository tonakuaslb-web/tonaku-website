import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type MissionCardProps = Readonly<{
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}>;

export default function MissionCard({
  icon,
  title,
  description,
  className = "",
}: MissionCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-[2px] shadow-sm w-full",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #fef9e7 0%, #d4a024 100%)",
      }}
    >
      <div className="bg-white rounded-[calc(0.75rem-2px)] p-6 h-full">
        <div className="flex items-start gap-4 h-full">
          {/* Icône carrée à gauche avec fond jaune/doré et icône bleue */}
          <div className="flex items-center justify-center w-12 h-12 bg-secondary-500 rounded-lg text-blue-logo shrink-0">
            {icon}
          </div>

          <div className="flex-1">
            {/* Titre de la mission */}
            <h3 className="text-lg font-bold text-blue-logo mb-2">{title}</h3>
            {/* Description en bleu foncé */}
            <p className="text-blue-logo/80 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
