import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { EASE } from "@/motion";
import { testimonials } from "@/data/testimonials";

export function ResultsSection() {
  return (
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
  );
}
