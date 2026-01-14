"use client";
import { FC } from "react";

export interface RootGradientProps {
  variant?: "radial" | "conic";
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}

const RootGradient: FC<RootGradientProps> = ({
  variant = "radial",
  intensity = "medium",
  className = "",
}) => {
  const intensityClasses = {
    subtle: "ui:opacity-30",
    medium: "ui:opacity-50",
    strong: "ui:opacity-70",
  };

  const gradientClasses = {
    radial:
      "ui:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ui:from-white ui:via-slate-50 ui:to-gray-50 ui:dark:from-black ui:dark:via-zinc-950 ui:dark:to-black",
    conic:
      "ui:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] ui:from-white ui:via-slate-100 ui:to-gray-50 ui:dark:from-black ui:dark:via-gray-950 ui:dark:to-black",
  };

  return (
    <div
      className={`ui:fixed ui:inset-0 ui:-z-10 ui:h-full ui:w-full ${gradientClasses[variant]} ${intensityClasses[intensity]} ${className}`}
      aria-hidden="true"
    />
  );
};

export default RootGradient;
