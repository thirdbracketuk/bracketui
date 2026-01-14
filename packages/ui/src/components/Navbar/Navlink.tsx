"use client";
import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import { cn } from "../../lib/utils";
import { useNavbarContext } from "./NavbarContext";
import { text } from "../../lib/system/tokens";

export type NavlinkProps<T extends ElementType = "a"> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;
  isExternal?: boolean;
  cto?: boolean;
  theme?: {
    text?: string;
    states?: string;
  };
} & ComponentPropsWithRef<T>;

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>(function Navlink(
  {
    as,
    className = "",
    isExternal,
    isDropdownItem,
    children,
    cto,
    onClick,
    theme = {
      text: text.link,
      states: text.linkStates,
    },
    ...props
  },
  ref
) {
  const { closeMenu } = useNavbarContext();

  const baseStyles =
    "ui:transition-all ui:motion-reduce:transition-none ui:motion-reduce:hover:transform-none ui:duration-300 ui:ease-in-out ui:md:flex ui:md:items-center ui:block ui:leading-none ui:py-2 ui:md:py-1";

  const varientSize = cto
    ? "ui:text-xl ui:font-bold ui:py-3"
    : "ui:text-base ui:md:text-sm ui:font-normal";

  const variantStyles = isDropdownItem
    ? "ui:opacity-65 ui:dark:opacity-50"
    : "ui:opacity-75 ui:dark:opacity-60";
  const themeStyles = cn(theme.text, theme.states);

  const linkClass = cn(
    baseStyles,
    variantStyles,
    themeStyles,
    varientSize,
    className
  );

  const Component = as || "a";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (onClick) {
      onClick(e as never);
    }
  };

  return (
    <Component
      ref={ref as never}
      className={linkClass}
      onClick={handleClick as never}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Component>
  );
});

Navlink.displayName = "Navlink";

export default Navlink;
