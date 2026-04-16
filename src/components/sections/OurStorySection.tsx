import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export function OurStorySection() {
  return (
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
            <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Our approach</div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">We are partners in what you are building.</h3>
            <div className="mt-6 space-y-5 text-slate-600">
              <p className="leading-8">
                Today, we work with businesses at every stage - from early ideas to growing companies - helping them turn concepts into real, scalable digital products. Whether it is a mobile app, a web platform, or a full digital ecosystem, we approach every project the same way: by asking the right questions first, and building with intention.
              </p>
              <p className="leading-8">
                We do not see ourselves as just developers or marketers.<br />
                We see ourselves as partners in what you are building.
              </p>
            </div>
            <div className="mt-8 rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
              <div className="text-sm text-white/70">What drives us</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">It is not just about launching something - it is about building something that lasts.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
