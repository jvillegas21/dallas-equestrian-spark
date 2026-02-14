import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">Dallas Equestrian Center</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premier equestrian facility in Dallas, Texas offering world-class riding lessons, boarding, training, and events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/lessons", label: "Riding Lessons" },
              { to: "/boarding", label: "Horse Boarding" },
              { to: "/training", label: "Training Programs" },
              { to: "/events", label: "Events & Shows" },
              { to: "/pricing", label: "Pricing" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>1234 Ranch Road, Dallas, TX 75201</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>(214) 555-0192</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>info@dallasequestrian.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Monday – Friday: 7am – 7pm</li>
            <li>Saturday: 8am – 6pm</li>
            <li>Sunday: 9am – 5pm</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Dallas Equestrian Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
