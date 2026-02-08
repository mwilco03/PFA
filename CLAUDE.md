# Claude Code Memory - PFA Trajectory App

## Critical Information

### User Workflow
- **ALL CHANGES GO THROUGH PULL REQUESTS** - User creates PRs to merge to main
- Feature branch naming: `claude/setup-repository-[hash]`
- PRs are reviewed and merged by user
- Do NOT push directly to main

### GitHub Pages Deployment Issue (2026-02-08)

**Problem Found:**
- Root `index.html` (development file) was being served instead of built `dist/index.html`
- Browser error: "Loading module from https://mwilco03.github.io/src/main.jsx was blocked because of a disallowed MIME type"
- GitHub Pages must be configured to deploy from "GitHub Actions" NOT "Deploy from branch"

**Root Cause:**
1. GitHub Pages was configured to deploy from **branch** instead of **GitHub Actions**
2. When deploying from branch, it serves root `index.html` (source file with `/src/main.jsx`)
3. When deploying from Actions, it serves `dist/index.html` (built file with `/PFA/assets/index-[hash].js`)

**Solution:**
- Root `index.html` MUST exist - it's the Vite source file (do NOT delete it!)
- GitHub Actions workflow already configured correctly to deploy ./dist folder
- **THE FIX:** GitHub Pages settings → Source must be set to "GitHub Actions" NOT "Deploy from a branch"
- This is a GitHub repo settings issue, not a code issue

### Project Structure
- Vite + React 18 + Tailwind CSS
- Base path: `/PFA/` (for GitHub Pages mwilco03/PFA)
- Development: `npm run dev` → http://localhost:5173/PFA/
- Production: Build to dist/, deploy via GitHub Actions
