import Card from "./Card";

type TimelineCardProps = Readonly<{
  year: string;
  title: string;
  description: string;
}>;

export default function TimelineCard({
  year,
  title,
  description,
}: TimelineCardProps) {
  return (
    <div className="flex gap-6 relative pb-12">
      {/* Point jaune - même couleur que le bouton "Soutenez-nous" */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-5 h-5 rounded-full bg-secondary-500 border-4 border-white shadow-md z-10" />
      </div>

      {/* Contenu - Layout horizontal comme MissionCard */}
      <div className="flex-1">
        <Card background="bg-accent-50 border-l-4 border-accent-400 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            {/* Année à gauche */}
            <div className="shrink-0">
              <h3 className="text-3xl font-bold text-blue-logo">{year}</h3>
            </div>

            {/* Contenu à droite */}
            <div className="flex-1 space-y-2">
              <h4 className="text-xl font-semibold text-blue-logo">{title}</h4>
              <p className="text-blue-logo leading-relaxed">{description}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
