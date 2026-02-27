# CORE Landing Page

A modern EdTech SaaS landing page for cognitive assessment platform.

## 🚀 Deploy to Vercel (Quick Start)

### Method 1: Deploy via Vercel Website (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository from GitHub (or upload the folder)
4. Vercel will auto-detect Vite settings
5. Click "Deploy" - Done! ✅

### Method 2: Deploy via CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd your-project-folder

# Install dependencies
npm install

# Deploy to Vercel
vercel

# Follow the prompts, then your site is live!
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main component
│   │   └── components/
│   │       ├── NeuralNetwork.tsx      # Animated canvas
│   │       ├── ForSchools.tsx         # Section 2
│   │       └── ContactSection.tsx     # Section 3
│   ├── styles/                  # CSS files
│   └── main.tsx                # Entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── vercel.json                  # Vercel configuration
└── package.json                 # Dependencies
```

## 🎨 Features

- ✅ Split-screen hero with neural network animation
- ✅ Interactive dashboard previews with charts
- ✅ Glassmorphism effects
- ✅ Smooth animations with Motion
- ✅ Fully responsive design
- ✅ Contact form with personal touch

## 🔧 Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Recharts
- Lucide Icons

## 📦 Build Output

The build creates static files in the `dist/` folder, which Vercel automatically deploys.

## 🌐 Custom Domain

After deploying to Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration steps

## 📝 Environment Variables (Optional)

If you add backend integration, create `.env` file:
```
VITE_API_URL=your-api-url
```

## 🐛 Troubleshooting

**404 Error on Vercel?**
- Make sure `vercel.json` exists (it's included!)
- Check that build completed successfully
- Verify index.html is in the root

**Blank page?**
- Check browser console for errors
- Ensure all dependencies installed: `npm install`
- Try clearing cache: `vercel --prod --force`

## 📧 Support

Need help? Check the Vercel deployment logs or contact support.

---

Built with ❤️ using Figma Make
