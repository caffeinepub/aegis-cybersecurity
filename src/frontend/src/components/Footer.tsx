import { Shield } from "lucide-react";
import { Link } from "../App";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-mono font-bold text-base">
                <span className="text-foreground">AEGIS</span>
                <span className="text-primary">-IND</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Attack surface discovery and vulnerability assessments for modern
              startups.
            </p>
            <a
              href="mailto:sushantbhardwaj2121@gmail.com"
              className="text-xs text-primary/70 hover:text-primary transition-colors font-mono"
              data-ocid="footer.email.link"
            >
              sushantbhardwaj2121@gmail.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`footer.${link.label.toLowerCase()}.link`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60 font-mono">
            &copy; 2026 AEGIS-IND. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 font-mono">
            Securing the future, one startup at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
