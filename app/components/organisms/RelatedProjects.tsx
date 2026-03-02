import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/app/lib/utils";

type Project = {
  id: string;
  title: string;
  year?: string | null;
  location?: string | null;
  image?: string | null;
};

type RelatedProjectsProps = Readonly<{
  projects: (Project | null | undefined)[];
}>;

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="pt-8 border-t border-neutral-200">
      <h3 className="text-2xl font-semibold text-blue-logo mb-6">
        Découvrez nos autres projets
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => {
          if (!project) return null;
          const slug = generateSlug(project.title);
          return (
            <Link
              key={project.id}
              href={`/projets/${slug}`}
              className="group"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-blue-logo/30 group-hover:bg-blue-logo/50 transition-colors" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-secondary-500 text-blue-logo text-sm font-semibold rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-blue-logo group-hover:text-primary-600 transition-colors">
                {project.title}
              </h4>
              {project.location && (
                <p className="text-sm text-neutral-600 mt-1">
                  📍 {project.location}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
