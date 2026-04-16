import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navItems } from "@/data/navigation";

export function MobileNav({
  isOpen,
  onClose,
  onBookConsultation,
}: {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm" onClick={onClose} />
      <nav className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-violet-200 px-4 py-4">
          <span className="text-lg font-semibold text-slate-950">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 text-slate-500 transition hover:bg-violet-50 hover:text-slate-900"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block rounded-xl px-3 py-3 text-base text-slate-600 transition hover:bg-violet-50 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="border-t border-violet-200 p-4">
          <button
            type="button"
            onClick={() => { onClose(); onBookConsultation(); }}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Book consultation
          </button>
        </div>
      </nav>
    </div>
  );
}
