import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Générer un slug URL-friendly à partir d'un titre
 * Ex: "Soutien à la scolarité" → "soutien-a-la-scolarite"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, "") // Garde uniquement lettres, chiffres, espaces et tirets
    .trim()
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .replace(/-+/g, "-"); // Supprime les tirets multiples
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
 * Convertir un objet rich-text en HTML simple
 * Utile pour afficher le contenu riche dans les pages de détail
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
