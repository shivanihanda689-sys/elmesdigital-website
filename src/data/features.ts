import { Zap, Shield, BarChart3 } from "lucide-react";
import type { Feature, Stat } from "@/types";

export const features: Feature[] = [
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

export const stats: Stat[] = [
  { value: "3.4x", label: "More qualified leads" },
  { value: "41%", label: "Lower admin time" },
  { value: "+28%", label: "Higher booking conversion" },
  { value: "12 wks", label: "To launch core systems" },
];
