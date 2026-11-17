# Nguyen Duy Cuong — Personal Portfolio

Personal developer portfolio showcasing my engineering focus, MERN & GenAI capabilities, and my main shipped full-stack project (**Kanflow — Real-Time Kanban & AI Workspace**).

- **Live Portfolio (GitHub Pages):** https://duycuongdev.github.io/portfolio/
- **CV (EN):** https://duycuongdev.github.io/curriculum-vitae/ — **PDF:** [NguyenDuyCuong-CV-EN.pdf](https://duycuongdev.github.io/curriculum-vitae/assets/NguyenDuyCuong-CV-EN.pdf) ([Repository](https://github.com/duycuongdev/curriculum-vitae))
- **CV (VI):** https://duycuongdev.github.io/curriculum-vitae/cv-vi.html — **PDF:** [NguyenDuyCuong-CV-VI.pdf](https://duycuongdev.github.io/curriculum-vitae/assets/NguyenDuyCuong-CV-VI.pdf)
- **GitHub:** https://github.com/duycuongdev

## Highlights

- **Bright, Clean UI:** Crisp light-theme palette (`#ffffff` / `#f8fafc`) with ocean-blue accents, readable typography (`Montserrat` & `Open Sans`), and subtle scroll animations (AOS).
- **Project Showcase (`Kanflow`):**
  - Interactive browser frame switcher inspecting 4 views (**Kanban Board**, **Card Modal**, **Dashboard**, **Landing Page**) with realistic seeded demo data.
  - **Real-time proof:** animated GIF of two independent windows staying in sync through the Socket.IO board room, plus a hand-authored **system architecture diagram** (`assets/img/trello/architecture-diagram.svg`).
  - **"Hard problems I had to solve"** section: resilient AI Copilot & multi-model fallback, silent JWT refresh queueing, Dual-Auth cookie fallback for Safari ITP, optimistic UI vs socket reconciliation, and transactional `cardOrderIds` consistency.
  - **Recruiter demo access:** instant login with test account `guest@duycuong.dev` / `Kanflow@2026` or the 1-click **"Try as Guest"** button on the login page.
  - Architectural breakdown covering React + `@dnd-kit` + Redux Toolkit + Kanflow Assistant frontend and Node.js + Express + Socket.IO + MongoDB + Google Gemini API + Dual-Auth + GitHub Actions backend.
  - Direct links to [Live Demo](https://trello-web-tawny.vercel.app), [Frontend Repo](https://github.com/duycuongdev/Trello_Web), and [Backend Repo](https://github.com/duycuongdev/Trello_Api).
  - Tech stack split honestly into **Proficient** (used in the shipped project, including React, Node.js, MongoDB, Socket.IO, Google Gemini API) and **Familiar** (TypeScript, Tailwind CSS).
- **Downloadable CV & Direct Contact:** 1-page CV in English & Vietnamese (pre-exported PDFs), plus email/phone/GitHub contact cards.

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions -> GitHub Pages deployment
├── assets/
│   ├── ico/logo.jpg                    # Browser favicon
│   └── img/
│       ├── avatar.jpg                  # Hero portrait photo
│       └── trello/                     # Project showcase screenshots
├── css/
│   ├── index.css                       # Stylesheet entry point
│   ├── variable.css                    # Design tokens (colors, fonts, spacing)
│   ├── general.css                     # Base reset, layout & typography
│   ├── header.css                      # Navbar & Hero section styles
│   ├── main-content.css                # About, Tech Stack, Project Gallery & Contact
│   └── responsive.css                  # Tablet & mobile breakpoints
├── js/
│   └── aos-init.js                     # AOS init, navbar scroll, mobile drawer & gallery tabs
├── index.html                          # Main portfolio page
└── README.md
```

## Run Locally

Open `index.html` directly in your browser (or via VS Code Live Server), or start a local static server:

```bash
# Using Python
python -m http.server 5501

# Or using Node.js
npx serve .
```

## Automated Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) to validate required assets and deploy the site to **GitHub Pages**.

> First-time GitHub setup: Open repository **Settings -> Pages -> Build and deployment -> Source**, and select **GitHub Actions**.
