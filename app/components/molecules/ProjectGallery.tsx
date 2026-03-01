import Image from "next/image";

type ProjectGalleryProps = Readonly<{
  images: (string | null | undefined)[];
}>;

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-blue-logo mb-6">
        Galerie photos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => {
          if (!img) return null;
          return (
            <div
              key={`gallery-${idx}`}
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Photo ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
