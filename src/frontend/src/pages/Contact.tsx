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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdjvzeq";

const SERVICES = [
  { value: "", label: "Select a service..." },
  { value: "Starter Scan", label: "Starter Scan" },
  { value: "Startup Assessment", label: "Startup Assessment" },
  { value: "Full Audit", label: "Full Audit" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aegisind.support@gmail.com",
    href: "mailto:aegisind.support@gmail.com",
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

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidWebsite(url: string): boolean {
  try {
    const u = new URL(
      url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`,
    );
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    startupName: "",
    websiteUrl: "",
    email: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value ?? "" }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!(form.name ?? "").trim()) errors.name = "Name is required.";
    if (!(form.startupName ?? "").trim())
      errors.startupName = "Company name is required.";
    if (!(form.websiteUrl ?? "").trim()) {
      errors.websiteUrl = "Website URL is required.";
    } else if (!isValidWebsite(form.websiteUrl)) {
      errors.websiteUrl =
        "Enter a valid website URL (e.g. https://yoursite.com).";
    }
    if (!(form.email ?? "").trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!(form.message ?? "").trim()) errors.message = "Message is required.";
    if (!(form.service ?? "")) errors.service = "Please select a service.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const websiteNormalized = (form.websiteUrl ?? "")
        .trim()
        .startsWith("http")
        ? form.websiteUrl.trim()
        : `https://${form.websiteUrl.trim()}`;

      const payload = new FormData();
      payload.append("name", (form.name ?? "").trim());
      payload.append("startupName", (form.startupName ?? "").trim());
      payload.append("websiteUrl", websiteNormalized);
      payload.append("email", (form.email ?? "").trim());
      payload.append("message", (form.message ?? "").trim());
      payload.append("service", form.service ?? "");
      payload.append("_subject", "New AEGIS Security Scan Request");
      payload.append("_replyto", (form.email ?? "").trim());
      payload.append("_captcha", "false");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
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
            Request Received!
          </h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Thank you. Your security scan request has been received. Our team
            will contact you shortly.
          </p>
          <div className="font-mono text-xs text-muted-foreground bg-secondary/30 rounded-md px-4 py-2">
            aegisind.support@gmail.com
          </div>
        </motion.div>
      </div>
    );
  }

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
              Get in Touch
            </span>
            <h1 className="hero-headline text-4xl sm:text-5xl text-foreground">
              Request a Security Scan
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your company and we&apos;ll get back to you within
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
                  Fill out the form and our team will review your profile to
                  recommend the right assessment.
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
                noValidate
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
                      placeholder="Your full name"
                      data-ocid="contact.name.input"
                      className={`bg-secondary/20 border-border/40 focus:border-primary/50 ${fieldErrors.name ? "border-destructive" : ""}`}
                    />
                    {fieldErrors.name && (
                      <span className="text-xs text-destructive">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="startupName"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Startup / Company *
                    </Label>
                    <Input
                      id="startupName"
                      name="startupName"
                      value={form.startupName}
                      onChange={handleChange}
                      placeholder="Your company name"
                      data-ocid="contact.startup_name.input"
                      className={`bg-secondary/20 border-border/40 focus:border-primary/50 ${fieldErrors.startupName ? "border-destructive" : ""}`}
                    />
                    {fieldErrors.startupName && (
                      <span className="text-xs text-destructive">
                        {fieldErrors.startupName}
                      </span>
                    )}
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
                      placeholder="https://yourcompany.io"
                      data-ocid="contact.website_url.input"
                      className={`bg-secondary/20 border-border/40 focus:border-primary/50 ${fieldErrors.websiteUrl ? "border-destructive" : ""}`}
                    />
                    {fieldErrors.websiteUrl && (
                      <span className="text-xs text-destructive">
                        {fieldErrors.websiteUrl}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@yourcompany.io"
                      data-ocid="contact.email.input"
                      className={`bg-secondary/20 border-border/40 focus:border-primary/50 ${fieldErrors.email ? "border-destructive" : ""}`}
                    />
                    {fieldErrors.email && (
                      <span className="text-xs text-destructive">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="service"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Selected Service *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    data-ocid="contact.service.select"
                    className={`w-full rounded-md px-3 py-2 text-sm bg-secondary/20 border focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground ${
                      fieldErrors.service
                        ? "border-destructive"
                        : "border-border/40 focus:border-primary/50"
                    }`}
                  >
                    {SERVICES.map((s) => (
                      <option
                        key={s.value}
                        value={s.value}
                        disabled={s.value === ""}
                        className="bg-background text-foreground"
                      >
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.service && (
                    <span className="text-xs text-destructive">
                      {fieldErrors.service}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="message"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your company, tech stack, and any specific security concerns..."
                    rows={5}
                    data-ocid="contact.message.textarea"
                    className={`bg-secondary/20 border-border/40 focus:border-primary/50 resize-none ${fieldErrors.message ? "border-destructive" : ""}`}
                  />
                  {fieldErrors.message && (
                    <span className="text-xs text-destructive">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {status === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30"
                  >
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    <p className="text-sm text-destructive">
                      Submission failed. Please try again later.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 animate-pulse-glow py-6"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2
                        data-ocid="contact.loading_state"
                        className="w-4 h-4 mr-2 animate-spin"
                      />
                      Submitting your request...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Request Security Scan
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
