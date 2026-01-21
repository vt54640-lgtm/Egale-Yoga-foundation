# GitHub Repository Setup Guide

## Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed, run:

```bash
gh auth login
gh repo create eagle-yoga-foundation --public --source=. --remote=origin --push
```

## Option 2: Using GitHub Web Interface

1. **Go to GitHub** and log in to your account

2. **Create a new repository**:
   - Click the "+" icon in the top right
   - Select "New repository"
   - Repository name: `eagle-yoga-foundation`
   - Description: "Premium yoga learning platform with AI-powered health assessment and personalized consultation"
   - Choose: Public
   - DO NOT initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code**:
   
   Run these commands in your terminal:
   
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/eagle-yoga-foundation.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

## Option 3: Using Git Commands (Manual)

```bash
# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/eagle-yoga-foundation.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## After Creating the Repository

### Set up GitHub Pages (Optional)
1. Go to repository Settings
2. Navigate to Pages
3. Select source: GitHub Actions
4. Your site will be published at: `https://YOUR_USERNAME.github.io/eagle-yoga-foundation/`

### Set up Vercel Deployment (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables (if ready):
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_RAZORPAY_KEY_ID
   - VITE_GEMINI_API_KEY
6. Click "Deploy"

### Repository Settings

Add these topics to your repository for better discoverability:
- yoga
- react
- vite
- ai
- health
- wellness
- learning-platform
- education
- gemini-ai
- supabase
- razorpay

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ⏳ Set up Supabase project
4. ⏳ Get Razorpay API keys
5. ⏳ Get Google Gemini API key
6. ⏳ Deploy to Vercel
7. ⏳ Configure environment variables
8. ⏳ Implement remaining features

## Repository URL

Once created, your repository will be at:
```
https://github.com/YOUR_USERNAME/eagle-yoga-foundation
```

## Clone Command for Others

```bash
git clone https://github.com/YOUR_USERNAME/eagle-yoga-foundation.git
cd eagle-yoga-foundation
npm install
npm run dev
```

---

**Note**: Make sure to replace `YOUR_USERNAME` with your actual GitHub username in all commands above.
