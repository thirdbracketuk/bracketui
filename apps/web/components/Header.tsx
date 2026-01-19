"use client";
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from "bracketui";

export default function Header() {
  return (
    <Navbar
      theme={{
        background: "bg-transparentbackdrop-blur-2xl",
        border: "border-zinc-500/20",
        mobileMenu: "bg-background",
      }}
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
