# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/61cd5abb-2cfb-41e0-a42e-ad3f9d0fe644

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/61cd5abb-2cfb-41e0-a42e-ad3f9d0fe644) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/61cd5abb-2cfb-41e0-a42e-ad3f9d0fe644) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Supabase

This repository is intentionally wired to **one** Supabase project only:

| | |
|---|---|
| Project ref | `quleuwbwldqhercdnjqc` |
| Project URL | https://quleuwbwldqhercdnjqc.supabase.co |
| Dashboard | https://supabase.com/dashboard/project/quleuwbwldqhercdnjqc |

It powers the CMS (`public.site_content`), the admin authentication/roles (`public.user_roles` +
`has_role()`), and the public `portfolio-images` storage bucket. Do not point this repository at any other
Supabase project or account.

`src/integrations/supabase/client.ts` resolves the connection in this order:

1. `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` - from `.env` locally, or from the Vercel
   project's Environment Variables in production.
2. Fallback: the literals committed in `client.ts`, which always point at the project above.

To use the Supabase CLI against this project you must be signed in as the account that owns it, since a
token for a different account cannot see it:

```sh
npx supabase login
npx supabase link --project-ref quleuwbwldqhercdnjqc
```

The `supabase/.temp/` folder created by `link` is git-ignored.
