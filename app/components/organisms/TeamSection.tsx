import { Section } from "../templates";
import { TeamMemberCard } from "../molecules";
import { mapTeamMember } from "@/app/lib/mappers";
import type { Team } from "@/tina/__generated__/types";

type TeamSectionProps = Readonly<{
  subtitle: string;
  members: Team[];
}>;

export default function TeamSection({ subtitle, members }: TeamSectionProps) {
  return (
    <Section
      id="equipe"
      background={{ type: "color", value: "bg-background-100" }}
      paddingY="xl"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-neutral-700">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => {
            const mappedMember = mapTeamMember(member);
            return <TeamMemberCard key={member.id} {...mappedMember} />;
          })}
        </div>
      </div>
    </Section>
  );
}
