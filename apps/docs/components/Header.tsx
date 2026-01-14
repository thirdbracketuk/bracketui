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
      <Navbrand>BracketUI Docs</Navbrand>

      <NavItem>
        <Navlink href="#installation">Installation</Navlink>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="http://localhost:3001" isExternal>
          Showcase
        </Navlink>
      </NavItem>

      <MobileNav>
        <Navlink href="#installation" cto>
          Installation
        </Navlink>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="http://localhost:3001" isExternal>
          Showcase
        </Navlink>
      </MobileNav>
    </Navbar>
  );
}
