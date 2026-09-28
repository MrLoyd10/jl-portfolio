# Portfolio notes

## Local development

- Static portfolio: `npm run dev:static`
- Laravel version: run `npm run dev` and `php artisan serve` in separate terminals.
- Static production build: `npm ci && npm run build` (the `build:static` command is equivalent); run `npm run preview:static` to preview it.
- The older Laravel build uses `npm run build:laravel`; its generated route files require the Laravel build setup.
- Project content: edit `resources/data/projects.json`. The static portfolio and Laravel both read this file.
- AI-readable portfolio: `public/assets/ai.html` is a standalone, manually maintained copy of the public portfolio content. Whenever you change profile details, experience, skills, education, awards, contact details, or any project, review and update this page in the same change so `/ai` stays consistent. This includes public `VITE_*` values changed in Render. Check names, dates, roles, statuses, links, and outcome claims before deploying.
- Screenshot command for project images: `php artisan screenshots:generate`.
- Local defaults and available public settings: `.env.example` and `resources/js/lib/env.ts`.

### Manual check before deployment

1. From the repository root, run `npm ci` and then `npm run build`. This must finish successfully and create `dist/index.html`.
2. Run `npm run preview:static`. Open the local URL Vite prints (usually `http://localhost:4173/`). This serves the production build, closer to Render than `npm run dev:static`.
3. On the homepage, check the profile photo, project cards, certificates, resume button, email and phone links, and light/dark theme. The profile photo uses `/assets/icon.png` if its configured external image fails.
4. Open a project card, copy its `/projects/...` URL into a new tab, and refresh it. Repeat for the other project cards. Every project should show its own title, images, and files.
5. Visit `/projects/does-not-exist`; the portfolio should show “Page not found.”
6. Open `/assets/ai.html` in the preview. It must show the full AI-readable profile and all ten projects with JavaScript disabled. The public `/ai` path uses a Render rewrite, so check that path after deployment.
7. To check an environment override without editing code, set `VITE_PROFILE_IMAGE_URL` or `VITE_RESUME_DOWNLOAD_URL` in your shell, rerun `npm run build`, and restart the preview. The new value should appear. Run a normal `npm run build` again to restore your local `.env` values.

Vite's local preview checks the build and browser behavior. Render's rewrite and public URL must still be checked after the first Static Site deployment.

## Deploy the static portfolio on Render

The current free **Web Service** sleeps after inactivity. Complete these steps after the static-site code changes are committed and pushed to the branch used for deployment. Keep the Web Service running until the new site has been checked.

1. Sign in to [Render](https://dashboard.render.com/) with the Google account used for this portfolio. Open the existing Web Service to note its deployed Git branch and any custom domain. Its configuration is in `render.yaml`; do not create a Blueprint from that file for the new site.
2. Choose **New → Static Site**, connect `MrLoyd10/jl-portfolio` on GitHub, and select the same deployed branch. If the changes are on another branch, merge them into the deployed branch first.
3. Enter `mrloyd10` as the Static Site name for `mrloyd10.onrender.com`. If that name is unavailable, use `mrloyd10-portfolio` for `mrloyd10-portfolio.onrender.com`. Check the URL displayed by Render before creating the site; avoid an automatically generated suffix.
4. Set **Build Command** to `npm ci && npm run build:static` and **Publish Directory** to `dist`. Add `NODE_VERSION=22` to the Static Site's environment.
5. In the Static Site's **Environment** page, copy the public `VITE_*` settings you use from the old Web Service. Include `VITE_APP_NAME`, `VITE_PROFILE_IMAGE_URL`, and `VITE_RESUME_DOWNLOAD_URL` if you customized them. Use plain values without surrounding quotes. Do not copy private credentials or the old Web Service's PHP, database, session, cache, queue, or `PORTFOLIO_PUBLIC_ONLY` settings. If you add or change a value after creation, choose **Save, rebuild, and deploy**.
6. In the Static Site's **Redirects/Rewrites** settings, add a **Rewrite** with source `/projects/*` and destination `/index.html`. Add another **Rewrite** with source `/ai` and destination `/assets/ai.html`. The `/ai` page is a real static HTML file, so do not point it to `/index.html`. Do not add a broad `/*` rewrite; missing files should still return a host-level 404.
7. Wait for the first deploy to finish. Open the new URL in a private browser window. Check the homepage, all ten project cards and detail URLs, direct loading and refresh of a project URL, images, certificates and PDFs, profile photo, resume download, email and phone links, and light/dark theme. Check that `/ai` loads all profile sections and all ten projects without JavaScript, and try sharing its URL with ChatGPT for a LinkedIn or cover letter draft. A made-up project slug should show the portfolio's “Page not found” message.
8. If you use a custom domain, make the cutover after verifying the new `onrender.com` address. Remove the domain from the old Web Service if Render requires it before attaching it to the Static Site, then attach it to the Static Site, update DNS as Render instructs, and verify the domain. If you only use an `onrender.com` URL, update links to the new address wherever you share your portfolio.
9. Only after the new site works, suspend or remove the old Web Service. Its Docker and `render.yaml` setup can remain in the repository until you no longer need a rollback path.

The Static Site uses Render's CDN and has no sleeping server. Render's free workspace still has monthly bandwidth and build-minute allowances; monitor usage in the Render dashboard.

## Change public environment values later

The static site reads `VITE_*` variables **during its build**. To change a profile image, resume URL, contact detail, or another existing public setting:

1. Open the Static Site's **Environment** page and edit the value. Use the direct URL or text value, without quotes or Markdown formatting.
2. Choose **Save, rebuild, and deploy**. Wait for the new build and refresh the site. **Save and deploy** reuses the old build, so it will not update values already included in the static JavaScript.

For a new public setting, add a `getEnv('VITE_NEW_FIELD', 'Default value')` entry in `resources/js/lib/env.ts`, use it in the relevant component, and push the code change. Then add the key in Render and rebuild. Every `VITE_*` value is visible in the browser, so never put a password or token there.

References: [Render Static Sites](https://render.com/docs/static-sites), [Render redirects and rewrites](https://render.com/docs/redirects-rewrites), [Render environment variables](https://render.com/docs/configure-environment-variables).
