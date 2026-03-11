import { ArrowRight, Check, Zap } from "lucide-react";
import { type Variants, motion } from "motion/react";
import { Link } from "../App";

const tiers = [
  {
    name: "Starter Security Scan",
    price: "\u20b915,000",
    period: "one-time",
    desc: "Perfect for early-stage startups doing their first security assessment.",
    features: [
      "Attack surface discovery",
      "Basic vulnerability scan",
      "Up to 3 domains/subdomains",
      "Prioritised findings report",
      "48-hour turnaround",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth Security Pack",
    price: "\u20b945,000",
    period: "one-time",
    desc: "Comprehensive security for growing startups with more complex infrastructure.",
    features: [
      "Everything in Starter",
      "Full penetration testing",
      "Unlimited domains/subdomains",
      "OWASP Top 10 coverage",
      "Remediation guidance session",
      "30-day follow-up scan",
      "Priority support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise Security Suite",
    price: "Custom",
    period: "tailored",
    desc: "Ongoing security partnership for funded startups and scaling tech companies.",
    features: [
      "Everything in Growth Pack",
      "Continuous monitoring",
      "Threat intelligence briefings",
      "Incident response retainer",
      "Quarterly reassessments",
      "Dedicated security advisor",
      "NDA included as standard",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

export default function Pricing() {
  return (
    <div className="pt-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs tracking-[0.3em] uppercase">
              <Zap className="w-3 h-3" />
              Simple Pricing
            </span>
            <h1 className="hero-headline text-4xl sm:text-5xl text-foreground">
              Transparent Security Pricing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No hidden fees. No surprise invoices. Pay only for what your
              startup actually needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                data-ocid={`pricing.item.${i + 1}`}
                className={`relative glass-card rounded-xl p-8 flex flex-col gap-6 ${
                  tier.highlight
                    ? "border-primary/50 shadow-[0_0_40px_oklch(0.75_0.22_210_/_0.12)]"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono font-semibold tracking-wider">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground font-semibold text-lg">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.highlight ? "gradient-text" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm font-mono">
                    {tier.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-ocid={`pricing.tier.${i + 1}.primary_button`}
                  className={`mt-auto flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90 animate-pulse-glow"
                      : "border border-border/60 text-foreground hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {tier.cta}{" "}
                  {tier.highlight && <ArrowRight className="w-4 h-4" />}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-muted-foreground/60 mt-10 font-mono"
          >
            All prices in INR. Custom invoicing available. Contact us for
            international clients.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
