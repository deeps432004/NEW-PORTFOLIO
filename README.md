# Deepika H. Neeralagi — Personal Developer Portfolio

> **"I build things that make technology feel useful."**

A dark, futuristic, cinematic personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## ⚡ Tech Stack

- **Framework:** Next.js 16 (Turbopack, App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 & custom glassmorphism design system
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Email Gateway:** Next.js Route (`/api/contact`) + FormSubmit API

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live site.

---

## 🌐 Deploying to Vercel

### Method 1: GitHub + Vercel Dashboard (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [https://github.com/new](https://github.com/new).
   - Set repository name as `portfolio` (or your preferred name).
   - Click **Create repository** (do not add a README or .gitignore since we already have them).

2. **Push the code to GitHub:**
   In your terminal in this project folder, run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/deeps432004/portfolio.git
   git push -u origin main
   ```
   *(Replace `portfolio` with your repo name if different)*

3. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com) and log in with your GitHub account (`deeps432004`).
   - Click **"Add New..."** ➔ **"Project"**.
   - Find your `portfolio` repository and click **"Import"**.
   - Keep the default settings (Framework: Next.js) and click **"Deploy"**.
   - In ~30 seconds, Vercel will give you a live production URL!

---

### Method 2: Deploying via Vercel CLI

You can also deploy directly from your command line:

```bash
# Login and deploy preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

Follow the interactive prompts to link your Vercel account.
