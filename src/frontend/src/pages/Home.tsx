import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  DollarSign,
  Eye,
  FileText,
  Lock,
  MonitorCheck,
  Search,
  Shield,
  ShieldAlert,
  Terminal as TerminalIcon,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "../App";

const promises = [
  {
    icon: Clock,
    label: "48hr Turnaround",
    desc: "Initial report within 48 hours of kickoff",
  },
  {
    icon: DollarSign,
    label: "0 Hidden Costs",
    desc: "Transparent pricing, no surprise invoices",
  },
  {
    icon: Lock,
    label: "100% Confidential",
    desc: "NDAs and strict data handling as standard",
  },
  {
    icon: MonitorCheck,
    label: "24/7 Monitoring",
    desc: "Continuous threat monitoring after assessment",
  },
];

const services = [
  {
    icon: Search,
    title: "Attack Surface Discovery",
    desc: "Map every exposed asset, subdomain, port, and API endpoint in your infrastructure.",
  },
  {
    icon: ShieldAlert,
    title: "Vulnerability Assessment",
    desc: "Systematic scanning and manual review to identify exploitable weaknesses before attackers do.",
  },
  {
    icon: Shield,
    title: "Security Hardening",
    desc: "Actionable remediation guidance to lock down your systems and reduce risk.",
  },
];

const trustSignals = [
  {
    icon: FileText,
    text: "Strict NDAs signed before every engagement",
  },
  {
    icon: Shield,
    text: "Zero data retained after report delivery",
  },
  {
    icon: Users,
    text: "Founders-only team — no outsourced work",
  },
  {
    icon: Zap,
    text: "Built for startups — not enterprise complexity",
  },
  {
    icon: BadgeCheck,
    text: "Report delivered in plain English, not jargon",
  },
];

const pricingTiers = [
  {
    name: "Starter Security Scan",
    price: "$220",
    billing: "one-time",
    popular: false,
    features: [
      "Attack surface discovery",
      "DNS & subdomain enumeration",
      "Open port scanning",
      "Basic vulnerability report",
      "Email support",
    ],
  },
  {
    name: "Growth Security Pack",
    price: "$380",
    billing: "one-time",
    popular: true,
    features: [
      "Everything in Starter",
      "Deep vulnerability assessment",
      "Manual expert review",
      "Remediation roadmap",
      "30-day follow-up scan",
      "Priority support",
    ],
  },
  {
    name: "Enterprise Security Suite",
    price: "Custom",
    billing: "tailored",
    popular: false,
    features: [
      "Everything in Growth",
      "Continuous monitoring",
      "Dedicated security advisor",
      "Compliance readiness",
      "Quarterly assessments",
    ],
  },
];

const scanLines = [
  "[*] Initializing AEGIS scan engine v2.4.1",
  "[*] Target: {domain}",
  "[+] Resolving DNS records...",
  "[+] Discovered 14 subdomains",
  "[+] Port scan complete: 8 open ports",
  "[!] CVE-2024-1234 found on api.{domain}",
  "[!] Exposed admin panel at /admin (no auth)",
  "[+] SSL certificate expires in 12 days",
  "[*] Generating full report...",
  "[\u2713] Scan complete. 3 critical, 7 medium, 12 low",
];

const sampleFindings = [
  {
    severity: "CRITICAL",
    color: "text-red-400",
    badge: "bg-red-500/20 text-red-400 border-red-500/40",
    title: "Exposed admin panel at /admin",
    detail: "No authentication required — direct access to admin dashboard",
  },
  {
    severity: "HIGH",
    color: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    title: "SSL certificate expires in 12 days",
    detail: "Risk of service disruption and user trust erosion",
  },
  {
    severity: "MEDIUM",
    color: "text-yellow-400",
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    title: "Outdated WordPress plugin (CVE-2024-1234)",
    detail: "Found on blog subdomain — known remote code execution vector",
  },
];

function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);
  const ref = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < scanLines.length) {
        setLines((prev) => [
          ...prev,
          (scanLines[ref.current] || "").replace(
            /\{domain\}/g,
            "acme-startup.io",
          ),
        ]);
        ref.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="glass-card rounded-lg overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-muted-foreground text-xs">
          aegis-scan — zsh
        </span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[240px] bg-black/30">
        {lines.map((line, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: terminal lines can be identical
            key={`terminal-line-${i}`}
            className={`leading-relaxed ${
              line.startsWith("[!]")
                ? "text-yellow-400"
                : line.startsWith("[\u2713]")
                  ? "text-primary"
                  : line.startsWith("[+]")
                    ? "text-green-400"
                    : "text-muted-foreground"
            }`}
          >
            {line}
          </div>
        ))}
        <span className="text-primary">{cursor ? "\u258b" : " "}</span>
      </div>
    </div>
  );
}

