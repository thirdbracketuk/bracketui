"use client";

import { Bracket, Button, Card } from "bracketui";

export default function Page() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 ">
        <Bracket className="text-center">
          <h1 className="text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to get started with BracketUI
          </p>
        </Bracket>
      </section>

      {/* Installation */}
      <section id="installation" className="py-20">
        <Bracket>
          <h2 className="text-3xl font-bold mb-8">Installation</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                1. Install the package
              </h3>
              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg overflow-x-auto max-w-full">
                <code className="text-green-600 dark:text-green-400">
                  npm install bracketui
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                2. Import styles in your layout
              </h3>
              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`// app/layout.tsx
import 'bracketui/styles.css';
import { ThemeScript } from 'bracketui';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                3. Start using components
              </h3>
              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`import { Button, Card } from 'bracketui';

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
      <Card title="Hello" description="World" />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </Bracket>
      </section>

      {/* Components Documentation */}
      <section id="components" className="py-20">
        <Bracket>
          <h2 className="text-3xl font-bold mb-12">Components</h2>

          <div className="space-y-16">
            {/* Button */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Button</h3>
              <p className="mb-6">
                A versatile button component with multiple variants and states.
              </p>

              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg mb-6 overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`<Button variant="default" size="md">
  Click me
</Button>

<Button variant="secondary" isLoading>
  Loading...
</Button>

<Button as="a" href="/link">
  Link Button
</Button>`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="outline" size="sm">
                  <p className="text-sm font-semibold mb-2">Props</p>
                  <ul className="text-sm space-y-1">
                    <li>
                      • variant: default | secondary | destructive | outline |
                      ghost | link
                    </li>
                    <li>• size: xs | sm | md | lg | xl</li>
                    <li>• isLoading: boolean</li>
                    <li>• disabled: boolean</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Card */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Card</h3>
              <p className="mb-6">
                A flexible card component for displaying content.
              </p>

              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg mb-6 overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`<Card 
  variant="elevated"
  size="md"
  title="Card Title"
  description="Card description"
  category="Category"
  href="/link"
  external
/>`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="outline" size="sm">
                  <p className="text-sm font-semibold mb-2">Props</p>
                  <ul className="text-sm space-y-1">
                    <li>
                      • variant: default | elevated | flat | glass | outline |
                      ghost
                    </li>
                    <li>• size: sm | md | lg | xl</li>
                    <li>• title: string</li>
                    <li>• description: string</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Navbar */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Navbar</h3>
              <p className="mb-6">
                A responsive navigation bar with mobile menu support.
              </p>

              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg mb-6 overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`<Navbar position="fixed">
  <Navbrand>Brand</Navbrand>
  
  <NavItem>
    <Navlink href="/">Home</Navlink>
    <Navlink href="/about">About</Navlink>
  </NavItem>
  
  <MobileNav>
    <Navlink href="/" cto>Home</Navlink>
    <Navlink href="/about">About</Navlink>
  </MobileNav>
</Navbar>`}
                </pre>
              </div>
            </div>

            {/* Footer */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Footer</h3>
              <p className="mb-6">A flexible footer component with sections.</p>

              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg mb-6 overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`<Footer>
  <FooterSection title="Company">
    <FooterLink href="/about">About</FooterLink>
    <FooterLink href="/contact">Contact</FooterLink>
  </FooterSection>
  
  <FooterBottom>
    <p>© 2024 Company</p>
  </FooterBottom>
</Footer>`}
                </pre>
              </div>
            </div>

            {/* Theme */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Theme System</h3>
              <p className="mb-6">
                Three-way theme toggle (light/dark/system) with SSR support.
              </p>

              <div className="bg-slate-100 dark:bg-zinc-950 p-4 rounded-lg mb-6 overflow-x-auto max-w-full">
                <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap wrap-break-word">
                  {`// In layout
<head>
  <ThemeScript />
</head>

// In component
<ClientThemeToggle />

// Custom usage
const [theme, setTheme] = useTheme();`}
                </pre>
              </div>
            </div>
          </div>
        </Bracket>
      </section>

      {/* Features */}
      <section className="py-20">
        <Bracket>
          <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              variant="elevated"
              title="TypeScript"
              description="Full type safety with TypeScript support"
            />
            <Card
              variant="elevated"
              title="Tailwind v4"
              description="Built with the latest Tailwind CSS"
            />
            <Card
              variant="elevated"
              title="Dark Mode"
              description="Built-in dark mode with system detection"
            />
            <Card
              variant="elevated"
              title="Accessible"
              description="ARIA compliant components"
            />
            <Card
              variant="elevated"
              title="Tree-shakeable"
              description="Import only what you need"
            />
            <Card
              variant="elevated"
              title="SSR Ready"
              description="Works with Next.js and SSR"
            />
          </div>
        </Bracket>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Bracket className="text-center">
          <h2 className="text-3xl font-bold mb-6">Start Building</h2>
          <p className="text-lg mb-8">Ready to create amazing interfaces?</p>
          <Button size="lg" as="a" href="https://bracketui-web.vercel.app/">
            View Showcase
          </Button>
        </Bracket>
      </section>
    </main>
  );
}
