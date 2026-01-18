import client from "@/tina/__generated__/client";
import { richTextToHTML } from "./mappers";
import type {
  Histoire,
  Mission,
  Project,
  Team,
  Book,
  Contact,
} from "@/tina/__generated__/types";

/**
 * Type de retour pour les données de la page d'accueil
 */
export type HomeData = {
  title: string;
  subtitle: string;
  about: string | null;
  seoTitle: string;
  seoDescription: string;
  sections: {
    histoireSubtitle: string;
    missionsSubtitle: string;
    projetsSubtitle: string;
    equipeSubtitle: string;
    soutienSubtitle: string;
    ressourcesSubtitle: string;
  };
};

/**
 * Récupérer les données de la page d'accueil (Hero)
 */
export async function getHomeData(): Promise<HomeData> {
  try {
    const response = await client.queries.accueil({
      relativePath: "home.mdx",
    });

    const aboutHTML = response.data.accueil.hero?.about
      ? richTextToHTML(response.data.accueil.hero.about)
      : null;

    return {
      title: response.data.accueil.hero?.title || "",
      subtitle: response.data.accueil.hero?.subtitle || "",
      about: aboutHTML,
      seoTitle: response.data.accueil.title || "",
      seoDescription: response.data.accueil.description || "",
      sections: {
        histoireSubtitle:
          response.data.accueil.sections?.histoireSubtitle ||
          "Un parcours dédié à la préservation de la culture africaine",
        missionsSubtitle:
          response.data.accueil.sections?.missionsSubtitle ||
          "Ce qui guide notre action au quotidien",
        projetsSubtitle:
          response.data.accueil.sections?.projetsSubtitle ||
          "Des actions concrètes pour un impact durable",
        equipeSubtitle:
          response.data.accueil.sections?.equipeSubtitle ||
          "Des personnes engagées au service de notre mission",
        soutienSubtitle:
          response.data.accueil.sections?.soutienSubtitle ||
          "Votre soutien nous permet de poursuivre nos actions.",
        ressourcesSubtitle:
          response.data.accueil.sections?.ressourcesSubtitle ||
          "Découvrez nos publications et ouvrages dédiés à la préservation du patrimoine culturel",
      },
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      title: "Préserver les livres, favoriser l'accès au savoir",
      subtitle:
        "TONAKU ASBL œuvre pour la promotion de la lecture, l'éducation et la culture africaine",
      about: null,
      seoTitle: "TONAKU ASBL",
      seoDescription: "",
      sections: {
        histoireSubtitle:
          "Un parcours dédié à la préservation de la culture africaine",
        missionsSubtitle: "Ce qui guide notre action au quotidien",
        projetsSubtitle: "Des actions concrètes pour un impact durable",
        equipeSubtitle: "Des personnes engagées au service de notre mission",
        soutienSubtitle:
          "Votre soutien nous permet de poursuivre nos actions.",
        ressourcesSubtitle:
          "Découvrez nos publications et ouvrages dédiés à la préservation du patrimoine culturel",
      },
    };
  }
}

/**
 * Récupérer tous les événements de l'histoire (Timeline)
 */
export async function getTimelineEvents(): Promise<Histoire[]> {
  try {
    const response = await client.queries.histoireConnection();

    const edges = response.data.histoireConnection.edges || [];
    const events = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined
      ) as Histoire[];

    // Trier par ordre
    return events.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error("Error fetching timeline events:", error);
    return [];
  }
}

/**
 * Récupérer toutes les missions actives
 */
export async function getMissions(): Promise<Mission[]> {
  try {
    const response = await client.queries.missionConnection();

    const edges = response.data.missionConnection.edges || [];
    const missions = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined && node.active !== false
      ) as Mission[];

    // Trier par ordre
    return missions.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error fetching missions:", error);
    return [];
  }
}

/**
 * Récupérer tous les projets
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await client.queries.projectConnection();

    const edges = response.data.projectConnection.edges || [];
    const projects = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined
      ) as Project[];

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/**
 * Récupérer tous les membres de l'équipe
 */
export async function getTeamMembers(): Promise<Team[]> {
  try {
    const response = await client.queries.teamConnection();

    const edges = response.data.teamConnection.edges || [];
    const members = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined
      ) as Team[];

    return members;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

/**
 * Récupérer tous les livres
 */
export async function getBooks(): Promise<Book[]> {
  try {
    const response = await client.queries.bookConnection();

    const edges = response.data.bookConnection.edges || [];
    const books = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined
      ) as Book[];

    // Trier : featured en premier, puis par année décroissante
    return books.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.year || "").localeCompare(a.year || "");
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

/**
 * Récupérer toutes les informations de contact
 */
export async function getContactLocations(): Promise<Contact[]> {
  try {
    const response = await client.queries.contactConnection();

    const edges = response.data.contactConnection.edges || [];
    const locations = edges
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => 
        node !== null && node !== undefined
      ) as Contact[];

    return locations;
  } catch (error) {
    console.error("Error fetching contact locations:", error);
    return [];
  }
}

/**
 * Type de retour pour toutes les données de la page
 */
export type AllPageData = {
  homeData: HomeData;
  timeline: Histoire[];
  missions: Mission[];
  projects: Project[];
  team: Team[];
  books: Book[];
  contact: Contact[];
};

/**
 * Récupérer toutes les données nécessaires pour la page d'accueil
 */
export async function getAllPageData(): Promise<AllPageData> {
  try {
    const [homeData, timeline, missions, projects, team, books, contact] =
      await Promise.all([
        getHomeData(),
        getTimelineEvents(),
        getMissions(),
        getProjects(),
        getTeamMembers(),
        getBooks(),
        getContactLocations(),
      ]);

    return {
      homeData,
      timeline,
      missions,
      projects,
      team,
      books,
      contact,
    };
  } catch (error) {
    console.error("Error fetching all page data:", error);
    throw error;
  }
}
