# AGENTS.md — KiraQuest AI

## 1. Project Overview

KiraQuest AI is a Malaysian primary school Mathematics (KSSR) web application for **Darjah 5 & 6** students. Its core differentiator is a deterministic TypeScript math engine paired with a 3-tier Gemini AI tutor that guides students step-by-step without immediately revealing the final answer, plus an on-screen scratchpad and weekly parent email reports.

- **UI & educational content language:** Bahasa Melayu (official KSSR Mathematics terminology, e.g., *pecahan wajar*, *nombor bercampur*, *bentuk lazim*, *model bar*).
- **Code, comments, commit messages, and technical docs:** English.

### Current State

#### ✅ Done (scaffolded by Hackhaton-Space-Stack)
- Turborepo monorepo with 7 workspaces
- Better Auth (email + Google) configured in `packages/auth`
- Prisma + Neon adapter wired in `packages/db`
- tRPC + TanStack Query set up in `packages/api` + `apps/web`
- Shadcn UI shared component library in `packages/ui`
- Email SDK + Resend adapter in `packages/email`
- Files SDK + R2 adapter in `packages/storage`
- Autumn payments plugin (pinned to `~1.5.x`, see § 2 notes)
- evlog request logging
- Ultracite linting/formatting (v8)
- Lefthook git hooks

#### 🔲 Not Started
- Math engine (`apps/web/src/lib/math-engine/`)
- AI tutor — `@google/genai` not yet installed, no Gemini API key in env
- Landing page & waitlist (`WaitlistLead` model not yet in schema)
- Practice screen & scratchpad canvas
- Gamification (stars, streaks, badges, progress map)
- Parent/teacher dashboards & child profiles
- Weekly email progress reports
- Remove scaffolded dark-mode components (`mode-toggle.tsx`, `theme-provider.tsx`) — project is light-mode only

### Strict MVP Scope (Weeks 1–6)

Build ONLY these features during MVP:
1. Landing page + waitlist form (`WaitlistLead` model, Weeks 1–2 validation gate).
2. Deterministic question engine (`apps/web/src/lib/math-engine/`) covering **2 topics** (*Pecahan, Perpuluhan & Peratus* — 1 Darjah 5 topic, 1 Darjah 6 topic, ~25 templates per topic).
3. 3-tier Gemini AI hint tutor with Postgres caching, daily quota enforcement, and MYR cost logging.
4. Mobile-first practice screen with an on-screen HTML5 `<canvas>` scratchpad.
5. Lightweight gamification: stars, daily streaks, badges, and a simple progress map (Tailwind + Framer Motion).
6. Parent account auth, nickname-only child profiles, and weekly email progress reports.
7. Free teacher class codes (up to 45 students/class) and a basic class dashboard (completion + weak topics).
8. Malaysian FPX/card payment integration (deferred until Week 6).

### Out of Scope — DO NOT BUILD (Deferred to Phase 2)

Do NOT scaffold, suggest, or install dependencies for:
- Rive animations, custom avatars, or binary file uploads
- Speed Mode, full UASA exam simulations, PBD TP exports, or PKSK prep modules
- Full BM/BI (DLP) language toggle
- RAG / vector search pipelines (use curated static Topic Cards until >6 topics exist)
- WhatsApp reports, Family Plan (multi-child tier), or Darjah 1–4 content
- Stripe/Autumn recurring billing upgrade (keep `autumn-js@~1.5.x` until Phase 2 migration)
- Durable AI agents (Eve) — use stateless Gemini calls only

---

## 2. Tech Stack & Approved Tooling

### Core Application Stack (Active for MVP)
- **Runtime & Package Manager:** `bun` (never use `npm`, `yarn`, or `pnpm`)
- **Framework:** **Next.js** (App Router) + TypeScript (`strict: true`)
- **Monorepo:** **Turborepo** — the project is a monorepo with workspaces under `apps/` and `packages/`
- **Design System & Styling:** **Shadcn UI** (`https://ui.shadcn.com/`) + Tailwind CSS + Framer Motion (lightweight transitions only)
- **Database & ORM:** PostgreSQL (Neon) + Prisma 7 (pinned to `~7.10.x` — do NOT upgrade to Prisma 8)
- **Auth:** Better Auth (Email + Google login for parents and teachers only)
- **API Layer:** tRPC (end-to-end type-safe APIs) + TanStack Query
- **Transactional Email:** **Email SDK** (`@opencoredev/email-sdk`) configured with Resend adapter in `packages/email`
- **File Storage:** **Files SDK** (`files-sdk`) configured with R2 adapter in `packages/storage` — MVP scratchpad drawings are NOT saved to storage
- **Payments:** `autumn-js@~1.5.x` — pinned to 1.5.x because the `autumn-js/better-auth` plugin was removed in 1.6+
- **AI Model:** Google Gemini API (`@google/genai`) — stateless request/response calls only (dependency to be installed when building the AI tutor)
- **Linter & Formatter:** **Ultracite** (`https://www.ultracite.ai/`) v8 — zero-config code formatting & linting preset
- **Env Management:** **Varlock** — env schemas in `.env.schema`, generated `env.ts` accessors

