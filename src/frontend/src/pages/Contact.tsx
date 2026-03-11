import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sushantbhardwaj2121@gmail.com",
    href: "mailto:sushantbhardwaj2121@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote)",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    startupName: "",
    websiteUrl: "",
    email: "",
    message: "",
  });

  const mutation = useSubmitContactForm();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate(form);
  }

  if (mutation.isSuccess) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          data-ocid="contact.success_state"
          className="glass-card neon-border rounded-xl p-12 text-center max-w-lg w-full"
        >
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-6 animate-float" />
          <h2 className="hero-headline text-2xl text-foreground mb-4">
            Message Sent!
          </h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Thanks for reaching out. We&apos;ll review your request and get back
            to you within 24 hours.
          </p>
          <div className="font-mono text-xs text-muted-foreground bg-secondary/30 rounded-md px-4 py-2">
            sushantbhardwaj2121@gmail.com
          </div>
        </motion.div>
      </div>
    );
  }

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
              Get in Touch
            </span>
            <h1 className="hero-headline text-4xl sm:text-5xl text-foreground">
              Request a Security Scan
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your startup and we&apos;ll get back to you within
              24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h2 className="font-semibold text-foreground text-base mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fill out the form and our team will review your startup&apos;s
                  profile to recommend the right assessment.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-lg p-4 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-foreground">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-lg p-5 border-l-2 border-l-primary/60">
                <Shield className="w-5 h-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All information shared is kept strictly confidential and used
                  only to scope your security assessment.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-xl p-8 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="name"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      data-ocid="contact.name.input"
                      className="bg-secondary/20 border-border/40 focus:border-primary/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="startupName"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Startup Name *
                    </Label>
                    <Input
                      id="startupName"
                      name="startupName"
                      value={form.startupName}
                      onChange={handleChange}
                      required
                      placeholder="Acme Inc."
                      data-ocid="contact.startup_name.input"
                      className="bg-secondary/20 border-border/40 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="websiteUrl"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Website URL *
                    </Label>
                    <Input
                      id="websiteUrl"
                      name="websiteUrl"
                      value={form.websiteUrl}
                      onChange={handleChange}
                      required
                      placeholder="https://acme.io"
                      data-ocid="contact.website_url.input"
                      className="bg-secondary/20 border-border/40 focus:border-primary/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@acme.io"
                      data-ocid="contact.email.input"
                      className="bg-secondary/20 border-border/40 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="message"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your startup, tech stack, and any specific security concerns..."
                    rows={5}
                    data-ocid="contact.message.textarea"
                    className="bg-secondary/20 border-border/40 focus:border-primary/50 resize-none"
                  />
                </div>

                {mutation.isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30"
                  >
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    <p className="text-sm text-destructive">
                      Failed to send message. Please try again or email us
                      directly at sushantbhardwaj2121@gmail.com
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="w-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 animate-pulse-glow py-6"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2
                        data-ocid="contact.loading_state"
                        className="w-4 h-4 mr-2 animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
