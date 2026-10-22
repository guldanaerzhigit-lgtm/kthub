# KTHuD — ауылдарға арналған қосымша

Mobile-first PWA prototype for local ads, taxi request forms, services, jobs, community demo chat, and profile.

## Deploy to Cloudflare Pages
- Connect this repository to Cloudflare Pages.
- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/` (repository root)

## Prototype status
The interface and demo interactions run in the browser. Data is saved in the browser's localStorage only and is not shared between users. SMS login, shared database, remote image uploads, driver dispatch, push notifications, moderation, and paid listing promotion are not connected yet. For production, configure Firebase or another backend, security rules, moderation, privacy terms, and a payment provider before collecting user data or payments.
