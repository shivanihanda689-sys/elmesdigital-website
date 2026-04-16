import React from "react";

export type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type StorySection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  metric: string;
  detail: string;
};

export type PortfolioItem = {
  name: string;
  url: string;
  image: string;
  service: string;
  metrics: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProcessStep = {
  step: string;
  phase: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  interests: string[];
  timeline: string;
  budget: string;
};
