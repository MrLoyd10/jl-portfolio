Commands:

- npm run dev
- php artisan serve

Custom Commands:

- php artisan screenshots:generate

Read:

- .env
- app/Data/Projects.php

Deployment:

- Currently deployed in render using google account jl.ocoy.learn@gmail.com

With important env setup:
PORTFOLIO_PUBLIC_ONLY=true
SESSION_DRIVER=file
CACHE_STORE=file
QUEUE_CONNECTION=sync
LOG_CHANNEL=stderr
APP_DEBUG=false

### Changing environment variables in Render

The public profile, contact, social, footer, and resume variables in `config/portfolio.php` are read when the container starts. Laravel sends them to the page through `resources/views/app.blade.php`; `resources/js/lib/env.ts` uses them before its built-in defaults.

For an **existing variable** in `config/portfolio.php`:

1. Edit its value in Render's **Environment** page. Enter the plain value, without surrounding quotes or Markdown link formatting.
2. Choose **Save and deploy**. After the deploy finishes, refresh the site. Later value changes need no code change or frontend rebuild.

For a **new variable** that the site does not use yet, wire it in once:

1. Add `'VITE_NEW_FIELD' => env('VITE_NEW_FIELD')` to `config/portfolio.php`.
2. Read it with `getEnv('VITE_NEW_FIELD', 'Default value')` in `resources/js/lib/env.ts` and use that property in the relevant component.
3. Commit, push, and deploy those code changes. Future edits to `VITE_NEW_FIELD` then need only **Save and deploy** in Render.

Adding a key only in Render cannot change the page unless the frontend uses it. `.env.example` supplies build-time defaults and does not need to change for later Render value updates. These `VITE_` values are public in the page, so do not use this path for passwords or tokens.
