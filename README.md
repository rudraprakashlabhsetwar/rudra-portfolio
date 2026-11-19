# Rudra Labhasetwar — Personal Portfolio Website

A modern, high-performance, responsive personal portfolio website crafted for **Rudra Labhasetwar** (`@0xRudrax`), positioning him as a **Web3 Business Development Professional** specializing in ecosystem growth, strategic partnerships, community onboarding, and blockchain adoption.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ⚡ Live Preview & Core Highlights

- **Aesthetic**: Premium Web3 dark-mode design with deep charcoal/black canvas (`#08080a`), subtle ambient radial glows, and electric violet/blue accents.
- **Authentic Visuals**: Integrated high-resolution photo from **Devcon VIII (Southeast Asia)** demonstrating real on-ground builder presence.
- **Recruiter Ready**: Embedded interactive Resume Modal with instant PDF viewer and single-click download of the official resume (`Rudra_Labhasetwar_Resume.pdf`).
- **Interactive Contact Hub**: One-click email copy, direct phone/WhatsApp trigger, pre-configured inquiry form with confetti reward, and direct social channel links (X, Telegram, LinkedIn, GitHub).
- **Data-Driven & Extensible**: All portfolio data is centralized in `src/data/portfolioData.ts` for instant updates.

---

## 🧭 Website Sections

1. **Header & Navigation**: Fixed glassmorphism navbar with live status beacon (*"Open for Web3 BD & Ecosystem Roles"*), navigation links, and direct resume/contact triggers.
2. **Hero Section**: Impactful personal headline, Web3 BD value proposition, quick conference/role credentials, social channel buttons, and Devcon VIII spotlight photo card.
3. **About Me**: Narrative highlighting Rudra's unique advantage bridging a rigorous **Computer Engineering** background with high-touch relationship building and ecosystem advocacy.
4. **Professional Experience**:
   - **Cryptonix** (2025 - Present) — *Social Media Lead*
   - **TokenScape** (Jan 2025 - Mar 2025) — *Ambassador*
   - **VidarbhaDAO** (2025 - Present) — *Member & Strategic Partnerships*
5. **Skills & Toolkit**:
   - *Core Web3 BD*: Business Development, Strategic Partnerships, Web3 Ecosystem Growth, Outreach & Networking.
   - *Community & Marketing*: Community Management, Social Media Marketing, Event Management, Technical Writing.
   - *Leadership & Analytics*: Leadership, Analytics & Insights, Digital Marketing, Problem Solving & Innovation, Collaboration, Communication.
6. **Projects & Initiatives**:
   - *VidarbhaDAO Regional Partnership Network*
   - *Cryptonix Multi-Platform Social Growth Engine*
   - *TokenScape Ambassador Outreach & User Intelligence Loop*
   - *Web3 Conference Operations & Field Coordination*
7. **Event Representation & Conferences**:
   - **Devcon 8 (Devcon VIII)** — Southeast Asia (Volunteer & Ecosystem Participant)
   - **ETH Mumbai** — Mumbai (Volunteer)
   - **India Blockchain Week (IBW 2025)** — Representative
   - **India Blockchain Week (IBW 2026)** — Representative
8. **Education**:
   - **Bajaj Institute of Technology** — B.Tech in Computer Engineering (2023 - Present, 3rd Year).
9. **Achievements & Activities**:
   - Recognition from the Ethereum Foundation (Devcon 8), ETH Mumbai, TokenScape, and VidarbhaDAO.
10. **Contact & Collaboration**: Direct contact details, interactive role inquiry generator, and one-click copy buttons.
11. **Footer**: Clean branding, quick jump links, and smooth back-to-top navigation.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Platform**: Optimized for [Vercel](https://vercel.com/)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/0xRudrax/rudra-portfolio.git
cd rudra-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 5. Preview production build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This repository includes a pre-configured `vercel.json` file. To deploy:

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your repository to your GitHub account (`github.com/0xRudrax/rudra-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live in seconds!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📁 Project Structure

```
rudra-portfolio/
├── public/
│   ├── favicon.svg                   # Custom Web3 geometric favicon
│   ├── rudra-devcon.jpg              # Rudra's authentic photo at Devcon VIII
│   └── Rudra_Labhasetwar_Resume.pdf  # Downloadable original resume PDF
├── src/
│   ├── components/
│   │   ├── About.tsx                 # About section & core BD pillars
│   │   ├── Achievements.tsx          # Key recognitions & awards
│   │   ├── BackgroundMesh.tsx        # Ambient radial glow & subtle grid
│   │   ├── Contact.tsx               # Contact channels & interactive form
│   │   ├── Education.tsx             # Academic background (BIT Computer Eng.)
│   │   ├── Events.tsx                # Devcon 8, ETH Mumbai, IBW events
│   │   ├── Experience.tsx            # Cryptonix, TokenScape, VidarbhaDAO
│   │   ├── Footer.tsx                # Clean footer & back-to-top
│   │   ├── Hero.tsx                  # Hero section with headline & CTAs
│   │   ├── Navbar.tsx                # Sticky navbar with mobile drawer
│   │   ├── Projects.tsx              # Projects & ecosystem initiatives
│   │   ├── ResumeModal.tsx           # Full-screen resume modal with viewer
│   │   └── Skills.tsx                # Filterable skills matrix
│   ├── data/
│   │   └── portfolioData.ts          # Central source of truth for all data
│   ├── types.ts                      # TypeScript definitions
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Tailwind v4 setup & typography
│   └── main.tsx                      # Vite React entrypoint
├── index.html                        # SEO, OpenGraph & Twitter metadata
├── package.json
├── tsconfig.json
├── vercel.json                       # Vercel routing & caching rules
└── README.md
```

---

## 🔒 Security & Privacy

- No private API keys or sensitive credentials are required or exposed.
- All contact information reflects public professional details provided in Rudra's resume.

---

## 📄 License

MIT © Rudra Labhasetwar
