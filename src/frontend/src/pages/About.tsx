import { Briefcase, Shield, Target, TrendingUp, Zap } from "lucide-react";
import { type Variants, motion } from "motion/react";

const founders = [
  {
    name: "Kaushiki Sharma",
    role: "CEO",
    icon: Target,
    desc: "Kaushiki leads the vision and long-term strategy of AEGIS-IND. With a background in tech entrepreneurship and product strategy, she ensures every client engagement delivers measurable security outcomes.",
    color: "text-primary",
  },
  {
    name: "Sushant Bhardwaj",
    role: "CSO",
    icon: Shield,
    desc: "Sushant heads all cybersecurity operations at AEGIS-IND. As Chief Security Officer, he oversees penetration testing, vulnerability research, and the technical methodology behind every assessment.",
    color: "text-primary",
  },
  {
    name: "Akshar Anant",
    role: "CMO",
    icon: TrendingUp,
    desc: "Akshar leads the marketing strategy and brand growth of AEGIS-IND. As Chief Marketing Officer, he drives awareness and positions AEGIS-IND as the go-to cybersecurity partner for startups.",
    color: "text-primary",
  },
  {
    name: "Sahil Singh",
    role: "COO",
    icon: Briefcase,
    desc: "Sahil drives operational excellence across all client engagements. From onboarding to final report delivery, he ensures every project is executed on time, on scope, and to the highest standard.",
    color: "text-primary",
  },
];

const values = [
  {
    label: "Transparency",
    desc: "No hidden costs, no vague reports. We tell you exactly what we found and how to fix it.",
  },
  {
    label: "Integrity",
    desc: "We operate under strict NDAs and ethical guidelines. Your data is never compromised.",
  },
  {
    label: "Speed",
    desc: "Startups move fast. We match your pace with rapid turnarounds and focused engagements.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Header */}
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
              The Team
            </span>
            <h1 className="hero-headline text-4xl sm:text-5xl text-foreground">
              Meet the Team Behind AEGIS-IND
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four founders. One mission: make serious cybersecurity accessible
              to every startup, not just the enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                data-ocid={`about.founder.item.${i + 1}`}
                className="glass-card rounded-xl p-7 flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base">
                      {f.name}
                    </div>
                    <div className="text-xs font-mono text-primary tracking-widest uppercase">
                      {f.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-xl p-10 md:p-14"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="hero-headline text-3xl sm:text-4xl text-foreground mb-6">
                Security Shouldn&apos;t Be a Privilege
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                AEGIS-IND was founded on a simple belief: early-stage startups
                deserve the same level of security protection as Fortune 500
                companies — without the Fortune 500 price tag. We built
                AEGIS-IND to bridge that gap.
              </p>
              <div className="flex flex-col gap-5">
                {values.map((v) => (
                  <div key={v.label} className="flex gap-4">
                    <div className="w-1 rounded-full bg-primary/40 flex-shrink-0" />
                    <div>
                      <div className="text-foreground font-semibold text-sm mb-1">
                        {v.label}
                      </div>
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        {v.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
