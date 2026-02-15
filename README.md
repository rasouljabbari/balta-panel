# 🚀 CRM V2.0.0

A modern web application built with **React.js**, **TypeScript**, and a clean, scalable folder structure.

[Figma Link](https://www.figma.com/design/MpcZes4Cen8VNvYsFeHiF7/Balta-CRM?node-id=1743-368338&p=f&m=dev)

---

## 📦 Tech Stack

- **[React.js](https://react.dev/)** – React framework for production
- **TypeScript** – Static typing for JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **React Query / Redux** – State management (optional, based on project needs)
- **Axios / Fetch API** – For API requests

---

## 📂 Project Structure

```
CRM-V2/
│
├─ public/               # Static assets (images, fonts, icons, ...)
│
├─ src/                  # Application source code
│   ├─ pages/              # App Router (if used)
│   │   └─ page.tsx
│   │   └─ auth/...    # Route groups (example)
│
│   ├─ components/       # Reusable UI components
│   │   ├─ ui/           # UI primitives (Button, Input, Modal)
│   │   ├─ layout/       # Layout components (Header, Footer, Sidebar)
│   │   └─ shared/       # Shared components
│
│   ├─ features/         # Feature-based modules
│   │   └─ auth/
│   │       ├─ components/
│   │       ├─ hooks/
│   │       ├─ services/
│   │       └─ types.ts
│
│   ├─ hooks/            # Global reusable hooks
│   ├─ utils/              # Utilities & API clients
│   │   ├─ api/
│   │   │   └─ axios.ts
│   │   └─ utils.ts
│
│   ├─ styles/           # Global styles (Tailwind, theme, css)
│   ├─ types/            # Global TypeScript types
│   ├─ store/            # State management (Zustand, Redux, etc.)
│   └─ config/           # Configuration (env, constants)
│
├─ .env.local            # Environment variables
├─ next.config.ts        # Next.js configuration
├─ tsconfig.json         # TypeScript configuration (with aliases)
├─ package.json
└─ README.md
```

---

## 🔑 Path Aliases

This project uses **TypeScript path aliases** to simplify imports.

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

✅ Example imports:

```ts
import useAuth from '@/features/auth/hooks/useAuth';
import { axiosInstance } from '@/lib/api/axios';
import Button from '@/components/ui/Button';
```

---

## 🛠 Available Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Run production build
- `pnpm lint` – Run ESLint
- `pnpm test` - Run unit test
- `pnpm coverage` - Get test coverage
- `pnpm format` - Run prettier formatter

---

## 🌍 Environment Variables

Create a `.env` file in the root of your project:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_ENV=development
```

---

## ✅ Best Practices

- Keep **feature-specific logic** inside `src/features/[feature-name]`
- Put **reusable UI components** in `src/components/ui`
- Use **path aliases** (`@/...`) instead of long relative imports
- Split large logic into **hooks**, **services**, and **store**

---

## 📋 Naming Conventions

| Type                      | Convention                          | Example                   |
| ------------------------- | ----------------------------------- | ------------------------- |
| **File Names**            | `kebab-case.tsx`                    | `address-box.tsx`         |
| **Component Names**       | `PascalCase`                        | `AddressBox`              |
| **Hook Names**            | `use` + `PascalCase`                | `useExample`              |
| **Environment Variables** | `NEXT_PUBLIC_` + `UPPER_SNAKE_CASE` | `NEXT_PUBLIC_COMPANY_URL` |
| **Asset Files**           | `kebab-case.png`                    | `image-name.png`          |
| **Asset Format**          | `.webp` (except fake images)        | `hero-banner.webp`        |
| **Fake Images**           | Any format allowed                  | `product-image.png`       |

### File Structure Examples

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx          # Button component
│   │   ├── input-field.tsx     # InputField component
│   │   └── modal-dialog.tsx     # ModalDialog component
│   └── layout/
│       ├── header-main.tsx     # HeaderMain component
│       └── footer-links.tsx    # FooterLinks component
├── hooks/
│   ├── useAuth.ts             # useAuth hook
│   ├── useCart.ts             # useCart hook
│   └── useLocalStorage.ts    # useLocalStorage hook
└── features/
    └── auth/
        ├── login-form.tsx      # LoginForm component
        └── use-login.ts        # useLogin hook
```

### Asset File Examples

```
public/assets/
├── images/
│   ├── hero-banner.webp        # ✅ Correct format
│   ├── product-card.webp       # ✅ Correct format
│   └── fake-images/
│       ├── product-image.png  # ✅ Fake images can be any format
│       └── user-avatar.jpg    # ✅ Fake images can be any format
└── icons/
    ├── shopping-cart.svg      # ✅ Icons typically SVG
    └── user-profile.svg        # ✅ Icons typically SVG
```

### File Structure

```
public/
├── manifest.json              # PWA manifest
├── sw.js                      # Service worker
├── icon-192.svg              # 192x192 app icon
├── icon-512.svg              # 512x512 app icon
├── icon.svg                  # Default icon
├── apple-touch-icon.png      # iOS home screen icon
├── apple-touch-icon.svg      # iOS home screen icon (SVG)
└── apple-splash-*.png        # iOS splash screen images
    ├── apple-splash-1170-2532.png
    ├── apple-splash-2532-1170.png
    ├── apple-splash-1125-2436.png
    └── ... (many more)

src/
├── components/
│   └── shared/
│       ├── ios-splash-head/          # iOS splash screen meta tags
│       │   └── index.tsx
│       ├── pwa-registration/         # Service worker registration
│       │   └── index.tsx
│       └── splash-screen/
│           └── splash-wrapper.tsx    # PWA detection component
├── services/
│   └── splash.ts                     # Splash API service
└── app/
    └── layout.tsx                    # Root layout with PWA setup
```

## 📝 Pre-commit Checklist

Before each commit, follow this checklist to keep code quality and branch stability high:

- **Sync with branch**: Pull the latest changes to avoid unnecessary conflicts.

```bash
git pull --rebase origin <branch-name>
```

- **Remove dead code and logs**: Delete unused code and remove all `console.*` calls.

- **Run lint (ESLint)**: Check and automatically fix style/rule issues where possible.

```bash
# Prefer pnpm
pnpm lint

# If you use npm/yarn
npm run lint
# or
yarn lint
```

- **Build (for TypeScript type-check and build-time failures)**: The build must finish without errors.

```bash
pnpm build
# or
npm run build
# or
yarn build
```

- **i18n check**: Add/update new texts in `src/i18n/langs/fa.json` and ensure there are no unused keys.

- **Follow Conventional Commits**: Keep commit messages standard and searchable.
  - Types: `feat`, `fix`, `docs`, `refactor`, `style`, `perf`, `test`, `chore`
  - Examples:

```bash
git commit -m "feat(cart): add price breakdown to summary"
git commit -m "fix(auth): handle token refresh race condition"
git commit -m "docs(readme): add pre-commit checklist"
```

- **Quick self-review**:
  - Changes are small and logically grouped.
  - Dead code/console logs removed.
  - Naming is clear and types are precise.

- **Naming conventions**:
  - Files: use `kebab-case` for files, `PascalCase` for React components.
  - Variables/functions: `camelCase`; constants: `UPPER_SNAKE_CASE`.

- **Run tests**: Unit tests must pass locally.

```bash
pnpm test:run
# or
npm run test:run
# or
yarn test:run
```

- **Run Prettier**: Ensure code formatting is consistent.

```bash
pnpm format
# or
npm run format
# or
yarn format
```

Quick ticks:

- [ ] pull/rebase done
- [ ] dead code removed, no console logs
- [ ] lint passes with no errors
- [ ] tests pass (`test:run`)
- [ ] naming conventions respected
- [ ] Prettier run (`format`)
- [ ] build completes without errors
- [ ] i18n updated (if texts changed)
- [ ] commit message follows Conventional Commits

---
