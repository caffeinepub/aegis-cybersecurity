import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Check, Shield, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    id: "starter",
    name: "Starter Exposure Scan",
    price: "₹999",
    tagline: "Know your surface",
    icon: Zap,
    popular: false,
    cta: "Get Started",
    ocid: "pricing.starter.button",
    features: [
      "Attack surface discovery",
      "Subdomain discovery",
      "Open port scanning",
      "Basic exposure report",
    ],
    notIncluded: [
      "Vulnerability scanning",
      "PDF security report",
      "Manual assessment",
      "Remediation guidance",
    ],
  },
  {
    id: "assessment",
    name: "Startup Security Assessment",
    price: "₹2,999",
    tagline: "Comprehensive coverage",
    icon: Shield,
    popular: true,
    cta: "Get Started",
    ocid: "pricing.assessment.button",
    features: [
      "Full vulnerability scan",
      "Security risk classification",
      "Detailed PDF security report",
      "Misconfiguration detection",
      "Attack surface discovery",
      "Subdomain discovery",
    ],
    notIncluded: ["Manual vulnerability assessment", "API security review"],
  },
  {
    id: "audit",
    name: "Full Security Audit",
    price: "₹7,999",
    tagline: "Maximum assurance",
    icon: Star,
    popular: false,
    cta: "Contact Us",
    ocid: "pricing.audit.button",
    features: [
      "Manual vulnerability assessment",
      "API security review",
      "Attack surface analysis",
      "Remediation guidance",
      "Full vulnerability scan",
      "Detailed PDF security report",
      "Priority support",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "How long does an assessment take?",
    a: "Starter scans are delivered within 24 hours. Full assessments take 48–72 hours. Audits may take up to 5 business days depending on scope.",
  },
  {
    q: "Do I need technical knowledge to act on the report?",
    a: "No. Our reports are written for founders and non-security teams. Each finding comes with clear, step-by-step remediation guidance.",
  },
  {
    q: "What if my startup is pre-launch?",
    a: "Perfect timing. Finding vulnerabilities before launch is far cheaper than a breach post-launch. We work with MVPs, staging environments, and production systems.",
  },
  {
    q: "Is this a one-time service or ongoing?",
    a: "Both options are available. Most startups start with a one-time assessment and return as their infrastructure grows.",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/4 blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # PRICING
            </span>
            <h1 className="text-4xl sm:text-6xl font-mono font-bold text-foreground mb-6 cyber-text">
              Simple Pricing
            </h1>
            <p className="text-lg text-muted-foreground font-sans">
              Security assessments sized for startups — not enterprise budgets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{
                  scale: plan.popular ? 1.04 : 1.02,
                  y: -4,
                }}
                className={`relative glass-card rounded-sm p-8 flex flex-col ${
                  plan.popular
                    ? "neon-border shadow-neon-lg"
                    : "border border-border/40 hover:border-primary/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-mono text-[10px] tracking-widest px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                      plan.popular
                        ? "bg-primary/20 border border-primary/40"
                        : "bg-secondary/50 border border-border/40"
                    }`}
                  >
                    <plan.icon
                      className={`w-5 h-5 ${
                        plan.popular ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </motion.div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                      {plan.tagline}
                    </div>
                  </div>
                </div>

                <h3 className="font-mono text-base font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div
                  className={`text-5xl font-mono font-bold mb-8 ${
                    plan.popular ? "text-primary neon-text" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </div>

                <div className="flex-1">
                  <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                    Includes
                  </div>
                  <ul className="flex flex-col gap-2 mb-6">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm font-sans text-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm font-sans text-muted-foreground/40 line-through"
                      >
                        <Check className="w-4 h-4 text-border/40 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  data-ocid={plan.ocid}
                  onClick={() => navigate({ to: "/contact" })}
                  className={`w-full font-mono text-sm tracking-wider ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 animate-pulse-glow"
                      : "border border-border/60 bg-transparent text-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 mt-16 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # FAQ
            </span>
            <h2 className="text-3xl font-mono font-bold text-foreground cyber-text">
              Common Questions
            </h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass-card rounded-sm p-6"
              >
                <h4 className="font-mono text-sm font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-mono font-bold text-foreground mb-4 cyber-text">
              Not sure which plan?
            </h2>
            <p className="text-muted-foreground font-sans mb-8">
              Tell us about your startup and we&apos;ll recommend the right
              assessment.
            </p>
            <Button
              onClick={() => navigate({ to: "/contact" })}
              size="lg"
              className="bg-primary text-primary-foreground font-mono tracking-wider hover:opacity-90 animate-pulse-glow"
            >
              Talk to Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
