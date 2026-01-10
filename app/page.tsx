import { Navigation } from "./components/organisms";

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

      <main className="pt-20">
        {/* Section Accueil / Hero */}
        <section
          id="accueil"
          className="min-h-screen flex items-center justify-center bg-primary-800 text-white"
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">TONAKU</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Promouvoir la lecture auprès des jeunes en Afrique
            </p>
          </div>
        </section>

        {/* Section Notre Histoire */}
        <section
          id="histoire"
          className="min-h-screen flex items-center justify-center bg-background-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Notre Histoire
            </h2>
            <p className="text-xl text-neutral-700">
              Depuis 1992, nous œuvrons pour la promotion de la lecture...
            </p>
          </div>
        </section>

        {/* Section Missions */}
        <section
          id="missions"
          className="min-h-screen flex items-center justify-center bg-accent-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Nos Missions
            </h2>
            <p className="text-xl text-neutral-700">
              Promouvoir la lecture, éditer des livres, organiser des
              ateliers...
            </p>
          </div>
        </section>

        {/* Section Projets */}
        <section
          id="projets"
          className="min-h-screen flex items-center justify-center bg-background-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Nos Projets
            </h2>
            <p className="text-xl text-neutral-700">
              Réédition d&apos;ouvrages, soutien scolaire, récolte de fonds...
            </p>
          </div>
        </section>

        {/* Section Équipe */}
        <section
          id="equipe"
          className="min-h-screen flex items-center justify-center bg-accent-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-neutral-700">
              Une équipe dévouée répartie entre l&apos;Europe et
              l&apos;Afrique...
            </p>
          </div>
        </section>

        {/* Section Soutien */}
        <section
          id="soutien"
          className="min-h-screen flex items-center justify-center bg-primary-600 text-white"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soutenez-nous
            </h2>
            <p className="text-xl mb-8">
              Faites un don pour soutenir nos actions...
            </p>
          </div>
        </section>

        {/* Section Ressources */}
        <section
          id="ressources"
          className="min-h-screen flex items-center justify-center bg-background-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Nos Ressources
            </h2>
            <p className="text-xl text-neutral-700">
              Découvrez nos livres et publications...
            </p>
          </div>
        </section>

        {/* Section Contact */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-accent-100"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-neutral-700">
              Belgique • Congo • Suisse
            </p>
          </div>
        </section>
      </main>

      {/* Footer - À développer */}
      <footer className="bg-primary-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary-100">
            © 2026 TONAKU - Tous droits réservés
          </p>
        </div>
      </footer>
    </>
  );
}
