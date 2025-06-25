import { Tables } from "@/database.types";
import { formatCurrency } from "@/lib/utils";
import { ArrowUpRightIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Tables<"products">;
  badge?: string;
}

export default function ProductCard({ product, badge }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative">
        <Image
          alt={product.title}
          src={product.main_image_url}
          width={500}
          height={500}
          className="aspect-square w-full rounded-t-xl object-cover drop-shadow-md"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3.5 opacity-0 transition-all duration-200 ease-in-out md:top-7 md:group-hover:top-3.5 md:group-hover:opacity-100"
        >
          <HeartIcon />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        {badge && <Badge className="absolute top-3.5 left-3.5">{badge}</Badge>}
      </div>
      <div className="bg-sidebar -mt-2 scale-103 space-y-2.5 rounded-xl px-3 py-4 shadow">
        <div className="flex items-center justify-between text-base">
          <h3 className="line-clamp-1 font-semibold">{product.title}</h3>
          <strong className="font-semibold">
            {formatCurrency(product.base_price)}
          </strong>
        </div>
        <p className="text-muted-foreground line-clamp-2 min-h-[2lh] text-sm">
          {product.description}
        </p>
        <div className="flex gap-x-1.5 gap-y-2.5 max-md:flex-wrap-reverse">
          <Button className="grow gap-1">
            Add to cart <ShoppingCartIcon />
          </Button>
          <Button
            asChild
            className="h-auto gap-1"
            size="sm"
            variant="secondary"
          >
            <Link href={`/products/${product.id}`}>
              Details <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
