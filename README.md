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

## Deploy to XAMPP

1. If serving from a subfolder (e.g. `htdocs/student-app`), set `base` in [vite.config.ts](vite.config.ts) before building:

   ```ts
   export default defineConfig({
     base: '/student-app/',
     // ...
   })
   ```

   Skip this if deploying to `htdocs` root (`base: '/'`, the default).

2. Build:

   ```sh
   npm run build
   ```

3. Copy the output to XAMPP's web root:

   ```sh
   cp -r dist/. /Applications/XAMPP/xamppfiles/htdocs/student-app/
   ```

   (Windows: `C:\xampp\htdocs\student-app`, Linux: `/opt/lampp/htdocs/student-app`)

4. Start Apache in the XAMPP control panel, then open `http://localhost/student-app/`.

If a client-side router gets added later, add an `.htaccess` in the deployed folder so deep links don't 404:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /student-app/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /student-app/index.html [L]
</IfModule>
```

## Custom commands

- `/student-profile` (`.claude/commands/student-profile.md`) — scaffolds a Student Profile component via the frontend-design skill.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).
