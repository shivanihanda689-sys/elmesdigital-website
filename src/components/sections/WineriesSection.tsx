import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const wineryCards: readonly [string, string, string][] = [
  ["Wine club growth", "Retention + nurture", "Build subscription funnels, seasonal campaigns, and loyalty touchpoints."],
  ["Tour systems", "Bookings + reminders", "Automate reservations, reminders, and post-visit follow-up."],
  ["Local acquisition", "SEO + paid traffic", "Rank for high-intent winery searches, improve local SEO, and capture visitors searching for tastings and experiences nearby."],
];

const wineryBullets = [
  "Wine club funnels and lifecycle email automation",
  "Booking experiences for tastings, events, and hospitality",
  "Search visibility and local acquisition for tourists and repeat visitors",
];

export function WineriesSection() {
  return (
    <section id="wineries" className="bg-violet-50/75 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium text-violet-700">Winery growth</div>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Built for wineries selling experiences, memberships, and bottles.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Elmes Digital helps wineries increase tasting room bookings, grow wine club signups, improve local discoverability, and automate customer follow-up.</p>
          <div className="mt-8 space-y-4 text-slate-600">
            {wineryBullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-violet-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Card className="rounded-[32px] border border-violet-200 bg-white/92 shadow-xl shadow-violet-200/60 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {wineryCards.map((row) => (
                <div key={row[1]} className="rounded-[24px] border border-violet-200 bg-violet-50 p-5">
                  <div className="text-sm text-slate-500">{row[0]}</div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{row[1]}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{row[2]}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.95)]">
              <div className="text-sm text-white/70">Winery system outcome</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">More bookings. Better follow-up. Stronger recurring revenue.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
