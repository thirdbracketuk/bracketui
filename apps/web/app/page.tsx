"use client";

import { Button, Card, Bracket } from "bracketui";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-zinc-500/20">
        <Bracket className="relative z-10 text-center py-20">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">BracketUI</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-shadow-2xs">
              A modern, lightweight React component library built with Tailwind
              CSS v4
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" href="https://bracketui-docs.vercel.app/">
                Get Started
              </Button>
              <Button size="lg" variant="outline" href="#components">
                View Components
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-sm">
              <span>✓ TypeScript</span>
              <span>✓ Tailwind v4</span>
              <span>✓ Dark Mode</span>
              <span>✓ Accessible</span>
            </div>
          </div>
        </Bracket>
      </section>

      {/* Components Section */}
      <section id="components" className="py-20 ">
        <Bracket>
          <h2 className="text-4xl font-bold text-center mb-16">Components</h2>

          {/* Button Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Button</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm mb-4">Variants</p>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">Sizes</p>
                <div className="flex gap-4 items-center flex-wrap">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              <div>
                <p className="text-sm mb-4">States</p>
                <div className="flex gap-4 flex-wrap">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button pill>Pill Shape</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Card Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                variant="default"
                title="Default Card"
                description="A simple card with default styling"
                category="Basic"
              />
              <Card
                variant="elevated"
                title="Elevated Card"
                description="Card with shadow elevation"
                category="Enhanced"
              />
              <Card
                variant="glass"
                title="Glass Card"
                description="Card with glassmorphism effect"
                category="Modern"
              />
            </div>
          </div>

          {/* Navbar Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Navbar</h3>
            <div className="border  border-zinc-500/50 rounded-lg overflow-hidden">
              <div className=" px-6 py-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Brand</span>
                  <div className="flex gap-6">
                    <span className="text-sm">Home</span>
                    <span className="text-sm">About</span>
                    <span className="text-sm">Contact</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4">
              Responsive navigation with mobile menu support
            </p>
          </div>

          {/* Footer Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Footer</h3>
            <div className="border border-zinc-500/50 rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Company</h4>
                    <div className="space-y-2 text-sm">
                      <div>About</div>
                      <div>Contact</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Resources</h4>
                    <div className="space-y-2 text-sm">
                      <div>Docs</div>
                      <div>Blog</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Legal</h4>
                    <div className="space-y-2 text-sm">
                      <div>Privacy</div>
                      <div>Terms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4">
              Flexible footer with sections and bottom content
            </p>
          </div>
        </Bracket>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-600 dark:bg-zinc-800  text-white">
        <Bracket className="text-center">
          <h2 className="text-4xl font-bold mb-6 ">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto ">
            Install BracketUI and start building beautiful interfaces today
          </p>
          <div className="hidden dark:block">
            <Button size="lg" as="a" href="https://bracketui-docs.vercel.app/">
              View Documentation
            </Button>
          </div>
          <div className="dark:hidden">
            <Button
              variant="secondary"
              size="lg"
              as="a"
              href="https://bracketui-docs.vercel.app/"
            >
              View Documentation
            </Button>
          </div>
        </Bracket>
      </section>
    </main>
  );
}
