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

- Laravel settings such as `PORTFOLIO_PUBLIC_ONLY` are read when the container starts. Use **Save and deploy** after changing them in Render.
- `VITE_` variables are compiled into the browser JavaScript during the Docker build. **Save and deploy** reuses the old build, so the page can still show the old value. Use **Save, rebuild, and deploy** instead.
- `VITE_PROFILE_IMAGE_URL` is passed from Render to the build through an `ARG` in the Dockerfile. If it is not set in Render, the value in `.env.example` is used.
- Other `VITE_` variables in `.env.example` need their own Dockerfile `ARG` before Render values can override them at build time. Never use `VITE_` variables for secrets because their values are visible in the browser bundle.
