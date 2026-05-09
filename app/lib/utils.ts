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
 * Types pour le rich-text Tina (objet JSON)
 */
type RichTextLeaf = {
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  url?: string;
  children?: RichTextLeaf[];
};

type RichTextNode = {
  type: string;
  children?: RichTextLeaf[];
};

type TinaRichText =
  | string
  | RichTextNode
  | Record<string, unknown>
  | null
  | undefined;

/**
 * Rendre les enfants inline (text leaves) en HTML.
 * Applique gras, italique, souligné sans modifier la taille ou la couleur du texte.
 */
function renderInlineLeaves(children: RichTextLeaf[] | undefined): string {
  if (!children) return "";
  return children
    .map((c) => {
      if (c.type === "br") return "<br />";
      let content = (c.text || "").replace(/\n/g, "<br />");
      if (!content) return "";
      if (c.bold) content = `<strong>${content}</strong>`;
      if (c.italic) content = `<em>${content}</em>`;
      if (c.underline) content = `<u style="text-underline-offset:2px">${content}</u>`;
      return content;
    })
    .join("");
}

/**
 * Rendre les enfants d'un li (structure Tina : li → lic → text leaves)
 */
function renderListItemChildren(li: RichTextLeaf): string {
  return (li.children ?? [])
    .map((lic) => {
      if (lic.type === "lic") return renderInlineLeaves(lic.children);
      return renderInlineLeaves([lic]);
    })
    .join("");
}

/**
 * Convertir un objet rich-text Tina en HTML.
 * Utilise des styles inline uniquement : n'interfère pas avec les classes
 * du conteneur parent (taille, couleur, etc.).
 *
 * Supporte :
 * - Sauts de ligne entre paragraphes
 * - Gras, italique, souligné
 * - Citations (blockquote)
 * - Listes à puces et numérotées
 */
export function richTextToHTML(richText: TinaRichText): string {
  if (!richText) return "";
  if (typeof richText === "string") return richText;

  const node = richText as RichTextNode;
  if (!node.children || !Array.isArray(node.children)) return "";

  return node.children
    .map((child) => {
      const type = child.type;

      // Paragraphe : marge verticale en inline style pour ne pas perturber le reste
      if (type === "p") {
        const inner = renderInlineLeaves(child.children);
        if (!inner) return "";
        return `<p style="margin:0.5em 0">${inner}</p>`;
      }

      // Citation / Blockquote
      if (type === "blockquote") {
        const inner = renderInlineLeaves(child.children);
        return `<blockquote style="border-left:3px solid currentColor;opacity:0.8;padding-left:0.75rem;font-style:italic;margin:0.75em 0">${inner}</blockquote>`;
      }

      // Listes
      if (type === "ul" || type === "ol") {
        const items = (child.children ?? [])
          .map((li) => `<li>${renderListItemChildren(li)}</li>`)
          .join("");
        const listStyle =
          type === "ul"
            ? "list-style-type:disc;padding-left:1.25rem;margin:0.5em 0"
            : "list-style-type:decimal;padding-left:1.25rem;margin:0.5em 0";
        return `<${type} style="${listStyle}">${items}</${type}>`;
      }

      return "";
    })
    .join("");
}
