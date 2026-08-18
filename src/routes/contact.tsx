import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Send, Globe, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Fred Akpaka — Let's Work Together" },
      {
        name: "description",
        content:
          "Have a project, business idea, or digital challenge? Get in touch with Fred Akpaka for marketing, design and website consulting.",
      },
      { property: "og:title", content: "Contact Fred Akpaka — Let's Work Together" },
      {
        property: "og:description",
        content: "Reach out about marketing, Meta Ads, design, content or website consulting projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "need" | "message", string>>;

const needs = [
  "Digital Marketing",
  "Meta Ads",
  "Copywriting & Content",
  "Graphic & Product Design",
  "Website Consulting",
  "Social Media Management",
  "Something else",
];

type Channel = {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  note?: string;
};

const channels: Channel[] = [
  {
    icon: Mail,
    title: "Email",
    value: "connect@fredsfolio.online",
    href: "mailto:connect@fredsfolio.online",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "fred-akpaka",
    href: "https://www.linkedin.com/in/fred-akpaka-0bbb91206/",
  },
  { icon: Send, title: "Telegram", value: "@ultimatefxg", href: "https://t.me/ultimatefxg" },
  {
    icon: Globe,
    title: "Ultimate FX Group",
    value: "ultimatefxgroup.com",
    href: "https://ultimatefxgroup.com",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const need = String(data.get("need") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Please enter a valid email address.";
    if (!need) next.need = "Please choose what you need help with.";
    if (message.length < 10) next.message = "Please add a few more details (10+ characters).";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <div>
      <section className="container-x py-16 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Let's Work Together</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Have a project, business idea, or digital challenge? I'd love to hear about it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              {sent && (
                <p className="mb-6 flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent">
                  <CheckCircle2 className="h-4 w-4" /> Thanks — your message has been prepared. Fred
                  will get back to you shortly.
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <input id="name" name="name" className={fieldClass} placeholder="Your full name" />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={fieldClass} placeholder="you@company.com" />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="company" className="text-sm font-semibold">
                  Company / Organization
                </label>
                <input id="company" name="company" className={fieldClass} placeholder="Optional" />
              </div>

              <div className="mt-5">
                <label htmlFor="need" className="text-sm font-semibold">
                  What do you need help with?
                </label>
                <select id="need" name="need" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {needs.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                {errors.need && <p className="mt-1.5 text-xs text-destructive">{errors.need}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={fieldClass}
                  placeholder="Tell me about your project, goals and timeline."
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                Send Message
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-sm font-bold">{c.title}</p>
                  <p className="mt-1 text-sm text-accent">{c.value}</p>
                  {c.note && <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
