import { cn } from "../../lib/utils";
import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;
  logo?: string | ReactElement;
  href?: string;
  className?: string;
}

const Navbrand: FC<NavbrandProps> = ({
  logo,
  children,
  href = "/",
  className = "",
}) => {
  if (!logo && !children) {
    throw new Error(
      "Navbrand requires at least one prop: 'logo' or 'children'."
    );
  }
  return (
    <a
      href={href}
      className={cn(
        "ui:flex ui:items-center ui:gap-2 ui:hover:opacity-85 ui:transition-opacity ui:motion-reduce:transition-none ui:motion-reduce:hover:transform-none ui:duration-300 ui:ease-in-out",
        className
      )}
    >
      {logo &&
        (typeof logo === "string" ? (
          <img
            src={logo}
            alt="Brand Logo"
            className={cn("ui:h-4 ui:md:h-5 ui:w-auto ui:object-contain")}
          />
        ) : (
          logo
        ))}

      {children &&
        (typeof children === "string" ? (
          <span
            className={cn(
              "ui:self-center ui:whitespace-nowrap",
              "ui:font-semibold ui:text-gray-950 ui:dark:text-white"
            )}
          >
            {children}
          </span>
        ) : (
          children
        ))}
    </a>
  );
};

export default Navbrand;
