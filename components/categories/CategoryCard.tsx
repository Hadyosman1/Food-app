import { Tables } from "@/database.types";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Tables<"categories">;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <figure className="group relative rounded-xl transition-all duration-300 hover:scale-103">
      <Image
        src={category.image}
        alt={category.name}
        width={500}
        height={500}
        className="shadow-primary/10 aspect-square w-full rounded-[inherit] shadow-md"
      />
      <figcaption className="rounded-[inherit]">
        <Link
          className="from-primary absolute inset-0 rounded-[inherit] bg-gradient-to-b via-transparent to-transparent p-2 text-white md:p-4"
          href={`/categories/${category.slug}`}
        >
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-bold md:text-xl">{category.name}</h3>
            <ArrowRightCircle
              size={20}
              strokeWidth={2.5}
              className="-translate-x-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </Link>
      </figcaption>
    </figure>
  );
}
