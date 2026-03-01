import { Section } from "../templates";
import { Carousel } from ".";
import { BookCard } from "../molecules";
import { mapBook } from "@/app/lib/mappers";
import type { Book } from "@/tina/__generated__/types";

type ResourcesSectionProps = Readonly<{
  subtitle: string;
  books: Book[];
}>;

export default function ResourcesSection({
  subtitle,
  books,
}: ResourcesSectionProps) {
  return (
    <Section
      id="ressources"
      background={{ type: "color", value: "bg-background-100" }}
      paddingY="xl"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Nos Ressources
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Carousel>
          {books.map((book) => {
            const mappedBook = mapBook(book);
            return <BookCard key={book.id} {...mappedBook} />;
          })}
        </Carousel>
      </div>
    </Section>
  );
}
