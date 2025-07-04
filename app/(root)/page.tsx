import CategoriesSection from "@/components/home/CategoriesSection";
import Collections from "@/components/home/Collections";
import HeroSection from "@/components/home/HeroSection";
import cover from "@/public/hero_cover.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="-mt-(--header-height)">
      <div className="relative grid min-h-screen">
        <Image
          src={cover}
          alt="cover"
          fill
          className="-z-1 object-cover object-right select-none md:object-fill md:object-center"
          priority
        />
        <div className="to-background/40 via-primary/40 absolute top-0 right-0 bottom-0 left-0 -z-1 bg-gradient-to-t from-black/70" />
        <HeroSection />
      </div>

      <div id="content" className="container py-10 md:py-16">
        <CategoriesSection />
        <Collections />
      </div>
    </main>
  );
}
