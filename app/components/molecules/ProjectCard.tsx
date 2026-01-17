import { ReactNode } from "react";

type ProjectCardProps = Readonly<{
  icon: ReactNode;
  title: string;
  description?: string;
  items: string[];
  note?: string;
}>;

export default function ProjectCard({
  icon,
  title,
  description,
  items,
  note,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border-2 border-secondary-300 bg-background-100/80 backdrop-blur-sm shadow-sm p-6 h-full">
      <div className="space-y-4">
        {/* Icône avec fond jaune et icône bleue */}
        <div className="flex items-center justify-center w-16 h-16 bg-secondary-500 rounded-lg text-blue-logo">
          {icon}
        </div>

        {/* Titre en bleu foncé */}
        <h3 className="text-xl font-bold text-blue-logo">{title}</h3>

        {/* Description optionnelle en bleu foncé */}
        {description && <p className="text-blue-logo">{description}</p>}

        {/* Liste à puces */}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-secondary-500 mt-1">•</span>
              <span className="text-blue-logo">{item}</span>
            </li>
          ))}
        </ul>

        {/* Note en italique */}
        {note && <p className="text-sm text-neutral-500 italic mt-4">{note}</p>}
      </div>
    </div>
  );
}
