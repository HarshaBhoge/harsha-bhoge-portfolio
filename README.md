# Personal Portfolio

A static, responsive portfolio website (HTML, CSS, vanilla JavaScript). No build step or dependencies.

## Project structure

```
portfolio/
├── index.html              # Page markup and all content sections
├── css/
│   └── style.css           # All styles, colors and responsive rules
├── js/
│   └── main.js             # Project data, filter/search, contact form
├── assets/
│   ├── images/
│   │   └── hero.jpg        # Hero/header photo
│   └── resume/
│       └── resume.pdf      # <-- put your resume here (same file name)
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Customize

| What | Where |
|---|---|
| Name, role, bio, stats, skills, journey, blog, contact info | `index.html` |
| Projects (title, category, description, tech, gradient) | `P` array in `js/main.js` |
| Colors and fonts | `:root` and `html[data-theme=light]` in `css/style.css` |
| Hero photo | replace `assets/images/hero.jpg` (keep a light background, subject on the right) |
| Resume download | add `assets/resume/resume.pdf` |
| Social links | search `href="#"` in `index.html` and replace with your URLs |
| Email for the contact form | search `you@example.com` in `index.html` and `js/main.js` |

## Deploy

Upload the folder to any static host: GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
