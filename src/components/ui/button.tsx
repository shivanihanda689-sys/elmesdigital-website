import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "icon" | "lg";
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  const variantClasses = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700",
    outline: "border border-violet-200 bg-white text-slate-900 hover:bg-violet-50"
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
    lg: "h-11 px-6 py-3"
  };

  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}