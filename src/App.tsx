import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Shield,
  Zap,
  BarChart3,
  Menu,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REVEAL = { duration: 0.5, ease: EASE };


type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};


type StorySection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  metric: string;
  detail: string;
};


type PortfolioItem = {
  name: string;
  url: string;
  image: string;
  service: string;
  metrics: string[];
};


type Testimonial = {
  quote: string;
  name: string;
  role: string;
};


type ProcessStep = {
  step: string;
  phase: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};


const features: Feature[] = [
  {
    icon: Zap,
    title: "Marketing Strategy & Planning",
    description:
      "Market research, audience definition, go-to-market strategy, and KPI-driven campaign planning.",
  },
  {
    icon: Shield,
    title: "Branding & Creative",
    description:
      "Logo design, brand identity, messaging, and visual systems that make your business memorable.",
  },
  {
    icon: BarChart3,
    title: "SEO & Digital Growth",
    description:
      "SEO, local SEO, paid ads, social media, email automation, and content marketing to drive rankings, traffic, and conversions.",
  },
  {
    icon: Zap,
    title: "Website & App Development",
    description:
      "High-converting websites, landing pages, e-commerce experiences, and custom-built applications.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Performance tracking, A/B testing, dashboards, and continuous optimization.",
  },
  {
    icon: Shield,
    title: "AI Automation & Custom Solutions",
    description:
      "AI workflows, CRM integrations, lead systems, funnels, and custom tools built for scale.",
  },
];


const stats = [
  { value: "3.4x", label: "More qualified leads" },
  { value: "41%", label: "Lower admin time" },
  { value: "+28%", label: "Higher booking conversion" },
  { value: "12 wks", label: "To launch core systems" },
];


const storySections: StorySection[] = [
  {
    eyebrow: "Strategy first",
    title: "Build a growth plan before you spend more on marketing.",
    description:
      "We define your audience, sharpen your message, map the journey, and prioritize the channels that actually move revenue.",
    bullets: ["Market research", "Positioning", "Go-to-market planning"],
    metric: "Clearer strategy",
    detail: "Fewer wasted campaigns, better alignment, and stronger ROI.",
  },
  {
    eyebrow: "Digital presence",
    title: "Turn your website into a high-performing sales engine.",
    description:
      "From landing pages to full websites and custom apps, we create digital experiences that look premium, convert better, and support operations.",
    bullets: ["Website design", "Landing pages", "Custom apps"],
    metric: "Built to convert",
    detail: "Designed for bookings, leads, and customer trust.",
  },
  {
    eyebrow: "Automation",
    title: "Remove manual work with systems that run behind the scenes.",
    description:
      "We design AI-powered workflows, CRM integrations, and lead handling systems that save time, improve follow-up, and make growth easier to scale.",
    bullets: ["CRM automation", "Lead routing", "AI workflows"],
    metric: "More leverage",
    detail: "Less admin work, faster response times, and better consistency.",
  },
];


const portfolioItems: PortfolioItem[] = [
  {
    name: "Benjamin Tree Farm",
    url: "https://www.benjamintreefarm.com/",
    image:
      "https://api.microlink.io/?url=https://www.benjamintreefarm.com/&screenshot=true&meta=false&embed=screenshot.url",
    service: "Website refresh + local growth",
    metrics: ["+32% inquiry rate", "+24% mobile engagement"],
  },
  {
    name: "Eat Healthy Live Healthy",
    url: "https://eathealthylivehealthy.org/",
    image:
      "https://api.microlink.io/?url=https://eathealthylivehealthy.org/&screenshot=true&meta=false&embed=screenshot.url",
    service: "Content-driven health platform",
    metrics: ["+41% session depth", "+19% return visitors"],
  },
  {
    name: "Dental Wise Solutions",
    url: "https://www.dentalwisesolutions.com/",
    image:
      "https://api.microlink.io/?url=https://www.dentalwisesolutions.com/&screenshot=true&meta=false&embed=screenshot.url",
    service: "Professional services website",
    metrics: ["+27% lead conversion", "+36% page clarity"],
  },
  {
    name: "SkateSkan",
    url: "https://skateskan.com/",
    image:
      "https://api.microlink.io/?url=https://skateskan.com/&screenshot=true&meta=false&embed=screenshot.url",
    service: "Custom SaaS product + workflow UX",
    metrics: ["20K+ users supported", "25 vendor accounts onboarded"],
  },
  {
    name: "Surya Palace",
    url: "https://www.suryapalace.com/",
    image:
      "https://api.microlink.io/?url=https://www.suryapalace.com/&screenshot=true&meta=false&embed=screenshot.url",
    service: "Hospitality website + booking presence",
    metrics: ["Hospitality-ready UX", "Improved guest discovery"],
  },
];


