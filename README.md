# UniViolet — Academic Intelligence Hub

A React.js application with a Royal Violet design system for university academic management.

## Features
- Role-based auth (Student / Professor / Guest)
- Unified Event Calendar with multi-layer filters
- Shift-Ready Prospectus Simulator
- Subject Difficulty Radar Charts + Sentiment Bars
- Professor Directory & Rate My Professor (internal)
- Professor Portal with full anonymization layer

## Setup

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```
frontend/src/
├── components/
│   ├── Calendar/     # MiniCalendar, EventFilters
│   ├── Charts/       # DifficultyRadar (Recharts)
│   ├── Prospectus/   # SubjectCard
│   └── Shared/       # Layout, Topbar, GlassCard, etc.
├── features/
│   ├── auth/         # AuthContext (role-based)
│   ├── feedback/     # anonymize.js (privacy layer)
│   └── simulator/    # shiftEngine.js (credit calculation)
├── data/
│   ├── mockProspectus.json
│   ├── mockEvents.js
│   └── mockInsights.js
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── CalendarPage.jsx
│   ├── ProspectusExplorer.jsx
│   ├── InsightsPage.jsx
│   └── ProfessorPortal.jsx
├── App.jsx
└── main.jsx
```

## Design System: Royal Violet Modern
- `#4B0082` Imperial Purple — Sidebars & Headers
- `#7851A9` Royal Violet — Buttons & Highlights
- `#F3E8FF` Lavender Mist — Backgrounds & Card hovers
- Glassmorphic cards with `backdrop-filter: blur(12px)`
- Fonts: Playfair Display (headings) + DM Sans (body)

## Connecting a Backend
Replace mock data files in `/src/data/` with API calls.
Suggested stack: FastAPI (Python) or Express (Node.js) + PostgreSQL.
Auth: swap `AuthContext` with JWT-based token flow.
