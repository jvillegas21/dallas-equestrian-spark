import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-equestrian.jpg";
import facilityImg from "@/assets/facility-aerial.jpg";
import stableImg from "@/assets/stable-interior.jpg";
import lessonImg from "@/assets/riding-lesson.jpg";
import trainingImg from "@/assets/horse-training.jpg";
import eventsImg from "@/assets/show-jumping.jpg";
import horseImg from "@/assets/horse-portrait.jpg";

const categories = ["All", "Facility", "Lessons", "Events", "Horses"] as const;

const images = [
  { src: facilityImg, alt: "Aerial view of the equestrian facility", category: "Facility" },
  { src: stableImg, alt: "Modern stable interior", category: "Facility" },
  { src: heroImg, alt: "Rider cantering at golden hour", category: "Lessons" },
  { src: lessonImg, alt: "Riding lesson in progress", category: "Lessons" },
  { src: eventsImg, alt: "Show jumping competition", category: "Events" },
  { src: trainingImg, alt: "Horse training session", category: "Horses" },
  { src: horseImg, alt: "Beautiful chestnut horse portrait", category: "Horses" },
];

const Gallery = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Gallery" subtitle="Explore our facility, lessons, events, and horses" />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === c ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
