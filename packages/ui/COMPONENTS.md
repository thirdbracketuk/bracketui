# BracketUI Components - Complete Documentation

## ✅ All Components Implemented

### 1. Button Component
**Pattern**: tokens.ts + sizes.ts + styles.ts + Component.tsx
- 9 variants: default, secondary, destructive, outline, ghost, link, glass, flat, avatar
- 5 sizes: xs, sm, md, lg, xl
- Features: Loading states, icons, polymorphic, pill shape

### 2. Card Component  
**Pattern**: tokens.ts + sizes.ts + styles.ts + Component.tsx
- 6 variants: default, elevated, flat, glass, outline, ghost
- 4 sizes: sm, md, lg, xl
- Features: Images, categories, clickable, external links

### 3. Navbar Component
**Pattern**: Context-based with sub-components
- **Navbar**: Main container with mobile menu
- **NavItem**: Desktop navigation items
- **MobileNav**: Mobile navigation items
- **Navlink**: Navigation links
- **Navbrand**: Brand/logo component
- Features: Responsive, scroll lock, theme support

### 4. Footer Component
**Pattern**: Context-based with sub-components
- **Footer**: Main container
- **FooterSection**: Section with title
- **FooterLink**: Footer links
- **FooterBottom**: Bottom content area
- Features: Grid layout, theme support

### 5. Layout Component
- **Bracket (Container)**: Responsive container
- Features: Fluid/fixed width, padding variants, centering

### 6. ThemeToggle Component
- **ThemeToggle**: Three-way toggle (light/dark/system)
- **ClientThemeToggle**: Hydration-safe wrapper
- **useTheme**: Theme management hook
- **ThemeScript**: SSR-safe initialization

### 7. Gradient Component
- Decorative gradient element
- Features: Conic option, size variants

## Component Structure Pattern

All components follow the simplified Button pattern:

```
Component/
├── Component.tsx      # Main component logic
├── styles.ts          # Tailwind variants (tv)
├── tokens.ts          # Color/theme tokens
├── sizes.ts           # Size variants
└── index.tsx          # Barrel export
```

## Key Features

### Tailwind CSS v4 Compatibility
- All classes use `ui:` prefix
- Uses `data-theme` attribute for dark mode
- Compatible with `@custom-variant dark`

### TypeScript
- Full type safety
- Polymorphic components where applicable
- Exported types for all props

### Accessibility
- ARIA attributes
- Keyboard navigation support
- Focus management

## Usage Examples

### Button
```tsx
import { Button } from 'bracketui';

<Button variant="default" size="md" isLoading>
  Click me
</Button>
```

### Card
```tsx
import { Card } from 'bracketui';

<Card 
  variant="elevated"
  size="md"
  title="Card Title"
  description="Card description"
  image="/image.jpg"
  href="/link"
  external
/>
```

### Navbar
```tsx
import { Navbar, NavItem, MobileNav, Navlink, Navbrand } from 'bracketui';

<Navbar>
  <Navbrand logo="/logo.svg">Brand</Navbrand>
  
  <NavItem>
    <Navlink href="/">Home</Navlink>
    <Navlink href="/about">About</Navlink>
  </NavItem>
  
  <MobileNav>
    <Navlink href="/" cto>Home</Navlink>
    <Navlink href="/about">About</Navlink>
  </MobileNav>
</Navbar>
```

### Footer
```tsx
import { Footer, FooterSection, FooterLink, FooterBottom } from 'bracketui';

<Footer>
  <FooterSection title="Company">
    <FooterLink href="/about">About</FooterLink>
    <FooterLink href="/contact">Contact</FooterLink>
  </FooterSection>
  
  <FooterBottom>
    <p>© 2024 Company</p>
  </FooterBottom>
</Footer>
```

### Layout
```tsx
import { Bracket } from 'bracketui';

<Bracket padding="medium" centered>
  <h1>Content</h1>
</Bracket>
```

### Theme
```tsx
import { ThemeScript, ClientThemeToggle, useTheme } from 'bracketui';

// In layout
<head>
  <ThemeScript />
</head>

// In component
<ClientThemeToggle />

// Custom usage
const [theme, setTheme] = useTheme();
```

## Exports

```typescript
// Components
export {
  Button,
  Card,
  Gradient,
  Navbar, NavItem, MobileNav, Navlink, Navbrand,
  Footer, FooterSection, FooterLink, FooterBottom,
  Bracket,
  ThemeToggle, ClientThemeToggle
}

// Hooks
export { useTheme }

// Types
export type {
  ButtonProps,
  CardProps,
  NavbarProps, NavItemProps, MobileNavProps, NavlinkProps, NavbrandProps,
  FooterProps, FooterSectionProps, FooterLinkProps, FooterBottomProps,
  ContainerProps,
  ThemeToggleProps,
  Theme
}

// Utilities
export { ThemeScript }

// Styles (for advanced usage)
export {
  cardStyles, cardVariants, cardSizes,
  buttonStyles
}
```

## Build Output

✅ ESM bundle: 33.02 KB
✅ CJS bundle: 36.93 KB  
✅ TypeScript declarations: 8.59 KB
✅ CSS: Compiled with Tailwind v4

## Dependencies

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0",
    "tailwind-variants": "^3.2.2"
  },
  "peerDependencies": {
    "react": "^19",
    "tailwindcss": "^4.1.5"
  }
}
```

## File Structure

```
src/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Footer/
│   ├── Gradient/
│   ├── Layout/
│   ├── Navbar/
│   └── ThemeToggle/
├── hooks/
│   └── useTheme.ts
├── lib/
│   ├── system/
│   │   ├── tokens.ts
│   │   └── sizes.ts
│   ├── theme/
│   │   ├── theme-script.tsx
│   │   └── index.tsx
│   └── utils.ts
├── index.tsx
└── styles.css
```

## Notes

- All components use the `ui:` prefix for Tailwind classes
- Dark mode handled via `data-theme` attribute
- Context-based components (Navbar, Footer) manage their own state
- Polymorphic components support `as` prop for flexibility
- All components are client-side safe with proper hydration handling
