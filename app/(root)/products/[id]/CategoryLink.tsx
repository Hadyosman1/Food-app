"use client";

import { Tables } from "@/database.types";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { use } from "react";

interface CategoryLinkProps {
  categoryPromise: Promise<PostgrestSingleResponse<Tables<"categories">>>;
}

export default function CategoryLink({ categoryPromise }: CategoryLinkProps) {
  const { data: category, error } = use(categoryPromise);

  if (error) return null;

  return (
    <Link href={`/categories/${category.slug}`} className="w-fit">
      <Badge >{category.name}</Badge>
    </Link>
  );
}
