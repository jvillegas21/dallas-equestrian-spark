import logo from "@/assets/DEC_Logo_Horizontal_White.png";
import { Mail, Phone, MapPin } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <img
          src={logo}
          alt="Dallas Equestrian Center"
          className="w-72 md:w-96 mb-12"
        />

        <div className="w-16 h-px bg-white/30 mb-8" />

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          New Website
          <br />
          <span className="text-white/60">Coming Soon</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-md leading-relaxed mb-12">
          We're crafting a new digital experience. In the meantime, reach out to us directly.
        </p>

        <div className="w-16 h-px bg-white/30 mb-12" />

        {/* Contact info */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm text-white/70">
          <a
            href="tel:+19725551234"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Phone size={18} className="text-white/40" />
            <span>(972) 555-1234</span>
          </a>
          <a
            href="mailto:info@dallasequestrian.com"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Mail size={18} className="text-white/40" />
            <span>info@dallasequestrian.com</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-white/40" />
            <span>Dallas, Texas</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-white/30 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Dallas Equestrian Center
      </footer>
    </div>
  );
};

export default ComingSoon;
