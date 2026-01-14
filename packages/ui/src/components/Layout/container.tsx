"use client";
import { FC, ElementType } from "react";
import { cn } from "../../lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  fluid?: boolean;
  centered?: boolean;
  padding?: "none" | "small" | "medium" | "large";
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  fluid = false,
  centered = true,
  padding = "small",
}) => {
  const containerClasses = cn(
    "ui:w-full",
    {
      "ui:max-w-7xl": !fluid,
      "ui:w-full": fluid,
    },
    {
      "ui:mx-auto": centered,
    },
    {
      "ui:px-6 ui:lg:px-8": padding === "medium",
      "ui:px-4 ui:lg:px-6": padding === "small",
      "ui:px-8 ui:lg:px-12": padding === "large",
      "ui:px-0": padding === "none",
    },
    className
  );

  return <Component className={containerClasses}>{children}</Component>;
};

export default Container;
