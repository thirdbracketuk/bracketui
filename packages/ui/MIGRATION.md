# BracketUI Export Structure Update

## Changes Made

### 1. Component Structure
- Moved components from flat structure to organized folders with barrel files
- **Before**: `src/card.tsx`, `src/gradient.tsx`
- **After**: 
  - `src/components/Card/Card.tsx` + `src/components/Card/index.tsx`
  - `src/components/Gradient/Gradient.tsx` + `src/components/Gradient/index.tsx`

### 2. Main Index File
- Created `src/index.tsx` with barrel exports:
```typescript
export * from "./components/Card";
export * from "./components/Gradient";
```

### 3. Build System
- Added **tsup** for building the library (matching first project)
- Created `tsup.config.ts` with:
  - 'use client' banner for React Server Components compatibility
  - ESM and CJS formats
  - TypeScript declarations
  - React as external dependency

### 4. Package.json Updates
- Added proper exports field:
```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.mjs",
    "require": "./dist/index.js"
  },
  "./styles.css": "./dist/index.css"
}
```
- Updated build scripts to use tsup
- Added tsup as devDependency
- Added main, module, and types fields

### 5. Turbo.json Simplification
- Simplified turbo config since tsup handles both styles and components

## What Was Kept
✅ Tailwind CSS v4 configuration
✅ Existing components (Card, Gradient)
✅ Component styling with `ui:` prefix
✅ TypeScript configuration
✅ Existing workspace structure

## What Was NOT Added
❌ Changeset (as requested)
❌ GitHub Actions (as requested)
❌ Additional components (as requested)

## Build Output
The package now builds to:
- `dist/index.js` (CommonJS)
- `dist/index.mjs` (ESM)
- `dist/index.d.ts` (TypeScript declarations)
- `dist/index.css` (Tailwind CSS v4 styles)

## Usage
```typescript
import { Card, Gradient } from 'bracketui';
import 'bracketui/styles.css';
```
