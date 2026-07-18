---
description: Create a Student Profile component with distinctive frontend design
---

Use the `frontend-design` skill first, then build a **Student Profile** component for this Vue 3 + TypeScript app (`student-app`).

## Brief

Subject: a student's profile page/card in an academic app. Audience: students checking their own info, or advisors/teachers glancing at a student's record. Page's single job: show who this student is and their academic status at a glance.

Content to include (invent realistic placeholder data if none given):
- Name, student ID, photo/avatar
- Program / major, year / level
- GPA or academic standing
- Contact info (email, phone)
- Enrollment status (active, on leave, graduated, etc.)

## Requirements

- Follow the project's existing structure: reusable pieces in `src/components/`, page-level composition in `src/views/`, shared types in `src/types/`, stateful logic in `src/composables/` if needed.
- `<script setup lang="ts">`, typed props, no `any`.
- Design must NOT default to generic AI template look (cream+serif, black+neon accent, or newspaper-hairline layout) — make a deliberate choice fitting an academic/student context. Follow the frontend-design skill's brainstorm → critique → build process.
- Responsive down to mobile. Visible keyboard focus states.
- Reuse existing design tokens/CSS vars in `src/assets/main.css` where sensible, extend them if the new direction needs its own palette — state why if you diverge.

## Output

- New component(s) under `src/components/student-profile/`
- A view or story wiring it up so it's viewable via `npm run dev`
- Run `npm run type-check` before calling it done
