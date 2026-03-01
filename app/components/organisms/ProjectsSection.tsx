import { Section } from "../templates";
import { ProjectCard } from "../molecules";
import { mapProject } from "@/app/lib/mappers";
import type { Project } from "@/tina/__generated__/types";

type ProjectsSectionProps = Readonly<{
  subtitle: string;
  projects: Project[];
}>;

export default function ProjectsSection({
  subtitle,
  projects,
}: ProjectsSectionProps) {
  return (
    <Section
      id="projets"
      background={{ type: "color", value: "bg-white" }}
      paddingY="xl"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Nos Projets
          </h2>
          <p className="text-xl text-neutral-700">{subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => {
            const mappedProject = mapProject(project);
            return (
              <ProjectCard
                key={project.id}
                title={mappedProject.title}
                year={mappedProject.year}
                status={mappedProject.status}
                location={mappedProject.location}
                beneficiaries={mappedProject.beneficiaries}
                budget={mappedProject.budget}
                image={mappedProject.image}
                description={mappedProject.description}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
