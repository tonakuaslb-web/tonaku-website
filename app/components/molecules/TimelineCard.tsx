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
    <div className="relative pl-8 pb-8">
      {/* Point jaune aligné sur la ligne */}
      <div className="absolute left-0 top-2">
        <div className="w-5 h-5 rounded-full bg-secondary-500 border-4 border-white shadow-md z-10" />
      </div>

      {/* Contenu - Layout horizontal */}
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
  );
}
