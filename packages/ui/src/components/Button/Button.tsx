import * as React from "react";
import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";
import { buttonStyles } from "./styles";
import { Spinner } from "./Spinner";

type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>["ref"];

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  href?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "glass"
    | "flat"
    | "avatar";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  pill?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

const Button = forwardRef(function Button<T extends ElementType = "button">(
  {
    as,
    href,
    variant = "default",
    size = "md",
    isLoading = false,
    disabled = false,
    icon,
    iconPosition = "start",
    pill = false,
    className,
    children,
    ...props
  }: ButtonProps<T>,
  ref: PolymorphicRef<T>
) {
  const Component = as ?? (href ? "a" : "button");
  const isDisabled = disabled || isLoading;

  const isAvatar = variant === "avatar";
  const isIconOnly = isAvatar || (!!icon && !children);

  const radiusClass = pill || isAvatar ? "ui:rounded-full" : "ui:rounded-md";

  const sizeClass = isAvatar
    ? buttonStyles({ variant: "avatar", iconSize: size as any })
    : buttonStyles({ variant, size: size as any });

  const content = (
    <>
      {icon && iconPosition === "start" && !isAvatar && (
        <span className="ui:mr-2 ui:flex ui:items-center">{icon}</span>
      )}
      {isAvatar ? icon : children}
      {icon && iconPosition === "end" && !isAvatar && (
        <span className="ui:ml-2 ui:flex ui:items-center">{icon}</span>
      )}
    </>
  );

  return (
    <Component
      ref={ref}
      className={`${sizeClass} ${radiusClass} ${className ?? ""} ui:inline-flex ui:items-center ui:justify-center ui:relative`}
      disabled={Component === "button" ? isDisabled : undefined}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      {...(href ? { href } : {})}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="ui:absolute ui:inset-0 ui:flex ui:items-center ui:justify-center">
            <Spinner size={size} />
          </span>
          <span className="ui:opacity-0">{content}</span>
        </>
      ) : (
        content
      )}
    </Component>
  );
});

export default Button;
