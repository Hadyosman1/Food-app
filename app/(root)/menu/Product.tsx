import { formatCurrency } from "@/lib/utils";
import { Product as ProductType } from "@/types/globals";
import Image from "next/image";
import Link from "next/link";

export default function Product({
  product,
}: {
  product: Omit<ProductType, "gallery">;
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="hover:bg-primary/20 group bg-sidebar-accent/30 block rounded-2xl p-4 shadow transition-colors duration-200"
    >
      <div className="flex items-center gap-2">
        <div>
          <h3 className="font-semibold group-hover:underline">
            {product.title}
          </h3>
          <p className="text-muted-foreground line-clamp-1 text-xs">
            {product.description}
          </p>
        </div>
        <Image
          src={product.main_image_url}
          alt={product.title}
          width={80}
          height={80}
          className="ms-auto rounded-2xl shadow"
        />
      </div>
      <strong className="text-primary">
        {formatCurrency(product.base_price)}
      </strong>
    </Link>
  );
}
