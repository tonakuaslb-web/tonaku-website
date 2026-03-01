import { Section } from "../templates";
import { MissionCard } from "../molecules";
import { mapMission } from "@/app/lib/mappers";
import type { Mission } from "@/tina/__generated__/types";

type MissionsSectionProps = Readonly<{
  subtitle: string;
  missions: Mission[];
}>;

export default function MissionsSection({
  subtitle,
  missions,
}: MissionsSectionProps) {
  return (
    <Section
      id="missions"
      background={{ type: "color", value: "bg-background-100" }}
      paddingY="xl"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Nos Missions
          </h2>
          <p className="text-xl text-neutral-700">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-2 max-w-5xl mx-auto">
          {missions.map((mission) => {
            const mappedMission = mapMission(mission);
            const Icon = mappedMission.icon as React.ComponentType<{
              size?: number;
            }>;
            return (
              <MissionCard
                key={mission.id}
                icon={<Icon size={24} />}
                title={mappedMission.title}
                description={mappedMission.description}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
