"use client";

import { FC, useEffect, useState, useMemo, useCallback } from "react";
import { cn } from "../../lib/utils";
import NavbarContext from "./NavbarContext";
import { backgrounds, borders } from "../../lib/system/tokens";

type Theme = {
  background?: string;
  border?: string;
  mobileMenu?: string;
};

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mobileBreakpoint?: number;
  enableScrollLock?: boolean;
  position?: "fixed" | "sticky" | "relative" | "absolute";
  theme?: Theme;
}

const Navbar: FC<NavbarProps> = ({
  children,
  className = "",
  containerClassName = "",
  mobileBreakpoint = 768,
  enableScrollLock = true,
  position = "fixed",
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
  const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({ setDesktopNav, setMobileNav, closeMenu }),
    [closeMenu]
  );

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!enableScrollLock) return;

    const handleScrollLock = () => {
      if (window.innerWidth < mobileBreakpoint) {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
      }
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isOpen, mobileBreakpoint, enableScrollLock]);

  const themeClasses = {
    background: theme?.background || backgrounds.default,
    border: theme?.border || borders.default,
    mobileMenu: theme?.mobileMenu || backgrounds.default,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      <nav
        className={cn(
          position,
          "ui:top-0 ui:left-0 ui:right-0 ui:z-50 ui:backdrop-blur-md",
          themeClasses.background,
          className
        )}
      >
        <div
          className={cn("ui:border-b", themeClasses.border, containerClassName)}
        >
          <div className="ui:px-4 ui:lg:px-6">
            <div className="ui:flex ui:justify-between ui:h-16 ui:items-center">
              {children}
              <div className="ui:hidden ui:md:flex ui:items-center ui:space-x-6">
                {desktopNav}
              </div>
              <button
                onClick={toggleMenu}
                className="ui:block ui:md:hidden ui:text-gray-950 ui:dark:text-white"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="ui:w-6 ui:h-6"
                  fill="none"
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M2 8h20"
                    className={cn(
                      "ui:transform ui:transition-transform ui:duration-300 ui:ease-in-out ui:origin-center",
                      { "ui:rotate-45": isOpen }
                    )}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={cn(
                      "ui:transform ui:transition-transform ui:duration-300 ui:ease-in-out ui:origin-center",
                      { "ui:-rotate-45": isOpen }
                    )}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "ui:fixed ui:inset-0 ui:z-40 ui:md:hidden",
          themeClasses.mobileMenu,
          "ui:transition-transform ui:duration-300 ui:ease-in-out ui:overflow-y-auto",
          { "ui:translate-y-0": isOpen, "ui:-translate-y-full": !isOpen }
        )}
      >
        <div className="ui:flex-1 ui:overflow-auto ui:py-16">{mobileNav}</div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
