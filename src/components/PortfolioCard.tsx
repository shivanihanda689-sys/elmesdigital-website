import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EASE } from "@/motion";
import type { PortfolioItem } from "@/types";

export function PortfolioCard({ site, index }: { site: PortfolioItem; index: number }) {
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
                <div key={metric} className="inline-flex min-h-[44px] items-center rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {metric}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-violet-100 pt-5">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Live project</div>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-violet-700 transition hover:text-violet-900">
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
