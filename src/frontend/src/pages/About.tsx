import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Eye, Lock, Shield, Target, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Eye,
    title: "Attacker Mindset",
    desc: "We think like attackers to find what defenders miss. Real security comes from understanding the offensive perspective.",
  },
  {
    icon: Target,
    title: "Startup-First",
    desc: "Built specifically for the speed, constraints, and culture of early-stage companies. No enterprise bloat.",
  },
  {
    icon: Zap,
    title: "Speed & Clarity",
    desc: "48-hour turnaround. Reports written for founders, not security analysts. Act fast before attackers can.",
  },
  {
    icon: Lock,
    title: "Proactive Security",
    desc: "Don't wait for a breach. Identify and remediate vulnerabilities before they become headlines.",
  },
];

const timeline = [
  {
    year: "2023",
    event: "AEGIS founded with a mission to democratize startup security",
  },
  {
    year: "2024",
    event:
      "Expanded services to include full vulnerability assessments and API security reviews",
  },
  {
    year: "2025",
    event:
      "Reached 500+ startup assessments across SaaS, fintech, and B2B sectors",
  },
  {
    year: "2026",
    event:
      "Launched automated scanning infrastructure to deliver faster, deeper assessments",
  },
];

export default function About() {
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
              # ABOUT
            </span>
            <h1 className="text-4xl sm:text-6xl font-mono font-bold text-foreground mb-6">
              About AEGIS
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              We help startups secure their platforms before attackers exploit
              vulnerabilities. No enterprise complexity. No jargon. Just clear,
              actionable security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                # MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-6">
                Security Shouldn&apos;t Be
                <br />
                an Afterthought
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                Most startups think about security too late — after a breach,
                after a funding round, or after customer data is exposed. By
                then, the damage is done.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                AEGIS was founded to change that. We make professional-grade
                security assessments accessible to early-stage startups who are
                building fast and don&apos;t have a dedicated security team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-sm p-8 neon-border">
                <Shield className="w-10 h-10 text-primary mb-4 animate-float" />
                <blockquote className="font-mono text-lg text-foreground leading-relaxed mb-4">
                  &ldquo;The best time to secure your startup is before you
                  launch. The second best time is now.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-primary" />
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    Sushant Bhardwaj, Founder
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # FOUNDER
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground">
              Meet the Founder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-sm bg-primary/10 neon-border" />
                <img
                  src="/assets/generated/founder-sushant.dim_400x400.jpg"
                  alt="Sushant Bhardwaj"
                  className="relative z-10 w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono text-2xl font-bold text-foreground">
                  Sushant Bhardwaj
                </h3>
              </div>
              <Badge
                variant="outline"
                className="border-primary/30 text-primary font-mono text-xs tracking-wider mb-6"
              >
                Founder & Security Researcher
              </Badge>
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                Cybersecurity enthusiast building tools to help startups secure
                their platforms before attackers exploit vulnerabilities.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Specializing in attack surface discovery and vulnerability
                assessments for early-stage companies. Passionate about making
                professional security accessible to founders who are building
                fast.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Attack Surface Discovery",
                  "Vulnerability Assessment",
                  "Penetration Testing",
                  "API Security",
                ].map((sk) => (
                  <span
                    key={sk}
                    className="px-3 py-1 text-xs font-mono rounded-sm bg-primary/10 border border-primary/20 text-primary"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground">
              Why AEGIS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # HISTORY
            </span>
            <h2 className="text-3xl font-mono font-bold text-foreground">
              Our Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[76px] top-0 bottom-0 w-px bg-border/40" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="font-mono text-sm font-bold text-primary w-16 text-right flex-shrink-0 mt-1">
                    {item.year}
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background flex-shrink-0 mt-1 relative z-10" />
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {item.event}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Work With Us
            </h2>
            <p className="text-muted-foreground font-sans mb-8">
              Ready to secure your startup? Reach out and we&apos;ll discuss the
              right approach for your stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate({ to: "/contact" })}
                size="lg"
                className="bg-primary text-primary-foreground font-mono tracking-wider hover:opacity-90 animate-pulse-glow"
              >
                <Users className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={() => navigate({ to: "/pricing" })}
                variant="outline"
                size="lg"
                className="border-border/60 hover:border-primary/40 hover:text-primary font-mono tracking-wider"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
