import { Section } from "../templates";
import { TimelineCard } from "../molecules";
import { mapTimelineEvent } from "@/app/lib/mappers";
import type { Histoire } from "@/tina/__generated__/types";

type TimelineSectionProps = Readonly<{
  subtitle: string;
  events: Histoire[];
}>;

export default function TimelineSection({
  subtitle,
  events,
}: TimelineSectionProps) {
  return (
    <Section
      id="histoire"
      background={{ type: "color", value: "bg-white" }}
      paddingY="xl"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Notre Histoire
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-neutral-700 text-left">{subtitle}</p>
        </div>

        {/* Timeline avec données Tina */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ligne dégradée verticale (jaune -> vert -> bleu) */}
          <div
            className="absolute left-2 top-0 bottom-0 w-0.5 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #f59e0b 0%, #10b981 50%, #1e3a5f 100%)",
            }}
          />

          <div className="space-y-0">
            {events.map((event) => {
              const mappedEvent = mapTimelineEvent(event);
              return (
                <TimelineCard
                  key={event.id}
                  year={mappedEvent.year}
                  title={mappedEvent.title}
                  description={mappedEvent.description}
                  image={mappedEvent.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
