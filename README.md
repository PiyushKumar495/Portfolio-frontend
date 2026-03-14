# ✨ Portfolio Frontend

> A sleek, animated, and fully dynamic **developer portfolio** built with **Next.js 14**, **Three.js**, and **Framer Motion** — powered by a REST API backend.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| ⚛️ Framework | Next.js 14 (App Router) |
| 🎨 Styling | Tailwind CSS |
| 🌀 Animations | Framer Motion + GSAP |
| 🌐 3D Graphics | Three.js + React Three Fiber |
| 🔗 HTTP Client | Axios |
| 🧩 Icons | Lucide React + React Icons |
| 🐳 Container | Docker |
| 🟦 Language | TypeScript |

---

## 📁 Project Structure

```
├── app/                  # Next.js App Router (layout, page, globals)
├── components/
│   ├── 3d/               # Three.js 3D scenes
│   ├── modals/           # Project & Skill detail modals
│   └── *.tsx             # Page sections (Hero, Projects, Skills, etc.)
├── lib/
│   └── api.ts            # Axios API client
├── types/
│   └── index.ts          # TypeScript interfaces
└── public/               # Static assets & resume
```

---

## 🖼️ Sections

- 🦸 **Hero** — Animated intro with 3D floating spheres
- 💼 **Experience** — Work history timeline
- 🛠️ **Projects** — Featured projects with detail modals
- 🧠 **Skills** — Skill cards with category breakdown
- 🏆 **Achievements** — Notable accomplishments
- 📜 **Certifications** — Professional certifications
- 🎓 **Education** — Academic background
- 📬 **Contact** — Contact form connected to the API

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v20+`
- A running backend API (default: `http://localhost:5089`)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio/frontend/Portfolio-frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and set your API URL
```

### Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5089
```

### Run Locally

```bash
npm run dev
# App runs on http://localhost:3001
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 🐳 Docker

```bash
# Build the image
docker build -t portfolio-frontend .

# Run the container
docker run -p 3000:3000 -e NEXT_PUBLIC_API_BASE_URL=http://your-api-url portfolio-frontend
```

---

## 🔌 API Integration

All data is fetched dynamically from a REST backend via `lib/api.ts`:

| Endpoint | Description |
|---|---|
| `GET /api/profile` | Personal profile info |
| `GET /api/experience` | Work experience |
| `GET /api/projects` | Projects (paginated, filterable) |
| `GET /api/skills` | Skills list |
| `GET /api/achievements` | Achievements |
| `GET /api/certifications` | Certifications |
| `GET /api/education` | Education history |
| `POST /api/contact` | Send a contact message |

---

## 📜 Scripts

```bash
npm run dev      # Start dev server on port 3001
npm run build    # Build for production
npm run start    # Start production server on port 3001
npm run lint     # Run ESLint
```

---

## 📄 License

MIT © [Your Name](https://github.com/your-username)

---

<p align="center">Made with ❤️ and way too much ☕</p>
