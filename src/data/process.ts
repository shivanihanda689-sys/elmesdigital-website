import { CheckCircle2, Play, Zap, BarChart3 } from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
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
