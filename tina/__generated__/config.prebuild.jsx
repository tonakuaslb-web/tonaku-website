// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Collection 1: Pages (Accueil, etc.)
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true
          }
        ]
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
            label: "Ann\xE9e",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Titre de l'\xE9v\xE9nement",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true
          },
          {
            type: "image",
            name: "image",
            label: "Image (optionnelle)"
          },
          {
            type: "number",
            name: "order",
            label: "Ordre d'affichage",
            description: "Num\xE9ro pour l'ordre chronologique"
          }
        ]
      },
      // Collection 3: Équipe
      {
        name: "team",
        label: "\xC9quipe",
        path: "content/team",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nom complet",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "role",
            label: "R\xF4le/Fonction",
            required: true
          },
          {
            type: "string",
            name: "country",
            label: "Pays",
            options: ["Belgique", "Suisse", "Congo", "Autre"],
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Ville"
          },
          {
            type: "string",
            name: "phone",
            label: "T\xE9l\xE9phone"
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "image",
            name: "photo",
            label: "Photo (optionnelle)"
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biographie",
            isBody: true
          }
        ]
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
            required: true
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description d\xE9taill\xE9e",
            isBody: true
          },
          {
            type: "string",
            name: "icon",
            label: "Ic\xF4ne (emoji ou nom)",
            description: "Ex: \u{1F4DA}, \u{1F393}, \u{1F30D}"
          },
          {
            type: "number",
            name: "order",
            label: "Ordre d'affichage",
            required: true
          },
          {
            type: "boolean",
            name: "active",
            label: "Mission active",
            description: "D\xE9cocher pour masquer temporairement"
          }
        ],
        defaultItem: {
          active: true
        }
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
            required: true
          },
          {
            type: "string",
            name: "year",
            label: "Ann\xE9e",
            description: "Ex: 2026, 2026-2027",
            required: true
          },
          {
            type: "string",
            name: "status",
            label: "Statut",
            options: ["En cours", "Planifi\xE9", "Termin\xE9"],
            required: true
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true
          },
          {
            type: "image",
            name: "image",
            label: "Image du projet"
          },
          {
            type: "string",
            name: "location",
            label: "Lieu",
            description: "Ex: Kolwezi, Likasi"
          },
          {
            type: "object",
            name: "details",
            label: "D\xE9tails suppl\xE9mentaires",
            fields: [
              {
                type: "string",
                name: "beneficiaries",
                label: "B\xE9n\xE9ficiaires",
                description: "Ex: 2 enfants"
              },
              {
                type: "string",
                name: "budget",
                label: "Budget estim\xE9"
              },
              {
                type: "string",
                name: "goal",
                label: "Objectif"
              }
            ]
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
            description: "Par d\xE9faut: Robert Yava Mayonde"
          },
          {
            type: "string",
            name: "year",
            label: "Ann\xE9e de publication"
          },
          {
            type: "string",
            name: "isbn",
            label: "ISBN"
          },
          {
            type: "image",
            name: "cover",
            label: "Couverture",
            description: "Image de couverture du livre",
            required: true
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true
          },
          {
            type: "string",
            name: "category",
            label: "Cat\xE9gorie",
            options: [
              "Histoire",
              "Culture",
              "Proverbes",
              "Linguistique",
              "Autre"
            ]
          },
          {
            type: "number",
            name: "pages",
            label: "Nombre de pages"
          },
          {
            type: "object",
            name: "availability",
            label: "Disponibilit\xE9",
            fields: [
              {
                type: "boolean",
                name: "ebook",
                label: "eBook disponible"
              },
              {
                type: "string",
                name: "ebookUrl",
                label: "Lien de t\xE9l\xE9chargement eBook",
                description: "URL du fichier PDF/EPUB"
              },
              {
                type: "boolean",
                name: "print",
                label: "Version papier disponible"
              },
              {
                type: "string",
                name: "printUrl",
                label: "Lien d'achat version papier"
              },
              {
                type: "string",
                name: "price",
                label: "Prix",
                description: "Ex: Gratuit, 10\u20AC, etc."
              }
            ]
          },
          {
            type: "boolean",
            name: "featured",
            label: "Mettre en avant",
            description: "Afficher en premi\xE8re position"
          }
        ],
        defaultItem: {
          author: "Robert Yava Mayonde",
          featured: false
        }
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
            options: ["Belgique", "Congo", "Suisse"]
          },
          {
            type: "string",
            name: "city",
            label: "Ville"
          },
          {
            type: "string",
            name: "address",
            label: "Adresse compl\xE8te",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "phone",
            label: "T\xE9l\xE9phone"
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "object",
            name: "hours",
            label: "Horaires",
            fields: [
              {
                type: "string",
                name: "weekdays",
                label: "Jours de semaine"
              },
              {
                type: "string",
                name: "weekend",
                label: "Week-end"
              }
            ]
          },
          {
            type: "rich-text",
            name: "notes",
            label: "Notes suppl\xE9mentaires",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
