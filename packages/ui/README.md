# BracketUI

A modern, lightweight React component library built with Tailwind CSS v4. Designed for Next.js applications with full TypeScript support and dark mode out of the box.

## Features

- 🎨 **Tailwind CSS v4** - Built with the latest Tailwind CSS
- 🌓 **Three-Way Theme Toggle** - Light, dark, and system theme support
- 🔧 **Polymorphic Components** - Flexible component APIs
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **TypeScript First** - Full type safety
- ⚡ **Zero Runtime CSS** - All styles compiled at build time
- 🚀 **Next.js Optimized** - SSR-safe with hydration support
- ♿ **Accessible** - ARIA compliant components

## Installation

```bash
npm install bracketui
# or
pnpm add bracketui
# or
yarn add bracketui
```

### Peer Dependencies

```bash
npm install react tailwindcss
```

## Quick Start

### 1. Import Styles

Add the BracketUI styles to your app:

```tsx
// app/layout.tsx or _app.tsx
import 'bracketui/styles.css';
```

### 2. Add Theme Script (Optional)

For theme support, add the ThemeScript to your layout:

```tsx
// app/layout.tsx
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
}
```

### 3. Use Components

```tsx
import { Button, Card, ThemeToggle } from 'bracketui';

export default function Page() {
  return (
    <div>
      <ThemeToggle />
      
      <Button variant="default" size="md">
        Click me
      </Button>
      
      <Card 
        title="Welcome" 
        href="/docs"
      >
        Get started with BracketUI
      </Card>
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from 'bracketui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// With sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Loading state
<Button isLoading>Processing...</Button>

// With icon
<Button icon={<Icon />} iconPosition="start">
  With Icon
</Button>

// As link
<Button as="a" href="/about">
  Link Button
</Button>

// Pill shape
<Button pill>Rounded</Button>

// Avatar/Icon only
<Button variant="avatar" size="md" icon={<UserIcon />} />
```

**Props:**
- `variant`: `default` | `secondary` | `destructive` | `outline` | `ghost` | `link` | `glass` | `flat` | `avatar`
- `size`: `xs` | `sm` | `md` | `lg` | `xl` | `icon`
- `isLoading`: boolean
- `disabled`: boolean
- `pill`: boolean
- `icon`: ReactNode
- `iconPosition`: `start` | `end`
- `as`: ElementType (polymorphic)
- `href`: string (when used as link)

### Card

A flexible card component for displaying content.

```tsx
import { Card } from 'bracketui';

<Card 
  variant="elevated"
  size="md"
  title="Card Title" 
  description="Card description"
  image="/image.jpg"
  imageAlt="Image description"
  category="Category"
  href="https://example.com"
  external
  clickable
>
  Additional content
</Card>
```

**Props:**
- `variant`: `default` | `elevated` | `flat` | `glass` | `outline` | `ghost`
- `size`: `sm` | `md` | `lg` | `xl`
- `title`: string
- `description`: string
- `image`: string
- `imageAlt`: string
- `category`: string
- `href`: string
- `external`: boolean
- `clickable`: boolean
- `children`: ReactNode

### Navbar

A responsive navigation bar with mobile menu support.

```tsx
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from 'bracketui';

<Navbar position="fixed" enableScrollLock>
  <Navbrand logo="/logo.svg">Brand Name</Navbrand>
  
  <NavItem>
    <Navlink href="/">Home</Navlink>
    <Navlink href="/about">About</Navlink>
    <Navlink href="/contact">Contact</Navlink>
  </NavItem>
  
  <MobileNav>
    <Navlink href="/" cto>Home</Navlink>
    <Navlink href="/about">About</Navlink>
    <Navlink href="/contact">Contact</Navlink>
  </MobileNav>
</Navbar>
```

**Props:**
- `position`: `fixed` | `sticky` | `relative` | `absolute`
- `mobileBreakpoint`: number (default: 768)
- `enableScrollLock`: boolean
- `theme`: { background, border, mobileMenu }

### Footer

A flexible footer component with sections.

