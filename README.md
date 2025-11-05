This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# olhachernysh.dev

## ✨ Custom Typography System

Our project uses a utility-based typography system defined in `typography.css` using Tailwind’s `@layer components`.

### 🪄 Class Naming Convention

Each heading level has variants for desktop, tablet, and mobile:

| Class Name       | Description                    |
| ---------------- | ------------------------------ |
| `text-h1`        | H1 for large screens           |
| `text-h1-tablet` | H1 for tablets                 |
| `text-h1-mobile` | H1 for mobile                  |
| `text-body`      | Base paragraph/body text       |
| `text-cta`       | CTA button text                |
| `text-footer`    | Large footer text (decorative) |

---

### ✅ Example Usage

```tsx
<h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1">
  Websites That Work
</h1>

<p className="text-body">
  Unique selling proposition: developer, clean code, no templates.
</p>

```
# ukrroging
# t-koldunenko-coming-soon-
