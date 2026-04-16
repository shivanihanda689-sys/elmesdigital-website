import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormState } from "@/hooks/useFormState";

export function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { form, status, updateField, isValid, submit, reset } = useFormState();

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Book consultation"
      ref={dialogRef}
    >
      <div className="absolute inset-0" onClick={handleClose} />
      <Card className="relative z-10 w-full max-w-2xl rounded-[32px] border border-violet-200 bg-white/95 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.35)] backdrop-blur-xl">
        <CardContent className="p-8 sm:p-10">
          {status === "success" ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <svg className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">Thank you!</h3>
              <p className="mt-2 text-slate-600">We received your inquiry and will be in touch soon.</p>
              <button type="button" onClick={handleClose} className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Book consultation</div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Tell us about your project.</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Share a few details and we will use them to shape the right strategy, scope, and next steps.</p>
                </div>
                <button ref={closeRef} type="button" onClick={handleClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-500 transition hover:bg-violet-50 hover:text-slate-900" aria-label="Close consultation form">
                  ×
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="consult-first" className="sr-only">First name</label>
                  <Input id="consult-first" placeholder="First name" value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <div>
                  <label htmlFor="consult-last" className="sr-only">Last name</label>
                  <Input id="consult-last" placeholder="Last name" value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="consult-company" className="sr-only">Company name</label>
                  <Input id="consult-company" placeholder="Company name" value={form.company} onChange={(e) => updateField("company", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <div>
                  <label htmlFor="consult-email" className="sr-only">Email address</label>
                  <Input id="consult-email" type="email" placeholder="Email address" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
                <div>
                  <label htmlFor="consult-phone" className="sr-only">Phone number</label>
                  <Input id="consult-phone" type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="h-12 rounded-2xl border-violet-200 bg-white text-slate-900 placeholder:text-slate-500" />
                </div>
              </div>

              <label htmlFor="consult-message" className="sr-only">Project details</label>
              <textarea id="consult-message" placeholder="Tell us about your goals, timeline, and what success looks like." value={form.message} onChange={(e) => updateField("message", e.target.value)} className="mt-4 min-h-[160px] w-full rounded-[24px] border border-violet-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-500 outline-none ring-0" />

              {status === "error" && (
                <p className="mt-2 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={handleClose} className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50">Cancel</button>
                <button type="button" onClick={submit} disabled={!isValid || status === "submitting"} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_-18px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
                  {status === "submitting" ? "Submitting..." : "Submit inquiry"}
                  {status !== "submitting" && <ArrowRight className="ml-2 h-4 w-4" />}
                </button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