```tsx
import { Footer, FooterSection, FooterLink, FooterBottom } from 'bracketui';

<Footer>
  <FooterSection title="Company">
    <FooterLink href="/about">About Us</FooterLink>
    <FooterLink href="/contact">Contact</FooterLink>
  </FooterSection>
  
  <FooterSection title="Resources">
    <FooterLink href="/docs">Documentation</FooterLink>
    <FooterLink href="/blog">Blog</FooterLink>
  </FooterSection>
  
  <FooterBottom>
    <p>© 2024 Your Company. All rights reserved.</p>
  </FooterBottom>
</Footer>
```

**Props:**
- `theme`: { background, border }
- `className`: string

### Layout (Bracket)

A responsive container component.

```tsx
import { Bracket } from 'bracketui';

<Bracket 
  padding="medium" 
  centered 
  fluid={false}
  as="section"
>
  <h1>Content</h1>
</Bracket>
```

**Props:**
- `padding`: `none` | `small` | `medium` | `large`
- `centered`: boolean
- `fluid`: boolean
- `as`: ElementType

### Gradient

A decorative gradient component.

```tsx
import { Gradient } from 'bracketui';

<Gradient conic small className="custom-class" />
```

**Props:**
- `conic`: boolean
- `small`: boolean
- `className`: string

### ThemeToggle

A three-way theme toggle (light/dark/system).

```tsx
import { ThemeToggle, ClientThemeToggle } from 'bracketui';

// Use ClientThemeToggle for client-side only rendering
<ClientThemeToggle />

// Or use ThemeToggle directly in client components
<ThemeToggle onThemeChange={(theme) => console.log(theme)} />
```

**Props:**
- `onThemeChange`: (theme: Theme) => void

## Hooks

### useTheme

Manage theme state in your components.

```tsx
import { useTheme } from 'bracketui';

function MyComponent() {
  const [theme, setTheme] = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
}
```

**Returns:**
- `[theme, setTheme]`: `[Theme, (theme: Theme) => void]`
- `Theme`: `"light"` | `"dark"` | `"system"`

## Utilities

### ThemeScript

SSR-safe theme initialization script. Prevents flash of unstyled content.

```tsx
import { ThemeScript } from 'bracketui';

<head>
  <ThemeScript />
</head>
```

## Tailwind CSS v4 Configuration

BracketUI uses Tailwind CSS v4 with a custom `ui:` prefix. The styles are pre-compiled and included in the package.

### Dark Mode

Dark mode is handled via a custom `data-theme` attribute:

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

This is automatically managed by the theme system.

## TypeScript

BracketUI is written in TypeScript and provides full type definitions.

```tsx
import type { ButtonProps, Theme, ThemeToggleProps } from 'bracketui';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Examples

### Complete Next.js Setup

```tsx
// app/layout.tsx
import { ThemeScript } from 'bracketui';
import 'bracketui/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
import { Button, Card, ClientThemeToggle } from 'bracketui';

export default function Home() {
  return (
    <main>
      <header>
        <ClientThemeToggle />
      </header>
      
      <section>
        <h1>Welcome to BracketUI</h1>
        
        <div className="flex gap-4">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <Card title="Fast" href="/docs/performance">
            Built for speed and efficiency
          </Card>
          <Card title="Accessible" href="/docs/accessibility">
            WCAG compliant components
          </Card>
          <Card title="Customizable" href="/docs/theming">
            Easy to theme and extend
          </Card>
        </div>
      </section>
    </main>
  );
}
```

### Custom Theme Handler

```tsx
'use client';

import { ThemeToggle } from 'bracketui';
import { useEffect } from 'react';

export function CustomThemeToggle() {
  const handleThemeChange = (theme) => {
    console.log('Theme changed to:', theme);
    // Send analytics, update user preferences, etc.
  };
  
  return <ThemeToggle onThemeChange={handleThemeChange} />;
}
```

### Loading Button with API Call

```tsx
'use client';

import { Button } from 'bracketui';
import { useState } from 'react';

export function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch('/api/submit', { method: 'POST' });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Button 
      onClick={handleSubmit} 
      isLoading={isLoading}
      disabled={isLoading}
    >
      Submit
    </Button>
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name/Organization]

## Links

- [Documentation](#)
- [GitHub Repository](#)
- [Report Issues](#)
- [Changelog](#)

---

Made with ❤️ using React and Tailwind CSS v4
