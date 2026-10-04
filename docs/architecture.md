# CAPU Architecture Foundation

## System boundaries

- `apps/web`: React + Vite frontend (presentation layer).
- `apps/api`: Express backend (API boundary, domain services, middleware).
- `packages/types`: shared domain entities and enums.
- `packages/validation`: shared Zod schemas for request/domain validation.
- `packages/config`: shared repository-level configuration helpers.

## Module boundaries (API)

Each module (`auth`, `users`, `classes`, `tasks`, `calendar`, `exams`, `notifications`) contains:

- `types.ts` for request/response types.
- `service.ts` for business/domain logic.
- `controller.ts` for HTTP handling.
- `routes.ts` for route wiring and middleware composition.

## Data flow

1. Web sends HTTP requests to `/api/v1/*`.
2. API middleware chain applies logging, auth guard (when required), and request validation.
3. Controllers delegate to services.
4. Services consume repository abstractions from `src/database/repositories.ts`.
5. Shared entities and validation schemas remain reusable across apps.

## Current scope

This PR introduces architecture and compile-safe scaffolding only.
Product features, persistent storage implementation, authentication providers, and full UI flows are intentionally deferred.
