#!/bin/bash

echo "🔍 Verifying CORE Landing Page Deployment Setup..."
echo ""

# Check for required files
echo "✅ Checking required files..."

files=("index.html" "src/main.tsx" "src/app/App.tsx" "vercel.json" "package.json" "vite.config.ts" "tsconfig.json")

all_good=true

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "   ✓ $file exists"
  else
    echo "   ✗ $file MISSING!"
    all_good=false
  fi
done

echo ""

# Check package.json scripts
echo "✅ Checking package.json scripts..."
if grep -q '"build": "vite build"' package.json; then
  echo "   ✓ build script found"
else
  echo "   ✗ build script missing!"
  all_good=false
fi

if grep -q '"dev": "vite"' package.json; then
  echo "   ✓ dev script found"
else
  echo "   ✗ dev script missing!"
  all_good=false
fi

echo ""

# Check React dependencies
echo "✅ Checking React dependencies..."
if grep -q '"react":' package.json; then
  echo "   ✓ React found in dependencies"
else
  echo "   ✗ React missing from dependencies!"
  all_good=false
fi

if grep -q '"react-dom":' package.json; then
  echo "   ✓ ReactDOM found in dependencies"
else
  echo "   ✗ ReactDOM missing from dependencies!"
  all_good=false
fi

echo ""
echo "================================"

if [ "$all_good" = true ]; then
  echo "✅ All checks passed! Ready to deploy to Vercel!"
  echo ""
  echo "Next steps:"
  echo "1. Run: npm install"
  echo "2. Run: npm run build"
  echo "3. Run: npm run preview (to test locally)"
  echo "4. Deploy to Vercel!"
else
  echo "❌ Some checks failed. Please fix the issues above."
fi

echo "================================"
