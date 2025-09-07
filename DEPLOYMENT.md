# 🚀 TrenchPad Deployment Guide

## Quick Deploy to Vercel

### Option 1: Automatic (Recommended)
1. **Push to main branch** - Vercel automatically deploys
2. **Live instantly** at your Vercel domain

### Option 2: Manual Deploy
```bash
cd jito-spa
npm install
npm run build
vercel --prod
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
vercel --prod
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
- **Node.js Version**: 18.x or higher
- **Framework Preset**: Next.js

## ✅ Recent Fixes

### Styling Issues Fixed
- ✅ **Removed asset path issues** - Fixed `next.config.js` that was causing CSS/styling problems on Vercel
- ✅ **Improved space utilization** - Removed height constraints and overflow restrictions
- ✅ **Better responsive design** - Enhanced layout for all screen sizes
- ✅ **Natural scrolling** - Removed artificial height limits for better content flow

### Layout Improvements
- ✅ **Larger typography** - Increased font sizes for better readability
- ✅ **Better spacing** - Improved padding and margins throughout
- ✅ **Enhanced cards** - Larger, more prominent content sections
- ✅ **Improved features** - Added descriptions to feature cards

## 🎯 Features Included

### ✅ Branding
- **TrenchPad** name and logo
- **Green gradient** color scheme (trench colors)
- **Modern design** with glass morphism effects
- **Responsive layout** - works on all devices

### ✅ Content
- **Clear value proposition** - Professional bundle trading
- **Pricing tiers** - Progressive pricing from 10 SOL to FREE
- **Security promises** - Local execution, zero data collection
- **Feature highlights** - 25-wallet coordination, MEV protection

### ✅ Social Integration
- **Twitter**: @osknyo_dev
- **Telegram**: @osknyo  
- **Discord**: osknyo
- **Token CA copy** functionality

### ✅ Technical
- **Next.js 14** with static export
- **Tailwind CSS** for styling
- **Fast loading** - optimized for performance
- **SEO optimized** - meta tags and descriptions
- **Smooth animations** - Engaging user experience

## 🔴 Live Demo

Once deployed, your TrenchPad SPA will be live at:
- **Vercel Domain**: https://your-project.vercel.app
- **Custom Domain**: Configure in Vercel dashboard

## 📱 Mobile Optimized

The design is fully responsive and looks great on:
- Desktop (primary focus)
- Tablets 
- Mobile phones

## 🐛 Troubleshooting

### Styling Not Loading on Vercel
- ✅ **Fixed**: Removed problematic `assetPrefix` and `basePath` from `next.config.js`
- Ensure your build completes without errors
- Check Vercel build logs for any CSS compilation issues

### Layout Issues
- ✅ **Fixed**: Removed height constraints and overflow restrictions
- Content now flows naturally and scrolls properly
- Better space utilization across all screen sizes

---

**Ready to launch your TrenchPad brand!** 🚀 