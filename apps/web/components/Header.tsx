"use client";
import { Navbar, NavItem, MobileNav, Navlink, Navbrand, Button } from "bracketui";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Header() {
  return (
    <Navbar
      position="fixed"
      className="nav-glow"
      theme={{
        background: "bg-background/90 backdrop-blur-md backdrop-saturate-150",
        border: "border-transparent",
      }}
    >
      <Navbrand href="/">
        <span className="text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-t-head">
          Third<span className="text-accent-600">Bracket</span>
          <span className="font-light text-t-mute ml-1">Ltd</span>
        </span>
      </Navbrand>

      <NavItem>
        <Navlink href="#services">Services</Navlink>
        <Navlink href="#solutions">Solutions</Navlink>
        <Navlink href="#work">Work</Navlink>
        <Navlink href="#about">About</Navlink>
        <span className="w-px h-5 bg-bd mx-1 shrink-0" />
        <Button variant="outline" size="sm" as="a" href="#" className="!text-[0.8125rem]">
          Log in
        </Button>
        <Button variant="default" size="sm" as="a" href="#" className="!text-[0.8125rem] gap-1.5">
          Get started
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Button>
      </NavItem>

      <MobileNav>
        <Navlink href="#services" cto>Services</Navlink>
        <Navlink href="#solutions">Solutions</Navlink>
        <Navlink href="#work">Work</Navlink>
        <Navlink href="#about">About</Navlink>
        <div className="mt-6 flex flex-col gap-3">
          <Button variant="outline" size="md" as="a" href="#" className="w-full justify-center">Log in</Button>
          <Button variant="default" size="md" as="a" href="#" className="w-full justify-center gap-2">
            Get started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
