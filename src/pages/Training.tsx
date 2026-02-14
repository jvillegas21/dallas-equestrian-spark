import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import trainingImg from "@/assets/horse-training.jpg";
import { CheckCircle } from "lucide-react";

const programs = [
  {
    title: "Foundation Training",
    desc: "Building a solid groundwork foundation for young or green horses. Focus on ground manners, desensitization, and basic under-saddle work.",
    features: ["Ground manners & leading", "Desensitization", "Walk/trot/canter under saddle", "Trailer loading"],
  },
  {
    title: "Discipline-Specific Training",
    desc: "Specialized training in dressage, hunters, jumpers, or eventing to develop your horse's talent in a particular discipline.",
    features: ["Dressage movements", "Hunter course training", "Jumping technique", "Cross-country preparation"],
  },
  {
    title: "Problem Horse Rehabilitation",
    desc: "Patient, experienced handling to address behavioral issues and rebuild trust and confidence in difficult horses.",
    features: ["Behavioral assessment", "Trust building exercises", "Retraining programs", "Owner education"],
  },
];

const Training = () => (
  <Layout>
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img src={trainingImg} alt="Horse training session" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Training Programs</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Professional training tailored to every horse and rider</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Our Training Philosophy" />
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed text-center">
          <p>At Dallas Equestrian Center, we believe in a patient, methodical approach to training. Every horse is unique, and our programs are designed to develop each horse's natural abilities while building a strong, trusting partnership between horse and rider.</p>
          <p>Our trainers bring decades of combined experience across multiple disciplines, ensuring your horse receives expert guidance no matter the goal.</p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Training Programs" subtitle="Choose the program that matches your goals" />
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div key={p.title} className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 text-center">
      <div className="container max-w-2xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Discuss Your Training Goals</h2>
        <p className="text-muted-foreground mb-8">Contact us for a consultation to create a customized training plan.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Training;
