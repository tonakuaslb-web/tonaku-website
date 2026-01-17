import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type DonationMethodCardProps = Readonly<{
  icon: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}>;

export default function DonationMethodCard({
  icon,
  title,
  description,
  children,
  className = "",
}: DonationMethodCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-8 h-full bg-primary-600/60 border border-primary-500/30 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col space-y-6">
        {/* Icône */}
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-secondary-500 text-primary-800 shrink-0">
          {icon}
        </div>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {/* Description optionnelle */}
        {description && (
          <p className="text-white/80 text-sm">{description}</p>
        )}

        {/* Contenu personnalisé */}
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
}
