import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryVisual } from "@/components/StoryVisual";
import { EASE } from "@/motion";
import { storySections } from "@/data/story";

export function StorySection() {
  return (
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
  );
}
