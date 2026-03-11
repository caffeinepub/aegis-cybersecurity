import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ChevronRight,
  FileText,
  Globe,
  Layers,
  Lock,
  Search,
  Server,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Attack Surface Discovery",
    tagline: "Know your exposure before attackers do",
    description:
      "Map your entire digital footprint. We identify all internet-facing assets, domains, subdomains, and entry points attackers could target. A comprehensive inventory of your attack surface is the first step toward securing it.",
    features: [
      "Full domain and IP enumeration",
      "Cloud asset discovery (AWS, GCP, Azure)",
      "Third-party integration mapping",
      "Exposure risk scoring",
    ],
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: Search,
    title: "Subdomain Enumeration",
    tagline: "Uncover your shadow infrastructure",
    description:
      "Discover forgotten or shadow subdomains that may be running vulnerable services. Often the first step attackers take — a staging server left public, a forgotten admin panel, or a legacy API endpoint can become your weakest link.",
    features: [
      "Passive and active DNS enumeration",
      "Certificate transparency log analysis",
      "Wildcard and wildcard-adjacent detection",
      "Subdomain takeover vulnerability detection",
    ],
    accent: "from-cyan-500/10 to-transparent",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Scanning",
    tagline: "Find weaknesses before they're exploited",
    description:
      "Automated and manual scanning for known CVEs, misconfigurations, and exposed services across your attack surface. We cross-reference findings against current threat intelligence to prioritize what matters most.",
    features: [
      "CVE database cross-referencing",
      "Open port and service fingerprinting",
      "SSL/TLS misconfiguration detection",
      "Web application vulnerability scanning",
    ],
    accent: "from-yellow-500/10 to-transparent",
  },
  {
    icon: FileText,
    title: "Security Risk Reporting",
    tagline: "Clarity from complexity",
    description:
      "Receive a detailed, actionable security report with risk classifications, findings, and step-by-step remediation guidance. Written for founders and technical leads alike — no security expertise required to understand or act on it.",
    features: [
      "CVSS-based risk classification",
      "Prioritized remediation roadmap",
      "Executive summary + technical detail",
      "PDF report delivery in 48 hours",
    ],
    accent: "from-green-500/10 to-transparent",
  },
];

const processSteps = [
  {
    icon: Layers,
    step: "01",
    title: "Asset Discovery",
    desc: "We map all your internet-facing assets and infrastructure.",
  },
  {
    icon: Server,
    step: "02",
    title: "Scanning & Enumeration",
    desc: "Automated and manual probing of your attack surface.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Risk Analysis",
    desc: "Findings are classified and prioritized by severity.",
  },
  {
    icon: Lock,
    step: "04",
    title: "Report Delivery",
    desc: "Detailed PDF report with remediation steps delivered in 48 hours.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # SERVICES
            </span>
            <h1 className="text-4xl sm:text-6xl font-mono font-bold text-foreground mb-6">
              Security Services
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Purpose-built security assessments for startups. We find the
              vulnerabilities in your stack before attackers do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass-card rounded-sm p-8 overflow-hidden group hover:neon-border transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.accent} opacity-50 group-hover:opacity-80 transition-opacity`}
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-primary tracking-widest uppercase mb-0.5">
                        {service.tagline}
                      </div>
                      <h3 className="font-mono text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm font-sans text-foreground"
                      >
                        <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground">
              How It Works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-sm p-6 text-center relative"
              >
                <div className="font-mono text-4xl font-bold text-primary/20 mb-3">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {step.desc}
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
            <h2 className="text-3xl font-mono font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground font-sans mb-8">
              Choose a plan or contact us to discuss a custom engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate({ to: "/pricing" })}
                size="lg"
                className="bg-primary text-primary-foreground font-mono tracking-wider hover:opacity-90 animate-pulse-glow"
              >
                View Pricing
              </Button>
              <Button
                onClick={() => navigate({ to: "/contact" })}
                variant="outline"
                size="lg"
                className="border-border/60 hover:border-primary/40 hover:text-primary font-mono tracking-wider"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
