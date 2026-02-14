import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import facilityImg from "@/assets/facility-aerial.jpg";
import horsePortrait from "@/assets/horse-portrait.jpg";
import { Award, Heart, Shield } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in horsemanship, training, and facility management." },
  { icon: Heart, title: "Compassion", desc: "Every horse and rider is treated with care, patience, and respect." },
  { icon: Shield, title: "Safety", desc: "Rider and horse safety is our top priority in every lesson, training session, and event." },
];

const team = [
  { name: "Katherine Brooks", role: "Head Trainer & Founder", bio: "USDF Gold Medalist with 20+ years of competitive dressage and hunter/jumper experience." },
  { name: "Michael Torres", role: "Senior Instructor", bio: "Certified by the American Riding Instructors Association with expertise in youth development." },
  { name: "Sarah Chen", role: "Barn Manager", bio: "Equine science graduate managing all boarding operations and horse welfare programs." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img src={facilityImg} alt="Aerial view of Dallas Equestrian Center" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Our story, our mission, our passion for horses</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Our Story" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded over 25 years ago, Dallas Equestrian Center began with a simple vision: to create a world-class equestrian facility that combines excellence in horsemanship with a welcoming, family-friendly atmosphere.
            </p>
            <p>
              Nestled on 80 beautiful acres in Dallas, Texas, our facility has grown from a small riding school into one of the region's most respected equestrian centers. We offer comprehensive services including riding lessons, horse boarding, professional training, and competitive events.
            </p>
            <p>
              Our commitment to the well-being of both horses and riders drives everything we do. From our meticulously maintained arenas to our state-of-the-art stables, every detail reflects our dedication to providing an exceptional equestrian experience.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={horsePortrait} alt="Horse and rider at Dallas Equestrian Center" className="w-full h-full object-cover aspect-square" />
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center p-8 bg-background rounded-lg shadow-sm">
              <v.icon className="mx-auto text-accent mb-4" size={40} />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Meet Our Team" subtitle="Experienced professionals dedicated to your equestrian journey" />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">{t.name}</h3>
              <p className="text-accent text-sm font-medium mb-2">{t.role}</p>
              <p className="text-muted-foreground text-sm">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
