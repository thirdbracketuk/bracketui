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
        border: "border-transparent",
      }}
    >
      <FooterSection title="BracketUI">
        <FooterLink href="https://bracketui-docs.vercel.app/">
          Documentation
        </FooterLink>
        <FooterLink href="#components">Components</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="https://github.com" isExternal>
          GitHub
        </FooterLink>
        <FooterLink href="https://npmjs.com" isExternal>
          npm
        </FooterLink>
      </FooterSection>

      <FooterBottom>
        <p className="text-sm">
          © 2024 BracketUI. Built with Tailwind CSS v4.
        </p>
        <ThemeToggle />
      </FooterBottom>
    </Footer>
  );
}