const testimonials: Testimonial[] = [
  {
    quote:
      "Elmes Digital helped us simplify our marketing, automate follow-up, and create a digital experience that finally matched our brand.",
    name: "Elena Martin",
    role: "Owner, Hospitality Brand",
  },
  {
    quote:
      "What stood out was the combination of strategy and execution. We were not handed a plan deck - we got real systems that worked.",
    name: "Jordan Lee",
    role: "Founder, Local Service Business",
  },
  {
    quote:
      "They connected the dots across website, lead flow, automation, and reporting so growth became much more predictable.",
    name: "Sofia Patel",
    role: "Head of Growth",
  },
];


const processSteps: ProcessStep[] = [
  {
    step: "01",
    phase: "Week 1",
    title: "Discovery & Strategy",
    desc: "We align on business goals, audience, priorities, and the clearest path to growth.",
    icon: CheckCircle2,
  },
  {
    step: "02",
    phase: "Weeks 2-3",
    title: "Design & Experience",
    desc: "We shape the website, funnel, and customer journey with strong branding and conversion-first thinking.",
    icon: Play,
  },
  {
    step: "03",
    phase: "Weeks 3-6",
    title: "Build & Launch",
    desc: "We develop, QA, and launch your system with speed, reliability, and performance in mind.",
    icon: Zap,
  },
  {
    step: "04",
    phase: "Ongoing",
    title: "Optimize & Scale",
    desc: "We measure what works, refine the experience, and layer in automation over time.",
    icon: BarChart3,
  },
];


function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-sm">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}


function LogoMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const textColor = dark ? "#FFFFFF" : "#111827";
  const subTextColor = dark ? "rgba(255,255,255,0.88)" : "#111827";
  const gradientId = dark ? "elmes-gradient-dark" : "elmes-gradient-light";

  if (compact) {
    return (
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 4 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={REVEAL}
        whileHover={{ y: -1, scale: 1.02 }}
        className="flex items-center justify-center"
        aria-label="Elmes Digital icon"
        title="Elmes Digital icon"
      >
        <svg viewBox="0 0 180 180" className="h-12 w-12" role="img" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C56BE7" />
              <stop offset="100%" stopColor="#B45FD9" />
            </linearGradient>
          </defs>
          <polygon points="42,24 130,24 152,56 66,56" fill={`url(#${gradientId})`} />
          <path d="M28 72 H96 L120 108 H64 V122 H132 L154 156 H28 Z" fill={`url(#${gradientId})`} />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 4 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={REVEAL}
      whileHover={{ y: -1, scale: 1.02 }}
      className="flex items-center justify-center"
      aria-label="Elmes Digital logo"
      title={dark ? "Elmes Digital dark logo" : "Elmes Digital logo"}
    >
      <svg viewBox="0 0 420 220" className="h-16 w-auto" role="img" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C56BE7" />
            <stop offset="100%" stopColor="#B45FD9" />
          </linearGradient>
        </defs>

        <polygon points="42,18 132,18 152,46 62,46" fill={`url(#${gradientId})`} />
        <path d="M28 64 H94 L118 98 H61 V110 H132 L152 140 H28 Z" fill={`url(#${gradientId})`} />

        <text
          x="36"
          y="182"
          fill={textColor}
          fontSize="30"
          fontWeight="800"
          letterSpacing="8"
          fontFamily="Inter, Arial, sans-serif"
        >
          ELMES
        </text>
        <text
          x="41"
          y="212"
          fill={subTextColor}
          fontSize="14"
          fontWeight="700"
          letterSpacing="12"
          fontFamily="Inter, Arial, sans-serif"
        >
          DIGITAL
        </text>
      </svg>
    </motion.div>
  );
}


function StoryVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-4">
        {[
          { label: "SEO", value: "72%" },
          { label: "Paid", value: "58%" },
          { label: "Email", value: "81%" },
          { label: "Partnerships", value: "44%" },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2.5 rounded-full bg-violet-100">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                style={{ width: item.value }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="grid h-full grid-cols-[1.25fr_0.75fr] gap-3 overflow-hidden">
        <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-violet-200 bg-violet-50 px-3 py-2">
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              <div className="h-2 w-2 rounded-full bg-slate-300" />
              <div className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <div className="text-[10px] text-slate-500">Landing page flow</div>
          </div>
          <div className="space-y-3 p-4">
            <div className="rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-3">
              <div className="mb-2 h-3 w-20 rounded bg-violet-200" />
              <div className="mb-2 h-5 w-5/6 rounded bg-slate-400" />
              <div className="mb-3 h-5 w-2/3 rounded bg-slate-300" />
              <div className="flex gap-2">
                <div className="h-8 w-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow" />
                <div className="h-8 w-16 rounded-full border border-violet-200 bg-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Trust",
                "Offer",
                "Speed",
              ].map((label) => (
                <div key={label} className="rounded-xl border border-violet-200 bg-white p-2">
                  <div className="mb-2 h-3 w-10 rounded bg-violet-100" />
                  <div className="h-8 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="h-3 w-20 rounded bg-slate-300" />
                <div className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-violet-700">
                  Social proof
                </div>
              </div>
              <div className="mb-2 h-3 w-full rounded bg-slate-200" />
              <div className="h-3 w-2/3 rounded bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-violet-200 bg-slate-950 p-4 text-white shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Outcome</div>
            <div className="mt-2 text-2xl font-semibold">+28%</div>
            <div className="text-xs text-white/70">Booking conversion lift</div>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
              Why it converts
            </div>
            <div className="space-y-2">
              {[
                "Clear offer above the fold",
                "Strong proof near CTA",
                "Fewer drop-off points",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
              Funnel
            </div>
            <div className="flex items-end gap-1.5">
              {[100, 74, 49, 28].map((value, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="rounded-t-xl bg-gradient-to-t from-violet-500 to-fuchsia-400"
                    style={{ height: `${value * 0.6}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-7 gap-2">
      {[
        1, 1, 0, 1, 1, 1, 0,
        1, 1, 1, 1, 0, 1, 1,
        0, 1, 1, 1, 1, 1, 0,
        1, 1, 0, 1, 1, 1, 1,
      ].map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className={
            cell
              ? "rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-400"
              : "rounded-lg bg-violet-100"
          }
        />
      ))}
    </div>
  );
}


function BrandBackdrop() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#f7f3ff]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.10),transparent_22%),linear-gradient(to_bottom,#efe5ff_0%,#f7f3ff_35%,#ffffff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.55]">
        <div className="absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-violet-200 blur-3xl" />
        <div className="absolute right-[-3rem] top-20 h-80 w-80 rounded-full bg-fuchsia-100 blur-3xl" />
        <div className="absolute left-[28%] top-64 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
      </div>
    </>
  );
}


function PortfolioCard({ site, index }: { site: PortfolioItem; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
    >
      <Card className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-violet-200/90 bg-white/92 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(124,58,237,0.35)]">
        <CardContent className="flex h-full flex-col p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-[30px] border border-violet-200 bg-gradient-to-br from-violet-50 to-white">
            {!imageFailed ? (
              <img
                src={site.image}
                alt={site.name}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-50 to-white p-6 text-center">
                <div>
                  <div className="text-sm font-semibold text-slate-700">{site.name}</div>
                  <div className="mt-2 text-xs text-slate-500">Live preview unavailable</div>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
              <div className="absolute inset-0 shadow-inner shadow-violet-300/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-medium text-violet-700 backdrop-blur">
              Case Study
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{site.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{site.service}</p>
            </div>
            <div className="mt-5 grid gap-2">
              {site.metrics.map((metric) => (
                <div
                  key={metric}
                  className="inline-flex min-h-[44px] items-center rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {metric}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-violet-100 pt-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Live project</div>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-violet-700 transition hover:text-violet-900"
              >
                View website
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f3ff] font-sans text-slate-900 antialiased selection:bg-violet-200 selection:text-slate-950">
      <BrandBackdrop />

      <header className="sticky top-0 z-30 border-b border-violet-200/70 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="group flex items-center gap-3">
            <LogoMark compact />
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-950">Elmes Digital</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Our Story", "#our-story"],
              ["How it works", "#story"],
              ["Services", "#features"],
              ["Wineries", "#wineries"],
              ["Results", "#proof"],
              ["Portfolio", "#portfolio"],
              ["Contact", "#contact"],
              ["Work With Us", "#work-with-us"],
            ].map((item) => (
              <a key={item[0]} href={item[1]} className="text-sm text-slate-600 transition hover:text-slate-950">
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Book consultation
            </button>
          </div>

          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-white md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        {/* Our Story Section */}
        <section id="our-story" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title="Built at the intersection of technology, design, and strategy"
            description="Elmes Digital started with a simple belief: great products are not just built with code, they are built with understanding."
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-sm backdrop-blur-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="space-y-6 text-slate-600">
                  <p className="text-lg leading-8 text-slate-700">
                    After years of working inside companies like Google, Amazon, and BlackBerry, we saw the same pattern over and over again: the best products were not necessarily the most complex - they were the ones that solved real problems, simply and beautifully.
                  </p>
                  <p className="leading-8">That insight is what shaped Elmes Digital.</p>
                  <p className="leading-8">
                    Our founder did not come from just one discipline, but from the intersection of many. With a background in Digital Enterprise Management from University of Toronto, design training from Sheridan College, and an MBA in Marketing from Wilfrid Laurier University, she learned early on that building something great requires more than technical skill. It requires understanding people, design, and how businesses actually grow.
                  </p>
                  <p className="leading-8">
                    Elmes Digital was built on that idea - to bring together technology, design, and strategy in a way that feels seamless.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-xl shadow-violet-200/50 backdrop-blur-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                  Our approach
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  We are partners in what you are building.
                </h3>
                <div className="mt-6 space-y-5 text-slate-600">
                  <p className="leading-8">
                    Today, we work with businesses at every stage - from early ideas to growing companies - helping them turn concepts into real, scalable digital products. Whether it is a mobile app, a web platform, or a full digital ecosystem, we approach every project the same way: by asking the right questions first, and building with intention.
                  </p>
                  <p className="leading-8">
                    We do not see ourselves as just developers or marketers.
                    <br />
                    We see ourselves as partners in what you are building.
                  </p>
                </div>

                <div className="mt-8 rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
                  <div className="text-sm text-white/70">What drives us</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
                    It is not just about launching something - it is about building something that lasts.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={REVEAL} className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-2 text-sm text-violet-700 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Built for local businesses, growth teams, and modern brands with strong SEO foundations
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.1rem] lg:leading-[0.95]">
                Marketing systems that feel modern and drive real growth.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Elmes Digital combines strategy, brand, digital execution, websites, and AI automation into one connected platform for demand generation, bookings, and operational scale.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-base font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Book consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a href="#features" className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white/88 px-7 py-3 text-base font-medium text-slate-950 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50">
                  <Play className="mr-2 h-4 w-4" />
                  Explore services
                </a>
              </div>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white/90 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Launch-ready websites, funnels, and automation systems
              </div>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div key={stat.label} whileHover={{ y: -4 }} transition={{ duration: 0.24, ease: EASE }} className="rounded-3xl border border-violet-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                    <div className="text-2xl font-semibold tracking-tight text-slate-950">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE, delay: 0.08 }} className="relative">
              <motion.div aria-hidden="true" animate={{ y: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-10 top-8 hidden h-40 w-40 rounded-full bg-violet-200/70 blur-3xl lg:block" />
              <Card className="overflow-hidden rounded-[34px] border border-violet-200/90 bg-white/86 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.35)] backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between border-b border-violet-200 bg-violet-50/90 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-violet-500" />
                      <div className="h-3 w-3 rounded-full bg-slate-300" />
                      <div className="h-3 w-3 rounded-full bg-slate-300" />
                    </div>
                    <div className="text-sm text-slate-500">Growth overview</div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
                      <div className="text-sm text-white/70">Pipeline influenced</div>
                      <div className="mt-2 text-4xl font-semibold tracking-tight">$1.8M</div>
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {[38, 56, 62, 78, 82, 96, 104, 112].map((h, i) => (
                          <div key={i} className="rounded-t-2xl bg-gradient-to-t from-violet-500 to-purple-300" style={{ height: `${h}px` }} />
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        ["Lead response automation", "92%", "Automated follow-up coverage within 5 minutes."],
                        ["Bookings uplift", "+28%", "Improved through landing page and funnel redesign."],
                      ].map((row) => (
                        <div key={row[0]} className="rounded-[28px] border border-violet-200 bg-white/90 p-5 shadow-sm">
                          <div className="text-sm text-slate-500">{row[0]}</div>
                          <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{row[1]}</div>
                          <div className="mt-2 text-sm leading-6 text-slate-500">{row[2]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-[28px] border border-violet-200 bg-violet-50/90 p-5 shadow-sm">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="text-sm text-violet-700">This is the Elmes Digital model</div>
                          <div className="mt-1 text-lg font-semibold tracking-tight text-slate-950">Strategy, execution, websites, and automation - connected.</div>
                        </div>
                        <a href="#story" className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-violet-100">
                          View how it works
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="border-y border-violet-200 bg-white/55">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How Elmes Digital works"
              title="A storytelling-led system for business growth"
              description="We structure the customer journey like a modern product experience: clear strategy, strong digital presence, and automation that compounds results."
            />
            <div className="space-y-6">
              {storySections.map((section, index) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }} className="grid gap-6 rounded-[32px] border border-violet-200 bg-white/92 p-8 shadow-[0_20px_50px_-38px_rgba(124,58,237,0.45)] backdrop-blur-sm md:grid-cols-[1.08fr_0.92fr] md:p-10">
                  <div>
                    <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">{section.eyebrow}</div>
                    <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{section.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">{bullet}</div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[28px] bg-violet-50/95 p-6 shadow-sm">
                    <div className="text-sm text-slate-500">Outcome</div>
                    <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{section.metric}</div>
                    <p className="mt-3 text-base leading-7 text-slate-600">{section.detail}</p>
                    <div className="mt-6 h-48 overflow-hidden rounded-[24px] border border-violet-200 bg-white p-5 shadow-sm">
                      <StoryVisual index={index} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for local, service-based, and growing businesses"
            description="We help businesses increase bookings, generate leads more consistently, and automate operations with a modern marketing stack."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Increase bookings", "Optimize your website, campaigns, and local presence to convert more interest into scheduled business."],
              ["Automate operations", "Streamline follow-up, CRM flows, and repetitive admin using AI-powered workflows."],
              ["Grow local visibility", "Improve SEO rankings, Google Maps visibility, and targeted acquisition to reach nearby customers at the right time."],
            ].map((row) => (
              <Card key={row[0]} className="rounded-[28px] border border-violet-200 bg-white/92 p-7 shadow-sm backdrop-blur-sm">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{row[0]}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{row[1]}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Wineries Section */}
        <section id="wineries" className="bg-violet-50/75 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium text-violet-700">Winery growth</div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Built for wineries selling experiences, memberships, and bottles.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Elmes Digital helps wineries increase tasting room bookings, grow wine club signups, improve local discoverability, and automate customer follow-up.</p>
              <div className="mt-8 space-y-4 text-slate-600">
                {[
                  "Wine club funnels and lifecycle email automation",
                  "Booking experiences for tastings, events, and hospitality",
                  "Search visibility and local acquisition for tourists and repeat visitors",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-violet-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-xl shadow-violet-200/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ["Wine club growth", "Retention + nurture", "Build subscription funnels, seasonal campaigns, and loyalty touchpoints."],
                    ["Tour systems", "Bookings + reminders", "Automate reservations, reminders, and post-visit follow-up."],
                    ["Local acquisition", "SEO + paid traffic", "Rank for high-intent winery searches, improve local SEO, and capture visitors searching for tastings and experiences nearby."],
                  ].map((row) => (
                    <div key={row[1]} className="rounded-[24px] border border-violet-200 bg-violet-50 p-5">
                      <div className="text-sm text-slate-500">{row[0]}</div>
                      <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{row[1]}</div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{row[2]}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
                  <div className="text-sm text-white/70">Winery system outcome</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">More bookings. Better follow-up. Stronger recurring revenue.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            description="A refined showcase of websites and digital products built to strengthen clarity, trust, and conversion."
          />
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((site, index) => (
              <PortfolioCard key={site.name} site={site} index={index} />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="A connected set of services, not isolated tactics"
            description="Every offering is designed to support the same goal: better acquisition, stronger conversion, and more scalable operations."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22, ease: EASE }}>
                    <Card className="h-full rounded-[28px] border border-violet-200 bg-white/92 shadow-sm transition hover:shadow-[0_24px_60px_-35px_rgba(124,58,237,0.4)] backdrop-blur-sm">
                      <CardContent className="p-7">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-400 text-white shadow-[0_12px_30px_-16px_rgba(124,58,237,0.65)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{feature.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Results Section */}
        <section id="proof" className="border-y border-violet-200 bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Results"
              title="Built to create clarity, momentum, and measurable outcomes"
              description="Elmes Digital is designed for businesses that want better execution, not more noise."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}>
                  <Card className="h-full rounded-[28px] border border-violet-200 bg-white/92 shadow-sm hover:shadow-[0_22px_55px_-34px_rgba(124,58,237,0.34)] backdrop-blur-sm">
                    <CardContent className="flex h-full flex-col justify-between p-7">
                      <p className="text-base leading-7 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                      <div className="mt-6 border-t border-violet-200 pt-5">
                        <div className="font-semibold text-slate-950">{item.name}</div>
                        <div className="text-sm text-slate-500">{item.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work With Us Section */}
        <section id="work-with-us" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Work With Us"
            title="Let us work together"
            description="Tell us what you are building, how soon you want to start, and what kind of support you need. We will use that to shape the right engagement."
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-sm backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Why clients reach out</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">A clear starting point for your next project</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">Whether you need a new website, better lead generation, automation, or a custom app, this page helps us understand your goals before we connect.</p>
                <div className="mt-8 space-y-4">
                  {[
                    "Website design and development",
                    "Growth marketing and lead generation",
                    "CRM, AI, and workflow automation",
                    "Custom tools and business apps",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-500" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
                  <div className="text-sm text-white/70">Typical fit</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">Local businesses, growing brands, and specialty operators who want modern systems that convert.</div>
                </div>
                <div className="mt-10">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Our process</div>
                  <div className="mt-3 max-w-xl text-sm leading-6 text-slate-600">A structured four-step engagement designed to move from clarity to launch, then into continuous improvement.</div>
                  <div className="mt-6 grid gap-4">
                    {processSteps.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div key={item.step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }} className="relative">
                          <div className="flex gap-4 rounded-[24px] border border-violet-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-400 text-white shadow-[0_12px_30px_-16px_rgba(124,58,237,0.6)]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-semibold text-violet-600">{item.step}</span>
                                  <h4 className="font-semibold text-slate-950">{item.title}</h4>
                                </div>
                                <div className="inline-flex w-fit rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">{item.phase}</div>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-xl shadow-violet-200/60 backdrop-blur-sm">
              <CardContent className="flex h-full flex-col p-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">What are you interested in?</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        "Website Build",
                        "Landing Pages",
                        "SEO & Digital Marketing",
                        "Branding & Creative",
                        "AI Automation",
                        "Custom App / Tool",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">How soon do you want to start?</div>
                      <div className="mt-4 space-y-3">
                        {["ASAP", "1-3 Months", "4-6 Months", "6+ Months"].map((item) => (
                          <div key={item} className="rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Budget range</div>
                      <div className="mt-4 space-y-3">
                        {["Under $10K", "$10K-$25K", "$25K-$50K", "$50K+"].map((item) => (
                          <div key={item} className="rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Project details</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <Input placeholder="First name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                      <Input placeholder="Last name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                      <Input placeholder="Company name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500 md:col-span-2" />
                      <Input placeholder="Email address" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                      <Input placeholder="Phone number" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                    <textarea placeholder="Tell us about your project, goals, and what success looks like." className="mt-4 min-h-[160px] w-full rounded-[24px] border border-violet-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-500 outline-none ring-0" />
                    <button type="button" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-8 text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                      Submit inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden rounded-[36px] border border-violet-200 bg-white/92 shadow-[0_30px_80px_-34px_rgba(124,58,237,0.32)] backdrop-blur-sm">
              <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
                <div>
                  <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Ready to grow</div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Build your next growth system with Elmes Digital.</h3>
                  <p className="mt-4 max-w-lg leading-7 text-slate-600">Let us build the strategy, digital experience, and automation layer your business needs to generate more demand and operate more efficiently.</p>
                </div>
                <div className="rounded-[28px] border border-violet-200 bg-violet-50/90 p-5 shadow-sm">
                  <div className="text-sm font-medium text-slate-700">Start a conversation</div>
                  <div className="mt-4 space-y-3">
                    <Input placeholder="Your name" className="h-11 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    <Input placeholder="Work email" className="h-11 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    <button type="button" onClick={() => setIsConsultationOpen(true)} className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-950 text-base font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                      Book consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500">Tell us about your business, goals, and where your current growth systems are breaking down.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setIsConsultationOpen(false)} />
          <Card className="relative z-10 w-full max-w-2xl rounded-[32px] border border-violet-200 bg-white/95 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.35)] backdrop-blur-xl">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Book consultation</div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Tell us about your project.</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Share a few details and we will use them to shape the right strategy, scope, and next steps.</p>
                </div>
                <button type="button" onClick={() => setIsConsultationOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-500 transition hover:bg-violet-50 hover:text-slate-900" aria-label="Close consultation form">
                  ×
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Input placeholder="First name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                <Input placeholder="Last name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                <Input placeholder="Company name" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500 md:col-span-2" />
                <Input placeholder="Email address" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                <Input placeholder="Phone number" className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
              </div>

              <textarea placeholder="Tell us about your goals, timeline, and what success looks like." className="mt-4 min-h-[160px] w-full rounded-[24px] border border-violet-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-500 outline-none ring-0" />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={() => setIsConsultationOpen(false)} className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50">Cancel</button>
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                  Submit inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
