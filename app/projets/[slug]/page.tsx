import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin, Users, DollarSign, Target } from "lucide-react";
import Logo from "@/app/components/atoms/Logo";
import Button from "@/app/components/atoms/Button";
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
      {/* Navigation sticky */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-6 h-30 flex items-center justify-between">
          {/* Logo à gauche */}
          <Logo />
          
          {/* Groupe à droite : Retour + Bouton */}
          <div className="flex items-center gap-6">
            {/* Lien retour */}
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-blue-logo hover:text-primary-600 transition-colors font-semibold"
            >
              <ChevronLeft size={20} />
              <span>Retour aux projets</span>
            </Link>

            {/* Bouton Soutenez-nous (le plus à droite) */}
            <Link href="/#soutenez-nous">
              <Button variant="primary" size="sm">
                Soutenez-nous
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero du projet avec image de fond */}
      <div className="relative h-[500px] overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-logo/90 via-blue-logo/50 to-transparent" />

        {/* Titre par-dessus l'image */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-secondary-500 text-blue-logo font-bold rounded-full">
                {project.year}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur text-white font-medium rounded-full border border-white/30">
                {project.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            {project.location && (
              <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin size={24} />
                {project.location}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Informations clés en cartes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {project.details?.beneficiaries && (
            <div className="bg-accent-50 p-6 rounded-xl border-l-4 border-accent-400">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-accent-600" size={24} />
                <h3 className="font-semibold text-blue-logo">Bénéficiaires</h3>
              </div>
              <p className="text-lg text-neutral-700">
                {project.details.beneficiaries}
              </p>
            </div>
          )}

          {project.details?.budget && (
            <div className="bg-secondary-50 p-6 rounded-xl border-l-4 border-secondary-400">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-secondary-600" size={24} />
                <h3 className="font-semibold text-blue-logo">Budget</h3>
              </div>
              <p className="text-lg text-neutral-700">{project.details.budget}</p>
            </div>
          )}

          {project.details?.goal && (
            <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-400">
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-primary-600" size={24} />
                <h3 className="font-semibold text-blue-logo">Objectif</h3>
              </div>
              <p className="text-lg text-neutral-700">{project.details.goal}</p>
            </div>
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
        {project.contentSections && project.contentSections.length > 0 && (
          <div className="space-y-12 mb-16">
            {project.contentSections.map((section, idx) => {
              if (!section) return null;
              
              const layoutType = section.layout || "text-only";

              return (
                <div key={idx} className="space-y-6">
                  {/* Titre optionnel de la section */}
                  {section.sectionTitle && (
                    <h3 className="text-2xl font-bold text-blue-logo">
                      {section.sectionTitle}
                    </h3>
                  )}

                  {/* Layout: Paragraphe de texte seul */}
                  {layoutType === "text-only" && section.content && (
                    <div
                      className="prose prose-lg max-w-none text-neutral-700"
                      dangerouslySetInnerHTML={{
                        __html: richTextToHTML(section.content),
                      }}
                    />
                  )}

                  {/* Layout: Citation */}
                  {layoutType === "quote" && section.content && (
                    <div className="bg-accent-50 border-l-4 border-accent-400 p-8 rounded-r-xl">
                      <blockquote
                        className="text-xl italic text-blue-logo leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: richTextToHTML(section.content),
                        }}
                      />
                    </div>
                  )}

                  {/* Layout: Image à gauche + Texte */}
                  {layoutType === "text-image-left" && (
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {section.image && (
                        <div className="md:w-1/2 shrink-0">
                          <Image
                            src={section.image}
                            alt={section.sectionTitle || "Image"}
                            width={600}
                            height={800}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      {section.content && (
                        <div className="md:w-1/2">
                          <div
                            className="prose prose-lg max-w-none text-neutral-700"
                            dangerouslySetInnerHTML={{
                              __html: richTextToHTML(section.content),
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Layout: Texte + Image à droite */}
                  {layoutType === "text-image-right" && (
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                      {section.image && (
                        <div className="md:w-1/2 shrink-0">
                          <Image
                            src={section.image}
                            alt={section.sectionTitle || "Image"}
                            width={600}
                            height={800}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      {section.content && (
                        <div className="md:w-1/2">
                          <div
                            className="prose prose-lg max-w-none text-neutral-700"
                            dangerouslySetInnerHTML={{
                              __html: richTextToHTML(section.content),
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Layout: Image en haut + Texte */}
                  {layoutType === "image-top" && (
                    <div className="space-y-6">
                      {section.image && (
                        <Image
                          src={section.image}
                          alt={section.sectionTitle || "Image"}
                          width={1200}
                          height={600}
                          className="rounded-xl shadow-lg w-full h-auto"
                        />
                      )}
                      {section.content && (
                        <div
                          className="prose prose-lg max-w-none text-neutral-700"
                          dangerouslySetInnerHTML={{
                            __html: richTextToHTML(section.content),
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

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
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-logo mb-6">
              Galerie photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => {
                if (!img) return null;
                return (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={`Photo ${idx + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation vers autres projets */}
        {otherProjects.length > 0 && (
          <div className="pt-8 border-t border-neutral-200">
            <h3 className="text-2xl font-semibold text-blue-logo mb-6">
              Découvrez nos autres projets
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((otherProject) => {
                if (!otherProject) return null;
                const slug = generateSlug(otherProject.title);
                return (
                  <Link
                    key={otherProject.id}
                    href={`/projets/${slug}`}
                    className="group"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      {otherProject.image && (
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-blue-logo/30 group-hover:bg-blue-logo/50 transition-colors" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-secondary-500 text-blue-logo text-sm font-semibold rounded-full">
                          {otherProject.year}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-blue-logo group-hover:text-primary-600 transition-colors">
                      {otherProject.title}
                    </h4>
                    {otherProject.location && (
                      <p className="text-sm text-neutral-600 mt-1">
                        📍 {otherProject.location}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
