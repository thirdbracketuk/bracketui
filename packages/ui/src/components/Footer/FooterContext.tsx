"use client";
import { createContext, useContext, ReactNode } from "react";

interface FooterContextType {
  setFooterBottom: (children: ReactNode) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const useFooterContext = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooterContext must be used within a Footer");
  }
  return context;
};

export default FooterContext;
