"use client";
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from "bracketui";

export default function Header() {
  return (
    <Navbar
      position="fixed"
    >
      <Navbrand>BracketUI</Navbrand>

      <NavItem>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="https://bracketui-docs.vercel.app/" isExternal>
          Docs
        </Navlink>
      </NavItem>

      <MobileNav>
        <Navlink href="#components" cto>
          Components
        </Navlink>
        <Navlink href="https://bracketui-docs.vercel.app/" isExternal>
          Docs
        </Navlink>
      </MobileNav>
    </Navbar>
  );
}
