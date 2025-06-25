import { ReactNode } from "react";

export default function ProductsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(290px,1fr))] md:gap-6">
      {children}
    </div>
  );
}
