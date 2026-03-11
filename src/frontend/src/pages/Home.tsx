import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  Lock,
  Search,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Attack Surface Discovery",
    desc: "Map every internet-facing asset attackers could target before they do.",
  },
  {
    icon: Search,
    title: "Subdomain Enumeration",
    desc: "Uncover forgotten subdomains running vulnerable or misconfigured services.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Scanning",
    desc: "Automated and manual scanning for CVEs, misconfigs, and exposed services.",
  },
  {
    icon: FileText,
    title: "Security Risk Reporting",
    desc: "Actionable reports with risk classifications and step-by-step remediation.",
  },
];

const pricing = [
  { name: "Starter Exposure Scan", price: "₹999", popular: false },
  { name: "Growth Security Pack", price: "₹2,999", popular: true },
  { name: "Full Security Audit", price: "₹7,999", popular: false },
];

const promises = [
  { icon: Clock, value: "48hr", label: "Turnaround" },
  { icon: ShieldCheck, value: "0", label: "Hidden Costs" },
  { icon: Lock, value: "100%", label: "Confidential" },
  { icon: Zap, value: "24/7", label: "Threat Monitoring" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-cyber-bg.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/98 via-gray-950/97 to-zinc-950/98" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 matrix-bg" />

        {/* Animated scan line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"
          style={{ animation: "scan 6s linear infinite", top: 0 }}
        />

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/40 text-primary font-mono text-xs tracking-widest px-4 py-1.5 bg-primary/5 animate-neon-pulse"
            >
              <Lock className="w-3 h-3 mr-2" />
              AEGIS-IND CYBERSECURITY
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6 cyber-text animate-glitch"
          >
            <span className="text-white">Your Startup&apos;s</span>
            <br className="hidden sm:block" />
            <span className="gradient-text">Attack Surface</span>
            <br className="hidden sm:block" />
            <span className="text-white">Mapped &amp; Secured</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-xl sm:text-2xl text-primary font-mono mb-4 neon-text animate-neon-pulse"
          >
            Discover. Assess. Harden. Before attackers strike.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
          >
            AEGIS-IND helps early-stage startups discover exposed digital
            assets, security risks, and vulnerabilities before attackers exploit
            them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              data-ocid="hero.cta.primary_button"
              onClick={() => navigate({ to: "/contact" })}
              size="lg"
              className="bg-primary text-primary-foreground font-mono tracking-wider text-sm animate-pulse-glow hover:opacity-90 px-8 py-6 text-base border border-primary/50"
            >
              <Shield className="w-4 h-4 mr-2" />
              Request Security Scan
            </Button>
            <Button
              data-ocid="hero.cta.secondary_button"
              onClick={() => navigate({ to: "/services" })}
              variant="outline"
              size="lg"
              className="border-border/60 text-white hover:border-primary/40 hover:text-primary font-mono tracking-wider text-sm px-8 py-6 text-base bg-transparent"
            >
              View Services
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-sm"
          >
            <span className="text-primary text-xs font-mono">$</span>
            <span className="text-xs font-mono text-slate-300">
              aegis-ind --scan --target your-startup.com
            </span>
            <span className="text-primary text-xs font-mono animate-blink">
              _
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </section>

      {/* Service Promise Bar */}
      <section className="border-y border-border/40 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {promises.map((p) => (
              <motion.div
                key={p.label}
                variants={itemVariants}
                className="text-center flex flex-col items-center gap-2"
              >
                <p.icon className="w-6 h-6 text-primary/70" />
                <div className="text-3xl font-mono font-bold text-primary neon-text animate-neon-pulse">
                  {p.value}
                </div>
                <div className="text-xs text-slate-300 font-sans tracking-wide">
                  {p.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white mb-4 cyber-text">
              How We Protect Your Startup
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-sans">
              End-to-end security coverage tailored for early-stage companies
              and tech founders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-sm p-6 group hover:neon-border cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                >
                  <service.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-mono text-sm font-semibold text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary font-mono hover:neon-text transition-all"
            >
              Explore all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # PRICING
            </span>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white mb-4 cyber-text">
              Transparent Pricing
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto font-sans">
              Security assessments sized for startups — not enterprise budgets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`relative glass-card rounded-sm p-8 text-center ${
                  plan.popular
                    ? "neon-border shadow-neon"
                    : "hover:border-primary/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-mono text-[10px] tracking-widest px-3">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <h3 className="font-mono text-sm font-semibold text-white mb-3">
                  {plan.name}
                </h3>
                <div className="text-4xl font-mono font-bold text-primary neon-text mb-6">
                  {plan.price}
                </div>
                <Link to="/pricing">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full font-mono text-sm tracking-wide ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border-border/60 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    View Details
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm text-primary font-mono hover:neon-text transition-all"
            >
              See full pricing details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why AEGIS-IND */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                # WHY AEGIS-IND
              </span>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-6 cyber-text">
                Startup-Speed Security,
                <br />
                Enterprise-Grade Results
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans mb-6">
                AEGIS-IND delivers the same rigorous security coverage used by
                leading tech companies — at a pace and price designed for
                founders building the next big thing.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Fast turnaround — reports in 48 hours",
                  "Founder-friendly pricing",
                  "Clear, actionable remediation steps",
                  "No security expertise required from your team",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-3 text-sm text-white font-sans"
                  >
                    <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="glass-card rounded-sm p-8 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-300 text-xs">
                  aegis-ind-scan.sh
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-white">
                    aegis-ind scan --target acme.io
                  </span>
                </div>
                <div className="text-slate-300"> → Resolving domains...</div>
                <div className="text-slate-300"> → Found 24 subdomains</div>
                <div className="text-yellow-400/80">
                  ⚠ admin.acme.io — port 8080 exposed
                </div>
                <div className="text-yellow-400/80">
                  ⚠ dev.acme.io — SSL cert expired
                </div>
                <div className="text-red-400/80">
                  ✗ api.acme.io — CVE-2024-1234 detected
                </div>
                <div className="text-slate-300">
                  → Scanning for misconfigurations...
                </div>
                <div className="text-green-400/80">
                  ✓ Report generated: report.pdf
                </div>
                <div>
                  <span className="text-primary">$</span>{" "}
                  <span className="animate-blink text-primary">_</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative glass-card neon-border rounded-sm p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="relative z-10">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4 cyber-text">
                Know Your Exposure Before Attackers Do
              </h2>
              <p className="text-slate-300 font-sans mb-8 max-w-xl mx-auto">
                Don&apos;t wait for a breach. Get a comprehensive security
                assessment and know exactly where you stand.
              </p>
              <Button
                data-ocid="home.cta.button"
                onClick={() => navigate({ to: "/contact" })}
                size="lg"
                className="bg-primary text-primary-foreground font-mono tracking-wider text-sm animate-pulse-glow hover:opacity-90 px-10 py-6 text-base border border-primary/50"
              >
                <Shield className="w-4 h-4 mr-2" />
                Request Security Scan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
