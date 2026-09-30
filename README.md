# Neon OS — foundation

Next.js 15 (App Router) · TypeScript · Tailwind · Supabase (Auth, Postgres, RLS) · Vercel-ready · PWA manifest

## Setup
1. Create a Supabase project. Run `supabase/migrations/0001_foundation.sql` in the SQL editor.
2. `cp .env.example .env.local` and fill in the URL + anon key (Project Settings → API).
3. In Supabase Auth → URL Configuration, add `http://localhost:3000/auth/callback` (and your Vercel URL).
4. `npm install && npm run dev`

## Map
- `src/lib/session.ts` — server-side tenant + role resolution (`requireTenant`)
- `src/middleware.ts` — session refresh + protected routes
- `src/lib/nav.ts` — owner / employee / portal navigation (add modules here)
- `src/app/{owner,employee,portal}/[[...module]]` — module placeholders; replace per module
- `src/components/neon-ring` — configurable NeonRing (reduced-motion aware)
- `src/components/branding/brand-provider.tsx` — per-tenant token overrides (Brand Studio target: `business_profiles.brand`)
- `src/app/globals.css` — design tokens (light/dark)
- Convention: every tenant table has `organization_id` + RLS via `is_member()` / `has_role()`.

## Not yet built (by design)
Customer invite flow, master-admin UI, employee invites, all module content, NeonRing event system.
