import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

const audiences: readonly [string, string][] = [
  ["Increase bookings", "Optimize your website, campaigns, and local presence to convert more interest into scheduled business."],
  ["Automate operations", "Streamline follow-up, CRM flows, and repetitive admin using AI-powered workflows."],
  ["Grow local visibility", "Improve SEO rankings, Google Maps visibility, and targeted acquisition to reach nearby customers at the right time."],
];

export function AudienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Who we work with"
        title="Built for local, service-based, and growing businesses"
        description="We help businesses increase bookings, generate leads more consistently, and automate operations with a modern marketing stack."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {audiences.map((row) => (
          <Card key={row[0]} className="rounded-[28px] border border-violet-200 bg-white/92 p-7 shadow-sm backdrop-blur-sm">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">{row[0]}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{row[1]}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
