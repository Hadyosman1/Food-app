import MainHeading from "@/components/MainHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  ChefHat,
  Clock,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Truck,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Food App",
  description:
    "Learn about our passion for delivering the finest cuisine straight to your doorstep. From gourmet burgers to fresh salads, we bring exceptional flavors to your table.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="container space-y-16 py-12">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <MainHeading>About Us</MainHeading>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {`We're passionate about bringing the finest cuisine straight to your
            doorstep. From gourmet burgers to fresh salads, we believe every
            meal should be an experience worth savoring.`}
          </p>
        </section>

        {/* Our Story Section */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              How we started our journey to revolutionize food delivery
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-primary text-2xl font-semibold">
                Born from a Love of Great Food
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {`Our journey began in 2020 when our founders realized that
                quality food delivery shouldn't be a luxury. We started with a
                simple mission: to connect people with exceptional local
                restaurants and bring restaurant-quality meals to homes across
                the city.`}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {`What started as a small operation has grown into a beloved
                service that thousands of customers rely on daily. We've
                maintained our commitment to quality, speed, and customer
                satisfaction throughout our growth.`}
              </p>
            </div>
            <div className="from-primary/10 to-primary/5 rounded-2xl bg-gradient-to-br p-8 text-center">
              <ChefHat className="text-primary mx-auto mb-4 h-16 w-16" />
              <h4 className="mb-2 text-xl font-semibold">500+ Restaurants</h4>
              <p className="text-muted-foreground">
                Partnered with the best local eateries
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Our Mission & Values</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Heart className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We never compromise on quality. Every dish is crafted with
                  care and the finest ingredients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Clock className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Speed & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fast delivery times and reliable service you can count on,
                  every single time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Leaf className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eco-friendly packaging and partnerships with sustainable local
                  businesses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Users className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supporting local restaurants and building stronger communities
                  through food.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="from-primary/5 to-primary/10 rounded-2xl bg-gradient-to-r p-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">500+</div>
              <div className="text-muted-foreground">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">15min</div>
              <div className="text-muted-foreground">Average Delivery</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">4.8★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              The passionate people behind your favorite food delivery service
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                  <ChefHat className="text-primary h-10 w-10" />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Former restaurant owner with 15+ years in the food industry.
                  Passionate about connecting great food with great people.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                  <Truck className="text-primary h-10 w-10" />
                </div>
                <CardTitle>Mike Chen</CardTitle>
                <CardDescription>Operations Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Logistics expert who ensures every delivery is fast, safe, and
                  reliable. Loves optimizing routes and processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                  <Award className="text-primary h-10 w-10" />
                </div>
                <CardTitle>Emma Rodriguez</CardTitle>
                <CardDescription>Head of Partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Builds relationships with the best local restaurants. Ensures
                  quality standards and helps partners grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              {`Have questions or feedback? We'd love to hear from you!`}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground text-sm">
                      123 Food Street, Cuisine City, CC 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-sm">
                      (555) 123-4567
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">
                      hello@foodapp.com
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>
                  {`We're always looking for passionate people to join our mission`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {`Whether you're a delivery driver, restaurant partner, or tech
                  enthusiast, we have opportunities for you to be part of our
                  growing team.`}
                </p>
                <Button className="w-full">View Open Positions</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="from-primary/5 to-primary/10 space-y-6 rounded-2xl bg-gradient-to-r p-8 text-center">
          <h2 className="text-2xl font-bold">
            Ready to Experience Great Food?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Join thousands of satisfied customers who trust us to deliver
            exceptional meals right to their doorstep.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-3xl">
              <Link href={"/menu"}>Order Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-3xl">
              <Link href={"/menu"}>Browse Menu</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
