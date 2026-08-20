import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Compass, Award, TrendingUp } from "lucide-react";
import portraitAsset from "@/assets/fred-portrait.png";
import workspace from "@/assets/workspace.jpg";
import { Reveal } from "@/components/Reveal";

const portrait = portraitAsset;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fred Akpaka — Creative Consultant & Marketer" },
      {
        name: "description",
        content:
          "Fred Akpaka connects marketing, design, content and user experience to solve business problems with practical digital solutions.",
      },
      { property: "og:title", content: "About Fred Akpaka — Creative Consultant & Marketer" },
      {
        property: "og:description",
        content:
          "A versatile digital marketing specialist and creative consultant across design, content, UX and strategy.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, title: "Creativity", text: "Finding fresh and effective ways to communicate ideas." },
  { icon: Compass, title: "Strategy", text: "Understanding the objective before choosing the solution." },
  { icon: Award, title: "Excellence", text: "Taking pride in delivering polished, professional work." },
  { icon: TrendingUp, title: "Results", text: "Focusing on outcomes rather than simply completing tasks." },
];

const stats = [
  { value: "8+ Years", label: "Professional Experience" },
  { value: "Multiple Disciplines", label: "Marketing • Design • Content • Technology" },
  { value: "Multiple Brands", label: "Experience across different industries" },
  { value: "Entrepreneur", label: "Founder & Managing Director" },
];

function About() {
  return (
    <div>
      <section className="container-x grid items-start gap-14 py-16 md:py-24 lg:grid-cols-[420px_1fr] lg:gap-16">
        <Reveal>
          <figure className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated">
            <img
              src={portrait}
              alt="Fred Akpaka — Creative Consultant & Digital Marketing Specialist"
              width={1008}
              height={1264}
              className="h-full w-full object-cover"
            />
            <figcaption className="border-t border-border px-5 py-4 text-xs text-muted-foreground">
              Fred Akpaka — Creative Consultant & Digital Marketing Specialist.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">About</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">About Fred</h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a versatile digital marketing specialist and creative consultant who enjoys turning
              ideas into practical digital solutions.
            </p>
            <p>
              My experience spans copywriting, content creation, graphic design, product design, UX,
              social media management, Meta advertising, website consulting, and digital strategy.
            </p>
            <p>
              I've worked with businesses such as Unicun, Tregz Online, and Brother B Interior
              Decoration, while also building and managing my own forex platform, Ultimate FX Group.
            </p>
            <p>
              My strength lies in connecting different disciplines. I can look at a business challenge
              from a marketing perspective, a design perspective, a content perspective, and a
              user-experience perspective — then bring those perspectives together into a practical
              solution.
            </p>
            <p>
              I believe good digital work should do more than look good. It should communicate clearly,
              solve problems, create better experiences, and contribute to business growth.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated"
          >
            View professional portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Core Values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <img
            src={workspace}
            alt="Creative workspace with a laptop showing design software and interface wireframes"
            width={1408}
            height={912}
            loading="lazy"
            className="rounded-3xl border border-border object-cover shadow-elevated"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Professional Snapshot</h2>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.value} className="rounded-2xl border border-border bg-card p-6">
                <dt className="text-lg font-extrabold tracking-tight">{s.value}</dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </div>
  );
}
