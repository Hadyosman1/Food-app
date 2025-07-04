"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Search, ChefHat, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="container max-w-2xl">
        <Card className="bg-card/50 border-0 text-center shadow-lg backdrop-blur-sm">
          <CardHeader className="space-y-6 pb-8">
            {/* 404 Number with Food Theme */}
            <div className="relative">
              <div className="text-primary/20 text-8xl font-bold select-none md:text-9xl">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-primary text-6xl font-bold md:text-7xl">
                  404
                </div>
              </div>
              <div className="absolute -top-4 -right-4 animate-bounce text-4xl">
                🍕
              </div>
              <div
                className="absolute -bottom-4 -left-4 animate-bounce text-4xl"
                style={{ animationDelay: "0.5s" }}
              >
                🍔
              </div>
            </div>

            <CardTitle className="text-foreground text-3xl font-bold md:text-4xl">
              Oops! Page Not Found
            </CardTitle>

            <CardDescription className="text-muted-foreground mx-auto max-w-md text-lg">
              Looks like this recipe got lost in the kitchen! The page you're
              looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Decorative Food Icons */}
            <div className="text-muted-foreground/60 flex items-center justify-center gap-4">
              <ChefHat className="h-6 w-6 animate-pulse" />
              <span className="text-2xl">🍽️</span>
              <Search className="h-6 w-6 animate-pulse" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/menu" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Browse Menu
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="border-border border-t pt-6">
              <p className="text-muted-foreground mb-4 text-sm">
                Try these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/menu"
                  className="text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  Menu
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/#categories"
                  className="text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  Categories
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/about"
                  className="text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  About
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Floating Food Emojis */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 left-10 text-2xl opacity-20">
            🍕
          </div>
          <div
            className="animate-float absolute top-40 right-20 text-xl opacity-20"
            style={{ animationDelay: "1s" }}
          >
            🍔
          </div>
          <div
            className="animate-float absolute bottom-40 left-20 text-xl opacity-20"
            style={{ animationDelay: "2s" }}
          >
            🍟
          </div>
          <div
            className="animate-float absolute right-10 bottom-20 text-2xl opacity-20"
            style={{ animationDelay: "3s" }}
          >
            🌮
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
