"use client";
import { type ReactNode, useMemo, useEffect } from "react";
import { useNavbarContext } from "./NavbarContext";

export interface NavItemProps {
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }: NavItemProps) => {
  const { setDesktopNav } = useNavbarContext();

  const memoizedChildren = useMemo(() => children, [children]);

  useEffect(() => {
    setDesktopNav(memoizedChildren);
    return () => setDesktopNav(null);
  }, [memoizedChildren, setDesktopNav]);

  return null;
};

NavItem.displayName = "NavItem";

export default NavItem;
