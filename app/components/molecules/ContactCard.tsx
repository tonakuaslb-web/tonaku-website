import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type ContactCardProps = Readonly<{
  icon: ReactNode;
  title: string;
  items: Array<{
    label: string;
    value: string;
    link?: string;
  }>;
  className?: string;
}>;

export default function ContactCard({
  icon,
  title,
  items,
  className = "",
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-secondary-300 bg-white shadow-sm p-6 h-full",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        {/* Icône avec fond jaune */}
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-secondary-500 text-blue-logo shrink-0">
          {icon}
        </div>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-blue-logo">{title}</h3>

        {/* Liste des informations de contact */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={`${item.label}-${item.value}`} className="space-y-1">
              <p className="text-sm font-semibold text-blue-logo/70">
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-blue-logo hover:text-primary-600 transition-colors block"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-blue-logo">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
