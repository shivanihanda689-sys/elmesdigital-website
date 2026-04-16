export function BrandBackdrop() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#f7f3ff]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.10),transparent_22%),linear-gradient(to_bottom,#efe5ff_0%,#f7f3ff_35%,#ffffff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.55]">
        <div className="absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-violet-200 blur-3xl" />
        <div className="absolute right-[-3rem] top-20 h-80 w-80 rounded-full bg-fuchsia-100 blur-3xl" />
        <div className="absolute left-[28%] top-64 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
      </div>
    </>
  );
}
