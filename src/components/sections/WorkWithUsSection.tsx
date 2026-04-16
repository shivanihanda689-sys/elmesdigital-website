import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EASE } from "@/motion";
import { processSteps } from "@/data/process";
import { useFormState } from "@/hooks/useFormState";

const interestOptions = [
  "Website Build",
  "Landing Pages",
  "SEO & Digital Marketing",
  "Branding & Creative",
  "AI Automation",
  "Custom App / Tool",
];

const timelineOptions = ["ASAP", "1-3 Months", "4-6 Months", "6+ Months"];
const budgetOptions = ["Under $10K", "$10K-$25K", "$25K-$50K", "$50K+"];

export function WorkWithUsSection() {
  const { form, status, updateField, toggleInterest, isValid, submit } = useFormState();

  return (
    <section id="work-with-us" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Work With Us"
        title="Let us work together"
        description="Tell us what you are building, how soon you want to start, and what kind of support you need. We will use that to shape the right engagement."
      />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left column — info + process */}
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

        {/* Right column — form */}
        <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-xl shadow-violet-200/60 backdrop-blur-sm">
          <CardContent className="flex h-full flex-col p-8">
            {status === "success" ? (
              <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                  <svg className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">Thank you!</h3>
                <p className="mt-2 text-slate-600">We received your inquiry and will be in touch soon.</p>
              </div>
            ) : (
              <div className="flex-1 space-y-6">
                <fieldset>
                  <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">What are you interested in?</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2" role="group">
                    {interestOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        aria-pressed={form.interests.includes(item)}
                        className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                          form.interests.includes(item)
                            ? "border-violet-500 bg-violet-100 text-violet-800"
                            : "border-violet-200 bg-violet-50 text-slate-700 hover:border-violet-300"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-6 md:grid-cols-2">
                  <fieldset>
                    <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">How soon do you want to start?</legend>
                    <div className="mt-4 space-y-3" role="radiogroup">
                      {timelineOptions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          role="radio"
                          aria-checked={form.timeline === item}
                          onClick={() => updateField("timeline", item)}
                          className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                            form.timeline === item
                              ? "border-violet-500 bg-violet-100 text-violet-800"
                              : "border-violet-200 bg-white text-slate-700 hover:border-violet-300"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Budget range</legend>
                    <div className="mt-4 space-y-3" role="radiogroup">
                      {budgetOptions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          role="radio"
                          aria-checked={form.budget === item}
                          onClick={() => updateField("budget", item)}
                          className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                            form.budget === item
                              ? "border-violet-500 bg-violet-100 text-violet-800"
                              : "border-violet-200 bg-white text-slate-700 hover:border-violet-300"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Project details</div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="wwu-first" className="sr-only">First name</label>
                      <Input id="wwu-first" placeholder="First name" value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                    <div>
                      <label htmlFor="wwu-last" className="sr-only">Last name</label>
                      <Input id="wwu-last" placeholder="Last name" value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="wwu-company" className="sr-only">Company name</label>
                      <Input id="wwu-company" placeholder="Company name" value={form.company} onChange={(e) => updateField("company", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                    <div>
                      <label htmlFor="wwu-email" className="sr-only">Email address</label>
                      <Input id="wwu-email" type="email" placeholder="Email address" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                    <div>
                      <label htmlFor="wwu-phone" className="sr-only">Phone number</label>
                      <Input id="wwu-phone" type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                    </div>
                  </div>
                  <label htmlFor="wwu-message" className="sr-only">Project details</label>
                  <textarea id="wwu-message" placeholder="Tell us about your project, goals, and what success looks like." value={form.message} onChange={(e) => updateField("message", e.target.value)} className="mt-4 min-h-[160px] w-full rounded-[24px] border border-violet-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-500 outline-none ring-0" />

                  {status === "error" && (
                    <p className="mt-2 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                  )}

                  <button type="button" onClick={submit} disabled={!isValid || status === "submitting"} className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-8 text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
                    {status === "submitting" ? "Submitting..." : "Submit inquiry"}
                    {status !== "submitting" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
