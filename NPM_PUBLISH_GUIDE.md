# Publishing BracketUI to npm

## Prerequisites

1. npm account (create at https://www.npmjs.com/signup)
2. Verified email on npm
3. Two-factor authentication enabled (recommended)

## Step 1: Update Package Information

Edit `packages/ui/package.json`:

```json
{
  "name": "@your-username/bracketui",
  "version": "1.0.0",
  "description": "A modern React component library built with Tailwind CSS v4",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "url": "https://yourwebsite.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/bracketui.git"
  },
  "keywords": [
    "react",
    "components",
    "tailwindcss",
    "ui",
    "design-system",
    "typescript",
    "dark-mode"
  ],
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  }
}
```

## Step 2: Add LICENSE File

Create `packages/ui/LICENSE`:

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Step 3: Build the Package

```bash
cd packages/ui
pnpm build
```

Verify build output in `dist/` folder.

## Step 4: Login to npm

```bash
npm login
```

Enter your credentials.

## Step 5: Publish

```bash
cd packages/ui
npm publish --access public
```

For scoped packages (@username/bracketui), the `--access public` flag is required.

## Step 6: Verify Publication

Visit: `https://www.npmjs.com/package/@your-username/bracketui`

## Updating the Package

1. Update version in `package.json`:
   - Patch: `1.0.0` → `1.0.1` (bug fixes)
   - Minor: `1.0.0` → `1.1.0` (new features)
   - Major: `1.0.0` → `2.0.0` (breaking changes)

2. Build and publish:
```bash
pnpm build
npm publish
```

## Using the Published Package

```bash
npm install @your-username/bracketui
# or
pnpm add @your-username/bracketui
```

## Troubleshooting

### Error: Package name already exists
- Change package name in `package.json`
- Use scoped package: `@your-username/bracketui`

### Error: You must verify your email
- Check your npm email
- Verify it from the link sent

### Error: 403 Forbidden
- Ensure you're logged in: `npm whoami`
- Check package name isn't taken
- Use `--access public` for scoped packages

## Best Practices

1. **Semantic Versioning**: Follow semver (major.minor.patch)
2. **Changelog**: Maintain CHANGELOG.md
3. **Git Tags**: Tag releases in git
4. **Testing**: Test package locally before publishing
5. **Documentation**: Keep README.md updated

## Testing Locally Before Publishing

```bash
# In packages/ui
pnpm pack

# This creates bracketui-1.0.0.tgz
# Install in another project:
npm install /path/to/bracketui-1.0.0.tgz
```

## Automated Publishing (Optional)

Use GitHub Actions for automated publishing on release.

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: pnpm install
      - run: cd packages/ui && pnpm build
      - run: cd packages/ui && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

Add `NPM_TOKEN` to GitHub repository secrets.
