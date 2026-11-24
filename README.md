# PM Toolbox

Source of [pm.tools](https://www.pm.tools): a collection of techniques and
workshop methods for product managers (prioritization, roadmapping, discovery,
delivery, …).

Built with [Next.js](https://nextjs.org) (Pages Router), content from
[Contentful](https://www.contentful.com), styled with
[Chakra UI](https://v2.chakra-ui.com) and [Tailwind CSS](https://tailwindcss.com),
hosted on [Netlify](https://www.netlify.com).

## Getting started

Requirements: Node.js 24 (see `.nvmrc`) and npm.

```sh
cp .env.example .env.local   # then fill in the Contentful credentials
npm install
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable                          | Purpose                                                  |
| --------------------------------- | -------------------------------------------------------- |
| `CONTENTFUL_SPACE_ID`             | Contentful space with the posts                          |
| `CONTENTFUL_ACCESS_TOKEN`         | Content Delivery API token (published content)           |
| `CONTENTFUL_PREVIEW_ACCESS_TOKEN` | Content Preview API token (drafts, used in preview mode) |
| `CONTENTFUL_PREVIEW_SECRET`       | Any secret string; protects `/api/preview` (see below)   |

The build fails if Contentful is not configured or returns an error, so a broken
configuration can't deploy an empty site.

## Scripts

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | Start the development server                         |
| `npm run build`  | Production build (fetches all posts from Contentful) |
| `npm start`      | Serve the production build                           |
| `npm run lint`   | ESLint (`eslint-config-next`)                        |
| `npm test`       | Unit tests (`node --test`)                           |
| `npm run format` | Format everything with Prettier                      |
| `npm run setup`  | Import the content model into a new Contentful space |

CI (`.github/workflows/checks.yml`) runs lint, format check, tests and — if the
`CONTENTFUL_*` repository secrets are set — the build on every PR.

## How it works

- **Posts** are statically generated at build time (`pages/index.jsx`,
  `pages/posts/[slug].jsx`). Posts published later are rendered on their first
  request. Queries live in `lib/api.js`.
- **Preview**: open
  `/api/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&slug=<post-slug>` (e.g. as
  Contentful's preview URL) to see draft content; `/api/exit-preview` leaves
  preview mode.
- **Tags** are Contentful entries with a `name` and a `hex` colour. The hex code
  is mapped to a Chakra colour scheme in `components/constants.jsx`.
- **Contact form**: handled by [Netlify Forms](https://docs.netlify.com/forms/setup/).
  The form is declared in `public/__forms.html` (Netlify's Next.js adapter
  requires forms to live in a static file) and `pages/contact.jsx` posts to it.
  Keep the field names of both in sync. Submissions only work on Netlify, not
  locally.
- **Tracking/consent**: Google Tag Manager and the iubenda cookie banner are
  loaded from `public/head.js` on the home page.

## Deployment

Netlify builds the `main` branch with `npm run build` (see `netlify.toml`) and
picks up the Node.js version from `.nvmrc`. Netlify installs its Next.js adapter
automatically. The Contentful variables above have to be set in the Netlify
site settings.
