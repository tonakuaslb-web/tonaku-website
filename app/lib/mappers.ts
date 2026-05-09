/**
 * Fonctions de transformation (mappers) pour convertir les données Tina
 * en props compatibles avec nos composants React
 */

import * as LucideIcons from "lucide-react";
import { richTextToHTML } from "./utils";
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
    description: richTextToHTML(event.description),
    image: event.image || undefined,
  };
}

/**
 * Mapper pour MissionCard
 */
export function mapMission(mission: Mission) {
  const IconComponent =
    LucideIcons[mission.icon as keyof typeof LucideIcons] ||
    LucideIcons.BookOpen;

  return {
    icon: IconComponent,
    title: mission.title,
    description: richTextToHTML(mission.description),
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
    description: richTextToHTML(project.description),
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
    description: richTextToHTML(book.description),
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

// Re-export pour les fichiers qui l'importent depuis mappers
export { richTextToHTML };
