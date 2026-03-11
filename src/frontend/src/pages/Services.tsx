import {
  ArrowRight,
  Bug,
  Globe,
  Search,
  Shield,
  ShieldAlert,
  Siren,
  Target,
  Zap,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { Link } from "../App";

const services = [
  {
    icon: Search,
    title: "Attack Surface Discovery",
    desc: "Comprehensive mapping of your entire digital footprint — subdomains, open ports, cloud assets, exposed APIs, and forgotten infrastructure. Know what attackers can see before they do.",
    tags: ["Subdomain Enumeration", "Port Scanning", "Asset Discovery"],
  },
  {
    icon: ShieldAlert,
    title: "Vulnerability Assessment",
    desc: "Systematic identification and classification of security weaknesses across your stack. We combine automated scanning with manual analysis to find exploitable gaps.",
    tags: ["CVE Analysis", "OWASP Top 10", "Risk Scoring"],
  },
  {
    icon: Target,
    title: "Penetration Testing",
    desc: "Controlled, ethical simulation of real-world cyberattacks on your systems. We think like adversaries to find the paths that lead to critical data and infrastructure.",
    tags: ["Web App Testing", "Network Pen Test", "Social Engineering"],
  },
  {
    icon: Shield,
    title: "Security Hardening",
    desc: "Post-assessment remediation guidance and implementation support. From firewall rules to secure coding practices, we help you fix what we find.",
    tags: ["Config Review", "Patch Management", "Zero-Trust"],
  },
  {
    icon: Globe,
    title: "Threat Intelligence",
    desc: "Continuous monitoring of the threat landscape relevant to your industry and tech stack. Stay ahead of emerging attack vectors targeting startups like yours.",
    tags: ["Dark Web Monitoring", "IOC Feeds", "Threat Briefings"],
  },
  {
    icon: Siren,
    title: "Incident Response",
    desc: "Rapid containment, analysis, and recovery when a security incident occurs. We help you understand what happened, stop the bleeding, and prevent recurrence.",
    tags: ["Triage", "Forensics", "Recovery Planning"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0 } },
};

export default function Services() {
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
              What We Offer
            </span>
            <h1 className="hero-headline text-4xl sm:text-5xl text-foreground">
              Security Services Built for Modern Startups
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial discovery to ongoing monitoring — comprehensive
              coverage tailored to the speed and scale of your startup.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                data-ocid={`services.item.${i + 1}`}
                className="glass-card rounded-xl p-7 flex flex-col gap-5 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-foreground font-semibold text-base leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-mono border border-border/50 text-muted-foreground/80 bg-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-xl p-10 text-center flex flex-col items-center gap-5"
          >
            <Bug className="w-10 h-10 text-primary" />
            <h2 className="hero-headline text-2xl text-foreground">
              Not sure which service you need?
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              Tell us about your startup and we'll recommend the right
              assessment scope.
            </p>
            <Link
              to="/contact"
              data-ocid="services.cta.primary_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all"
            >
              Talk to Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