### Standard Commands
```bash
bun install                 # Install dependencies
bun dev                     # Run all apps in dev mode (turbo)
bun run dev:web             # Run only the web app
bun run build               # Build all apps (turbo)
bun run check-types         # TypeScript check across all packages
bun run check               # Lint/format check (Ultracite)
bun run fix                 # Auto-fix lint/formatting (Ultracite)
bun run db:push             # Push Prisma schema changes to Neon
bun run db:generate         # Regenerate Prisma client
bun run db:migrate          # Run Prisma migrations
bun run db:studio           # Open Prisma Studio
bun run env:generate        # Regenerate Varlock env types
bun test                    # Run unit tests (TODO: set up test runner)
```

### Adding Shadcn Components
```bash
# Shared primitives (from project root):
bunx shadcn@latest add accordion dialog -c packages/ui

# App-specific blocks (from apps/web):
cd apps/web && bunx shadcn@latest add login-01
```

---

## 3. Monorepo Architecture

### Dependency Graph

```
apps/web ──→ packages/api ──→ packages/db
         │                 ╰→ packages/auth ──→ packages/db
         ├→ packages/auth
         ├→ packages/db
         ├→ packages/email
         ├→ packages/storage
         ╰→ packages/ui (shared Shadcn components)
```

### Where to Put Code

| What | Where | Import as |
|---|---|---|
| Prisma schema files | `packages/db/prisma/schema/*.prisma` | — |
| Database client & queries | `packages/db/src/` | `@kiraquest/db` |
| Auth configuration | `packages/auth/src/` | `@kiraquest/auth` |
| tRPC routers & procedures | `packages/api/src/` | `@kiraquest/api` |
| Shared UI components | `packages/ui/src/components/` | `@kiraquest/ui/components/button` |
| Shared styles | `packages/ui/src/styles/globals.css` | `@kiraquest/ui/globals.css` |
| Email templates & sender | `packages/email/src/` | `@kiraquest/email` |
| Storage utilities | `packages/storage/src/` | `@kiraquest/storage` |
| App pages & routes | `apps/web/src/app/` | — |
| App-specific components | `apps/web/src/components/` | — |
| App-specific libs | `apps/web/src/lib/` | — |
| Math engine (MVP) | `apps/web/src/lib/math-engine/` | — |
| AI tutor (MVP) | `apps/web/src/lib/ai-tutor/` | — |
| Topic cards (MVP) | `apps/web/src/lib/topic-cards/` | — |

### Service Wiring

