"use client";

import burgerImage from "@/public/hero_burger.webp";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const burgerImageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number>(null);
  const isAnimatingRef = useRef(false);

  // Throttled mouse move handler with requestAnimationFrame
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!burgerImageRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!burgerImageRef.current) return;

      const { width, height, left, top } =
        burgerImageRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Calculate rotation based on mouse position
      const rotateX = ((y - height / 2) / height) * -20; // Tilt up/down
      const rotateY = ((x - width / 2) / width) * 20; // Tilt left/right

      // Add subtle translation for depth
      const translateX = ((x - width / 2) / width) * 10;
      const translateY = ((y - height / 2) / height) * 10;

      burgerImageRef.current.style.transform = `
        rotateX(max(${rotateX}deg, -10deg)) 
        rotateY(max(${rotateY}deg, -10deg)) 
        translateX(${translateX}px) 
        translateY(${translateY}px)
      `;

      isAnimatingRef.current = false;
    });
  };

  // Smooth reset animation with requestAnimationFrame
  const handleMouseLeave = () => {
    if (!burgerImageRef.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    isAnimatingRef.current = true;

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!burgerImageRef.current) return;

      // Smoothly return to original position
      burgerImageRef.current.style.transform = `
        rotateX(5deg) 
        rotateY(-5deg) 
        translateX(0px) 
        translateY(0px)
      `;

      isAnimatingRef.current = false;
    });
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-full overflow-x-clip pt-22">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="container flex min-h-full items-center gap-4 py-12"
      >
        <div className="text-secondary flex grow flex-col gap-6 max-md:items-center lg:shrink-1">
          <h1 className="py-3 text-4xl font-black md:self-start md:text-6xl lg:text-7xl">
            We will kill your hunger
          </h1>
          <p className="max-w-[780px] text-lg md:text-2xl">
            Experience culinary excellence with our handcrafted{" "}
            <strong className="text-primary">gourmet burgers</strong> and{" "}
            <strong className="text-primary">farm-fresh salads</strong>. Every
            dish is prepared with passion, using the finest ingredients to
            deliver unforgettable flavors right to your door. Your taste
            adventure awaits.
          </p>
          <div className="flex max-w-[450px] flex-wrap items-center gap-3 *:grow">
            <Button size="lg" className="rounded-3xl text-xl">
              Order now
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-3xl text-xl"
            >
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </div>
        <div className="hidden shrink-0 basis-1/2 perspective-[600px] transform-3d lg:block">
          <Image
            ref={burgerImageRef}
            style={{
              filter: "drop-shadow(0px 10px 20px rgba(255, 165, 0, 0.5))",
            }}
            src={burgerImage}
            alt="burger"
            width={500}
            height={500}
            priority
            className="ms-auto transition-all duration-300 ease-out select-none"
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
