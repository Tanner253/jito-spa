#!/bin/bash

echo "🚀 TrenchPad Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the jito-spa directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

echo "🔨 Building for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed"
    exit 1
fi

echo "🚀 Deploying to Vercel..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ TrenchPad deployed successfully!"
    echo "🌐 Your site should be live at your Vercel domain"
    echo ""
    echo "📝 Next steps:"
    echo "1. Update the token CA in app/page.tsx when your token launches"
    echo "2. Configure custom domain in Vercel dashboard (optional)"
    echo "3. Share your TrenchPad landing page!"
else
    echo "❌ Error: Deployment failed"
    exit 1
fi 