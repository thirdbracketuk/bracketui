"use client";
import {
  Footer,
  FooterSection,
  FooterLink,
  FooterBottom,
  ThemeToggle,
} from "bracketui";

export default function AppFooter() {
  return (
    <Footer
      theme={{
        background: "bg-background",
        border: "border-bd",
      }}
    >
      {/* Brand column */}
      <FooterSection>
        <a
          href="/"
          className="text-[0.7875rem] font-bold uppercase tracking-[0.06em] text-t-head no-underline"
        >
          Third<span className="text-accent-600">Bracket</span>
          <span className="font-light text-t-mute ml-1">Ltd</span>
        </a>
        <p className="mt-3 text-[0.85rem] text-t-body leading-relaxed max-w-[240px]">
          A full-service digital agency — we design, build, and grow the web for ambitious teams.
        </p>
      </FooterSection>

      <FooterSection title="Services">
        <FooterLink href="#services">Website</FooterLink>
        <FooterLink href="#services">SEO</FooterLink>
        <FooterLink href="#services">Branding</FooterLink>
      </FooterSection>

      <FooterSection title="Solutions">
        <FooterLink href="#solutions">Design</FooterLink>
        <FooterLink href="#solutions">Platform</FooterLink>
        <FooterLink href="#solutions">Industry</FooterLink>
      </FooterSection>

      <FooterSection title="Company">
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#work">Work</FooterLink>
        <FooterLink href="#blog">Blog</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterSection>

      <FooterBottom>
        <p className="text-[0.8125rem] text-t-mute">
          © 2025 Third Bracket Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.8125rem] text-t-mute hover:text-t-body transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </FooterBottom>
    </Footer>
  );
}
