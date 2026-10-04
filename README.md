# Capu

CAPU is an application designed to help students organize their academic life in a simple, practical, and effective way. Managing classes, assignments, exams, projects, and deadlines can become overwhelming, especially when students have multiple responsibilities at the same time.

## Stack

- **Monorepo:** npm workspaces
- **Frontend (`apps/web`):** Vite + React + TypeScript
- **Backend (`apps/api`):** Express + TypeScript
- **Shared packages:**
  - `@capu/types` for domain entities and enums
  - `@capu/validation` for shared Zod schemas
  - `@capu/config` for shared configuration exports
- **Testing:** Vitest
- **CI:** GitHub Actions (`.github/workflows/ci.yml`)

## Repository structure

```text
.
├── apps/
│   ├── api/
│   └── web/
├── packages/
│   ├── config/
│   ├── types/
│   └── validation/
├── docs/
│   └── architecture.md
├── tests/
│   └── domain-smoke.test.ts
└── .github/workflows/ci.yml
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start both apps in development mode:

   ```bash
   npm run dev
   ```

3. Or run each app separately:

   ```bash
   npm run dev:web
   npm run dev:api
   ```

4. Run quality checks:

   ```bash
   npm run lint
   npm run typecheck
   npm run test
   npm run build
   ```

## Roadmap (high level)

- Authentication and profile management with persistent storage
- Class schedule management and calendar visualization
- Task lifecycle (create/edit/complete/delete) with priorities and deadlines
- Exams/events timeline and reminder notification workflows
- Search, filtering, and richer dashboard analytics

## What is intentionally not implemented yet

This PR establishes architecture and buildable scaffolding only. It does **not** include:

- Full authentication/security flows
- Production database integration/migrations
- Complete CRUD/business workflows for all modules
- Final UI feature implementations beyond placeholder screens

The current goal is to provide a clean, production-appropriate foundation for future feature development.
