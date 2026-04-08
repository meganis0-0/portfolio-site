# Portfolio

Personal portfolio site built with React + Vite + Tailwind CSS. Bilingual (EN / RU). Deployable to GitHub Pages.

## Quick Start

```bash
npm install
npm run dev
```

## Customization

All content lives in two files — no code changes needed for most edits:

- `src/locales/en.json` — English text (name, bio, projects, research, education, etc.)
- `src/locales/ru.json` — Russian text (same structure)

Update both files with your real information.

### Adding your photo

Replace the emoji placeholder in `src/components/About.jsx` with an `<img>` tag pointing to your photo:

```jsx
<img src="/portfolio/photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```

Place the image in `public/photo.jpg`.

### Adding your CV

Place your PDF resume as `public/cv.pdf`. The "Download CV" button in the navbar will link to it automatically.

### Changing the repo/base path

In `vite.config.js`, update the `REPO_NAME` constant to match your GitHub repository name:

```js
const REPO_NAME = '/your-repo-name/'
```

Also update `index.html` favicon path if needed.

## Deploy to GitHub Pages

### Automated (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

### Manual

```bash
npm run build
# Then push the dist/ folder to your gh-pages branch
```

## Project Structure

```
src/
├── locales/         # EN + RU translation files (edit these!)
├── components/      # One file per section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Research.jsx
│   ├── Education.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── icons.jsx    # Custom SVG icons (GitHub, LinkedIn, Telegram)
├── i18n.js          # Language config
├── App.jsx
└── main.jsx
public/
├── cv.pdf           # Your resume (replace placeholder)
└── favicon.svg
```
