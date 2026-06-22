import { notFound } from "next/navigation";
import { Users, DollarSign, Target } from "lucide-react";
import {
  ProjectNavigation,
  ProjectHero,
  ProjectContentSection,
  RelatedProjects,
} from "@/app/components/organisms";
import { ProjectInfoCard, ProjectGallery } from "@/app/components/molecules";
import client from "@/tina/__generated__/client";
import { generateSlug, richTextToHTML } from "@/app/lib/utils";

// Générer les chemins statiques au build time
export async function generateStaticParams() {
  const projectsResponse = await client.queries.projectConnection();
  const projects = projectsResponse.data.projectConnection.edges || [];

  return projects.map((edge) => ({
    slug: generateSlug(edge?.node?.title || ""),
  }));
}

// Récupérer les données d'un projet par son slug
async function getProjectBySlug(slug: string) {
  const projectsResponse = await client.queries.projectConnection();
  const projects = projectsResponse.data.projectConnection.edges || [];

  const project = projects.find((edge) => {
    const projectSlug = generateSlug(edge?.node?.title || "");
    return projectSlug === slug;
  });

  return project?.node || null;
}

// Récupérer tous les autres projets (pour la section "Autres projets")
async function getOtherProjects(currentSlug: string) {
  const projectsResponse = await client.queries.projectConnection();
  const projects = projectsResponse.data.projectConnection.edges || [];

  return projects
    .filter((edge) => {
      const projectSlug = generateSlug(edge?.node?.title || "");
      return projectSlug !== currentSlug;
    })
    .slice(0, 3) // Maximum 3 autres projets
    .map((edge) => edge?.node);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Dans Next.js 15+, params est une Promise
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = await getOtherProjects(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ProjectNavigation />

      {/* Hero */}
      <ProjectHero
        title={project.title}
        year={project.year}
        status={project.status}
        location={project.location}
        image={project.image}
      />

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Informations clés en cartes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {project.details?.beneficiaries && (
            <ProjectInfoCard
              icon={Users}
              title="Bénéficiaires"
              value={project.details.beneficiaries}
              colorScheme="accent"
            />
          )}

          {project.details?.budget && (
            <ProjectInfoCard
              icon={DollarSign}
              title="Budget"
              value={project.details.budget}
              colorScheme="secondary"
            />
          )}

          {project.details?.goal && (
            <ProjectInfoCard
              icon={Target}
              title="Objectif"
              value={project.details.goal}
              colorScheme="primary"
            />
          )}
        </div>

        {/* Description détaillée du projet */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-logo mb-6">
            À propos du projet
          </h2>
          <div
            className="prose prose-lg prose-blue max-w-none text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: richTextToHTML(project.description),
            }}
          />
        </div>

        {/* Titre et introduction de la page (optionnels) */}
        {(project.introTitle || project.introText) && (
          <div className="mb-16">
            {project.introTitle && (
              <h2 className="text-3xl font-bold text-blue-logo mb-6">
                {project.introTitle}
              </h2>
            )}
            {project.introText && (
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: richTextToHTML(project.introText),
                }}
              />
            )}
          </div>
        )}

        {/* Sections de contenu */}
        {project.contentSections &&
          project.contentSections.length > 0 &&
          (() => {
            // Regrouper les sections "image-card" consécutives pour les afficher côte à côte
            type SectionGroup =
              | {
                  type: "single";
                  section: NonNullable<
                    (typeof project.contentSections)[number]
                  >;
                  key: string;
                }
              | {
                  type: "image-card-row";
                  sections: NonNullable<
                    (typeof project.contentSections)[number]
                  >[];
                  keys: string[];
                };

            const groups: SectionGroup[] = [];
            project.contentSections.forEach((section, idx) => {
              if (!section) return;
              const layout = section.layout || "text-only";
              const key = section.sectionTitle
                ? `section-${section.sectionTitle
                    .replaceAll(/\s+/g, "-")
                    .toLowerCase()}-${idx}`
                : `section-${layout}-${idx}`;

              if (layout === "image-card") {
                const last = groups[groups.length - 1];
                if (last && last.type === "image-card-row") {
                  last.sections.push(section);
                  last.keys.push(key);
                } else {
                  groups.push({
                    type: "image-card-row",
                    sections: [section],
                    keys: [key],
                  });
                }
              } else {
                groups.push({ type: "single", section, key });
              }
            });

            return (
              <div className="space-y-12 mb-16">
                {groups.map((group, groupIdx) => {
                  if (group.type === "image-card-row") {
                    return (
                      <div
                        key={`row-${groupIdx}`}
                        className="flex flex-wrap gap-6"
                      >
                        {group.sections.map((section, i) => (
                          <div
                            key={group.keys[i]}
                            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
                          >
                            <ProjectContentSection section={section} />
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <ProjectContentSection
                      key={group.key}
                      section={group.section}
                    />
                  );
                })}
              </div>
            );
          })()}

        {/* Paragraphe de conclusion de la page (optionnel) */}
        {project.conclusionText && (
          <div className="mb-16">
            <div
              className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: richTextToHTML(project.conclusionText),
              }}
            />
          </div>
        )}

        {/* Galerie d'images */}
        <ProjectGallery images={project.gallery || []} />

        {/* Navigation vers autres projets */}
        <RelatedProjects projects={otherProjects} />
      </div>
    </div>
  );
}
