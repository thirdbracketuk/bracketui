# Deploying BracketUI Apps

## Overview

Deploy both apps (web and docs) to Vercel for free hosting.

## Prerequisites

1. GitHub account
2. Vercel account (sign up at https://vercel.com)
3. Push code to GitHub repository

## Option 1: Deploy via Vercel Dashboard (Easiest)

### Deploy Web App (Showcase)

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `cd ../.. && pnpm install && cd apps/web && pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

4. Environment Variables: None needed

5. Click **Deploy**

6. Your site will be live at: `https://your-project-web.vercel.app`

### Deploy Docs App

1. Go to https://vercel.com/new
2. Import the same GitHub repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/docs`
   - **Build Command**: `cd ../.. && pnpm install && cd apps/docs && pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

4. Environment Variables: None needed

5. Click **Deploy**

6. Your site will be live at: `https://your-project-docs.vercel.app`

### Update Cross-Links

After deployment, update the links in both apps:

**In `apps/web/app/page.tsx`:**
```tsx
// Change localhost:3002 to your docs URL
<Button size="lg" as="a" href="https://your-project-docs.vercel.app">
  Get Started
</Button>
```

**In `apps/docs/app/page.tsx`:**
```tsx
// Change localhost:3001 to your web URL
<Button size="lg" as="a" href="https://your-project-web.vercel.app">
  View Showcase
</Button>
```

Commit and push changes. Vercel will auto-deploy.

## Option 2: Deploy via Vercel CLI

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy Web App

```bash
cd apps/web
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: bracketui-web
# - Directory: ./
# - Override settings? Yes
# - Build Command: pnpm build
# - Output Directory: .next
# - Development Command: pnpm dev
```

### Deploy Docs App

```bash
cd apps/docs
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: bracketui-docs
# - Directory: ./
# - Override settings? Yes
# - Build Command: pnpm build
# - Output Directory: .next
# - Development Command: pnpm dev
```

### Production Deployment

```bash
# For web
cd apps/web
vercel --prod

# For docs
cd apps/docs
vercel --prod
```

## Option 3: Deploy to Netlify

### Web App

1. Go to https://app.netlify.com/start
2. Connect GitHub repository
3. Configure:
   - **Base directory**: `apps/web`
   - **Build command**: `cd ../.. && pnpm install && cd apps/web && pnpm build`
   - **Publish directory**: `apps/web/.next`

### Docs App

Same steps but use `apps/docs` as base directory.

## Option 4: Deploy to Railway

### Web App

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
cd apps/web
railway init

# Deploy
railway up
```

### Docs App

Same steps in `apps/docs` directory.

## Custom Domain Setup (Vercel)

1. Go to your project settings on Vercel
2. Navigate to **Domains**
3. Add your custom domain:
   - Web: `bracketui.com`
   - Docs: `docs.bracketui.com`
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

## Environment Variables

If you need environment variables:

### Vercel Dashboard
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add variables
4. Redeploy

### Vercel CLI
```bash
vercel env add VARIABLE_NAME
```

## Continuous Deployment

Both Vercel and Netlify automatically deploy on:
- Push to main branch
- Pull request (preview deployments)

### Configure Auto-Deploy

In `vercel.json` (root of each app):

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Monorepo Configuration

Create `vercel.json` in project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "apps/web/package.json",
      "use": "@vercel/next"
    },
    {
      "src": "apps/docs/package.json",
      "use": "@vercel/next"
    }
  ]
}
```

## Troubleshooting

### Build Fails

**Error: Cannot find module 'bracketui'**

Solution: Ensure build command includes workspace install:
```bash
cd ../.. && pnpm install && cd apps/web && pnpm build
```

**Error: pnpm not found**

Solution: Add to `package.json`:
```json
{
  "packageManager": "pnpm@10.19.0"
}
```

### Links Not Working

Update all localhost URLs to production URLs after deployment.

### Styles Not Loading

Ensure `bracketui/styles.css` is imported in layout.tsx.

## Performance Optimization

### Enable Edge Runtime (Optional)

In `app/layout.tsx`:
```tsx
export const runtime = 'edge';
```

### Enable Image Optimization

In `next.config.ts`:
```typescript
const config = {
  images: {
    domains: ['your-domain.com'],
  },
};
```

## Monitoring

### Vercel Analytics

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Install:
```bash
pnpm add @vercel/analytics
```

## Cost

- **Vercel Free Tier**: 
  - 100GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS
  - Perfect for documentation and showcase sites

- **Netlify Free Tier**:
  - 100GB bandwidth/month
  - 300 build minutes/month

Both are free for personal projects!

## Final Checklist

- [ ] Update package.json with correct URLs
- [ ] Replace localhost URLs with production URLs
- [ ] Test all navigation links
- [ ] Verify theme toggle works
- [ ] Check mobile responsiveness
- [ ] Test all components display correctly
- [ ] Verify dark mode works
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Add custom domain (optional)
- [ ] Enable analytics (optional)

## Support

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Railway Docs: https://docs.railway.app
