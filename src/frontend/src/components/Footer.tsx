import { Link } from "@tanstack/react-router";
import { Mail, Shield } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const _hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border/50 bg-card/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Shield className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <div>
                <div className="font-mono text-base font-bold tracking-widest text-foreground">
                  AEGIS-IND
                </div>
                <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Cybersecurity
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Security-First. Startup-Focused.
            </p>
            <a
              href="mailto:sushantbhardwaj2121@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              sushantbhardwaj2121@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Attack Surface Discovery",
                "Subdomain Enumeration",
                "Vulnerability Scanning",
                "Security Risk Reporting",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {year} AEGIS-IND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
