import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import eventsImg from "@/assets/show-jumping.jpg";
import { Calendar, MapPin, Clock } from "lucide-react";

const upcomingEvents = [
  { title: "Spring Hunter/Jumper Classic", date: "March 15–16, 2026", time: "8:00 AM – 5:00 PM", desc: "USEF-rated hunter/jumper competition with divisions from short stirrup to the grand prix level." },
  { title: "Dressage Schooling Show", date: "April 5, 2026", time: "9:00 AM – 4:00 PM", desc: "A welcoming schooling show for dressage riders of all levels. Intro through Fourth Level tests." },
  { title: "Youth Horsemanship Clinic", date: "April 19–20, 2026", time: "10:00 AM – 3:00 PM", desc: "Two-day clinic focused on developing young riders' horsemanship skills with guest clinician." },
  { title: "Summer Evening Series", date: "May–August 2026 (Monthly)", time: "5:00 PM – 9:00 PM", desc: "Casual evening competitions under the lights — perfect for gaining show experience in a relaxed setting." },
];

const Events = () => (
  <Layout>
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img src={eventsImg} alt="Show jumping competition" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Events & Shows</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Competitions, clinics, and community events year-round</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Upcoming Events" subtitle="Mark your calendar for these exciting equestrian events" />
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((e) => (
            <div key={e.title} className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{e.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} className="text-accent" />
                  {e.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} className="text-accent" />
                  {e.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-accent" />
                  Dallas Equestrian Center
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card text-center">
      <div className="container max-w-2xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Want to Participate?</h2>
        <p className="text-muted-foreground mb-8">Contact us for entry forms, volunteer opportunities, or to host your own event at our facility.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Events;
