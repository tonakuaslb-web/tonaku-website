/**
 * Fonctions de transformation (mappers) pour convertir les données Tina
 * en props compatibles avec nos composants React
 */

import * as LucideIcons from "lucide-react";
import type {
  Histoire,
  Mission,
  Project,
  Team,
  Book,
  Contact,
} from "@/tina/__generated__/types";

/**
 * Mapper pour TimelineCard
 */
export function mapTimelineEvent(event: Histoire) {
  return {
    year: event.year,
    title: event.title,
    description: extractPlainText(event.description),
    image: event.image || undefined,
  };
}

/**
 * Mapper pour MissionCard
 */
export function mapMission(mission: Mission) {
  // Récupérer l'icône Lucide dynamiquement
  const IconComponent =
    LucideIcons[mission.icon as keyof typeof LucideIcons] ||
    LucideIcons.BookOpen;

  return {
    icon: IconComponent,
    title: mission.title,
    description: extractPlainText(mission.description),
  };
}

/**
 * Mapper pour ProjectCard
 */
export function mapProject(project: Project) {
  return {
    title: project.title,
    year: project.year,
    status: project.status,
    location: project.location || undefined,
    beneficiaries: project.details?.beneficiaries || undefined,
    budget: project.details?.budget || undefined,
    image: project.image || undefined,
    description: extractPlainText(project.description),
  };
}

/**
 * Mapper pour TeamMemberCard
 */
export function mapTeamMember(member: Team) {
  return {
    name: member.name,
    role: member.role,
    location: member.location || member.country,
    photo: member.photo || undefined,
    email: member.email || undefined,
    phone: member.phone || undefined,
  };
}

/**
 * Mapper pour BookCard
 */
export function mapBook(book: Book) {
  return {
    title: book.title,
    author: book.author || "Robert Yava Mayonde",
    year: book.year || "",
    category: book.category || undefined,
    description: extractPlainText(book.description),
    coverImage: book.cover || undefined,
    downloadLink: book.availability?.ebookUrl || undefined,
    featured: book.featured || false,
  };
}

/**
 * Mapper pour ContactCard
 */
export function mapContactLocation(location: Contact) {
  const details: Array<{ label: string; value: string }> = [];

  if (location.address) {
    details.push({ label: "Adresse", value: location.address });
  }
  if (location.phone) {
    details.push({ label: "Téléphone", value: location.phone });
  }
  if (location.email) {
    details.push({ label: "Email", value: location.email });
  }
  if (location.hours?.weekdays) {
    details.push({ label: "Horaires", value: location.hours.weekdays });
  }

  return {
    country: location.country,
    city: location.city || undefined,
    details,
  };
}

/**
 * Type pour le rich-text Tina (objet JSON)
 */
type RichTextTextNode = {
  text?: string;
  bold?: boolean;
  italic?: boolean;
};

type RichTextChild = {
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  children?: Array<RichTextChild | RichTextTextNode>;
};

type RichTextNode = {
  type: string;
  children?: Array<RichTextChild>;
};

type TinaRichText = string | RichTextNode | Record<string, unknown> | null | undefined;

/**
 * Extraire le texte brut depuis un objet rich-text Tina
 * Simplifie le contenu pour l'affichage
 */
function extractPlainText(richText: TinaRichText): string {
  if (!richText) return "";

  // Si c'est déjà une string, la retourner
  if (typeof richText === "string") return richText;

  // Si c'est un objet rich-text Tina avec la structure attendue
  const richTextNode = richText as RichTextNode;
  if (richTextNode.children && Array.isArray(richTextNode.children)) {
    return richTextNode.children
      .map((child) => {
        if (child.type === "p" || child.type === "text") {
          return child.children
            ?.map((c) => c.text || "")
            .join("")
            .trim();
        }
        return "";
      })
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

/**
 * Convertir un objet rich-text en HTML simple
 * Utile pour le paragraphe "Qui sommes-nous?" du Hero
 */
export function richTextToHTML(richText: TinaRichText): string {
  if (!richText) return "";

  // Si c'est déjà une string, la retourner
  if (typeof richText === "string") return richText;

  // Si c'est un objet rich-text Tina avec la structure attendue
  const richTextNode = richText as RichTextNode;
  if (richTextNode.children && Array.isArray(richTextNode.children)) {
    return richTextNode.children
      .map((child) => {
        if (child.type === "p") {
          const text = child.children
            ?.map((c) => {
              let content = c.text || "";
              // Gestion du formatage
              if (c.bold) content = `<strong>${content}</strong>`;
              if (c.italic) content = `<em>${content}</em>`;
              return content;
            })
            .join("");
          return `<p>${text}</p>`;
        }
        if (child.type === "ul" || child.type === "ol") {
          const tag = child.type;
          const items = child.children
            ?.map((li: RichTextChild) => {
              // Structure TinaCMS : li → lic (list item content) → texte
              // Il faut descendre deux niveaux pour atteindre le texte
              const text = (li.children as RichTextChild[])
                ?.map((lic) => {
                  return (lic.children as RichTextTextNode[] ?? [])
                    .map((c) => {
                      let content = c.text || "";
                      if (c.bold) content = `<strong>${content}</strong>`;
                      if (c.italic) content = `<em>${content}</em>`;
                      return content;
                    })
                    .join("") || lic.text || "";
                })
                .join("");
              return `<li>${text}</li>`;
            })
            .join("");
          const listClass = tag === "ul" ? "list-disc pl-5 space-y-1 my-2" : "list-decimal pl-5 space-y-1 my-2";
          return `<${tag} class="${listClass}">${items}</${tag}>`;
        }
        return "";
      })
      .join("");
  }

  return "";
}
