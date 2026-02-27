# 🚀 VERCEL DEPLOYMENT GUIDE - Fix 404 Error

## Your Error: `404: NOT_FOUND`

This error means Vercel can't find your built app. Here's how to fix it:

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before deploying, make sure these files exist in your project:

- ✅ `index.html` (in root)
- ✅ `src/main.tsx` (entry point)
- ✅ `vercel.json` (config)
- ✅ `package.json` (updated with scripts)
- ✅ All component files in `src/app/`

---

## 🔧 STEP 1: Test Build Locally First

**This is crucial!** Before deploying to Vercel, test that your build works:

```bash
# Install dependencies
npm install

# Test the build
npm run build

# You should see output like:
# ✓ built in 3.5s
# dist/index.html created

# Preview the build
npm run preview
```

If the build fails locally, fix those errors first before deploying to Vercel.

---

## 🌐 STEP 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. **Go to [vercel.com/new](https://vercel.com/new)**
2. **Import your project:**
   - If on GitHub: Connect repo and import
   - If local files: Use "Deploy from ZIP" or drag folder
3. **Configure build settings:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Root Directory: ./
   ```
4. **Click "Deploy"**
5. **Wait 1-2 minutes** for build to complete
6. **Visit your live URL!** ✨

---

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# Answer prompts:
# ? Set up and deploy? [Y/n] y
# ? Which scope? [Select your account]
# ? Link to existing project? [N/y] n
# ? What's your project's name? core-landing-page
# ? In which directory is your code located? ./
```

---

## 🐛 STILL GETTING 404? Try These Fixes:

### Fix #1: Check Vercel Build Logs
1. Go to your project on Vercel dashboard
2. Click "Deployments" tab
3. Click the failed deployment
4. Read the build logs - look for errors

Common errors:
- **"Cannot find module 'react'"** → React not installed (fixed in package.json)
- **"index.html not found"** → Missing index.html (now included)
- **"Build failed"** → Check local build first

---

### Fix #2: Delete `.vercel` Folder and Redeploy

```bash
# Remove cached Vercel config
rm -rf .vercel

# Deploy fresh
vercel --prod --force
```

---

### Fix #3: Manually Set Build Settings in Vercel

1. Go to your project on Vercel
2. Settings → General → Build & Development Settings
3. Set these **exactly**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Go to Deployments → Click "..." → "Redeploy"

---

### Fix #4: Check index.html Script Path

Open `index.html` and verify this line exists:
```html
<script type="module" src="/src/main.tsx"></script>
```

Should be `/src/main.tsx` not `./src/main.tsx`

---

### Fix #5: Verify File Structure

Your project should look like this:

```
your-project/
├── src/
│   ├── main.tsx          ← Entry point
│   ├── app/
│   │   └── App.tsx       ← Main component
│   └── styles/
│       └── index.css     ← Styles
├── public/
│   └── favicon.svg
├── index.html            ← HTML template (ROOT!)
├── vercel.json           ← Vercel config
├── package.json          ← Dependencies
└── vite.config.ts        ← Vite config
```

**Critical:** `index.html` must be in the ROOT, not inside `src/`!

---

## 🎯 Complete Deploy Workflow

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Test build locally
npm run build

# 3. Preview to make sure it works
npm run preview
# Visit http://localhost:4173 and test

# 4. If preview works, deploy to Vercel
vercel --prod

# 5. Visit your live URL!
```

---

## 📊 Expected Vercel Build Output

When deploying successfully, you should see:

```
✓ Building...
✓ Compiled successfully
✓ Deploying to production...
✓ Deployment ready

🎉 https://your-project.vercel.app
```

If you see errors instead, read them carefully and fix before redeploying.

---

## 🆘 Emergency: Deploy to Alternative Platform

If Vercel keeps failing, try Netlify instead:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

## 📧 Need More Help?

1. **Check Vercel Logs:** Most errors are shown in build logs
2. **Test Locally First:** Always run `npm run build` before deploying
3. **Clear Cache:** Delete `.vercel` folder and redeploy
4. **Check File Paths:** Make sure `index.html` is in root directory

Your app is ready to deploy - the configuration is now correct! 🚀
