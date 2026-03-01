import Image from "next/image";
import { Navigation, Hero, Carousel } from "./components/organisms";
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
import { generateSlug } from "./lib/utils";

export default async function HomePage() {
  // Récupérer toutes les données depuis Tina CMS
  const { homeData, timeline, missions, projects, team, books, contact, support } =
    await getAllPageData();

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
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-neutral-700 text-left">
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
                      image={mappedEvent.image}
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

            <div className="flex flex-col gap-2 max-w-5xl mx-auto">
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

        {/* Section Soutien */}
        <Section
          id="soutenez-nous"
          background={{ type: "color", value: "bg-primary-700" }}
          paddingY="xl"
          textColor="text-white"
        >
          <div className="space-y-16">
            {/* En-tête */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {support.mainTitle}
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-400">
                {support.whyTitle}
              </h3>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                {support.whyDescription}
              </p>
            </div>

            {/* Ce que nous pouvons faire avec votre soutien */}
            <div className="max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold mb-6 text-center">
                {support.impactListTitle}
              </h4>
              <ul className="space-y-4 text-white/90 text-lg">
                {support.impactItems?.map((item, index) => (
                  <li key={`impact-${index}`} className="flex items-start gap-3">
                    <span className="text-secondary-400 mt-1 text-2xl">✓</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Message d'impact */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-2xl font-semibold text-secondary-400 mb-4">
                {support.impactMessage}
              </p>
              <p className="text-lg text-white/90 leading-relaxed italic">
                {support.impactDescription}
              </p>
            </div>

            {/* Comment faire un don */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-8">
                {support.howToTitle}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 1. Versement bancaire */}
                {support.bankTransfer && (
                  <DonationMethodCard
                    icon={<CreditCard size={28} strokeWidth={2} />}
                    title={support.bankTransfer.title || "Versement bancaire"}
                  >
                    <div className="space-y-4">
                      {support.bankTransfer.description && (
                        <p className="text-white/90 text-sm">
                          {support.bankTransfer.description}
                        </p>
                      )}
                      <div className="space-y-2">
                        {support.bankTransfer.accountName && (
                          <p className="text-white/80 text-sm font-semibold">
                            Nom : {support.bankTransfer.accountName}
                          </p>
                        )}
                        {support.bankTransfer.iban && (
                          <div className="bg-primary-600/50 rounded-lg p-3">
                            <p className="text-white/80 text-xs mb-1">IBAN :</p>
                            <p className="text-white font-mono text-sm">
                              {support.bankTransfer.iban}
                            </p>
                          </div>
                        )}
                        {support.bankTransfer.bic && (
                          <div className="bg-primary-600/50 rounded-lg p-3">
                            <p className="text-white/80 text-xs mb-1">BIC :</p>
                            <p className="text-white font-mono text-sm">
                              {support.bankTransfer.bic}
                            </p>
                          </div>
                        )}
                        {support.bankTransfer.communication && (
                          <p className="text-white/80 text-xs italic mt-2">
                            Communication : {support.bankTransfer.communication}
                          </p>
                        )}
                      </div>
                    </div>
                  </DonationMethodCard>
                )}

                {/* 2. Produits Tonaku */}
                {support.products && (
                  <DonationMethodCard
                    icon={<Package size={28} strokeWidth={2} />}
                    title={support.products.title || "Produits Tonaku"}
                  >
                    <div className="space-y-4">
                      {support.products.description && (
                        <p className="text-white/90 text-sm font-semibold">
                          {support.products.description}
                        </p>
                      )}
                      <ul className="space-y-2 text-white/90 text-sm">
                        {support.products.item1 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.products.item1}</span>
                          </li>
                        )}
                        {support.products.item2 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.products.item2}</span>
                          </li>
                        )}
                        {support.products.item3 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.products.item3}</span>
                          </li>
                        )}
                      </ul>
                      {(support.products.contactName || support.products.contactPhone) && (
                        <div className="bg-primary-600/30 rounded-lg p-3 mt-4">
                          <p className="text-white/90 text-xs">
                            {support.products.contactName && (
                              <>
                                <span className="font-semibold">Contact :</span> {support.products.contactName}
                                <br />
                              </>
                            )}
                            {support.products.contactPhone && (
                              <>
                                <span className="font-semibold">Tél :</span> {support.products.contactPhone}
                              </>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </DonationMethodCard>
                )}

                {/* 3. Dons matériels */}
                {support.materialDonations && (
                  <DonationMethodCard
                    icon={<Package size={28} strokeWidth={2} />}
                    title={support.materialDonations.title || "Dons matériels"}
                  >
                    <div className="space-y-4">
                      {support.materialDonations.subtitle && (
                        <p className="text-white/80 text-sm font-semibold">
                          {support.materialDonations.subtitle}
                        </p>
                      )}
                      <ul className="space-y-2 text-white/90">
                        {support.materialDonations.item1 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.materialDonations.item1}</span>
                          </li>
                        )}
                        {support.materialDonations.item2 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.materialDonations.item2}</span>
                          </li>
                        )}
                        {support.materialDonations.item3 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.materialDonations.item3}</span>
                          </li>
                        )}
                        {support.materialDonations.item4 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">•</span>
                            <span>{support.materialDonations.item4}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </DonationMethodCard>
                )}

                {/* 4. Devenir membre */}
                {support.membership && (
                  <DonationMethodCard
                    icon={<Heart size={28} strokeWidth={2} />}
                    title={support.membership.title || "Devenir membre"}
                  >
                    <div className="space-y-4">
                      {support.membership.description && (
                        <p className="text-white/90 text-sm font-semibold">
                          {support.membership.description}
                        </p>
                      )}
                      <ul className="space-y-2 text-white/90 text-sm">
                        {support.membership.benefit1 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">✓</span>
                            <span>{support.membership.benefit1}</span>
                          </li>
                        )}
                        {support.membership.benefit2 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">✓</span>
                            <span>{support.membership.benefit2}</span>
                          </li>
                        )}
                        {support.membership.benefit3 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">✓</span>
                            <span>{support.membership.benefit3}</span>
                          </li>
                        )}
                        {support.membership.benefit4 && (
                          <li className="flex items-start gap-2">
                            <span className="text-secondary-400 mt-1">✓</span>
                            <span>{support.membership.benefit4}</span>
                          </li>
                        )}
                      </ul>
                      {support.membership.contactEmail && (
                        <div className="bg-primary-600/30 rounded-lg p-3 mt-4">
                          <p className="text-white/90 text-xs">
                            <span className="font-semibold">Envoyez votre candidature :</span><br />
                            {support.membership.contactEmail}
                          </p>
                        </div>
                      )}
                    </div>
                  </DonationMethodCard>
                )}
              </div>
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

            <Carousel>
              {books.map((book) => {
                const mappedBook = mapBook(book);
                return <BookCard key={book.id} {...mappedBook} />;
              })}
            </Carousel>
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
