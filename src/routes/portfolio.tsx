import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  ExternalLink,
  GraduationCap,
  Megaphone,
  PenLine,
  Palette,
  Globe,
  LineChart,
  Sparkles,
} from "lucide-react";
import ufxMockup from "@/assets/ufx-mockup.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Resume — Fred Akpaka" },
      {
        name: "description",
        content:
          "The professional portfolio of Fred Akpaka: summary, full work experience at Unicun, Ultimate FX Group, Brother B and Tregz Online, skills and education.",
      },
      { property: "og:title", content: "Portfolio & Resume — Fred Akpaka" },
      {
        property: "og:description",
        content: "Experience, expertise, and professional journey of Fred Akpaka.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Role = { title: string; period: string; points: { label: string; text: string }[] };
type Company = { name: string; period: string; roles: Role[] };

const companies: Company[] = [
  {
    name: "Unicun",
    period: "2020 – Present",
    roles: [
      {
        title: "Copywriter",
        period: "April 2020 – Present",
        points: [
          {
            label: "Website Copy",
            text: "Created clear and engaging website text that guided visitors, communicated product value, and encouraged action.",
          },
          {
            label: "Marketing Copy",
            text: "Wrote persuasive content for campaigns, products, and promotional materials.",
          },
          {
            label: "Brand Messaging",
            text: "Adapted tone and messaging for different audiences while maintaining brand consistency.",
          },
        ],
      },
      {
        title: "Graphic Designer",
        period: "January 2023 – Present",
        points: [
          {
            label: "Branding & Visuals",
            text: "Created visual assets that helped maintain a consistent and professional brand identity.",
          },
          {
            label: "Social Media Graphics",
            text: "Designed engaging graphics for digital platforms and marketing campaigns.",
          },
          {
            label: "Marketing Materials",
            text: "Produced promotional designs supporting product launches and campaigns.",
          },
        ],
      },
      {
        title: "Content Writer",
        period: "February 2023 – Present",
        points: [
          {
            label: "Articles & Blogs",
            text: "Researched topics and created useful content designed to educate audiences and attract website visitors.",
          },
          {
            label: "SEO Content",
            text: "Applied SEO principles to improve content visibility and search performance.",
          },
          {
            label: "Product Content",
            text: "Simplified complex product information into clear, easy-to-understand language.",
          },
        ],
      },
      {
        title: "Senior Product Designer",
        period: "April 2023 – Present",
        points: [
          {
            label: "Product Interfaces",
            text: "Designed intuitive interfaces that made digital products easier and more enjoyable to use.",
          },
          {
            label: "UX Improvement",
            text: "Reviewed user experiences and identified opportunities to improve usability and functionality.",
          },
          {
            label: "Product Collaboration",
            text: "Worked alongside developers and marketers to align product design with customer needs.",
          },
        ],
      },
      {
        title: "Creative Consultant",
        period: "June 2023 – Present",
        points: [
          {
            label: "Creative Strategy",
            text: "Advised management on branding, positioning, and customer engagement.",
          },
          {
            label: "Campaign Ideas",
            text: "Recommended creative approaches for marketing campaigns and product initiatives.",
          },
          {
            label: "Business Insight",
            text: "Used design trends and user behavior to support better creative and marketing decisions.",
          },
        ],
      },
    ],
  },
  {
    name: "Brother B Interior Decoration",
    period: "September 2024 – May 2025",
    roles: [
      {
        title: "Digital Ads Specialist — Meta Ads",
        period: "September 2024 – May 2025",
        points: [
          {
            label: "Campaign Management",
            text: "Planned and managed Facebook and Instagram advertising campaigns focused on generating customer inquiries and leads.",
          },
          {
            label: "Audience Targeting",
            text: "Defined audience segments and adjusted targeting to reach potential customers more effectively.",
          },
          {
            label: "Ad Optimization",
            text: "Monitored campaign performance and adjusted creatives, audiences, and budgets based on results.",
          },
          {
            label: "Performance Analysis",
            text: "Used Meta Business Suite to evaluate campaign performance and recommend improvements.",
          },
        ],
      },
      {
        title: "Social Media Manager",
        period: "September 2024 – May 2025",
        points: [
          {
            label: "Content Management",
            text: "Planned, scheduled, and published content across Facebook and Instagram.",
          },
          {
            label: "Community Engagement",
            text: "Responded to messages, interacted with followers, and helped strengthen relationships with the audience.",
          },
          {
            label: "Social Strategy",
            text: "Analyzed platform performance and recommended ways to improve reach and engagement.",
          },
        ],
      },
      {
        title: "Graphic Designer",
        period: "September 2024 – May 2025",
        points: [
          {
            label: "Social Media Design",
            text: "Created branded graphics for social media campaigns and promotions.",
          },
          {
            label: "Advertising Creatives",
            text: "Designed visual assets used to support advertising campaigns and attract potential customers.",
          },
          {
            label: "Brand Consistency",
            text: "Maintained a consistent visual identity across marketing materials.",
          },
        ],
      },
    ],
  },
  {
    name: "Tregz Online",
    period: "2019 – 2020",
    roles: [
      {
        title: "Social Media Manager",
        period: "February 2019 – September 2020",
        points: [
          {
            label: "Social Media Management",
            text: "Managed content creation, scheduling, and publishing across Instagram and Facebook.",
          },
          {
            label: "Community Building",
            text: "Engaged with followers, responded to inquiries, and helped build an online community around the brand.",
          },
          {
            label: "Growth & Performance",
            text: "Monitored social media performance and improved content strategies to increase visibility and engagement.",
          },
        ],
      },
      {
        title: "Website Consultant",
        period: "March 2020 – December 2020",
        points: [
          {
            label: "Website Structure",
            text: "Advised on website organization and navigation to make it easier for customers to find products and information.",
          },
          {
            label: "User Experience",
            text: "Recommended design and usability improvements to create a smoother customer journey.",
          },
          {
            label: "E-Commerce Strategy",
            text: "Assisted with e-commerce functionality and improvements intended to streamline online sales.",
          },
          {
            label: "SEO & Content",
            text: "Recommended content and SEO improvements to support better online visibility.",
          },
        ],
      },
      {
        title: "Graphic Designer",
        period: "April 2020 – August 2020",
        points: [
          {
            label: "Branding",
            text: "Created banners, flyers, and other visual materials that represented the brand professionally.",
          },
          {
            label: "Promotional Design",
            text: "Designed graphics for product launches, promotions, and sales campaigns.",
          },
          {
            label: "Visual Consistency",
            text: "Maintained consistent branding across digital and promotional materials.",
          },
        ],
      },
    ],
  },
];

const ufxPoints = [
  {
    label: "Website Development",
    text: "Built and designed the website from the ground up, including its structure, layout, user experience, and publishing system.",
  },
  {
    label: "Content Strategy",
    text: "Created and published forex articles, guides, educational resources, and market analysis.",
  },
  {
    label: "SEO & Digital Marketing",
    text: "Used content and digital marketing strategies to improve website visibility and attract traders.",
  },
  {
    label: "Business Management",
    text: "Managed branding, content strategy, marketing, publishing, and overall platform operations.",
  },
  {
    label: "Trading & Market Analysis",
    text: "Applied personal forex trading experience to create practical and relevant educational content.",
  },
  {
    label: "Community Building",
    text: "Built a community around forex education, market insights, and trading information.",
  },
];

const skillGroups = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "Campaigns, paid social and audience growth across Meta platforms.",
    items: [
      "Digital Marketing",
      "Facebook Ads",
      "Instagram Advertising",
      "Meta Ads",
      "Social Media Marketing",
      "Social Media Strategy",
      "Social Media Management",
      "Social Media Outreach",
      "Online Media Management",
    ],
  },
  {
    icon: PenLine,
    title: "Content & Copywriting",
    text: "Words that explain clearly, rank well, and move people to act.",
    items: ["Copywriting", "Content Writing", "SEO Content", "Marketing Copy", "Website Copy", "Product Content"],
  },
  {
    icon: Palette,
    title: "Design",
    text: "Brand visuals, interfaces and product experiences.",
    items: [
      "Graphic Design",
      "Product Design",
      "UX Design",
      "Mobile Design",
      "Design Strategy",
      "Functional Design",
      "Art Direction",
      "Creative Services",
      "Image Design",
      "Computer Graphics",
    ],
  },
  {
    icon: Globe,
    title: "Website & Business Consulting",
    text: "Structure, usability and commercial strategy for digital platforms.",
    items: [
      "Web Development",
      "Website Consulting",
      "E-Commerce Consulting",
      "E-Business Consulting",
      "Software Consulting",
      "Online Consultancy",
    ],
  },
  {
    icon: LineChart,
    title: "Trading & Finance",
    text: "Market knowledge applied to education and content.",
    items: ["Foreign Exchange Trading", "Trading Systems", "Forex Content", "Market Analysis"],
  },
];

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-base font-bold">{role.title}</h4>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {role.period}
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {role.points.map((p) => (
          <li key={p.label} className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{p.label}</span> — {p.text}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Portfolio() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="container-x flex flex-wrap items-end justify-between gap-6 py-16 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Resume</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Professional Portfolio</h1>
            <p className="mt-4 text-muted-foreground">
              Experience, expertise, and professional journey.
            </p>
          </div>
          <a
            href="#"
            aria-label="Download resume (PDF coming soon)"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="container-x py-16">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <h2 className="flex items-center gap-2 text-xl font-extrabold">
              <Sparkles className="h-5 w-5 text-accent" /> Professional Summary
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Versatile Digital Marketing Specialist and Creative Consultant with hands-on experience
              across digital marketing, copywriting, content creation, graphic design, product design,
              UX, social media management, advertising, and website consulting. Fred has worked with
              businesses including Unicun, Tregz Online, and Brother B Interior Decoration, while also
              building and managing his own digital platform, Ultimate FX Group. His approach combines
              creativity, strategy, and problem-solving to help businesses communicate better, improve
              their digital presence, and achieve meaningful results.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Experience timeline */}
      <section className="container-x pb-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Experience</h2>
        </Reveal>

        <div className="relative mt-12 space-y-14 border-l border-border pl-6 sm:pl-10">
          {/* Unicun */}
          <Reveal className="relative">
            <span className="absolute top-2 -left-[31px] h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background sm:-left-[47px]" />
            <TimelineCompany company={companies[0]!} />
          </Reveal>

          {/* Ultimate FX Group */}
          <Reveal className="relative">
            <span className="absolute top-2 -left-[31px] h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background sm:-left-[47px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">Ultimate FX Group</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  Founder & Managing Director
                </p>
              </div>
              <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                January 2023 – Present
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <article className="rounded-2xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {ufxPoints.map((p) => (
                    <li key={p.label} className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">{p.label}</span> — {p.text}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl border-l-2 border-accent bg-surface p-4 text-sm font-medium">
                  Built and managed a complete digital platform independently, combining web
                  development, content, SEO, marketing, and business management.
                </p>
                <a
                  href="https://ultimatefxgroup.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5"
                >
                  Visit Ultimate FX Group <ExternalLink className="h-4 w-4" />
                </a>
              </article>

              <figure className="overflow-hidden rounded-2xl border border-border shadow-elevated">
                <img
                  src={ufxMockup}
                  alt="Browser mockup of a forex education platform with market charts and articles"
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground">
                  Illustrative platform preview — ultimatefxgroup.com
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Brother B + Tregz */}
          {companies.slice(1).map((c) => (
            <Reveal key={c.name} className="relative">
              <span className="absolute top-2 -left-[31px] h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background sm:-left-[47px]" />
              <TimelineCompany company={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16 bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Skills</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Capabilities grouped by discipline — combined on most projects rather than used in
              isolation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Education</h2>
          <article className="mt-10 flex flex-wrap items-start gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="min-w-64 flex-1">
              <h3 className="text-lg font-extrabold">
                Nspire School of Management and Technology
              </h3>
              <p className="mt-2 text-sm font-semibold">Higher National Diploma (HND)</p>
              <p className="text-sm text-muted-foreground">Computer Software Engineering</p>
            </div>
            <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              September 2016 – November 2018
            </span>
          </article>
        </Reveal>
      </section>
    </div>
  );
}

function TimelineCompany({ company }: { company: Company }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-2xl font-extrabold tracking-tight">{company.name}</h3>
        <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
          {company.period}
        </span>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {company.roles.map((r) => (
          <RoleCard key={r.title} role={r} />
        ))}
      </div>
    </div>
  );
}
