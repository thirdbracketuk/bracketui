"use client";
import { FC, useState } from "react";
import React from "react";
import FooterContext from "./FooterContext";
import { cn } from "../../lib/utils";
import { backgrounds, borders } from "../../lib/system/tokens";

type Theme = {
  background?: string;
  border?: string;
};

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  theme?: Theme;
}

const Footer: FC<FooterProps> = ({ children, className = "", theme }) => {
  const [footerBottom, setFooterBottom] = useState<React.ReactNode>(null);

  const themeClasses = {
    background: theme?.background || backgrounds.default,
    border: theme?.border || borders.default,
  };
  return (
    <FooterContext.Provider value={{ setFooterBottom }}>
      <footer
        className={cn(
          "ui:border-t",
          className,
          themeClasses.background,
          themeClasses.border
        )}
      >
        <div className="ui:mx-auto ui:px-6 ui:lg:px-8">
          <div className="ui:py-12 ui:md:py-16">
            <div className="ui:grid ui:grid-flow-row ui:auto-rows-fr ui:gap-8 ui:md:grid-flow-col ui:md:auto-cols-fr">
              {children}
            </div>
          </div>

          <div
            className={cn(
              "ui:py-4 ui:md:py-8 ui:border-t",
              themeClasses.border,
              "ui:flex ui:items-center ui:justify-between ui:mx-auto"
            )}
          >
            {footerBottom}
          </div>
        </div>
      </footer>
    </FooterContext.Provider>
  );
};

export default Footer;
