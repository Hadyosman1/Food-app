import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tables } from "@/database.types";
import ProductCard from "./ProductCard";

interface ProductsCarouselProps {
  products: Tables<"products">[];
}

export default function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className={"left-2"} />
      <CarouselNext variant="default" className={"right-2"} />
    </Carousel>
  );
}
