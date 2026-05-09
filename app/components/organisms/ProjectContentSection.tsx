import Image from "next/image";
import { richTextToHTML } from "@/app/lib/utils";

type ContentSection = {
  sectionTitle?: string | null;
  layout?: string | null;
  content?: any;
  image?: string | null;
  imagePosition?: string | null;
};

const IMAGE_POSITION_CLASS: Record<string, string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

type ProjectContentSectionProps = Readonly<{
  section: ContentSection;
}>;

export default function ProjectContentSection({
  section,
}: ProjectContentSectionProps) {
  const layoutType = section.layout || "text-only";
  const imgPositionClass =
    IMAGE_POSITION_CLASS[section.imagePosition ?? ""] ?? "object-center";

  return (
    <div className="space-y-6">
      {/* Titre optionnel de la section */}
      {section.sectionTitle && (
        <h3 className="text-2xl font-bold text-blue-logo">
          {section.sectionTitle}
        </h3>
      )}

      {/* Layout: Paragraphe de texte seul */}
      {layoutType === "text-only" && section.content && (
        <div
          className="prose prose-lg max-w-none text-neutral-700"
          dangerouslySetInnerHTML={{
            __html: richTextToHTML(section.content),
          }}
        />
      )}

      {/* Layout: Citation */}
      {layoutType === "quote" && section.content && (
        <div className="bg-accent-50 border-l-4 border-accent-400 p-8 rounded-r-xl">
          <blockquote
            className="text-xl italic text-blue-logo leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: richTextToHTML(section.content),
            }}
          />
        </div>
      )}

      {/* Layout: Image à gauche + Texte */}
      {layoutType === "text-image-left" && (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {section.image && (
            <div className="md:w-1/2 shrink-0">
              <Image
                src={section.image}
                alt={section.sectionTitle || "Image"}
                width={600}
                height={800}
                unoptimized
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          )}
          {section.content && (
            <div className="md:w-1/2">
              <div
                className="prose prose-lg max-w-none text-neutral-700"
                dangerouslySetInnerHTML={{
                  __html: richTextToHTML(section.content),
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* Layout: Texte + Image à droite */}
      {layoutType === "text-image-right" && (
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
          {section.image && (
            <div className="md:w-1/2 shrink-0">
              <Image
                src={section.image}
                alt={section.sectionTitle || "Image"}
                width={600}
                height={800}
                unoptimized
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          )}
          {section.content && (
            <div className="md:w-1/2">
              <div
                className="prose prose-lg max-w-none text-neutral-700"
                dangerouslySetInnerHTML={{
                  __html: richTextToHTML(section.content),
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* Layout: Image en haut + Texte */}
      {layoutType === "image-top" && (
        <div className="space-y-6">
          {section.image && (
            <Image
              src={section.image}
              alt={section.sectionTitle || "Image"}
              width={1200}
              height={600}
              unoptimized
              className="rounded-xl shadow-lg w-full h-auto"
            />
          )}
          {section.content && (
            <div
              className="prose prose-lg max-w-none text-neutral-700"
              dangerouslySetInnerHTML={{
                __html: richTextToHTML(section.content),
              }}
            />
          )}
        </div>
      )}

      {/* Layout: Carte image + légende (plusieurs côte à côte) */}
      {layoutType === "image-card" && (
        <div className="flex flex-col gap-3">
          {section.image && (
            <Image
              src={section.image}
              alt={section.sectionTitle || "Image"}
              width={400}
              height={300}
              unoptimized
              className={`rounded-xl shadow-md w-full h-80 object-cover ${imgPositionClass}`}
            />
          )}
          {section.content && (
            <div
              className="prose prose-sm max-w-none text-neutral-600"
              dangerouslySetInnerHTML={{
                __html: richTextToHTML(section.content),
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
