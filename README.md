# student-app

Vue 3 + TypeScript student app. Login page built as reusable components on Vite.

Repo: https://github.com/dev-porntep/student-app

## Structure

```
src/
  types/          shared TS interfaces (auth.ts)
  composables/     form state / logic (useLoginForm.ts)
  components/
    login/         LoginIllustration, LoginInput, LoginButton
  views/           page-level composition (LoginView.vue)
  assets/          global CSS + design tokens (main.css)
```

## Setup

```sh
npm install
```

### Dev server

```sh
npm run dev
```

### Type-check

```sh
npm run type-check
```

### Build

```sh
npm run build
```

## Custom commands

- `/student-profile` (`.claude/commands/student-profile.md`) — scaffolds a Student Profile component via the frontend-design skill.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).
