import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="group">
      <div className="relative">
        <Skeleton className="aspect-square w-full rounded-t-xl" />
        <Skeleton className="absolute top-3.5 right-3.5 h-10 w-10 rounded-full opacity-80" />
        <Skeleton className="absolute top-3.5 left-3.5 h-7 w-20 rounded-md" />
      </div>
      <div className="bg-sidebar -mt-2 scale-103 space-y-2.5 rounded-xl px-3 py-4 shadow">
        <div className="flex items-center justify-between text-base">
          <Skeleton className="h-5 w-2/5 rounded" />
          <Skeleton className="h-5 w-16 rounded" />
        </div>
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/4 rounded" />
        <div className="mt-2 flex gap-x-1.5 gap-y-2.5 max-md:flex-wrap-reverse">
          <Skeleton className="h-9 grow rounded-md" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}
