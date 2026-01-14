# Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- Node.js 18+ installed locally

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose the GitHub repository `thirdbracketuk/bracketui`
4. Configure project settings:
   - **Framework**: Next.js
   - **Root Directory**: Select `apps/web` for the main site
   - **Build Command**: `pnpm run build`
   - **Install Command**: `pnpm install --frozen-lockfile`
5. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

## Environment Variables
Set these in Vercel project settings under "Settings > Environment Variables":
- `NEXT_PUBLIC_SITE_URL`: Your production domain

## Project Structure
- **apps/web**: Main website (deployed to root domain)
- **apps/docs**: Documentation site (can be deployed separately)
- **packages/ui**: Shared UI components library
- **packages/tailwind-config**: Shared Tailwind configuration
- **packages/typescript-config**: Shared TypeScript configuration
- **packages/eslint-config**: Shared ESLint configuration

## Monorepo Configuration
This is a Turborepo monorepo with pnpm workspaces. Vercel automatically:
- Detects the monorepo structure
- Installs dependencies across all workspaces
- Builds only affected packages

## Build & Preview Locally
```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Run development server
pnpm run dev

# Lint the code
pnpm run lint
```

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are listed in `package.json`
3. Verify Node.js version is 18+
4. Check for TypeScript errors (currently ignored)

### Performance Issues
1. Use Vercel Analytics to monitor performance
2. Enable image optimization
3. Use incremental static regeneration (ISR)
4. Optimize bundle sizes

## Post-Deployment
1. Set custom domain in Vercel project settings
2. Enable automatic HTTPS
3. Configure DNS settings
4. Test the live deployment
5. Set up monitoring and alerts

## Additional Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Turborepo Guide](https://turbo.build/repo/docs)
