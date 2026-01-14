"use client";
import { type ReactNode, useMemo, useEffect } from "react";
import { useNavbarContext } from "./NavbarContext";

export interface MobileNavProps {
  children: ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ children }: MobileNavProps) => {
  const { setMobileNav } = useNavbarContext();

  const memoizedChildren = useMemo(
    () => <div className="ui:px-6 ui:py-2 ui:fixed">{children}</div>,
    [children]
  );

  useEffect(() => {
    setMobileNav(memoizedChildren);
    return () => setMobileNav(null);
  }, [memoizedChildren, setMobileNav]);

  return null;
};

MobileNav.displayName = "MobileNav";

export default MobileNav;
