# Reza Ghaleh Portfolio - React + Full-Stack Quiz Feature

This project rebuilds the original HTML/CSS/JavaScript portfolio into a modern React-based Next.js application and adds a backend-powered coding quiz with a leaderboard.

## Recommended stack

- **Frontend:** Next.js App Router (React + TypeScript)
- **Backend:** Next.js Route Handlers
- **Database:** PostgreSQL with Prisma ORM
- **Validation:** Zod
- **Deployment:** Vercel + Supabase/Neon Postgres

## Why this stack

- Keeps the portfolio and backend in one codebase
- Uses modern React while still being easy to explain in interviews
- Makes the quiz API feel like a real production feature instead of a toy add-on
- Prisma + PostgreSQL is recognizable and resume-friendly

## Folder structure

```text
portfolio-next-fullstack/
├── app/
│   ├── api/
│   │   └── quiz/
│   │       ├── leaderboard/route.ts
│   │       ├── questions/route.ts
│   │       └── submit/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Card.tsx
│   │   └── SectionHeading.tsx
│   ├── BackgroundEffects.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── sections/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── QuizSection.tsx
│       └── Skills.tsx
├── data/
│   ├── portfolio.ts
│   └── quiz.ts
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   └── validators.ts
├── prisma/
│   └── schema.prisma
├── public/
│   └── assets/
├── types/
│   └── index.ts
├── .env.example
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## What each part does

- `app/page.tsx`: assembles the page sections
- `app/layout.tsx`: root layout and metadata
- `app/globals.css`: global design system and responsive styling
- `components/sections/*`: reusable page sections
- `components/ui/*`: shared presentational building blocks
- `data/portfolio.ts`: original site content moved into structured React data
- `data/quiz.ts`: server-side quiz source of truth
- `app/api/quiz/questions/route.ts`: sends quiz questions to the client without correct answers
- `app/api/quiz/submit/route.ts`: validates nickname + answers, scores on the server, rate-limits duplicate spam, saves to DB, returns updated leaderboard
- `app/api/quiz/leaderboard/route.ts`: returns top scores from PostgreSQL
- `prisma/schema.prisma`: database schema for leaderboard storage
- `lib/prisma.ts`: Prisma client singleton
- `lib/validators.ts`: request validation rules with Zod
- `lib/utils.ts`: nickname cleanup, client IP lookup, and hashing helpers

## Local setup

1. Install dependencies

```bash
npm install
```

2. Create `.env` from `.env.example`

```bash
cp .env.example .env
```

3. Point `DATABASE_URL` to a PostgreSQL database.

Example local Postgres connection:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/reza_portfolio?schema=public"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

4. Generate Prisma client and push the schema

```bash
npx prisma generate
npx prisma db push
```

5. Start the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Deployment

### Vercel + Neon or Supabase

1. Push this project to GitHub
2. Import the repo into Vercel
3. Create a PostgreSQL database in Neon or Supabase
4. Add `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` to Vercel environment variables
5. Run `npx prisma db push` against the production database once
6. Redeploy

## Backend flow

1. Client fetches `/api/quiz/questions`
2. Server returns questions without revealing correct answers
3. User submits nickname + answers to `/api/quiz/submit`
4. Server validates payload with Zod
5. Server compares answers with the server-side quiz data
6. Server blocks rapid duplicate submissions from the same nickname + IP hash window
7. Server saves score to PostgreSQL
8. Server returns score details + fresh leaderboard
9. Client renders result and leaderboard instantly
