import MainHeading from "@/components/MainHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <MainHeading>About Us</MainHeading>
      </div>
    </main>
  );
}
