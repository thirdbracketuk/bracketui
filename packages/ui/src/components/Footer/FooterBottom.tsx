"use client";
import { type ReactNode, useEffect } from "react";
import { useFooterContext } from "./FooterContext";

export interface FooterBottomProps {
  children: ReactNode;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ children }: FooterBottomProps) => {
  const { setFooterBottom } = useFooterContext();

  useEffect(() => {
    setFooterBottom(children);
    return () => setFooterBottom(null);
  }, [children, setFooterBottom]);

  return null;
};

FooterBottom.displayName = "FooterBottom";

export default FooterBottom;
