import { formatCurrency } from "@/lib/utils";
import { Product } from "@/types/globals";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../cart/AddToCartButton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ToggleWishlistItemButton from "../wishlist/ToggleWishlistItemButton";

interface ProductCardProps {
  product: Product;
  badge?: string;
}

export default function ProductCard({ product, badge }: ProductCardProps) {
  return (
    <div className="group transition-all duration-300 ease-in-out hover:-translate-y-[3px]">
      <div className="relative">
        <Image
          alt={product.title}
          src={product.main_image_url}
          width={500}
          height={500}
          className="aspect-square w-full rounded-t-xl object-cover drop-shadow-md select-none"
        />
        <ToggleWishlistItemButton product={product} />
        {badge && <Badge className="absolute top-3.5 left-3.5">{badge}</Badge>}
      </div>
      <div className="bg-sidebar -mt-2 scale-103 space-y-2.5 rounded-xl px-3 py-4 shadow">
        <div className="flex items-center justify-between text-base">
          <Link className="hover:underline" href={`/products/${product.id}`}>
            <h3 className="line-clamp-1 font-semibold">{product.title}</h3>
          </Link>
          <strong className="font-semibold">
            {formatCurrency(product.base_price)}
          </strong>
        </div>
        <p className="text-muted-foreground line-clamp-2 min-h-[2lh] text-sm">
          {product.description}
        </p>
        <div className="flex gap-x-1.5 gap-y-2.5 max-md:flex-wrap-reverse">
          <AddToCartButton product={product} />
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
