# PRODUCTION_READY.md — Edusphere Official Website

---

## 1. 🗂 Project Overview

**Edusphere Official** is a production-grade EdTech marketing website for an MSME-registered company (UDYAM-JH-11-0053233) based in Hazaribagh, Jharkhand, India.

### What It Does
- Showcases 70+ professional certification courses and corporate internship programs
- Provides academic coaching services information (Classes 6–12)
- Captures leads via EmailJS-powered forms and redirects to a Google Form for detailed registration
- Integrates WhatsApp direct chat and Google Maps

### Tech Stack
| Layer        | Technology                              |
|-------------|----------------------------------------|
| Framework   | React 18.3 + TypeScript                |
| Build       | Vite 6.3.5                             |
| Styling     | Tailwind CSS v4.1 (Vite plugin)        |
| Animation   | Motion (Framer Motion) 12.x            |
| Routing     | React Router v7.13 (browser router)    |
| Forms       | EmailJS (client-side email delivery)   |
| UI Library  | shadcn/ui + Radix UI primitives        |
| Icons       | Lucide React                           |

### Architecture
```
Static SPA (Single Page Application)
├── Client-side routing (createBrowserRouter)
├── No backend / no database
├── EmailJS for form submissions (client → email)
├── All data is hardcoded in component files
└── Deployed as static files (dist/)
```

---

## 2. ✅ Pre-Deployment Checklist

### Environment Variables

Create a `.env` file in the project root with:

| Variable                     | Description                         | Required |
|------------------------------|-------------------------------------|----------|
| `VITE_EMAILJS_SERVICE_ID`    | EmailJS email service identifier    | ✅ Yes   |
| `VITE_EMAILJS_TEMPLATE_ID`   | EmailJS template for lead capture   | ✅ Yes   |
| `VITE_EMAILJS_PUBLIC_KEY`    | EmailJS public API key              | ✅ Yes   |

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **ACTION REQUIRED:** Without these variables, all forms will fail silently. Set up an EmailJS account at https://www.emailjs.com/ and configure your email service + templates.

### Dependencies

```bash
pnpm install
```

- **Node.js**: v18+ required
- **Package Manager**: pnpm recommended (lockfile present), npm also works
- **React/React-DOM**: v18.3.1 (now in direct dependencies)

### Build Verification

```bash
pnpm build
```

Expected output: Optimized static files in `dist/` folder. Verify no TypeScript or Vite errors.

### Pre-Deploy Tasks

- [ ] Configure EmailJS credentials in `.env`
- [ ] Set up EmailJS templates (see `README.md` for template content)
- [ ] Create Google Form for detailed registration
- [ ] Add Google Form link to EmailJS templates
- [ ] Add actual images to `public/images/` (hero, founder portrait, team photos)
- [ ] Add `logo.png` to `public/images/`
- [ ] Test all forms (registration, contact, FAQ)
- [ ] Test on mobile devices
- [ ] Run production build and preview

---

## 3. 🚀 Deployment Instructions

### Local Development

```bash
pnpm install
pnpm dev
# → http://localhost:5173
```

### Production Build

```bash
pnpm build    # Creates dist/ folder
pnpm preview  # Test production build locally at http://localhost:4173
```

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository at https://vercel.com
3. Add environment variables in Vercel dashboard (`VITE_EMAILJS_*`)
4. Deploy — Vite is auto-detected

> **Important:** Add a `vercel.json` for SPA routing:
> ```json
> { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
> ```

### Netlify

1. Run `pnpm build`
2. Drag `dist/` folder to https://app.netlify.com/drop
3. Add `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```
4. Set environment variables in Netlify dashboard

### Any Static Host

Upload `dist/` folder contents. Configure all routes to return `index.html` (required for client-side routing).

---

## 4. 🔒 Security Checklist

### ✅ Implemented
- [x] No hardcoded API keys — all credentials use environment variables
- [x] `.env` and `.env.*` excluded from Git via `.gitignore`
- [x] External links use `rel="noopener noreferrer"` and `target="_blank"`
- [x] Form inputs have HTML5 validation (required, type, pattern)
- [x] No server-side code — no endpoint exposure risk
- [x] UDYAM registration number is public information (not sensitive)
- [x] `console.error` statements removed from production code

