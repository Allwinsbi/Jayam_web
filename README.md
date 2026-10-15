# Construction 2 WordPress Theme Homepage Recreation

A professional, pixel-close responsive recreation of the **Construction 2 WordPress Theme** homepage built with React, Vite, and CSS3.

**Reference Website URL:** [https://xtratheme.com/elementor/construction-2/](https://xtratheme.com/elementor/construction-2/)

---

## 📸 Overview & Visual Accuracy

This project reproduces the full homepage layout of the reference WordPress Elementor theme from top to bottom, including:
1. **Top Bar**: Contact phone (`+1 (818) 23 45 678`) and social links (Facebook, Twitter, Instagram, LinkedIn).
2. **Main Header**: Logo, sticky header behavior on scroll, navigation menu with dropdowns, live popup keyword search with trending tags, and "Free Consultation" CTA.
3. **Mobile Drawer Navigation**: Slide-out responsive menu with social links and close trigger.
4. **Hero Slider (Revolution Slider Recreation)**:
   - **Slide 1**: Angled yellow skew shapes, title typography (`START NEW PROJECTS`), video modal trigger, and high-res worker model asset (`man-model.png`).
   - **Slide 2**: Construction site photo background with distinctive dual badges ("Committed to superior quality and results" / "We'll get it done, like us there are none").
   - Navigation controls (prev/next arrows & slide indicator dots).
5. **Features At A Glance**:
   - Central safety helmet icon.
   - 3 interactive 3D Flip Cards ("Building Engineering", "Safety First", "Road Construction") flipping to gold backings with content and buttons.
   - Section overlap into the next container matching the reference.
6. **About Our Company**:
   - Large watermark background number (`01`).
   - Slogan and 2-column checklist with gold check icons.
   - Offset yellow backdrop under the site photo.
7. **What We Can Do For You (Services)**:
   - Watermark number (`02`).
   - 3 service cards ("Building", "Road Construction", "Maintenance") with original icons (`s1.png`, `s2.png`, `s3.png`), hover color changes, and directional buttons.
8. **Process of Construction**:
   - Watermark number (`03`).
   - Heavy construction crane illustration with yellow border offset.
   - 3-step timeline (`Agency / Bidding`, `Construction`, `Project Execution`).
9. **We Are Professional (Projects Portfolio)**:
   - Watermark number (`04`).
   - Filter tabs (`All`, `Architecture`, `Building`, `Construction`, `Interior`, `Renovation`).
   - 8 portfolio items with hover zoom and lightbox modal preview.
10. **Interested in Construction? (Request a Free Quote)**:
    - Watermark number (`05`).
    - Two-column split layout: Left dark column with contact information & addresses; Right gold column with functional quote request form (Name, Email, Subject, Department, Message) and submission feedback.
11. **See What Says Our Happy Clients (Testimonials)**:
    - Watermark number (`06`).
    - Distinctive offset avatar cards with yellow block shadows (`team1.jpg`, `team2.jpg`, `team3.jpg`).
    - Carousel dots for switching between client reviews.
12. **Client Partners Bar**:
    - Floating gold banner with 5 authentic partner logos (`logo-1.png` - `logo-5.png`).
13. **Footer**:
    - Company summary, centered logo, social media icon buttons.
    - Sub-footer copyright notice and footer navigation links.
14. **Back To Top**:
    - Floating smooth scroll-to-top button appearing after scrolling down.

---

## 🛠️ Technologies Used

- **React 18** (Functional components, hooks `useState`, `useEffect`)
- **Vite 5** (Fast development and optimized production bundling)
- **HTML5 & Semantic Elements**
- **CSS3** (Flexbox, CSS Grid, 3D transforms, skew effects, CSS variables)
- **Google Fonts** (`Poppins`, `Roboto`, `Roboto Slab`)
- **Font Awesome 6** (Pixel-accurate icon rendering)
- **Lucide React** (Modern SVG icons support)

---

## 📂 Project Folder Structure

```
d:/Jayam/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── FeaturesGlance.jsx
│       ├── FeaturesGlance.css
│       ├── AboutSection.jsx
│       ├── AboutSection.css
│       ├── ServicesSection.jsx
│       ├── ServicesSection.css
│       ├── ProcessSection.jsx
│       ├── ProcessSection.css
│       ├── ProjectsSection.jsx
│       ├── ProjectsSection.css
│       ├── QuoteSection.jsx
│       ├── QuoteSection.css
│       ├── TestimonialsSection.jsx
│       ├── TestimonialsSection.css
│       ├── PartnersSection.jsx
│       ├── PartnersSection.css
│       ├── Footer.jsx
│       └── Footer.css
```

---

## 🚀 Prerequisites

- **Node.js**: v18.0.0 or higher (v24.x tested)
- **npm**: v9.0.0 or higher (v11.x tested)

---

## 💻 Installation & Running Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates production-ready static assets in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment:
   ```bash
   vercel
   ```
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploy to Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy command:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Push to GitHub
```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

---

## 🔍 Assumptions & Design Decisions

- **Original Visual Assets**: All distinctive original visual assets (logos, icons, models, project photos, and testimonial pictures) were retrieved directly from the public WordPress media library of the reference site.
- **Backend Services**: The quote form and newsletter forms handle frontend state validation and display interactive confirmation notices.

---

## 📱 Responsive Breakpoints Tested

- **Desktop (1440px / 1280px)**: Full multi-column grids, angled skew banners, hover transitions.
- **Laptop (1024px)**: 2/3 column layout adaptation, scaled typography.
- **Tablet (768px)**: Optimized 2-column project grids, stacked about section, mobile drawer toggle.
- **Mobile (390px / 360px)**: 1-column cards, full-width touch targets, hidden overflow, mobile header.
