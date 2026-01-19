"use client";
import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import { cn } from "../../lib/utils";
import { text } from "../../lib/system/tokens";

export type FooterLinkProps<T extends ElementType = "a"> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
  theme?: {
    text?: string;
    states?: string;
  };
} & ComponentPropsWithRef<T>;

const FooterLink = forwardRef<HTMLAnchorElement, FooterLinkProps>(
  function FooterLink(
    {
      as,
      href,
      className = "",
      children,
      isExternal,
      theme = {
        text: text.link,
        states: text.linkStates,
      },
      ...props
    },
    ref,
  ) {
    const baseStyles =
      "ui:block ui:mb-3 ui:last:mb-0 ui:transition-all ui:motion-reduce:transition-none ui:motion-reduce:hover:transform-none ui:duration-300 ui:ease-in-out ui:text-sm ui:opacity-65";

    const themeStyles = cn(theme.text, theme.states);

    const linkClass = cn(baseStyles, themeStyles, className);
    const Component = as || "a";

    return (
      <Component
        ref={ref as never}
        href={href}
        className={linkClass}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

FooterLink.displayName = "FooterLink";

export default FooterLink;
