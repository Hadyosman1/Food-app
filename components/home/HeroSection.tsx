import burgerImage from "@/public/hero_burger.webp";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-full overflow-x-clip pt-[calc(var(--header-height)+3rem)] perspective-[600px] transform-3d">
      <span className="hero-emoji absolute top-[calc(var(--header-height)+4rem)] right-1/5 z-[-1] animate-bounce text-5xl transition-all duration-[1.5s] select-none">
        🍕
      </span>
      <span className="hero-emoji absolute top-[calc(var(--header-height)+3rem)] left-1/5 z-[-1] animate-bounce text-5xl transition-all duration-[1.5s] select-none">
        🍔
      </span>
      <span className="hero-emoji absolute bottom-1/8 left-1/5 z-[-1] animate-bounce text-5xl transition-all duration-[1.5s] select-none">
        🌮
      </span>
      <span className="hero-emoji absolute right-1/6 bottom-1/8 z-[-1] animate-bounce text-5xl transition-all duration-[1.5s] select-none">
        🌭
      </span>
      <div className="container flex min-h-full items-center gap-4 py-12">
        <div className="text-secondary flex grow flex-col gap-6 max-md:items-center max-md:text-center lg:shrink-1">
          <h1 className="py-3 text-4xl font-black text-balance capitalize md:self-start md:text-6xl lg:text-8xl">
            We will kill your hunger
          </h1>
          <p className="max-w-[90ch] text-lg md:text-2xl">
            Experience culinary excellence with our handcrafted{" "}
            <strong className="text-primary">gourmet burgers</strong> and{" "}
            <strong className="text-primary">farm-fresh salads</strong>. Every
            dish is prepared with passion, using the finest ingredients to
            deliver unforgettable flavors right to your door. Your taste
            adventure awaits.
          </p>
          <div className="mb-14 flex max-w-[450px] flex-wrap items-center gap-3 *:grow">
            <Button className="rounded-3xl md:text-xl">Order now</Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-3xl md:text-xl"
            >
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </div>
        <div className="hidden shrink-0 basis-1/2 lg:block">
          <Image
            style={{
              filter: "drop-shadow(0px 10px 20px rgba(255, 165, 0, 0.5))",
            }}
            src={burgerImage}
            alt="burger"
            width={500}
            height={500}
            priority
            className="ms-auto transition-all duration-200 ease-out select-none"
          />
        </div>
      </div>

      <Button
        variant="secondary"
        className="text-primary scroll-to-down-animation absolute right-1/2 bottom-14 size-10 h-auto translate-x-1/2 rounded-full [&_svg]:size-6"
        asChild
      >
        <a href="#content">
          <ArrowDownIcon />
          <span className="sr-only">Scroll down</span>
        </a>
      </Button>
    </section>
  );
}
