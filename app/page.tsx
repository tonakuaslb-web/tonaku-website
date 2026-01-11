import Image from "next/image";
import { Navigation, Hero } from "./components/organisms";
import { Section } from "./components/templates";
import {
  TimelineCard,
  ProjectCard,
  MissionCard,
  TeamMemberCard,
  DonationMethodCard,
} from "./components/molecules";
import {
  BookOpen,
  Users,
  FileText,
  Package,
  ShoppingBag,
  GraduationCap,
  Calendar,
  CreditCard,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Histoire", href: "#histoire", article: "Notre" },
  { label: "Missions", href: "#missions" },
  { label: "Projets", href: "#projets" },
  { label: "Équipe", href: "#equipe" },
  { label: "Nos ressources", href: "#ressources", article: "Nos" },
  { label: "Nous contacter", href: "#contact", article: "Nous" },
];

export default function HomePage() {
  return (
    <>
      <Navigation
        navItems={navItems}
        ctaLabel="Soutenez-nous"
        ctaTargetId="soutien"
      />

      <main>
        {/* Section Accueil / Hero */}
        <section id="accueil">
          <Hero
            title="TONAKU"
            subtitle="Promouvoir la lecture et l'accès aux livres auprès des jeunes en Afrique"
            about="TONAKU est une association dédiée à la promotion de la lecture et à la transmission de la culture africaine. Fondée en 1992 par Robert Yava Mayonde, nous œuvrons pour l'éducation et l'épanouissement des jeunes à travers les livres et la culture."
          />
        </section>

        {/* Section Notre Histoire */}
        <Section
          id="histoire"
          background={{ type: "color", value: "bg-background-100" }}
          paddingY="xl"
          containerWidth="xl"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-12 text-center">
              Notre Histoire
            </h2>

            {/* Timeline avec ligne en dégradé - décalée vers la gauche */}
            <div className="relative ml-4 md:ml-12 lg:ml-20 xl:ml-32">
              {/* Ligne verticale en dégradé jaune -> vert -> bleu */}
              <div
                className="absolute left-[10px] top-0 bottom-0 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, #d4a024 0%, #2a8770 50%, #1e3a5f 100%)",
                }}
              />

              {/* Cartes */}
              <div className="space-y-0 relative z-10">
                <TimelineCard
                  year="1992"
                  title="Il était une fois..."
                  description="Robert Yava Mayonde crée le magasin socioculturel TONAKU, qui signifie en langue Ndembu « ouvre l'œil », un appel à la vigilance et à l'ouverture."
                />
                <TimelineCard
                  year="2004"
                  title="Naissance du magazine"
                  description="Le 10 octobre 2004, TONAKU devient officiellement un magazine socioculturel agréé sous le numéro 500/10/2004, avec siège à Likasi. Passionné de lecture et d'écriture, Robert y consacre toute sa vie."
                />
                <TimelineCard
                  year="2024"
                  title="Une nouvelle ère"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>

              {/* Continuation de la ligne après le dernier point */}
              <div className="flex gap-6 relative">
                <div className="w-5 h-5 shrink-0" />
                <div className="flex-1 pb-12">
                  <p className="text-center text-neutral-500 italic">
                    L&apos;histoire continue...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section Missions */}
        <Section
          id="missions"
          background={{ type: "color", value: "bg-accent-100" }}
          paddingY="xl"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-12 text-center">
              Nos Missions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <MissionCard
                icon={<BookOpen size={24} strokeWidth={2} />}
                description="Promouvoir la lecture et l'accès aux livres auprès des jeunes en Afrique, particulièrement au Katanga"
              />
              <MissionCard
                icon={<Users size={24} strokeWidth={2} />}
                description="Valoriser et transmettre la culture africaine (histoire, traditions, rites, langues)"
              />
              <MissionCard
                icon={<FileText size={24} strokeWidth={2} />}
                description="Éditer, publier et diffuser en ebooks les ouvrages de Robert Yava Mayonde"
              />
              <MissionCard
                icon={<Package size={24} strokeWidth={2} />}
                description="Collecter et distribuer du matériel éducatif"
              />
              <MissionCard
                icon={<ShoppingBag size={24} strokeWidth={2} />}
                description="Vendre des produits dérivés (goodies) pour financer nos actions"
              />
              <MissionCard
                icon={<GraduationCap size={24} strokeWidth={2} />}
                description="Soutenir la scolarité des jeunes par des aides éducatives et financières"
              />
              <MissionCard
                icon={<Calendar size={24} strokeWidth={2} />}
                description="Organiser des événements culturels et littéraires (conférences, salons, ateliers)"
              />
            </div>
          </div>
        </Section>

        {/* Section Projets */}
        <Section
          id="projets"
          background={{ type: "color", value: "bg-background-100" }}
          paddingY="xl"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 text-center">
              Projets 2026-2027
            </h2>
            <p className="text-xl text-neutral-600 mb-12 text-center">
              Notre plan d&apos;action pour préserver l&apos;héritage de Robert
              Yava Mayonde et soutenir l&apos;éducation des jeunes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                icon={<BookOpen size={32} strokeWidth={2} />}
                title="Réédition de 3 ouvrages"
                description="Ouvrages en cours de correction :"
                items={[
                  "Proverbes et adages Ndembu/Koza",
                  "Connaissance des Minungu et Ndembu et de leur environnement socioculturel",
                  "À qui appartient le plateau de Manika ?",
                ]}
                note="Diffusion en ebooks pour réduire les coûts"
              />
              <ProjectCard
                icon={<GraduationCap size={32} strokeWidth={2} />}
                title="Soutien scolaire et financier"
                description="Accompagnement de 2 enfants (Kolwezi et Likasi) :"
                items={[
                  "Paiement des frais de scolarité",
                  "Fourniture scolaire",
                ]}
              />
              <ProjectCard
                icon={<ShoppingBag size={32} strokeWidth={2} />}
                title="Récolte de fonds"
                description="Activités prévues :"
                items={[
                  "Vente de produits dérivés (T-shirts, bouteilles, stylos, sacs)",
                  "Boissons à base de gingembre",
                  "Organisation d'événements (ateliers de lecture, marchés, festivités)",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* Section Équipe */}
        <Section
          id="equipe"
          background={{ type: "color", value: "bg-accent-100" }}
          paddingY="xl"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 text-center">
              Notre Équipe
            </h2>
            <p className="text-xl text-neutral-600 mb-12 text-center">
              Une équipe dévouée répartie entre l&apos;Europe et l&apos;Afrique
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMemberCard
                name="Sylvie Kasamba"
                role="Présidente"
                location="Belgique"
              />
              <TeamMemberCard
                name="Jean Dupont"
                role="Coordinateur Congo"
                location="Congo (RDC)"
              />
              <TeamMemberCard
                name="Marie Martin"
                role="Trésorière"
                location="Suisse"
              />
            </div>
          </div>
        </Section>

        {/* Section Soutien */}
        <Section
          id="soutien"
          background={{ type: "color", value: "bg-primary-700" }}
          paddingY="xl"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Soutenez-nous
            </h2>
            <p className="text-xl text-white/90 mb-12 text-center max-w-4xl mx-auto">
              Vous pouvez soutenir TONAKU ASBL par vos dons pour développer nos
              activités.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Don en ligne */}
              <DonationMethodCard
                icon={<Heart size={28} strokeWidth={2} />}
                title="Don en ligne"
                description="Formulaire sécurisé"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-secondary-500 text-primary-800 font-bold py-3 px-6 rounded-lg hover:bg-secondary-400 transition-colors">
                      5 €
                    </button>
                    <button className="bg-secondary-500 text-primary-800 font-bold py-3 px-6 rounded-lg hover:bg-secondary-400 transition-colors">
                      10 €
                    </button>
                    <button className="bg-secondary-500 text-primary-800 font-bold py-3 px-6 rounded-lg hover:bg-secondary-400 transition-colors">
                      20 €
                    </button>
                    <button className="bg-secondary-500 text-primary-800 font-bold py-3 px-6 rounded-lg hover:bg-secondary-400 transition-colors">
                      30 €
                    </button>
                  </div>
                </div>
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

        {/* Section Ressources */}
        <Section
          id="ressources"
          fullHeight
          background={{ type: "color", value: "bg-background-100" }}
          className="flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Nos Ressources
            </h2>
            <p className="text-xl text-neutral-700">
              Découvrez nos livres et publications...
            </p>
          </div>
        </Section>
      </main>

      {/* Footer avec Contact intégré */}
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

            {/* Colonne 2 : Siège social (Belgique) */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-secondary-500 mt-1" />
                <h3 className="text-xl font-bold">Siège social (Belgique)</h3>
              </div>

              <div className="space-y-4 ml-8">
                <div>
                  <p className="text-sm text-white/70 mb-1">Adresse</p>
                  <p className="text-white">Rue Les Tilleur 34</p>
                  <p className="text-white">5651 Somzée</p>
                  <p className="text-white">Belgique</p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-secondary-500" />
                  <a
                    href="tel:+3249729519"
                    className="text-white hover:text-secondary-400 transition-colors"
                  >
                    (+32) 497 29 51 91
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-secondary-500" />
                  <span className="text-white/70">[à compléter]</span>
                </div>
              </div>
            </div>

            {/* Colonne 3 : Nos bureaux */}
            <div>
              <h3 className="text-xl font-bold mb-4">Nos bureaux</h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2">Kolwezi (Congo)</p>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-secondary-500" />
                    <a
                      href="tel:+243810314550"
                      className="text-white hover:text-secondary-400 transition-colors"
                    >
                      (+243) 810 314 550
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Zurich (Suisse)</p>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-secondary-500" />
                    <a
                      href="tel:+41798104106"
                      className="text-white hover:text-secondary-400 transition-colors"
                    >
                      (+41) 79 810 41 06
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Site web</p>
                  <a
                    href="https://www.tonakuasbl.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-500 hover:text-secondary-400 transition-colors"
                  >
                    www.tonakuasbl.be
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/70">
              © 2026 TONAKU ASBL. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
