# YourTube — A YouTube Clone

A YouTube-inspired video platform UI built with Next.js, TypeScript, and Tailwind CSS. Built as a learning project to practice component architecture, dynamic routing, and state management in React.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Features

- **Homepage** — Responsive video grid (1–4 columns depending on screen size) with category filter chips (All, Coding, Music, Gaming)
- **Collapsible sidebar** — Animated slide open/close, grouped navigation links
- **Watch page** — Dynamic routing per video (`/watch/[id]`), like/dislike counters, comments section, related videos sidebar
- **Watch history page** — Filterable list view with a history management panel
- **Header** — Search bar, sign-in/avatar state toggle, sidebar control

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd yourtube
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn-generated components (button, input, avatar, etc.)
│   ├── Sidebar.tsx
│   ├── CategoryChips.tsx
│   ├── CommentSection.tsx
│   └── RelatedVideos.tsx
├── data/
│   ├── videos.ts         # Sample video data
│   └── comments.ts        # Sample comment data
├── pages/
│   ├── index.tsx           # Homepage
│   ├── history.tsx         # Watch history page
│   └── watch/
│       └── [id].tsx         # Dynamic video watch page
└── styles/
```

## Notes

This project uses static, hardcoded sample data rather than a live backend or database. There is no real authentication — the signed-in state is simulated. It was built primarily as a hands-on way to learn Next.js routing, component composition, and state management.

## Possible Next Steps

- Connect to a real backend/database instead of static data
- Add authentication (e.g., NextAuth.js)
- Make the search bar filter results
- Persist likes/history between sessions

## License

This project is for educational purposes.
