export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-sm">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