### ⚠️ Recommendations
- [ ] **Add CAPTCHA** to forms if spam becomes an issue (e.g., Google reCAPTCHA)
- [ ] **Enable rate limiting** on EmailJS account (free plan: 200 emails/month)
- [ ] **Add Content Security Policy (CSP)** headers on deployment platform
- [ ] **Enable HTTPS** on deployment (Vercel/Netlify provide this automatically)
- [ ] **Consider a cookie consent banner** if analytics are added (GDPR/DPDPA compliance)
- [ ] **Regularly update dependencies** — run `pnpm update` periodically

---

## 5. 🐛 Known Issues & Fixes Applied

| # | File | Issue | Fix |
|---|------|-------|-----|
| 1 | `index.html` | Favicon path `./public/images/logo.png` broken in production (Vite serves `public/` at root) | Changed to `/images/logo.png` |
| 2 | `index.html` | Missing `<meta name="description">` — hurts SEO | Added descriptive meta tag |
| 3 | `.gitignore` | Missing `dist/` — build output could be committed | Added `dist/` and `.env.*` |
| 4 | `package.json` | Project named `@figma/my-make-file` (auto-generated) | Renamed to `edusphere-official` |
| 5 | `package.json` | `react`/`react-dom` in peerDependencies — won't auto-install | Moved to dependencies |
| 6 | `LeadCaptureForm.tsx` | Unsafe `(import.meta as any)` type cast | Used `import.meta.env` directly (typed in `vite-env.d.ts`) |
| 7 | `LeadCaptureForm.tsx` | `console.error` left in production code | Removed (error shown in UI) |
| 8 | `ContactPage.tsx` | Unsafe `(import.meta as any)` type cast | Used `import.meta.env` directly |
| 9 | `ContactPage.tsx` | `console.error` left in production code | Removed |
| 10 | `ContactPage.tsx` | Missing `emailjs.init()` — contact form would fail silently | Added initialization with public key from env |
| 11 | `ImageWithFallback.tsx` | Unused `React` import (not needed with `react-jsx` transform) | Removed; used named `ImgHTMLAttributes` import |
| 12 | `RegisterPage.tsx` | Typo: "Certified Cources" | Fixed to "Certified Courses" |
| 13 | `CourseDetailPage.tsx` | `Record<string, any>` — weakly typed course data | Created proper `CourseDetail` + `CurriculumModule` interfaces |
| 14 | `Header.tsx` | Redundant ternary always returning `bg-white` | Simplified: `bg-white` always, `shadow-md` on scroll |
| 15 | `HomePage.tsx` | Unused `TrendingUp` import | Removed |
| 16 | `AboutPage.tsx` | Unused `TrendingUp`, `Users` imports | Removed |
| 17 | `custom.css` | 36 lines of dead `.testimonials-slider` CSS + slick-carousel imports (no slider component exists) | Removed |
| 18 | `postcss.config.mjs` | Empty PostCSS config unnecessary with Tailwind v4 Vite plugin | Deleted |
| 19 | `README.md` | References to nonexistent files (`IMAGE-GUIDE.md`, `SETUP-LOCAL.md`, `TestimonialsSlider.tsx`, `SuccessStoriesPage.tsx`) | Cleaned up and updated project structure |

---

## 6. ⚠️ Remaining Warnings / Technical Debt

### ⚠️ ACTION REQUIRED: EmailJS Configuration
The forms use env var fallbacks of `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, `'YOUR_PUBLIC_KEY'`. These **must** be replaced with real EmailJS credentials in a `.env` file before deployment.

### ⚠️ ACTION REQUIRED: Missing Images
The following images are referenced but may not exist in `public/images/`:
- `hero-students-learning.jpg` — Home page hero
- `about-team-collaboration.png` — About page
- `about-founder-portrait.png` — About page founder section
- `logo.png` — Header, footer, favicon

The `ImageWithFallback` component gracefully handles missing images, but real images should be added.

### ⚠️ ACTION REQUIRED: Advisory Committee Placeholder Data
`AdvisoryCommitteePage.tsx` contains placeholder email (`placeholder@example.com`) and LinkedIn (`https://linkedin.com`) links for committee members. These should be updated with real contact information or removed.

