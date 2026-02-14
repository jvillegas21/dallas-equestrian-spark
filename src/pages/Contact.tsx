import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Contact & Booking" subtitle="Get in touch or request a booking" />

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(214) 555-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lessons">Riding Lessons</SelectItem>
                        <SelectItem value="boarding">Horse Boarding</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="events">Events & Shows</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date / Time</Label>
                  <Input id="date" name="date" type="text" placeholder="e.g., Saturday mornings, March 15th" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your experience level, goals, or any questions..." />
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  {submitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">1234 Ranch Road, Dallas, TX 75201</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(214) 555-0192</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@dallasequestrian.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Mon–Fri: 7am – 7pm</p>
                        <p>Sat: 8am – 6pm</p>
                        <p>Sun: 9am – 5pm</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Dallas Equestrian Center Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.45098584678!2d-96.8717!3d32.8208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