All singleton services (database, auth, email, storage) are created in [`apps/web/src/services.ts`](file:///c:/Users/User/Music/kiraquest/apps/web/src/services.ts). tRPC context is created in [`apps/web/src/context.ts`](file:///c:/Users/User/Music/kiraquest/apps/web/src/context.ts).

### Env Configuration

Each workspace has its own `.env.schema`. Varlock generates typed `env.ts` accessors. After changing any schema, run `bun run env:generate`. Shared packages receive config via function arguments, not by reading env directly (except `packages/db` which reads `DATABASE_URL`).

### Folder Structure

```text
kiraquest/
├── apps/
│   └── web/                    # Next.js App Router application
│       └── src/
│           ├── app/
│           │   ├── (marketing)/        # Landing page, pricing, waitlist (TODO)
│           │   ├── (auth)/             # Better Auth login/signup (TODO: rename auth/)
│           │   ├── (app)/              # Parent dashboard, practice view, teacher dashboard (TODO)
│           │   ├── api/auth/           # Better Auth API handler
│           │   ├── api/trpc/           # tRPC API handler
│           │   └── dashboard/          # Scaffolded dashboard (to be reorganized)
│           ├── components/
│           │   ├── practice/           # QuestionCard, ScratchpadCanvas, HintDrawer (TODO)
│           │   └── gamification/       # Stars, streak counter, badges, progress map (TODO)
│           ├── lib/
│           │   ├── math-engine/        # Pure TS question generators & graders (TODO)
│           │   ├── topic-cards/        # Curated KSSR DSKP notes & BM terms (TODO)
│           │   ├── ai-tutor/           # Gemini client, prompt builder, cache, quota (TODO)
│           │   ├── auth-client.ts      # Better Auth client
│           │   └── evlog*.ts           # Logging utilities
│           └── utils/
│               └── trpc.ts             # tRPC client utilities
├── packages/
│   ├── api/                    # tRPC routers & business logic
│   ├── auth/                   # Better Auth server config
│   ├── config/                 # Shared TypeScript config
│   ├── db/                     # Prisma schema, migrations, client
│   │   └── prisma/
│   │       ├── schema/         # Multi-file Prisma schema
│   │       ├── migrations/
│   │       └── generated/      # Generated Prisma client (gitignored)
│   ├── email/                  # Email SDK + Resend
│   ├── storage/                # Files SDK + R2
│   └── ui/                     # Shared Shadcn UI components
├── turbo.json                  # Turborepo task config
├── package.json                # Root workspace catalog & scripts
└── hss.jsonc                   # Hackhaton-Space-Stack metadata
```

---

## 4. Core Architecture Invariants (Non-Negotiable)

### A. Deterministic Math Engine (`apps/web/src/lib/math-engine/`)

* **AI NEVER calculates answers or grades student submissions.**
* Every question template is a pure TypeScript module returning:
  `{ templateId, grade, topic, promptBm, correctAnswer, acceptedFormats, referenceSteps[], errorPatterns[] }`.
* Keep **one file per topic** (e.g., `d5-pecahan.ts`, `d6-peratus.ts`) to keep agent context small.
* Every template MUST have unit tests in `apps/web/src/lib/math-engine/__tests__/` covering answer accuracy and edge cases (zero denominators, rounding, equivalent fractions). Run `bun test` after every math engine change.
* Write original questions aligned with DSKP learning standards. Never copy copyrighted textbook or exam paper content.

### B. Hybrid AI Tutor (`apps/web/src/lib/ai-tutor/`)

* Gemini ONLY explains mistakes using the engine's `referenceSteps[]` and static curated KSSR Topic Cards (`apps/web/src/lib/topic-cards/`).
* **3-Tier Hint Progression:**
  * Level 1: *Galakan* (encouragement + concept cue without giving steps)
  * Level 2: *Langkah* (step-by-step guidance at the mistake point using KSSR method)
  * Level 3: *Contoh Serupa* (worked parallel example with different numbers; never directly leak the exact final answer)
* **Output Guardrail:** Validate AI output before displaying so it does not contradict `correctAnswer` or leak the answer on Levels 1–2.
* **Caching & Cost Control:**
  * Look up Postgres `HintCache` by `(templateId, errorType, hintLevel)` BEFORE calling Gemini.
  * Enforce daily quotas before calling Gemini: **Free = 3 hints/day**, **Premium = 30 hints/day**, **Cikgu Pro = 300 hints/day/class**.
  * Log token usage and estimated MYR cost per call in `AiUsageLog`.

### C. Child Privacy & PDPA Compliance

* Children DO NOT have personal login accounts, emails, or passwords.
* `ChildProfile` stores ONLY: `id`, `parentId`, `nickname`, `grade` (`5 | 6`), `classroomId` (optional), and learning stats.
* NEVER collect IC/MyKad numbers, full legal names, child emails, phone numbers, home addresses, or child photos.
* Require explicit parent consent checkbox during signup.

---

## 5. UI / UX & Styling Rules

* **Single-Theme Light Mode ONLY:** Enforce uniform light styling across all devices.
  * NEVER use Tailwind `dark:` classes.
  * NEVER include `.dark { ... }` variable blocks or `@media (prefers-color-scheme: dark)` in `globals.css`.
  * When adding components via **Shadcn UI**, strip any generated `dark:` utility classes.
  * Set `color-scheme: light;` on `:root` / `<html>` and include `<meta name="color-scheme" content="light only" />`.
  * Remove scaffolded `mode-toggle.tsx` and `theme-provider.tsx` before building UI.
* **Mobile-First:** Design every practice view for `360px–430px` viewports first, scaling cleanly to tablets and school Chromebooks.
* **Child-Friendly Touch Targets:** Minimum `44px × 44px` buttons, high contrast, readable body text (`>= 16px`).
* **Scratchpad Canvas:** Implement as a lightweight, self-contained HTML5 `<canvas>` client component (pen, eraser, clear) using pointer events (`touch-action: none`).

---

## 6. Database Schema Guidelines (Prisma + Neon)

Schema files live in `packages/db/prisma/schema/`. Use one `.prisma` file per domain (e.g., `auth.prisma`, `learning.prisma`, `gamification.prisma`).

Core models (to be created):

* `User` (Better Auth — add fields: `role: PARENT | TEACHER`, `tier: FREE | PREMIUM | FOUNDER | TEACHER_PRO`)
* `ChildProfile` (`nickname`, `grade`, `parentId`, `classroomId?`, `stars`, `currentStreak`, `lastActiveDate`)
* `Classroom` (`teacherId`, `name`, `classCode` unique, `maxStudents` default 45)
* `QuestionAttempt` (`childId`, `templateId`, `topic`, `isCorrect`, `hintsUsed`, `createdAt`)
* `HintCache` (`templateId`, `errorType`, `hintLevel`, `hintTextBm`, unique composite key)
* `AiUsageLog` (`userId`, `childId?`, `model`, `inputTokens`, `outputTokens`, `estimatedCostMyr`, `createdAt`)
* `WaitlistLead` (`email`, `whatsapp?`, `childGrade`, `utmSource?`, `createdAt`)

Already scaffolded by Better Auth: `User`, `Session`, `Account`, `Verification` (in `auth.prisma`).

Keep relational columns explicit for parent/teacher reporting queries; use `Json` fields only for optional structured metadata.
