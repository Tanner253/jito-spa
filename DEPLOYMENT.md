# 🚀 TrenchPad Deployment Guide

## Quick Deploy to Vercel

### Option 1: Automatic (Recommended)
1. **Push to main branch** - Vercel automatically deploys
2. **Live instantly** at your Vercel domain

### Option 2: Manual Deploy
```bash
cd jito-spa
npm install
npm run deploy
```

## 📦 Setup Steps

### 1. Install Dependencies
```bash
cd jito-spa
npm install
```

### 2. Update Token Address
When your TrenchPad token launches, update the CA in:
```typescript
// app/page.tsx - Line 5
const PLACEHOLDER_CA = "YourActualTrenchPadTokenAddress"
```

### 3. Deploy
```bash
npm run build
npm run deploy
```

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env.local`:
```bash
NEXT_PUBLIC_TRENCH_TOKEN_ADDRESS=YourTokenAddress
NEXT_PUBLIC_MARKET_CAP_GOAL=100000
NEXT_PUBLIC_FREE_MC_THRESHOLD=5000000
```

### Vercel Settings
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Node.js Version**: 18.x

## 🎯 Features Included

### ✅ Branding
- **TrenchPad** name and rocket icon
- **Professional blue/purple gradient** color scheme
- **Glass morphism** design elements
- **No-scroll dense layout** - everything visible at once

### ✅ Content
- **Clear value proposition** - Professional bundle trading
- **Pricing tiers** - $497 early access, FREE at $5M MC
- **Security promises** - Local execution, zero data collection
- **Performance stats** - 94% success rate, 2.3x avg profit
- **Feature highlights** - 25-wallet coordination, MEV protection

### ✅ Social Integration
- **Twitter**: @osknyo_dev
- **Telegram**: @osknyo  
- **Discord**: osknyo
- **Token CA copy** functionality
- **External links** to pump.fun and charts

### ✅ Technical
- **Next.js 14** with static export
- **Responsive design** - works on all devices
- **Fast loading** - optimized for performance
- **SEO optimized** - meta tags and descriptions

## 🔴 Live Demo

Once deployed, your TrenchPad SPA will be live at:
- **Vercel Domain**: https://your-project.vercel.app
- **Custom Domain**: Configure in Vercel dashboard

## 📱 Mobile Optimized

The design is fully responsive and looks great on:
- Desktop (primary focus)
- Tablets 
- Mobile phones

---

**Ready to launch your TrenchPad brand!** 🚀 