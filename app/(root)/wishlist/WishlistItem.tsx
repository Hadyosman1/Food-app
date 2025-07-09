import ProductCard from "@/components/products/ProductCard";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { createClient } from "@/lib/supabase/client";
import { getProductById } from "@/services/products";
import { Product } from "@/types/globals";
import { useEffect, useState } from "react";

interface WishlistItemProps {
  itemId: string;
}

export default function WishlistItem({ itemId }: WishlistItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const supabase = createClient();
        const { data, error } = await getProductById(supabase, itemId);
        if (error) {
          setError(error);
        } else {
          setData(data);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error: {error.message}</AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  if (!data) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Product not found</AlertDescription>
      </Alert>
    );
  }

  return <ProductCard product={data} />;
}
