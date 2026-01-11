import { ReactNode } from "react";

type MissionCardProps = Readonly<{
  icon: ReactNode;
  description: string;
}>;

export default function MissionCard({ icon, description }: MissionCardProps) {
  return (
    <div
      className="rounded-xl p-[2px] shadow-sm h-full"
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

          {/* Description en bleu foncé à droite */}
          <p className="text-blue-logo leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
