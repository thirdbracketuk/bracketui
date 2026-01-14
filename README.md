# BracketUI Monorepo

A modern React component library built with Tailwind CSS v4, featuring a complete showcase website and documentation.

## 📦 Packages

### `packages/ui` - BracketUI Component Library
Modern, lightweight React component library with:
- 7+ components (Button, Card, Navbar, Footer, Layout, ThemeToggle, Gradient)
- Full TypeScript support
- Tailwind CSS v4 with `ui:` prefix
- Dark mode with three-way toggle (light/dark/system)
- SSR-safe with Next.js
- Tree-shakeable exports

## 🌐 Apps

### `apps/web` - Showcase Website (Port 3001)
Professional landing page featuring:
- Impactful hero section
- Live component demonstrations
- All variants and sizes displayed
- Responsive design
- Dark mode support

### `apps/docs` - Documentation (Port 3002)
Complete documentation including:
- Installation guide for Next.js
- Component API documentation
- Code examples with syntax highlighting
- Usage instructions
- Features overview

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run showcase website
cd apps/web
pnpm dev
# Visit http://localhost:3001

# Run documentation
cd apps/docs
pnpm dev
# Visit http://localhost:3002

# Build component library
cd packages/ui
pnpm build
```

## 🎯 Features

- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Latest Tailwind with custom prefix
- ✅ **Dark Mode** - System-aware theme switching
- ✅ **Accessible** - ARIA compliant components
- ✅ **SSR Ready** - Works with Next.js
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **Monorepo** - Turborepo for fast builds

## 📚 Documentation

Visit the documentation at http://localhost:3002 for:
- Installation instructions
- Component API reference
- Usage examples
- Best practices

## 🎨 Components

- **Button** - 9 variants, 5 sizes, loading states
- **Card** - 6 variants, 4 sizes, images, categories
- **Navbar** - Responsive with mobile menu
- **Footer** - Flexible with sections
- **Layout (Bracket)** - Responsive container
- **ThemeToggle** - Three-way theme switcher
- **Gradient** - Decorative element

## 🛠️ Tech Stack

- **React 19** - Latest React
- **Next.js 16** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Turborepo** - Monorepo management
- **pnpm** - Package manager

## 📖 Usage

```tsx
import { Button, Card, ThemeToggle } from 'bracketui';
import 'bracketui/styles.css';

export default function App() {
  return (
    <div>
      <ThemeToggle />
      <Button variant="default">Click me</Button>
      <Card title="Hello" description="World" />
    </div>
  );
}
```

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run all apps in dev mode
pnpm dev

# Lint all packages
pnpm lint

# Type check
pnpm check-types
```

## 📁 Project Structure

```
bracketui/
├── packages/
│   └── ui/                 # Component library
│       ├── src/
│       │   ├── components/ # All components
│       │   ├── hooks/      # React hooks
│       │   ├── lib/        # Utilities
│       │   └── index.tsx   # Main exports
│       └── dist/           # Built files
│
├── apps/
│   ├── web/               # Showcase (3001)
│   └── docs/              # Documentation (3002)
│
└── turbo.json             # Turborepo config
```

## 🎨 Design System

- **Colors**: Gray scale with proper contrast
- **Typography**: Geist font family
- **Spacing**: Consistent 4px grid
- **Breakpoints**: Mobile-first responsive
- **Dark Mode**: System-aware with manual override

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please read the documentation first.

---

Built with ❤️ using React, Next.js, and Tailwind CSS v4
