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
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description SEO",
            ui: {
              component: "textarea"
            }
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
                description: "Le grand titre affich\xE9 en haut de la page",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sous-titre",
                description: "Texte sous le titre principal",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "rich-text",
                name: "about",
                label: "Paragraphe 'Qui sommes-nous?'",
                description: "Texte de pr\xE9sentation sous le Hero"
              }
            ]
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
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "missionsSubtitle",
                label: "Missions - Sous-titre",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "projetsSubtitle",
                label: "Projets - Sous-titre",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "equipeSubtitle",
                label: "\xC9quipe - Sous-titre",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "soutienSubtitle",
                label: "Soutien - Sous-titre",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "ressourcesSubtitle",
                label: "Ressources - Sous-titre",
                ui: { component: "textarea" }
              }
            ]
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
            label: "Ic\xF4ne Lucide",
            description: "Nom de l'ic\xF4ne depuis lucide-react",
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
              "Sparkles"
            ],
            required: true
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
          active: true,
          icon: "BookOpen"
        }
      },
      // Collection 5: Soutien
      {
        name: "support",
        label: "Soutien",
        path: "content/support",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "mainTitle",
            label: "Titre principal",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "whyTitle",
            label: "Titre 'Pourquoi nous soutenir'",
            required: true
          },
          {
            type: "string",
            name: "whyDescription",
            label: "Description 'Pourquoi nous soutenir'",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "string",
            name: "impactListTitle",
            label: "Titre de la liste d'impacts",
            required: true
          },
          {
            type: "object",
            name: "impactItems",
            label: "Points d'impact",
            description: "Les actions que votre soutien permet de r\xE9aliser",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Description de l'impact",
                ui: { component: "textarea" },
                required: true
              }
            ]
          },
          {
            type: "string",
            name: "impactMessage",
            label: "Message d'impact principal",
            required: true
          },
          {
            type: "string",
            name: "impactDescription",
            label: "Description d'impact",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "string",
            name: "howToTitle",
            label: "Titre 'Comment faire un don'",
            required: true
          },
          // Méthode 1: Versement bancaire
          {
            type: "object",
            name: "bankTransfer",
            label: "Versement bancaire",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre"
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              },
              {
                type: "string",
                name: "accountName",
                label: "Nom du compte"
              },
              {
                type: "string",
                name: "iban",
                label: "IBAN"
              },
              {
                type: "string",
                name: "bic",
                label: "BIC"
              },
              {
                type: "string",
                name: "communication",
                label: "Communication"
              }
            ]
          },
          // Méthode 2: Produits Tonaku
          {
            type: "object",
            name: "products",
            label: "Produits Tonaku",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre"
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              },
              {
                type: "string",
                name: "item1",
                label: "Produit 1"
              },
              {
                type: "string",
                name: "item2",
                label: "Produit 2"
              },
              {
                type: "string",
                name: "item3",
                label: "Produit 3"
              },
              {
                type: "string",
                name: "contactName",
                label: "Nom du contact"
              },
              {
                type: "string",
                name: "contactPhone",
                label: "T\xE9l\xE9phone"
              }
            ]
          },
          // Méthode 3: Dons matériels
          {
            type: "object",
            name: "materialDonations",
            label: "Dons mat\xE9riels",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sous-titre"
              },
              {
                type: "string",
                name: "item1",
                label: "Item 1"
              },
              {
                type: "string",
                name: "item2",
                label: "Item 2"
              },
              {
                type: "string",
                name: "item3",
                label: "Item 3"
              },
              {
                type: "string",
                name: "item4",
                label: "Item 4"
              }
            ]
          },
          // Méthode 4: Devenir membre
          {
            type: "object",
            name: "membership",
            label: "Devenir membre",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre"
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              },
              {
                type: "string",
                name: "benefit1",
                label: "Avantage 1"
              },
              {
                type: "string",
                name: "benefit2",
                label: "Avantage 2"
              },
              {
                type: "string",
                name: "benefit3",
                label: "Avantage 3"
              },
              {
                type: "string",
                name: "benefit4",
                label: "Avantage 4"
              },
              {
                type: "string",
                name: "contactEmail",
                label: "Email de contact"
              }
            ]
          }
        ]
      },
      // Collection 6: Projets
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
            type: "string",
            name: "introTitle",
            label: "Titre d'introduction de la page",
            description: "Ex: 'Nos b\xE9n\xE9ficiaires en images' (optionnel)"
          },
          {
            type: "rich-text",
            name: "introText",
            label: "Paragraphe d'introduction de la page",
            description: "Texte d'introduction qui appara\xEEt au d\xE9but (optionnel)"
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
          },
          {
            type: "object",
            name: "contentSections",
            label: "Sections de contenu du projet",
            description: "Blocs de contenu vari\xE9s (texte, image+texte, citations...)",
            list: true,
            fields: [
              {
                type: "string",
                name: "sectionTitle",
                label: "Titre de la section (optionnel)",
                description: "Un titre pour cette section sp\xE9cifique"
              },
              {
                type: "string",
                name: "layout",
                label: "Type de contenu",
                options: [
                  { value: "text-only", label: "\u{1F4DD} Paragraphe de texte" },
                  { value: "text-image-left", label: "\u{1F5BC}\uFE0F \u2190 Image \xE0 gauche + Texte" },
                  { value: "text-image-right", label: "\u{1F5BC}\uFE0F Texte + Image \xE0 droite \u2192" },
                  { value: "image-top", label: "\u{1F5BC}\uFE0F Image en haut + Texte" },
                  { value: "quote", label: "\u{1F4AC} Citation / T\xE9moignage" }
                ],
                required: true
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                description: "Image utilis\xE9e selon le type de contenu choisi"
              },
              {
                type: "rich-text",
                name: "content",
                label: "Contenu / Description",
                description: "Le texte principal de cette section",
                required: true
              }
            ]
          },
          {
            type: "rich-text",
            name: "conclusionText",
            label: "Paragraphe de conclusion de la page",
            description: "Texte final qui appara\xEEt \xE0 la fin de la page (optionnel)"
          },
          {
            type: "image",
            name: "gallery",
            label: "Galerie d'images",
            description: "Photos suppl\xE9mentaires du projet",
            list: true
          }
        ]
      },
      // Collection 7: Livres/Ressources
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
            description: "Image de couverture du livre"
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
      // Collection 8: Contact
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
