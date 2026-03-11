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

const milestones = [
  {
    year: "2026",
    event:
      "AEGIS-IND founded with a mission to democratize startup security in India",
  },
  {
    year: "2026",
    event:
      "Launched attack surface discovery and vulnerability assessment services for early-stage startups",
  },
  {
    year: "Now",
    event:
      "Actively securing startups, SaaS products, and tech founders across India — one scan at a time",
  },
  {
    year: "Next",
    event:
      "Expanding automated scanning infrastructure to deliver faster, deeper assessments at scale",
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
            <h1 className="text-4xl sm:text-6xl font-mono font-bold text-foreground mb-6 cyber-text">
              About AEGIS-IND
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
              transition={{ type: "spring", stiffness: 80 }}
            >
              <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                # MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-6 cyber-text">
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
                AEGIS-IND was founded to change that. We make professional-grade
                security assessments accessible to early-stage startups who are
                building fast and don&apos;t have a dedicated security team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80 }}
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
                    AEGIS-IND Team
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground cyber-text">
              Meet the Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Kaushiki Sharma",
                role: "CEO",
                roleLabel: "Chief Executive Officer",
                initials: "KS",
                description:
                  "Visionary leader driving AEGIS-IND's strategy and growth. Kaushiki brings sharp business acumen and a passion for building security-first startup culture.",
              },
              {
                name: "Sushant Bhardwaj",
                role: "CSO",
                roleLabel: "Chief Security Officer",
                initials: "SB",
                description:
                  "Cybersecurity researcher specializing in attack surface discovery and vulnerability assessments. Leads all security operations and client engagements.",
              },
              {
                name: "Akshar Anant",
                role: "CFO",
                roleLabel: "Chief Financial Officer",
                initials: "AA",
                description:
                  "Financial strategist ensuring AEGIS-IND operates with transparency and fiscal discipline. Oversees pricing, budgeting, and sustainable growth.",
              },
              {
                name: "Sahil Singh",
                role: "COO",
                roleLabel: "Chief Operating Officer",
                initials: "SS",
                description:
                  "Operations expert responsible for delivery quality, turnaround times, and client experience. Ensures every engagement runs smoothly and on time.",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card rounded-sm p-6 neon-border flex flex-col gap-4"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-lg font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground cyber-text">
                      {member.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary font-mono text-xs tracking-wider mt-1"
                    >
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
                  {member.roleLabel}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground cyber-text">
              Why AEGIS-IND
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card rounded-sm p-6 flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
                >
                  <value.icon className="w-5 h-5 text-primary" />
                </motion.div>
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

      {/* Journey / Milestones */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              # ROADMAP
            </span>
            <h2 className="text-3xl font-mono font-bold text-foreground cyber-text">
              Our Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[76px] top-0 bottom-0 w-px bg-border/40" />
            <div className="flex flex-col gap-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={`${item.year}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
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
            <h2 className="text-3xl font-mono font-bold text-foreground mb-4 cyber-text">
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
