import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/globals";
import ProductCard from "./ProductCard";

interface ProductsCarouselProps {
  products: Product[];
  badge?: string;
}

export default function ProductsCarousel({
  products,
  badge,
}: ProductsCarouselProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <div className="flex items-center justify-end gap-3 pt-2">
        <CarouselPrevious variant="default" className="static" />
        <CarouselNext variant="default" className="static" />
      </div>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <ProductCard product={product} badge={badge} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
