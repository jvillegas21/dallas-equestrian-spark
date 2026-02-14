import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import stableImg from "@/assets/stable-interior.jpg";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    title: "Full-Care Boarding",
    features: ["12×12 matted stall", "Daily turnout", "Twice-daily feeding (grain & hay)", "Blanketing & fly masks", "Daily stall cleaning", "Access to all arenas & trails"],
  },
  {
    title: "Pasture Boarding",
    features: ["Large shared pasture", "Run-in shelter access", "Daily feeding (grain & hay)", "Fresh water troughs", "Regular pasture maintenance", "Access to trails"],
  },
  {
    title: "Training Board",
    features: ["Everything in Full-Care", "5 training rides per week", "Monthly progress reports", "Competition preparation", "Trainer consultations", "Priority arena scheduling"],
  },
];

const amenities = [
  "200×100 ft covered arena",
  "Outdoor dressage arena",
  "Grass jumping field",
  "Miles of scenic trails",
  "Wash racks with hot water",
  "Tack rooms with lockers",
  "Rider lounge & restrooms",
  "Trailer parking",
];

const Boarding = () => (
  <Layout>
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img src={stableImg} alt="Modern stable interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Horse Boarding</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Premium care for your horse in a world-class facility</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Boarding Packages" subtitle="Choose the level of care that's right for your horse" />
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div key={p.title} className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{p.title}</h3>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Facility Amenities" subtitle="Everything you and your horse need" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div key={a} className="bg-background rounded-lg p-4 text-center shadow-sm">
              <p className="text-sm font-medium text-foreground">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 text-center">
      <div className="container max-w-2xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Interested in Boarding?</h2>
        <p className="text-muted-foreground mb-8">Contact us to schedule a facility tour and discuss the best boarding option for your horse.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          <Link to="/contact">Inquire About Boarding</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Boarding;
