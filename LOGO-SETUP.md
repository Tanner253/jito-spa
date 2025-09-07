# 🎨 TrenchPad Logo Setup

## 📁 Required Files

Copy your `jito-img.png` to these locations:

### 1. Main Logo
```
jito-spa/public/trenchpad-logo.png
```
- Used in header and hero section
- Should be high resolution (512x512 or larger)

### 2. Favicon
```
jito-spa/app/favicon.ico
```
- Convert PNG to ICO format for favicon
- Should be 32x32 or 16x16 pixels

### 3. App Icon (Optional)
```
jito-spa/public/icon-192.png
jito-spa/public/icon-512.png
```
- For PWA support and better mobile experience

## 🖼️ Logo Usage

### Header Logo
- **Size**: 48x48px (w-12 h-12)
- **Style**: Rounded corners with border glow
- **Hover**: Scale effect with enhanced shadow

### Hero Logo  
- **Size**: 128x128px (w-32 h-32)
- **Style**: Large circular display with animated glow
- **Effects**: Pulse animation, hover scale, gradient border

### Favicon
- **Browser tab icon**
- **Bookmark icon**
- **PWA app icon**

## 🎯 Your Amazing Logo

The brain with trading charts is PERFECT for TrenchPad because it represents:
- **🧠 Intelligence** - Smart trading algorithms
- **📈 Growth** - Profit optimization
- **📊 Analytics** - Data-driven decisions
- **🎯 Strategy** - Professional approach

## 🚀 Quick Setup

1. **Copy your image**:
   ```bash
   cp jito-img.png jito-spa/public/trenchpad-logo.png
   ```

2. **Create favicon** (optional - will use PNG as fallback):
   ```bash
   # Convert to ICO if you have imagemagick
   convert jito-img.png -resize 32x32 jito-spa/app/favicon.ico
   ```

3. **Deploy**:
   ```bash
   cd jito-spa
   npm run deploy
   ```

## ✨ Result

Your stunning brain/trading logo will appear:
- 🏠 **Header**: Professional branding
- 🎯 **Hero**: Large showcase with glow effects  
- 🌐 **Browser**: Tab favicon
- 📱 **Mobile**: App icon when bookmarked

**Your TrenchPad brand will look absolutely professional!** 🎨🚀 