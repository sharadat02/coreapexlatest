#!/bin/bash

echo "🔨 Testing CORE Landing Page Build..."
echo ""
echo "This will test if your build works locally before deploying to Vercel."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ npm install failed!${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Dependencies installed${NC}"
    echo ""
fi

# Test build
echo -e "${YELLOW}🏗️  Testing build...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ BUILD SUCCESS!${NC}"
    echo ""
    echo "📁 Checking output..."
    
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✅ dist/index.html exists${NC}"
    else
        echo -e "${RED}❌ dist/index.html missing!${NC}"
    fi
    
    if [ -d "dist/assets" ]; then
        echo -e "${GREEN}✅ dist/assets/ exists${NC}"
        echo ""
        echo "📊 Build output:"
        ls -lh dist/
        echo ""
        echo "🎉 Your build works! Ready to deploy to Vercel!"
        echo ""
        echo "Next steps:"
        echo "1. Go to vercel.com/dashboard"
        echo "2. Find your CORE project"
        echo "3. Click Deployments → ... → Redeploy (without cache)"
        echo "4. It will work now! ✅"
    else
        echo -e "${RED}❌ dist/assets/ missing!${NC}"
    fi
else
    echo ""
    echo -e "${RED}❌ BUILD FAILED!${NC}"
    echo ""
    echo "The build failed. Check the error messages above."
    echo "Fix these errors before deploying to Vercel."
    exit 1
fi
