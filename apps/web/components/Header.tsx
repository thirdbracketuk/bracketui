"use client";
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from "bracketui";

export default function Header() {
  return (
    <Navbar
      position="fixed"
      theme={{
        background: "bg-white/80 dark:bg-black/80",
        border: "border-gray-200/50 dark:border-gray-800/50",
      }}
    >
      <Navbrand>BracketUI</Navbrand>

      <NavItem>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="http://localhost:3002" isExternal>
          Docs
        </Navlink>
      </NavItem>

      <MobileNav>
        <Navlink href="#components" cto>
          Components
        </Navlink>
        <Navlink href="http://localhost:3002" isExternal>
          Docs
        </Navlink>
      </MobileNav>
    </Navbar>
  );
}
