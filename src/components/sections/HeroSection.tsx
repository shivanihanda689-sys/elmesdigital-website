import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EASE, REVEAL } from "@/motion";
import { stats } from "@/data/features";

export function HeroSection({ onBookConsultation }: { onBookConsultation: () => void }) {
  return (
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
            <button type="button" onClick={onBookConsultation} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-base font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
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
                  {([
                    ["Lead response automation", "92%", "Automated follow-up coverage within 5 minutes."],
                    ["Bookings uplift", "+28%", "Improved through landing page and funnel redesign."],
                  ] as const).map((row) => (
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
  );
}
