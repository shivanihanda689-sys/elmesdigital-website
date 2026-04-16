import { motion } from "framer-motion";
import { REVEAL } from "@/motion";

export function LogoMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const textColor = dark ? "#FFFFFF" : "#111827";
  const subTextColor = dark ? "rgba(255,255,255,0.88)" : "#111827";
  const gradientId = dark ? "elmes-gradient-dark" : "elmes-gradient-light";

  if (compact) {
    return (
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 4 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={REVEAL}
        whileHover={{ y: -1, scale: 1.02 }}
        className="flex items-center justify-center"
        aria-label="Elmes Digital icon"
        title="Elmes Digital icon"
      >
        <svg viewBox="0 0 180 180" className="h-12 w-12" role="img" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C56BE7" />
              <stop offset="100%" stopColor="#B45FD9" />
            </linearGradient>
          </defs>
          <polygon points="42,24 130,24 152,56 66,56" fill={`url(#${gradientId})`} />
          <path d="M28 72 H96 L120 108 H64 V122 H132 L154 156 H28 Z" fill={`url(#${gradientId})`} />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 4 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={REVEAL}
      whileHover={{ y: -1, scale: 1.02 }}
      className="flex items-center justify-center"
      aria-label="Elmes Digital logo"
      title={dark ? "Elmes Digital dark logo" : "Elmes Digital logo"}
    >
      <svg viewBox="0 0 420 220" className="h-16 w-auto" role="img" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C56BE7" />
            <stop offset="100%" stopColor="#B45FD9" />
          </linearGradient>
        </defs>
        <polygon points="42,18 132,18 152,46 62,46" fill={`url(#${gradientId})`} />
        <path d="M28 64 H94 L118 98 H61 V110 H132 L152 140 H28 Z" fill={`url(#${gradientId})`} />
        <text x="36" y="182" fill={textColor} fontSize="30" fontWeight="800" letterSpacing="8" fontFamily="Inter, Arial, sans-serif">ELMES</text>
        <text x="41" y="212" fill={subTextColor} fontSize="14" fontWeight="700" letterSpacing="12" fontFamily="Inter, Arial, sans-serif">DIGITAL</text>
      </svg>
    </motion.div>
  );
}
