import Image from "next/image";
import Card from "./Card";

type TimelineCardProps = Readonly<{
  year: string;
  title: string;
  description: string;
  image?: string;
}>;

export default function TimelineCard({
  year,
  title,
  description,
  image,
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

          {/* Image optionnelle (entre année et texte) */}
          {image && (
            <div className="shrink-0 self-stretch relative overflow-visible group/image min-h-[280px]">
              <Image
                src={image}
                alt={title}
                width={200}
                height={300}
                unoptimized
                className="h-full min-h-[280px] w-40 rounded-lg object-cover shadow-sm cursor-pointer transition-all duration-300 group-hover/image:scale-150 group-hover/image:shadow-2xl group-hover/image:z-50 relative"
              />
            </div>
          )}

          {/* Contenu à droite */}
          <div className="flex-1 space-y-2">
            <h4 className="text-xl font-semibold text-blue-logo text-left">{title}</h4>
            <p className="text-blue-logo leading-relaxed text-left">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
