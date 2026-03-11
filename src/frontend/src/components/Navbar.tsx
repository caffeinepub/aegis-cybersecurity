import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Shield, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home", ocid: "nav.home.link" },
  { to: "/services", label: "Services", ocid: "nav.services.link" },
  { to: "/pricing", label: "Pricing", ocid: "nav.pricing.link" },
  { to: "/about", label: "About", ocid: "nav.about.link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact.link" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function isActive(to: string) {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav shadow-[0_2px_30px_oklch(0_0_0/0.5)]"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Shield
                className="w-8 h-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.65_0.25_250/0.9)]"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 rounded-full blur-md bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-mono text-lg font-bold text-foreground tracking-widest">
                AEGIS-IND
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-sans">
                Cybersecurity
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={cn(
                  "px-4 py-2 text-sm font-sans tracking-wide transition-all duration-200 rounded-sm relative group",
                  isActive(link.to)
                    ? "text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <motion.span
                  layoutId={
                    isActive(link.to) ? "active-nav-indicator" : undefined
                  }
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
                  style={{
                    background: "oklch(0.65 0.25 250)",
                    boxShadow: "0 0 8px oklch(0.65 0.25 250 / 0.8)",
                  }}
                  animate={{
                    width: isActive(link.to) ? "80%" : "0%",
                    opacity: isActive(link.to) ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                {!isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary/40 transition-all duration-300 w-0 group-hover:w-3/5" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              data-ocid="nav.cta.button"
              onClick={() => navigate({ to: "/contact" })}
              className="bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:opacity-90 animate-pulse-glow border border-primary/50 px-5"
            >
              Request Security Scan
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass-nav border-t border-border pb-4"
            >
              <div className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={link.ocid}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-sans tracking-wide transition-colors",
                      isActive(link.to)
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    data-ocid="nav.cta.button"
                    onClick={() => {
                      navigate({ to: "/contact" });
                      setOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground font-mono text-sm tracking-wider"
                  >
                    Request Security Scan
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
