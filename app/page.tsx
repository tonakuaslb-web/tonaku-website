import {
  Navigation,
  Hero,
  TimelineSection,
  MissionsSection,
  ProjectsSection,
  TeamSection,
  SupportSection,
  ResourcesSection,
  Footer,
} from "./components/organisms";

// Import des fonctions Tina
import { getAllPageData } from "./lib/tina";
import { generateSlug } from "./lib/utils";

export default async function HomePage() {
  // Récupérer toutes les données depuis Tina CMS
  const {
    homeData,
    timeline,
    missions,
    projects,
    team,
    books,
    contact,
    support,
  } = await getAllPageData();

  // Créer le dropdown des projets pour la navigation
  const projectsDropdown = projects.map((project) => ({
    label: project.title,
    href: `/projets/${generateSlug(project.title)}`,
  }));

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Notre Histoire", href: "#histoire", article: "Notre" },
    { label: "Missions", href: "#missions" },
    {
      label: "Projets",
      href: "#projets",
      dropdown: projectsDropdown,
    },
    { label: "Équipe", href: "#equipe" },
    { label: "Nos ressources", href: "#ressources", article: "Nos" },
    { label: "Nous contacter", href: "#contact", article: "Nous" },
  ];

  return (
    <>
      <Navigation
        navItems={navItems}
        ctaLabel="Soutenez-nous"
        ctaTargetId="soutenez-nous"
      />

      <main>
        {/* Section Accueil / Hero */}
        <section id="accueil">
          <Hero
            title={homeData.title}
            subtitle={homeData.subtitle}
            about={homeData.about || undefined}
          />
        </section>

        {/* Section Histoire */}
        <TimelineSection
          subtitle={homeData.sections.histoireSubtitle}
          events={timeline}
        />

        {/* Section Missions */}
        <MissionsSection
          subtitle={homeData.sections.missionsSubtitle}
          missions={missions}
        />

        {/* Section Projets */}
        <ProjectsSection
          subtitle={homeData.sections.projetsSubtitle}
          projects={projects}
        />

        {/* Section Équipe */}
        <TeamSection
          subtitle={homeData.sections.equipeSubtitle}
          members={team}
        />

        {/* Section Soutien */}
        <SupportSection support={support} />

        {/* Section Ressources */}
        <ResourcesSection
          subtitle={homeData.sections.ressourcesSubtitle}
          books={books}
        />
      </main>

      {/* Footer avec Contact */}
      <Footer contacts={contact} />
    </>
  );
}