### Technical Debt (Non-Blocking)
- **50+ unused shadcn/ui components** — These are kept as a design library for future use. Consider removing if bundle size becomes a concern (they are tree-shaken by Vite).
- **Unused npm packages** — `react-slick`, `slick-carousel`, `react-dnd`, `react-dnd-html5-backend`, `react-responsive-masonry`, `react-popper`, `@popperjs/core`, `@emotion/react`, `@emotion/styled`, `@mui/material`, `@mui/icons-material`, `next-themes` are installed but not imported in any source file. Consider removing to reduce `node_modules` size.
- **Empty `fonts.css`** — Placeholder for custom fonts. Add Google Fonts or remove if using system fonts.
- **Course detail pages** — Only 3 of 9 courses (`cybersecurity`, `data-analytics`, `financial-analysis`) have detail pages. Clicking other courses shows "Course Not Found".
- **Dark mode theme** — `theme.css` defines `.dark` variables but no theme toggle exists in the app.
- **Copyright year** — Footer shows `© 2025`. Consider making this dynamic.

---

## 7. 📊 Performance Notes

### Optimizations In Place
- **Vite** — Lightning-fast HMR and optimized production builds with code splitting
- **Motion `whileInView`** — Animations only trigger when elements enter viewport (with `once: true`)
- **Lazy Google Maps iframe** — Uses `loading="lazy"` attribute
- **SVG icons** — Lucide React provides tree-shakeable SVG icons (no icon font)
- **Tailwind v4 Vite plugin** — CSS is processed at build time, not runtime

### Recommendations
- [ ] **Add `React.lazy` + `Suspense`** for route-level code splitting (currently all pages are eagerly imported in `routes.tsx`)
- [ ] **Optimize images** — Compress and convert to WebP format before adding to `public/images/`
- [ ] **Add preconnect** — `<link rel="preconnect" href="https://fonts.googleapis.com">` if Google Fonts are added
- [ ] **Remove unused npm packages** (listed in Technical Debt) to speed up installs
- [ ] **Consider preloading** critical above-the-fold resources

---

## 8. 🧪 Testing Instructions

### No Automated Tests
This project currently has **no test framework or test files**. The codebase is a marketing website with static content and simple form submission — manual testing is appropriate for the current scope.

### Manual Testing Checklist

```bash
# Start development server
pnpm dev
```

#### Navigation & Routing
- [ ] All header navigation links work (Home, About, Advisory Committee, Services dropdown, Courses, Contact, Register Now)
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Services dropdown works on desktop (hover) and mobile (click)
- [ ] Footer links navigate correctly
- [ ] 404 page displays for invalid URLs
- [ ] "Go Back" button on 404 page works
- [ ] ScrollToTop restores scroll position on page changes

#### Forms
- [ ] Registration form (Register page) submits successfully and shows success message
- [ ] Contact form submits and shows success message
- [ ] FAQ form submits correctly
- [ ] Form validation works (required fields, email format, phone pattern)
- [ ] Error messages display when submission fails
- [ ] Forms on service pages and course detail pages work

#### Interactive Elements
- [ ] FAQ accordion expands/collapses correctly
- [ ] FAQ search filters questions in real-time
- [ ] Course filtering by category works
- [ ] Course search works
- [ ] Floating CTA button appears after scrolling 300px
- [ ] WhatsApp button appears after scrolling and links correctly
- [ ] Course detail pages load for valid course slugs

#### Responsive Design
- [ ] Test at 320px, 768px, 1024px, 1440px widths
- [ ] Header collapses to hamburger menu on mobile
- [ ] All grids stack properly on mobile
- [ ] Google Maps embed is responsive
- [ ] Images scale correctly

#### Production Build
```bash
pnpm build
pnpm preview
# Verify at http://localhost:4173
```
- [ ] No console errors
- [ ] All pages load correctly
- [ ] No broken assets or 404s for static files

---

*Report generated: March 24, 2026*
*Audited by: Automated codebase analysis*
