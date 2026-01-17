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
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
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
            label: "Icône (emoji ou nom)",
            description: "Ex: 📚, 🎓, 🌍",
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
            required: true,
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
