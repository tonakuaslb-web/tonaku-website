import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Collection 1: Page d'accueil
      {
        name: "accueil",
        label: "Accueil",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre de la page",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description SEO",
            ui: {
              component: "textarea",
            },
          },
          // Section Hero
          {
            type: "object",
            name: "hero",
            label: "Section Hero (accueil)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre principal",
                description: "Le grand titre affiché en haut de la page",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sous-titre",
                description: "Texte sous le titre principal",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "rich-text",
                name: "about",
                label: "Paragraphe 'Qui sommes-nous?'",
                description: "Texte de présentation sous le Hero",
              },
            ],
          },
          // Descriptions des sections
          {
            type: "object",
            name: "sections",
            label: "Descriptions des sections",
            fields: [
              {
                type: "string",
                name: "histoireSubtitle",
                label: "Histoire - Sous-titre",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "missionsSubtitle",
                label: "Missions - Sous-titre",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "projetsSubtitle",
                label: "Projets - Sous-titre",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "equipeSubtitle",
                label: "Équipe - Sous-titre",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "soutienSubtitle",
                label: "Soutien - Sous-titre",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "ressourcesSubtitle",
                label: "Ressources - Sous-titre",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // Collection 2: Histoire (Timeline)
      {
        name: "histoire",
        label: "Histoire",
        path: "content/histoire",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "year",
            label: "Année",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titre de l'événement",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image (optionnelle)",
          },
          {
            type: "number",
            name: "order",
            label: "Ordre d'affichage",
            description: "Numéro pour l'ordre chronologique",
          },
        ],
      },

      // Collection 3: Équipe
      {
        name: "team",
        label: "Équipe",
        path: "content/team",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nom complet",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Rôle/Fonction",
            required: true,
          },
          {
            type: "string",
            name: "country",
            label: "Pays",
            options: ["Belgique", "Suisse", "Congo", "Autre"],
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Ville",
          },
          {
            type: "string",
            name: "phone",
            label: "Téléphone",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "image",
            name: "photo",
            label: "Photo (optionnelle)",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biographie",
            isBody: true,
          },
        ],
      },

      // Collection 4: Missions
      {
        name: "mission",
        label: "Missions",
        path: "content/missions",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre de la mission",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description détaillée",
            isBody: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icône Lucide",
            description: "Nom de l'icône depuis lucide-react",
            options: [
              "BookOpen",
              "GraduationCap",
              "Globe",
              "Users",
              "Heart",
              "Lightbulb",
              "Target",
              "BookMarked",
              "Library",
              "School",
              "Languages",
              "Sparkles",
            ],
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Ordre d'affichage",
            required: true,
          },
          {
            type: "boolean",
            name: "active",
            label: "Mission active",
            description: "Décocher pour masquer temporairement",
          },
        ],
        defaultItem: {
          active: true,
          icon: "BookOpen",
        },
      },

      // Collection 5: Projets
      {
        name: "project",
        label: "Projets",
        path: "content/projects",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre du projet",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "year",
            label: "Année",
            description: "Ex: 2026, 2026-2027",
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Statut",
            options: ["En cours", "Planifié", "Terminé"],
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image du projet",
          },
          {
            type: "string",
            name: "location",
            label: "Lieu",
            description: "Ex: Kolwezi, Likasi",
          },
          {
            type: "object",
            name: "details",
            label: "Détails supplémentaires",
            fields: [
              {
                type: "string",
                name: "beneficiaries",
                label: "Bénéficiaires",
                description: "Ex: 2 enfants",
              },
              {
                type: "string",
                name: "budget",
                label: "Budget estimé",
              },
              {
                type: "string",
                name: "goal",
                label: "Objectif",
              },
            ],
          },
          {
            type: "object",
            name: "beneficiaryProfiles",
            label: "Profils des bénéficiaires",
            description: "Photos et histoires des bénéficiaires du projet",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nom complet",
                required: true,
              },
              {
                type: "number",
                name: "age",
                label: "Âge",
              },
              {
                type: "image",
                name: "photo",
                label: "Photo",
              },
              {
                type: "rich-text",
                name: "story",
                label: "Son histoire",
                description: "Présentation du bénéficiaire, son parcours",
              },
              {
                type: "string",
                name: "dream",
                label: "Son rêve / Ses aspirations",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "image",
            name: "gallery",
            label: "Galerie d'images",
            description: "Photos supplémentaires du projet",
            list: true,
          },
        ],
      },

      // Collection 6: Livres/Ressources
      {
        name: "book",
        label: "Livres",
        path: "content/books",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre du livre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
            description: "Par défaut: Robert Yava Mayonde",
          },
          {
            type: "string",
            name: "year",
            label: "Année de publication",
          },
          {
            type: "string",
            name: "isbn",
            label: "ISBN",
          },
          {
            type: "image",
            name: "cover",
            label: "Couverture",
            description: "Image de couverture du livre",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "string",
            name: "category",
            label: "Catégorie",
            options: [
              "Histoire",
              "Culture",
              "Proverbes",
              "Linguistique",
              "Autre",
            ],
          },
          {
            type: "number",
            name: "pages",
            label: "Nombre de pages",
          },
          {
            type: "object",
            name: "availability",
            label: "Disponibilité",
            fields: [
              {
                type: "boolean",
                name: "ebook",
                label: "eBook disponible",
              },
              {
                type: "string",
                name: "ebookUrl",
                label: "Lien de téléchargement eBook",
                description: "URL du fichier PDF/EPUB",
              },
              {
                type: "boolean",
                name: "print",
                label: "Version papier disponible",
              },
              {
                type: "string",
                name: "printUrl",
                label: "Lien d'achat version papier",
              },
              {
                type: "string",
                name: "price",
                label: "Prix",
                description: "Ex: Gratuit, 10€, etc.",
              },
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Mettre en avant",
            description: "Afficher en première position",
          },
        ],
        defaultItem: {
          author: "Robert Yava Mayonde",
          featured: false,
        },
      },

      // Collection 7: Contact
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "country",
            label: "Pays",
            isTitle: true,
            required: true,
            options: ["Belgique", "Congo", "Suisse"],
          },
          {
            type: "string",
            name: "city",
            label: "Ville",
          },
          {
            type: "string",
            name: "address",
            label: "Adresse complète",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "phone",
            label: "Téléphone",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "object",
            name: "hours",
            label: "Horaires",
            fields: [
              {
                type: "string",
                name: "weekdays",
                label: "Jours de semaine",
              },
              {
                type: "string",
                name: "weekend",
                label: "Week-end",
              },
            ],
          },
          {
            type: "rich-text",
            name: "notes",
            label: "Notes supplémentaires",
            isBody: true,
          },
        ],
      },
    ],
  },
});
