import Image from "next/image";
import { Navigation, Hero } from "./components/organisms";
import { Section } from "./components/templates";
import {
  TimelineCard,
  ProjectCard,
  MissionCard,
  TeamMemberCard,
  DonationMethodCard,
  BookCard,
} from "./components/molecules";
import {
  Package,
  CreditCard,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Import des fonctions Tina et des mappers
import { getAllPageData } from "./lib/tina";
import {
  mapTimelineEvent,
  mapMission,
  mapProject,
  mapTeamMember,
  mapBook,
  mapContactLocation,
} from "./lib/mappers";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Histoire", href: "#histoire", article: "Notre" },
  { label: "Missions", href: "#missions" },
  { label: "Projets", href: "#projets" },
  { label: "Équipe", href: "#equipe" },
  { label: "Nos ressources", href: "#ressources", article: "Nos" },
  { label: "Nous contacter", href: "#contact", article: "Nous" },
];

export default async function HomePage() {
  // Récupérer toutes les données depuis Tina CMS
  const { homeData, timeline, missions, projects, team, books, contact } =
    await getAllPageData();

  return (
    <>
      <Navigation
        navItems={navItems}
        ctaLabel="Soutenez-nous"
        ctaTargetId="soutien"
      />

      <main>
        {/* Section Accueil / Hero - DONNÉES DYNAMIQUES */}
        <section id="accueil">
          <Hero
            title={homeData.title}
            subtitle={homeData.subtitle}
            about={homeData.about || undefined}
          />
        </section>

        {/* Section Histoire - DONNÉES DYNAMIQUES */}
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
              <p className="text-xl text-neutral-700">
                {homeData.sections.histoireSubtitle}
              </p>
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
                {timeline.map((event) => {
                  const mappedEvent = mapTimelineEvent(event);
                  return (
                    <TimelineCard
                      key={event.id}
                      year={mappedEvent.year}
                      title={mappedEvent.title}
                      description={mappedEvent.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* Section Missions - DONNÉES DYNAMIQUES */}
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
              <p className="text-xl text-neutral-700">
                {homeData.sections.missionsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((mission) => {
                const mappedMission = mapMission(mission);
                const Icon = mappedMission.icon as React.ComponentType<{ size?: number }>;
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

        {/* Section Projets - DONNÉES DYNAMIQUES */}
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
              <p className="text-xl text-neutral-700">
                {homeData.sections.projetsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    description={mappedProject.description}
                  />
                );
              })}
            </div>
          </div>
        </Section>

        {/* Section Équipe - DONNÉES DYNAMIQUES */}
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
              <p className="text-xl text-neutral-700">
                {homeData.sections.equipeSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => {
                const mappedMember = mapTeamMember(member);
                return (
                  <TeamMemberCard key={member.id} {...mappedMember} />
                );
              })}
            </div>
          </div>
        </Section>

        {/* Section Soutien (statique pour le moment) */}
        <Section
          id="soutien"
          background={{ type: "color", value: "bg-primary-700" }}
          paddingY="xl"
          textColor="text-white"
        >
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Soutenez-nous
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {homeData.sections.soutienSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dons financiers */}
              <DonationMethodCard
                icon={<Heart size={28} strokeWidth={2} />}
                title="Don financier"
              >
                <p className="text-white/90 text-sm">
                  Soutenez directement nos projets avec un don libre ou
                  récurrent.
                </p>
              </DonationMethodCard>

              {/* Virement bancaire */}
              <DonationMethodCard
                icon={<CreditCard size={28} strokeWidth={2} />}
                title="Virement bancaire"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 text-sm mb-2">IBAN :</p>
                    <div className="bg-primary-600/50 rounded-lg p-4">
                      <p className="text-white font-mono">BE...</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm italic">
                    Les coordonnées complètes seront communiquées sur demande
                  </p>
                </div>
              </DonationMethodCard>

              {/* Dons matériels */}
              <DonationMethodCard
                icon={<Package size={28} strokeWidth={2} />}
                title="Dons matériels"
              >
                <div className="space-y-4">
                  <p className="text-white/80 text-sm font-semibold">
                    Fournitures scolaires :
                  </p>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 mt-1">•</span>
                      <span>Cartables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 mt-1">•</span>
                      <span>Stylos et crayons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 mt-1">•</span>
                      <span>Cahiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 mt-1">•</span>
                      <span>Matériel éducatif</span>
                    </li>
                  </ul>
                </div>
              </DonationMethodCard>
            </div>
          </div>
        </Section>

        {/* Section Ressources - DONNÉES DYNAMIQUES */}
        <Section
          id="ressources"
          background={{ type: "color", value: "bg-background-100" }}
          paddingY="xl"
        >
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
                Nos Ressources
              </h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {homeData.sections.ressourcesSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {books.map((book) => {
                const mappedBook = mapBook(book);
                return <BookCard key={book.id} {...mappedBook} />;
              })}
            </div>
          </div>
        </Section>
      </main>

      {/* Footer avec Contact - DONNÉES DYNAMIQUES */}
      <footer id="contact" className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Nous contacter
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Colonne 1 : Logo et devise */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="TONAKU Logo"
                  width={112}
                  height={112}
                  className="object-contain"
                />
                <h3 className="text-2xl font-bold">TONAKU</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Préserver les livres, favoriser l&apos;accès au savoir, soutenir
                la scolarité des jeunes.
              </p>
            </div>

            {/* Colonnes 2 & 3 : Contacts dynamiques */}
            {contact.map((location) => {
              const mappedLocation = mapContactLocation(location);
              return (
                <div key={location.id}>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={20} className="text-secondary-500 mt-1" />
                    <h3 className="text-xl font-bold">
                      {mappedLocation.country}
                      {mappedLocation.city && ` (${mappedLocation.city})`}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {mappedLocation.details.map((detail, idx) => (
                      <div key={`${location.id}-${idx}`} className="flex items-start gap-2">
                        {detail.label === "Téléphone" && (
                          <Phone size={16} className="text-secondary-500 mt-1" />
                        )}
                        {detail.label === "Email" && (
                          <Mail size={16} className="text-secondary-500 mt-1" />
                        )}
                        {detail.label === "Adresse" && (
                          <MapPin size={16} className="text-secondary-500 mt-1" />
                        )}
                        <div>
                          <p className="text-white/70 text-sm">{detail.label}</p>
                          <p className="text-white/90">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70">
              © {new Date().getFullYear()} TONAKU ASBL. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
