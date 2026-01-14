# BracketUI v2 - Theme System & Button Component

## New Features Added

### 1. Theme System (Three-Way Toggle)

#### Components & Utilities
- **useTheme Hook** (`src/hooks/useTheme.ts`)
- **ThemeScript** (`src/lib/theme/theme-script.tsx`)
- **ThemeToggle** (`src/components/ThemeToggle/ThemeToggle.tsx`)
- **ClientThemeToggle** (`src/components/ThemeToggle/ClientThemeToggle.tsx`)

#### How It Works
The theme system supports three modes: `light`, `dark`, and `system`.

**Key Differences from Original (Tailwind v4 Adaptation):**
- Uses `data-theme` attribute instead of class-based theming
- All classes use `ui:` prefix for Tailwind v4
- Compatible with the custom variant: `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *))`

#### Usage in Next.js App

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
```

```tsx
// components/Header.tsx
import { ClientThemeToggle } from 'bracketui';

export function Header() {
  return (
    <header>
      <ClientThemeToggle />
    </header>
  );
}
```

### 2. Button Component

#### Structure (Following First Project Pattern)
- **Button.tsx** - Main component with polymorphic API
- **styles.ts** - Tailwind variants using `tailwind-variants`
- **Spinner.tsx** - Loading spinner component
- **index.tsx** - Barrel export

#### System Files
- **tokens.ts** - Color and focus ring tokens
- **sizes.ts** - Size variants for buttons

#### Features
- **Polymorphic**: Can render as button, link, or any element
- **Variants**: default, secondary, destructive, outline, ghost, link, glass, flat, avatar
- **Sizes**: xs, sm, md, lg, xl, icon
- **Loading State**: Built-in spinner
- **Icon Support**: Start/end positioning
- **Pill Shape**: Rounded full option
- **Avatar Mode**: Icon-only circular button

#### Usage Examples

```tsx
import { Button } from 'bracketui';

// Basic button
<Button>Click me</Button>

// With variant and size
<Button variant="secondary" size="lg">Large Secondary</Button>

// Loading state
<Button isLoading>Processing...</Button>

// With icon
<Button icon={<Icon />} iconPosition="start">
  With Icon
</Button>

// As link
<Button as="a" href="/about">Link Button</Button>

// Pill shape
<Button pill>Rounded</Button>

// Avatar/Icon only
<Button variant="avatar" size="md" icon={<UserIcon />} />
```

## File Structure

```
packages/ui/src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Spinner.tsx
│   │   ├── styles.ts
│   │   └── index.tsx
│   ├── Card/
│   ├── Gradient/
│   └── ThemeToggle/
│       ├── ThemeToggle.tsx
│       ├── ClientThemeToggle.tsx
│       └── index.tsx
├── hooks/
│   └── useTheme.ts
├── lib/
│   ├── system/
│   │   ├── tokens.ts
│   │   └── sizes.ts
│   └── theme/
│       ├── theme-script.tsx
│       └── index.tsx
├── index.tsx
└── styles.css
```

## Exports

```typescript
// Components
export { Button, Card, Gradient, ThemeToggle, ClientThemeToggle }

// Hooks
export { useTheme }

// Types
export type { Theme, ButtonProps, ThemeToggleProps }

// Utilities
export { ThemeScript }
```

## Tailwind v4 Compatibility

All components use the `ui:` prefix for class names to work with the Tailwind v4 configuration:

```css
@import "tailwindcss" prefix(ui);
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

## Dependencies Added

- `tailwind-variants`: ^3.2.2 (for Button styles)

## Build Output

- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ESM bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/index.css` - Compiled Tailwind CSS v4 styles
