# Deploy this portfolio on Render

1. Commit these changes and push them to the GitHub branch you want to deploy. Merge that branch into `main` if `main` should be the production version.
2. In [Render](https://dashboard.render.com/), choose **New → Blueprint**, connect `MrLoyd10/jl-portfolio`, and select the branch containing `render.yaml`.
3. Review the Blueprint and deploy it. It creates one free Docker web service in Singapore. Render generates the app key and provides an `onrender.com` URL; no database service is needed for the public portfolio.
4. Open the service URL, a case study such as `/projects/project-atlas`, and `/up` to confirm the deployment. Later pushes to the connected branch redeploy automatically.

The Docker build compiles the React assets and serves only the public portfolio pages. Login and registration are disabled on this service. Public profile and contact values in the frontend come from `.env.example` at build time; edit that file and redeploy if you want to change them.

Render's free web service sleeps after 15 minutes without traffic, so the first visit after that can take about a minute. The free Hobby workspace currently includes 5 GB of outbound bandwidth per month. The large project screenshots remain in the repository; the page now loads offscreen images lazily, but compressing the originals would further reduce bandwidth use. The service filesystem is temporary, so do not use it for persistent uploads or database records.
