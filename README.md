# Guy Hassan Portfolio 2026 🚀

A clean, modern personal portfolio built with React and Vite. It highlights key sections:
- 🧩 Projects (with details and links)
- 👤 About (personal introduction and goals)
- �� Skills (technical abilities)
- 📆 Timeline (experience and milestones)
- ✉️ Contact (easy connection methods)

## Main technologies ⚙️
- React 18
- Vite
- styled-components
- framer-motion
- react-scroll
- Font Awesome

## Run locally 🖥️
1. `npm install`
2. `npm run dev`
3. open `http://localhost:5173`

## Deploy to GitHub Pages
1. `npm run deploy`
2. Visit: `https://guy-hassan-portfolio.vercel.app`

## Scripts 🛠️
- `npm run dev` - development server
- `npm run build` - production build
- `npm run preview` - preview the build
- `npm run lint` - code linting
- `npm run deploy` - deploy to GitHub Pages

## Why this project is cool ✨
- Smooth transitions and animations.
- Dark/light theme toggle.
- One-page navigation with anchors.
- Easy to extend with new sections or projects.

## Customization 🎨
- Change color themes in `src/styles/themes.js`
- Add or update project entries in `src/data/index.js`
- Update section behavior in `src/components/sections/*`

## Project structure 🗂️
```
src/
├── components/
│   ├── layout/
│   │   └── Navbar/
│   ├── sections/
   │   ├── About/
   │   ├── Contact/
   │   ├── Hero/
   │   ├── Personal/
   │   ├── Projects/
   │   ├── Skills/
   │   └── Timeline/
   └── ui/
       ├── Button/
       ├── Cursor/
       └── ThemeSwitcher/
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── index.js
├── styles/
│   ├── GlobalStyles.js
   ├── theme.js
   └── themes.js
└── assets/
    └── images/
```
