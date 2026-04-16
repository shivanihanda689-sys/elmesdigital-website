export function StoryVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-4">
        {[
          { label: "SEO", value: "72%" },
          { label: "Paid", value: "58%" },
          { label: "Email", value: "81%" },
          { label: "Partnerships", value: "44%" },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2.5 rounded-full bg-violet-100">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                style={{ width: item.value }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="grid h-full grid-cols-[1.25fr_0.75fr] gap-3 overflow-hidden">
        <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-violet-200 bg-violet-50 px-3 py-2">
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              <div className="h-2 w-2 rounded-full bg-slate-300" />
              <div className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <div className="text-[10px] text-slate-500">Landing page flow</div>
          </div>
          <div className="space-y-3 p-4">
            <div className="rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-3">
              <div className="mb-2 h-3 w-20 rounded bg-violet-200" />
              <div className="mb-2 h-5 w-5/6 rounded bg-slate-400" />
              <div className="mb-3 h-5 w-2/3 rounded bg-slate-300" />
              <div className="flex gap-2">
                <div className="h-8 w-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow" />
                <div className="h-8 w-16 rounded-full border border-violet-200 bg-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Trust", "Offer", "Speed"].map((label) => (
                <div key={label} className="rounded-xl border border-violet-200 bg-white p-2">
                  <div className="mb-2 h-3 w-10 rounded bg-violet-100" />
                  <div className="h-8 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="h-3 w-20 rounded bg-slate-300" />
                <div className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-violet-700">Social proof</div>
              </div>
              <div className="mb-2 h-3 w-full rounded bg-slate-200" />
              <div className="h-3 w-2/3 rounded bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-violet-200 bg-slate-950 p-4 text-white shadow-sm">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Outcome</div>
            <div className="mt-2 text-2xl font-semibold">+28%</div>
            <div className="text-xs text-white/70">Booking conversion lift</div>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Why it converts</div>
            <div className="space-y-2">
              {["Clear offer above the fold", "Strong proof near CTA", "Fewer drop-off points"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Funnel</div>
            <div className="flex items-end gap-1.5">
              {[100, 74, 49, 28].map((value, i) => (
                <div key={i} className="flex-1">
                  <div className="rounded-t-xl bg-gradient-to-t from-violet-500 to-fuchsia-400" style={{ height: `${value * 0.6}px` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-7 gap-2">
      {[1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1].map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className={cell ? "rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-400" : "rounded-lg bg-violet-100"}
        />
      ))}
    </div>
  );
}
