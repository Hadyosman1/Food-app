import MainHeading from "@/components/MainHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Food App",
  description:
    "Get in touch with our team. We're here to help with orders, support, partnerships, and any questions about our food delivery service.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="container space-y-16 py-12">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <MainHeading>Contact Us</MainHeading>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {`Have questions, feedback, or need support? We're here to help! Reach
              out to us through any of the channels below or fill out the form.`}
          </p>
        </section>

        {/* Contact Information Cards */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Phone className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Call us for immediate assistance with orders and urgent issues
                </CardDescription>
                <div className="text-primary mt-4 font-semibold">
                  (555) 123-4567
                </div>
                <div className="text-muted-foreground text-sm">
                  24/7 Support
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <Mail className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {`Send us detailed inquiries and we'll respond within 24 hours`}
                </CardDescription>
                <div className="text-primary mt-4 font-semibold">
                  support@foodapp.com
                </div>
                <div className="text-muted-foreground text-sm">
                  24h Response
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <MessageSquare className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chat with our support team in real-time for quick answers
                </CardDescription>
                <div className="text-primary mt-4 font-semibold">
                  Available Now
                </div>
                <div className="text-muted-foreground text-sm">
                  Instant Response
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 text-center transition-colors">
              <CardHeader>
                <MapPin className="text-primary mx-auto mb-2 h-12 w-12" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stop by our office for in-person meetings and consultations
                </CardDescription>
                <div className="text-primary mt-4 font-semibold">
                  123 Food Street
                </div>
                <div className="text-muted-foreground text-sm">
                  Cuisine City, CC
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              {`Fill out the form below and we'll get back to you as soon as`}
              possible
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Tell us how we can help you today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>
                    When you can reach us in person
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-primary flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">
                        24/7 Online Support Available
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Location</CardTitle>
                  <CardDescription>Visit our headquarters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary mt-0.5 h-5 w-5" />
                    <div>
                      <div className="font-medium">Food App Headquarters</div>
                      <div className="text-muted-foreground text-sm">
                        123 Food Street
                        <br />
                        Cuisine City, CC 12345
                        <br />
                        United States
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Quick answers to common questions about our service
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How long does delivery typically take?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our average delivery time is 15-30 minutes, depending on
                    your location and restaurant preparation time. We always
                    strive to get your food to you as quickly as possible while
                    maintaining quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    {`What if there's an issue with my order?`}
                  </AccordionTrigger>
                  <AccordionContent>
                    {`If you experience any issues with your order, please contact
                    us immediately through our 24/7 support line or live chat.
                    We'll work quickly to resolve the issue and ensure your
                    satisfaction.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do you offer refunds?
                  </AccordionTrigger>
                  <AccordionContent>
                    {`Yes, we offer refunds for orders that don't meet our quality
                    standards or if there are delivery issues. Please contact
                    our support team within 24 hours of your order for
                    assistance.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    How can I become a restaurant partner?
                  </AccordionTrigger>
                  <AccordionContent>
                    {`We're always looking for great restaurants to partner with!
                    Please email us at partnerships@foodapp.com with details
                    about your restaurant, and our team will get back to you
                    within 48 hours.`}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    What areas do you deliver to?
                  </AccordionTrigger>
                  <AccordionContent>
                    {`We currently deliver to most areas within Cuisine City and
                    surrounding suburbs. Enter your address on our homepage to
                    check if we deliver to your area, or contact us for specific
                    coverage information.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Support Stats */}
        <section className="from-primary/5 to-primary/10 rounded-2xl bg-gradient-to-r p-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">
                &lt;2min
              </div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-primary mb-2 text-3xl font-bold">24h</div>
              <div className="text-muted-foreground">Email Response</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="from-primary/5 to-primary/10 space-y-6 rounded-2xl bg-gradient-to-r p-8 text-center">
          <h2 className="text-2xl font-bold">Still Need Help?</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {`Can't find what you're looking for? Our support team is here to help
            you with any questions or concerns.`}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-3xl">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-3xl">
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Chat
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
