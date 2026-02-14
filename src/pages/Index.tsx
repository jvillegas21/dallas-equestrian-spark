import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-equestrian.jpg";
import lessonImg from "@/assets/riding-lesson.jpg";
import boardingImg from "@/assets/stable-interior.jpg";
import trainingImg from "@/assets/horse-training.jpg";
import eventsImg from "@/assets/show-jumping.jpg";
import { BookOpen, Home, Award, Calendar, Star } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Riding Lessons", desc: "Expert instruction for all ages and skill levels, from beginner to advanced.", link: "/lessons", img: lessonImg },
  { icon: Home, title: "Horse Boarding", desc: "Premium stall boarding with daily turnout, individualized feeding, and top-tier care.", link: "/boarding", img: boardingImg },
  { icon: Award, title: "Training Programs", desc: "Professional training tailored to each horse and rider's goals.", link: "/training", img: trainingImg },
  { icon: Calendar, title: "Events & Shows", desc: "Competitions, clinics, and community events throughout the year.", link: "/events", img: eventsImg },
];

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "80", label: "Acres of Land" },
  { value: "200+", label: "Horses Trained" },
  { value: "500+", label: "Happy Riders" },
];

const testimonials = [
  { quote: "Dallas Equestrian Center transformed my daughter's confidence and riding ability. The trainers are exceptional.", author: "Sarah M.", role: "Parent" },
  { quote: "The boarding facilities are immaculate. My horse has never been happier or healthier.", author: "James T.", role: "Horse Owner" },
  { quote: "From beginner lessons to competitive shows, DEC has supported my journey every step of the way.", author: "Emily R.", role: "Competitive Rider" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Equestrian rider at golden hour in arena" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>
        <div className="container relative z-10 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Where Elegance Meets Horsemanship
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Dallas's premier equestrian facility — offering world-class riding lessons, boarding, training, and events in the heart of Texas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
              <Link to="/contact">Book a Lesson</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Our Services" subtitle="Comprehensive equestrian services tailored to your needs" />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] flex items-end"
              >
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="relative p-6 md:p-8">
                  <s.icon className="text-accent mb-2" size={28} />
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-1">{s.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeading title="What Our Riders Say" />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-background rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Equestrian Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you're a first-time rider or an experienced equestrian, we have the perfect program for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
