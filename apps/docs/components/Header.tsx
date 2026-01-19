"use client";
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from "bracketui";

export default function Header() {
  return (
    <Navbar position="fixed">
      <Navbrand>BracketUI / Docs</Navbrand>

      <NavItem>
        <Navlink href="#installation">Installation</Navlink>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="https://bracketui-web.vercel.app/" isExternal>
          Showcase
        </Navlink>
      </NavItem>

      <MobileNav>
        <Navlink href="#installation" cto>
          Installation
        </Navlink>
        <Navlink href="#components">Components</Navlink>
        <Navlink href="https://bracketui-web.vercel.app/" isExternal>
          Showcase
        </Navlink>
      </MobileNav>
    </Navbar>
  );
}
