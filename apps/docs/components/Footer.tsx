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
    <Footer>
      <FooterSection title="Documentation">
        <FooterLink href="#installation">Installation</FooterLink>
        <FooterLink href="#components">Components</FooterLink>
      </FooterSection>

      <FooterSection title="Links">
        <FooterLink href="https://bracketui-web.vercel.app/" isExternal>
          Showcase
        </FooterLink>
        <FooterLink href="https://github.com" isExternal>
          GitHub
        </FooterLink>
      </FooterSection>

      <FooterBottom>
        <p className="text-sm">© 2024 BracketUI Documentation</p>
        <ThemeToggle />
      </FooterBottom>
    </Footer>
  );
}
