"use client";

// This page serves as the landing page for the BracketUI showcase. It demonstrates
// each core component with its available variants and sizes, while utilising
// the shared design tokens for consistent styling. The layout is
// deliberately simple and responsive, leaning on the Bracket component for
// horizontal padding and centralised content. Sections are separated with
// adequate whitespace and minimal borders defined by the design system.

import {
  Button,
  Card,
  Bracket,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
  MobileNav,
  Footer as UIFooter,
  FooterSection,
  FooterLink,
  FooterBottom,
  ThemeToggle,
} from "bracketui";

export default function Page() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <Bracket className="text-center py-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">BracketUI</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-muted-fg">
            A modern, lightweight React component library built with Tailwind
            CSS v4
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" as="a" href="https://bracketui-docs.vercel.app/">
              Get Started
            </Button>
            <Button size="lg" variant="outline" as="a" href="#components">
              View Components
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-sm mt-6 text-muted-fg">
            <span>✓ TypeScript</span>
            <span>✓ Tailwind v4</span>
            <span>✓ Dark Mode</span>
            <span>✓ Accessible</span>
          </div>
        </Bracket>
      </section>

      {/* Components Showcase */}
      <section id="components" className="py-20">
        <Bracket>
          <h2 className="text-4xl font-bold text-center mb-16">Components</h2>

          {/* Buttons */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Buttons</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-medium mb-2 uppercase tracking-wide text-muted-fg">
                  Variants
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 uppercase tracking-wide text-muted-fg">
                  Sizes
                </h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="xs">XS</Button>
                  <Button size="sm">SM</Button>
                  <Button size="md">MD</Button>
                  <Button size="lg">LG</Button>
                  <Button size="xl">XL</Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 uppercase tracking-wide text-muted-fg">
                  States
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button pill>Pill</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="default"
                title="Default"
                description="Default card styling"
                category="Variant"
              />
              <Card
                variant="elevated"
                title="Elevated"
                description="Elevated card styling"
                category="Variant"
              />
              <Card
                variant="flat"
                title="Flat"
                description="Flat card styling"
                category="Variant"
              />
              <Card
                variant="glass"
                title="Glass"
                description="Glass card styling"
                category="Variant"
              />
              <Card
                variant="outline"
                title="Outline"
                description="Outline card styling"
                category="Variant"
              />
              <Card
                variant="ghost"
                title="Ghost"
                description="Ghost card styling"
                category="Variant"
              />
            </div>
          </div>

          {/* Navbar */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Navbar</h3>
            <p className="text-sm mb-4 text-muted-fg">
              Responsive navigation bar with desktop and mobile menus.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
              <Navbar position="relative">
                <Navbrand>Brand</Navbrand>
                <NavItem>
                  <Navlink href="#">Home</Navlink>
                  <Navlink href="#">About</Navlink>
                  <Navlink href="#">Contact</Navlink>
                </NavItem>
                <MobileNav>
                  <Navlink href="#" cto>
                    Home
                  </Navlink>
                  <Navlink href="#">About</Navlink>
                  <Navlink href="#">Contact</Navlink>
                </MobileNav>
              </Navbar>
            </div>
          </div>

          {/* Footer */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Footer</h3>
            <p className="text-sm mb-4 text-muted-fg">
              Flexible footer component with sections and bottom content.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
              <UIFooter
                theme={{ background: "bg-background", border: "border-border" }}
              >
                <FooterSection title="Company">
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterSection>
                <FooterSection title="Resources">
                  <FooterLink href="#">Docs</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                </FooterSection>
                <FooterSection title="Legal">
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                </FooterSection>
                <FooterBottom>
                  <p className="text-sm">&copy; 2024 Company</p>
                  <ThemeToggle />
                </FooterBottom>
              </UIFooter>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Theme Toggle</h3>
            <p className="text-sm mb-4 text-muted-fg">
              Three-way theme toggle (light/dark/system) with SSR support.
            </p>
            <ThemeToggle />
          </div>
        </Bracket>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <Bracket className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-fg">
            Install BracketUI and start building beautiful interfaces today.
          </p>
          <Button size="lg" as="a" href="https://bracketui-docs.vercel.app/">
            View Documentation
          </Button>
        </Bracket>
      </section>
    </main>
  );
}
