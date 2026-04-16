import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { EASE } from "@/motion";
import { features } from "@/data/features";

export function ServicesSection() {
  return (
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
  );
}
