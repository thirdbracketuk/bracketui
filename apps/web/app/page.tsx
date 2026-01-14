"use client";

import { Button, Card, Bracket } from "bracketui";

export default function Page() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-black" />

        <Bracket className="relative z-10 text-center py-20">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white">
              BracketUI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A modern, lightweight React component library built with Tailwind
              CSS v4
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" href="http://localhost:3002">
                Get Started
              </Button>
              <Button size="lg" variant="outline" href="#components">
                View Components
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-sm text-gray-600 dark:text-gray-400">
              <span>✓ TypeScript</span>
              <span>✓ Tailwind v4</span>
              <span>✓ Dark Mode</span>
              <span>✓ Accessible</span>
            </div>
          </div>
        </Bracket>
      </section>

      {/* Components Section */}
      <section id="components" className="py-20 bg-white dark:bg-gray-950">
        <Bracket>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Components
          </h2>

          {/* Button Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Button
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Variants
                </p>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Sizes
                </p>
                <div className="flex gap-4 items-center flex-wrap">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  States
                </p>
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
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Card
            </h3>
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
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Navbar
            </h3>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Brand
                  </span>
                  <div className="flex gap-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Home
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      About
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Contact
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Responsive navigation with mobile menu support
            </p>
          </div>

          {/* Footer Component */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Footer
            </h3>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-gray-950 px-6 py-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                      Company
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div>About</div>
                      <div>Contact</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                      Resources
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div>Docs</div>
                      <div>Blog</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                      Legal
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div>Privacy</div>
                      <div>Terms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Flexible footer with sections and bottom content
            </p>
          </div>
        </Bracket>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-black">
        <Bracket className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Install BracketUI and start building beautiful interfaces today
          </p>
          <Button size="lg" as="a" href="http://localhost:3002">
            View Documentation
          </Button>
        </Bracket>
      </section>
    </main>
  );
}
