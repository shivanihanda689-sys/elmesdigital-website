import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cx(
        "w-full border px-4 py-3 outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-200",
        className
      )}
      {...props}
    />
  );
}