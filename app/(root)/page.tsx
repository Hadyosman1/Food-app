import Header from "@/components/header/Header";
import CategoriesSection from "@/components/home/CategoriesSection";
import Collections from "@/components/home/Collections";
import HeroSection from "@/components/home/HeroSection";
import cover from "@/public/hero_cover.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative grid min-h-screen">
        <Image
          src={cover}
          alt="cover"
          fill
          className="-z-1 object-cover object-right select-none md:object-fill md:object-center"
          priority
        />
        <div className="to-primary/60 via-primary/60 absolute top-0 right-0 bottom-0 left-0 -z-1 bg-gradient-to-t from-black/50" />
        <Header />
        <HeroSection />
      </div>

      <div id="content" className="container">
        <CategoriesSection />
        <Collections />
      </div>
    </main>
  );
}
