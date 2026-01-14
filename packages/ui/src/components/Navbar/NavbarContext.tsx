"use client";
import { createContext, useContext, ReactNode } from "react";

interface NavbarContextType {
  setDesktopNav: (children: ReactNode) => void;
  setMobileNav: (children: ReactNode) => void;
  closeMenu: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a Navbar");
  }
  return context;
};

export default NavbarContext;