function DemoScanner() {
  const [domain, setDomain] = useState("");
  const [scanning, setScanning] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [cursor, setCursor] = useState(true);
  const lineRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  const effectiveDomain = domain.trim() || "your-startup.io";

  function startScan() {
    if (scanning) return;
    setScanning(true);
    setLines([]);
    setDone(false);
    lineRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (lineRef.current < scanLines.length) {
        const line = (scanLines[lineRef.current] || "").replace(
          /\{domain\}/g,
          effectiveDomain,
        );
        setLines((prev) => [...prev, line]);
        lineRef.current += 1;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDone(true);
        setScanning(false);
      }
    }, 500);
  }

  function reset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLines([]);
    setScanning(false);
    setDone(false);
    setDomain("");
    lineRef.current = 0;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          data-ocid="home.demo.input"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter your domain (e.g. acme-startup.io)"
          className="flex-1 bg-secondary/40 border-border/50 text-foreground placeholder:text-muted-foreground font-mono text-sm"
          disabled={scanning}
          onKeyDown={(e) =>
            e.key === "Enter" && !scanning && !done && startScan()
          }
        />
        {!done ? (
          <Button
            data-ocid="home.demo.submit_button"
            onClick={startScan}
            disabled={scanning}
            className="bg-primary text-primary-foreground hover:opacity-90 font-semibold px-6 animate-pulse-glow"
          >
            <TerminalIcon className="w-4 h-4 mr-2" />
            {scanning ? "Scanning..." : "Run Demo Scan"}
          </Button>
        ) : (
          <Button
            data-ocid="home.demo.secondary_button"
            onClick={reset}
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary/10 px-6"
          >
            Reset
          </Button>
        )}
      </div>

      <AnimatePresence>
        {lines.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card rounded-lg overflow-hidden font-mono text-xs"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-muted-foreground text-xs">
                aegis-demo — live scan
              </span>
            </div>
            <div className="p-4 space-y-1.5 min-h-[200px] max-h-[320px] overflow-y-auto bg-black/40">
              {lines.map((line, i) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: terminal lines can be identical
                  key={`demo-line-${i}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`leading-relaxed ${
                    line.startsWith("[!]")
                      ? "text-yellow-400"
                      : line.startsWith("[\u2713]")
                        ? "text-primary"
                        : line.startsWith("[+]")
                          ? "text-green-400"
                          : "text-muted-foreground"
                  }`}
                >
                  {line}
                </motion.div>
              ))}
              {!done && (
                <span className="text-primary">{cursor ? "\u258b" : " "}</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-muted-foreground/60 italic text-center">
        &#9888; This is a simulated demo. Real scans require a paid engagement
        with signed NDA.
      </p>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-7"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-mono tracking-widest uppercase">
                  <Zap className="w-3 h-3" />
                  Cybersecurity for Startups
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="hero-headline text-5xl sm:text-6xl xl:text-7xl text-foreground"
              >
                Your Startup&apos;s{" "}
                <span className="gradient-text animate-neon-pulse">
                  Attack Surface
                </span>{" "}
                Mapped &amp; Secured
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                Discover. Assess. Harden.{" "}
                <span className="text-foreground/80 font-medium">
                  Before attackers strike.
                </span>{" "}
                AEGIS-IND gives early-stage startups enterprise-grade security
                without the enterprise price tag.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-ocid="home.hero.primary_button"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all animate-pulse-glow"
                >
                  Start Your Security Scan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  data-ocid="home.hero.secondary_button"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border/60 text-foreground font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {promises.map((p) => (
              <motion.div
                key={p.label}
                variants={fadeUp}
                className="glass-card rounded-lg p-5 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm mb-1">
                    {p.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              Trust &amp; Transparency
            </span>
            <h2 className="hero-headline text-3xl sm:text-4xl text-foreground">
              Why Startups Trust AEGIS-IND
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {trustSignals.map((signal) => (
              <motion.div
                key={signal.text}
                variants={fadeUp}
                className="glass-card rounded-lg px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                  <signal.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/90 leading-snug">
                  {signal.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              What We Do
            </span>
            <h2 className="hero-headline text-3xl sm:text-4xl text-foreground">
              Core Security Services
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="glass-card rounded-lg p-7 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-base">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="home.services.secondary_button"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              Pricing
            </span>
            <h2 className="hero-headline text-3xl sm:text-4xl text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              No retainers. No lock-in. Pay once, get secured.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`glass-card rounded-xl p-6 flex flex-col gap-4 relative ${
                  tier.popular ? "neon-border" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-end gap-2">
                    <span
                      className={`hero-headline text-3xl ${
                        tier.popular ? "gradient-text" : "text-foreground"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground text-xs mb-1">
                      {tier.billing}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-ocid={`home.pricing.primary_button.${idx + 1}`}
                  className={`text-center text-xs font-semibold py-2.5 px-4 rounded-md transition-all ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 animate-pulse-glow"
                      : "border border-border/50 text-foreground hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link
              to="/pricing"
              data-ocid="home.pricing.secondary_button"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Full Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Demo Scanner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              Interactive Demo
            </span>
            <h2 className="hero-headline text-3xl sm:text-4xl text-foreground">
              See AEGIS-IND in Action
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Type any domain and watch the scan engine run live.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 sm:p-8"
          >
            <DemoScanner />
          </motion.div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              Sample Output
            </span>
            <h2 className="hero-headline text-3xl sm:text-4xl text-foreground">
              What Your Report Looks Like
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Clear, actionable findings — no impenetrable security jargon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 bg-secondary/40 border-b border-border/40 font-mono text-xs">
              <div className="flex items-center gap-2 text-primary mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span className="font-bold tracking-wide">
                  AEGIS-IND Security Assessment Report
                </span>
              </div>
              <div className="text-muted-foreground">
                Target: <span className="text-foreground">acme-startup.io</span>
                <span className="mx-3 opacity-40">|</span>
                Date: <span className="text-foreground">2026-03-11</span>
                <span className="mx-3 opacity-40">|</span>
                <span className="text-red-400 font-semibold">CONFIDENTIAL</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
                Findings Summary — 3 of 22 shown
              </div>
              {sampleFindings.map((finding, i) => (
                <motion.div
                  key={finding.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-lg bg-secondary/20 border border-border/30"
                >
                  <Badge
                    className={`shrink-0 font-mono text-xs font-bold border ${finding.badge} self-start`}
                  >
                    {finding.severity}
                  </Badge>
                  <div className="flex-1">
                    <div
                      className={`font-semibold text-sm ${finding.color} font-mono`}
                    >
                      {finding.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {finding.detail}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4 text-center">
                <Link
                  to="/contact"
                  data-ocid="home.report.primary_button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all animate-pulse-glow"
                >
                  Get Your Real Report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.75 0.22 210 / 0.18) 0%, transparent 70%)",
                animation: "pulse-glow 3s ease-in-out infinite",
                filter: "blur(24px)",
                transform: "scale(1.08)",
              }}
            />

            <div
              className="glass-card rounded-2xl p-10 sm:p-14 text-center flex flex-col items-center gap-6 relative"
              style={{
                borderColor: "oklch(0.75 0.22 210 / 0.65)",
                boxShadow:
                  "0 0 32px oklch(0.75 0.22 210 / 0.30), 0 0 80px oklch(0.75 0.22 210 / 0.12), inset 0 0 24px oklch(0.75 0.22 210 / 0.06)",
              }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center animate-pulse-glow">
                <Eye className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-3">
                <h2 className="hero-headline text-4xl sm:text-5xl text-foreground">
                  Ready to Secure Your Startup?
                </h2>
                <p className="text-red-400/90 font-mono text-sm font-semibold">
                  &#9888; Most startups have critical exposures they don&apos;t
                  know about.
                </p>
              </div>

              <p className="text-muted-foreground max-w-md leading-relaxed">
                Book a free consultation and let us map your attack surface
                before someone else does.
              </p>

              <Link
                to="/contact"
                data-ocid="home.cta.primary_button"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-all animate-pulse-glow"
              >
                Request a Free Scan <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-xs text-muted-foreground/60">
                No commitment. Free 30-min consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
