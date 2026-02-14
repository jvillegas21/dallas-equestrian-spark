import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingTables = [
  {
    category: "Riding Lessons",
    plans: [
      { name: "Single Lesson", price: "$85", period: "per lesson", features: ["60-minute session", "Helmet provided", "Suitable for all levels"] },
      { name: "4-Lesson Package", price: "$300", period: "4 lessons", features: ["Save $40", "Schedule flexibility", "Progress tracking"], highlight: true },
      { name: "8-Lesson Package", price: "$560", period: "8 lessons", features: ["Save $120", "Priority scheduling", "Monthly assessment"] },
    ],
  },
  {
    category: "Horse Boarding",
    plans: [
      { name: "Pasture Board", price: "$600", period: "per month", features: ["Shared pasture", "Run-in shelter", "Daily feeding"] },
      { name: "Full-Care Board", price: "$1,200", period: "per month", features: ["12×12 stall", "Daily turnout", "Twice-daily feeding"], highlight: true },
      { name: "Training Board", price: "$2,000", period: "per month", features: ["Full-care included", "5 rides per week", "Monthly reports"] },
    ],
  },
  {
    category: "Training Programs",
    plans: [
      { name: "Partial Training", price: "$800", period: "per month", features: ["3 sessions per week", "Progress updates", "Trainer consultation"] },
      { name: "Full Training", price: "$1,400", period: "per month", features: ["5 sessions per week", "Competition prep", "Monthly video review"], highlight: true },
      { name: "30-Day Intensive", price: "$3,500", period: "30 days", features: ["Daily training", "Behavioral focus", "Owner sessions included"] },
    ],
  },
];

const faqs = [
  { q: "Do you offer trial lessons?", a: "Yes! We offer a discounted introductory lesson for new riders so you can experience our facility and teaching style before committing to a package." },
  { q: "Are there family or sibling discounts?", a: "We offer a 10% discount for siblings enrolled in lessons simultaneously. Contact us for details on family packages." },
  { q: "What's included in boarding fees?", a: "All boarding fees include feed, hay, daily stall/pasture maintenance, and access to arenas and trails. Farrier, vet, and dental care are arranged but billed separately." },
  { q: "Can I switch packages?", a: "Absolutely. You can upgrade or change your package at any time with 30 days' notice. We'll prorate any difference." },
  { q: "Do you require a contract for boarding?", a: "We require a minimum 30-day commitment for boarding. After that, services continue month-to-month with 30 days' notice to vacate." },
];

const Pricing = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Pricing & Packages" subtitle="Transparent pricing for all our services" />

        {pricingTables.map((table) => (
          <div key={table.category} className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">{table.category}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {table.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-lg p-8 border shadow-sm ${
                    plan.highlight ? "border-accent bg-accent/5 ring-2 ring-accent/20" : "border-border bg-card"
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Most Popular</div>
                  )}
                  <h4 className="font-serif text-lg font-bold text-foreground">{plan.name}</h4>
                  <div className="mt-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle size={14} className="text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={plan.highlight ? "default" : "outline"} className={plan.highlight ? "w-full bg-accent text-accent-foreground hover:bg-accent/90" : "w-full"}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default Pricing;
