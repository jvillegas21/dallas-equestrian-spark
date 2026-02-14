import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import lessonImg from "@/assets/riding-lesson.jpg";
import { CheckCircle } from "lucide-react";

const lessonTypes = [
  {
    title: "Beginner Lessons",
    audience: "Ages 6+ | No experience needed",
    desc: "Learn the fundamentals of horsemanship including grooming, tacking, mounting, and basic riding skills at the walk and trot.",
    features: ["Safety-first approach", "Ground handling basics", "Walk & trot fundamentals", "Balance & posture development"],
  },
  {
    title: "Intermediate Lessons",
    audience: "Some riding experience",
    desc: "Build on your foundation with cantering, basic jumping, lateral work, and more advanced flatwork techniques.",
    features: ["Canter development", "Introduction to jumping", "Lateral movements", "Ring figure work"],
  },
  {
    title: "Advanced Lessons",
    audience: "Experienced riders",
    desc: "Refine your skills in dressage, show jumping, or hunter courses with our expert trainers for competitive readiness.",
    features: ["Competition preparation", "Advanced dressage", "Course work & jumping", "Show ring strategy"],
  },
  {
    title: "Youth Programs",
    audience: "Ages 6–17",
    desc: "Structured programs designed to build confidence, responsibility, and a lifelong love of horses in young riders.",
    features: ["Age-appropriate groups", "Horse care education", "Summer camp options", "Pony Club preparation"],
  },
];

const Lessons = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img src={lessonImg} alt="Riding lesson at Dallas Equestrian Center" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Riding Lessons</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Expert instruction for every level — from first-time riders to seasoned competitors</p>
      </div>
    </section>

    {/* Lesson Types */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Lesson Programs" subtitle="Find the perfect program for your riding goals" />
        <div className="grid md:grid-cols-2 gap-8">
          {lessonTypes.map((l) => (
            <div key={l.title} className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">{l.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{l.audience}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{l.desc}</p>
              <ul className="space-y-2">
                {l.features.map((f) => (
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

    {/* What to Expect */}
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <SectionHeading title="What to Expect" />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Your first visit begins with a meet-and-greet with your instructor and horse. We'll assess your experience level and discuss your goals to ensure you're placed in the right program.</p>
          <p>Lessons are typically 60 minutes and include grooming and tacking time. We provide helmets and all necessary equipment — just wear long pants and closed-toe shoes with a small heel.</p>
          <p>Our patient, certified instructors create a supportive environment where every rider can thrive at their own pace.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 text-center">
      <div className="container max-w-2xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Ride?</h2>
        <p className="text-muted-foreground mb-8">Book your first lesson today and discover the joy of horsemanship.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          <Link to="/contact">Book a Lesson</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Lessons;
