"use client";
import { FC, ElementType } from "react";
import { cn } from "../../lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * The element type to render the container as. Defaults to `div`.
   */
  as?: ElementType;
  /**
   * When `true`, the container spans the full width of its parent. When `false` (default),
   * a max width is applied to keep content centered.
   */
  fluid?: boolean;
  /**
   * Center the container horizontally. Defaults to `true`.
   */
  centered?: boolean;
  /**
   * Control the horizontal padding of the container.
   */
  padding?: "none" | "small" | "medium" | "large";
  /**
   * Enable container queries on this element. When set, the underlying element will
   * receive the `ui:container` class which applies `container-type: inline-size`,
   * allowing Tailwind v4 container query modifiers (e.g. `@sm:`) to respond to
   * the size of this element instead of the viewport. Defaults to `false`.
   */
  containerQuery?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  fluid = false,
  centered = true,
  padding = "small",
  containerQuery = false,
}) => {
  const containerClasses = cn(
    "ui:w-full",
    // When containerQuery is true, enable Tailwind v4 container queries on this element.
    containerQuery && "ui:container",
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
