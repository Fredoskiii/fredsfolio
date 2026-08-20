import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Megaphone,
  Target,
  PenLine,
  Palette,
  Globe,
  Share2,
  Lightbulb,
  Compass,
  TrendingUp,
} from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
  links: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  meta: [
      { title: "Fred Akpaka — Digital Marketing, Design & Strategy" },
      {
        name: "description",
        content:
          "Fred Akpaka is a digital marketing specialist and creative consultant combining strategy, advertising, content, design and technology to grow digital brands.",
      },
      { property: "og:title", content: "Fred Akpaka — Digital Marketing, Design & Strategy" },
      {
        property: "og:description",
        content:
          "Digital marketing specialist and creative consultant helping businesses build stronger digital brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Compass,
    title: "Strategy",
    text: "Understanding the business, audience, and objectives before creating solutions.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    text: "Turning ideas into compelling designs, content, campaigns, and digital experiences.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    text: "Focusing on engagement, conversions, visibility, usability, and business growth.",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "Social media strategy, digital campaigns, audience targeting, and online growth.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    text: "Facebook and Instagram advertising, campaign optimization, audience targeting, and lead generation.",
  },
  {
    icon: PenLine,
    title: "Copywriting & Content",
    text: "Website copy, product descriptions, advertising copy, blogs, articles, and marketing content.",
  },
  {
    icon: Palette,
    title: "Graphic & Product Design",
    text: "Branding, social media graphics, marketing materials, interfaces, and product design.",
  },
  {
    icon: Globe,
    title: "Website Consulting",
    text: "Website structure, user experience, e-commerce functionality, content strategy, and digital positioning.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    text: "Content planning, publishing, community engagement, audience growth, and performance analysis.",
  },
];

const companies = [
  {
    name: "Unicun",
    roles: "Creative Consultant / Senior Product Designer / Content Writer / Graphic Designer / Copywriter",
  },
  { name: "Ultimate FX Group", roles: "Founder & Managing Director" },
  {
    name: "Brother B Interior Decoration",
    roles: "Meta Ads Specialist / Social Media Manager / Graphic Designer",
  },
  { name: "Tregz Online", roles: "Website Consultant / Social Media Manager / Graphic Designer" },
];

const perspectives = [
  {
    title: "Marketing + Design",
    text: "Creating visuals that are not just attractive but support marketing objectives.",
  },
  {
    title: "Content + Strategy",
    text: "Writing content that communicates clearly and encourages action.",
  },
  {
    title: "Technology + User Experience",
    text: "Understanding websites and digital products from both the technical and user perspective.",
  },
  {
    title: "Business + Creativity",
    text: "Balancing creative ideas with practical business goals.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="container-x grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Managing Director @ Insight Lane Media
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
                I Help Businesses Grow Through{" "}
                <span className="text-accent">Digital Marketing, Design & Strategy.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm Fred Akpaka — a digital marketing specialist and creative consultant combining
                strategy, advertising, content, design, and technology to help businesses build
                stronger digital brands and connect with their audiences.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  View My Portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Let's Work Together
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-10 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Social Media · Meta Ads · Copywriting · Design · Product Design · UX · Website
                Consulting
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated">
              <img
                src={heroVisual}
                alt="Marketing analytics dashboards and a laptop displaying a modern website design"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 hidden gap-2 sm:flex">
              {["Meta Ads", "UX", "Copywriting", "Strategy"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold shadow-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Strategy. Creativity. Results.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Fred combines marketing, design, technology, and business strategy to create digital
              solutions that are not only visually appealing but also useful and results-focused.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Expertise</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What I Do</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experience */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              Featured Experience
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Brands I've Worked With</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {companies.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <p className="text-xl font-extrabold tracking-tight">{c.name}</p>
                  <div className="mt-3 h-px w-12 bg-accent" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.roles}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Link
              to="/portfolio"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3"
            >
              See the full professional history <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why work with me */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              More Than One Skill. One Complete Digital Perspective.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Fred's strength comes from being able to approach a business problem from several
              perspectives at once — marketing, design, content, technology, and business — and
              bring them together into one practical solution.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {perspectives.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <h3 className="text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x">
        <Reveal>
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground shadow-elevated sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Have a project in mind? Let's build something impactful.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5"
            >
              Contact Fred <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
