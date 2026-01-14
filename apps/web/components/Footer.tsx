"use client";
import { Footer, FooterSection, FooterLink, FooterBottom } from "bracketui";

export default function AppFooter() {
  return (
    <Footer>
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
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 BracketUI. Built with Tailwind CSS v4.
        </p>
      </FooterBottom>
    </Footer>
  );
}
