// Contentful GraphQL API. See https://www.contentful.com/developers/docs/references/graphql/

// Fields shown on post cards (home page).
const POST_PREVIEW_FIELDS = `
  slug
  title
  excerpt
  duration
  peopleNeeded
  tagsCollection {
    items {
      name
      hex
    }
  }
`;

// Fields shown on a post's page.
const POST_FIELDS = `
  ${POST_PREVIEW_FIELDS}
  coverImage {
    url
  }
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query, variables = {}, preview = false) {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
  const token = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : CONTENTFUL_ACCESS_TOKEN;

  if (!CONTENTFUL_SPACE_ID || !token) {
    throw new Error(
      "Contentful is not configured. Set CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN and CONTENTFUL_PREVIEW_ACCESS_TOKEN (see .env.example).",
    );
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    },
  );
  const json = await response.json();

  // Fail loudly instead of rendering (and deploying) a site without posts.
  if (!response.ok || json.errors?.length) {
    const messages = json.errors?.map((error) => error.message).join("; ");
    throw new Error(
      `Contentful request failed (${response.status}): ${messages || response.statusText}`,
    );
  }
  return json.data;
}

function firstTagName(post) {
  return post.tagsCollection.items[0]?.name ?? "";
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchGraphQL(
    `query PreviewPostBySlug($slug: String!) {
      postCollection(where: { slug: $slug }, preview: true, limit: 1) {
        items {
          slug
        }
      }
    }`,
    { slug },
    true,
  );
  return data.postCollection.items[0] ?? null;
}

export async function getAllPostSlugs() {
  const data = await fetchGraphQL(
    `query AllPostSlugs {
      postCollection(where: { slug_exists: true }) {
        items {
          slug
        }
      }
    }`,
  );
  return data.postCollection.items.map(({ slug }) => slug);
}

// Posts for the home page, sorted by the name of their first tag.
export async function getAllPostsForHome(preview = false) {
  const data = await fetchGraphQL(
    `query AllPostsForHome($preview: Boolean!) {
      postCollection(preview: $preview) {
        items {
          ${POST_PREVIEW_FIELDS}
        }
      }
    }`,
    { preview },
    preview,
  );
  return data.postCollection.items.toSorted((a, b) =>
    firstTagName(a) > firstTagName(b) ? 1 : -1,
  );
}

export async function getPostBySlug(slug, preview = false) {
  const data = await fetchGraphQL(
    `query PostBySlug($slug: String!, $preview: Boolean!) {
      postCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
        items {
          ${POST_FIELDS}
        }
      }
    }`,
    { slug, preview },
    preview,
  );
  return data.postCollection.items[0] ?? null;
}
