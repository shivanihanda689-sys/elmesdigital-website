import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ContactSection({ onBookConsultation }: { onBookConsultation: () => void }) {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden rounded-[36px] border border-violet-200 bg-white/92 shadow-[0_30px_80px_-34px_rgba(124,58,237,0.32)] backdrop-blur-sm">
          <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Ready to grow</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Build your next growth system with Elmes Digital.</h3>
              <p className="mt-4 max-w-lg leading-7 text-slate-600">Let us build the strategy, digital experience, and automation layer your business needs to generate more demand and operate more efficiently.</p>
            </div>
            <div className="rounded-[28px] border border-violet-200 bg-violet-50/90 p-5 shadow-sm">
              <div className="text-sm font-medium text-slate-700">Start a conversation</div>
              <div className="mt-4 space-y-3">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your name</label>
                  <Input id="contact-name" placeholder="Your name" className="h-11 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Work email</label>
                  <Input id="contact-email" type="email" placeholder="Work email" className="h-11 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <button type="button" onClick={onBookConsultation} className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-950 text-base font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                  Book consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">Tell us about your business, goals, and where your current growth systems are breaking down.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
