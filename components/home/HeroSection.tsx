import Image from "next/image";

import burgerImage from "@/public/hero_burger.webp";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-full pt-22">
      <div className="container flex min-h-full items-center gap-4 py-12">
        <div className="text-secondary flex grow flex-col gap-6 max-md:items-center lg:shrink-1">
          <h1 className="py-3 text-4xl font-black md:self-start md:text-6xl lg:text-7xl">
            We will kill your hunger
          </h1>
          <p className="max-w-[780px] text-lg md:text-2xl">
            From gourmet <strong className="text-primary">burgers</strong> to
            fresh <strong className="text-primary">salads</strong>, we bring the
            finest cuisine straight to your doorstep. Order now and indulge in
            the flavors you crave.
          </p>
          <div className="flex max-w-[450px] flex-wrap items-center gap-3 *:grow">
            <Button size="lg" className="rounded-3xl text-xl">
              Order now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-3xl text-xl"
            >
              Order now
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
            className="ms-auto"
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
