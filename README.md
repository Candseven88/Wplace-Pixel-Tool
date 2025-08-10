This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

This project is configured for static export and Cloudflare Pages Functions.

- Build command:
  - `npm run build`
- Build output directory:
  - `out`
- Functions directory:
  - `functions/` (Pages Functions). Routing is configured via `functions/_routes.json` to include only `/api/*`.

After linking your Git repo to Cloudflare Pages:
- Set `Build command` to `npm run build` and `Build output directory` to `out` in the Pages project settings.
- Functions in `functions/` will be deployed automatically.
- Test API at `/api/hello`.

## Notes
- Site content is in English; UI labels are intentionally English-only for the MVP.
- Frontend pixelation runs 100% in the browser using Canvas. No paid services required.
- Optional AI upgrade (future): call Hugging Face from Pages Functions.
