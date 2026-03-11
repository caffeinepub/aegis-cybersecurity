import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "../App";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function getHashPath(): string {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#/") return "/";
  return hash.startsWith("#") ? hash.slice(1) : hash;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => getHashPath());

  useEffect(() => {
    function handleHashChange() {
      setCurrentPath(getHashPath());
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.home.link"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">
              <span className="text-foreground">AEGIS</span>
              <span className="text-primary">-IND</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  currentPath === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${
                    currentPath === link.to
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              data-ocid="nav.cta.button"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/60 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            type="button"
            data-ocid="nav.mobile.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border/50 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium hover:text-foreground hover:bg-secondary/40 rounded-md transition-all ${
                  currentPath === link.to
                    ? "text-foreground bg-secondary/30"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-ocid="nav.mobile.cta.button"
              onClick={() => setOpen(false)}
              className="mt-2 mx-3 flex items-center justify-center py-2.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
