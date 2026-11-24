import { getPreviewPostBySlug } from "../../lib/api";

export default async function preview(req, res) {
  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewPostBySlug(slug);

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Draft Mode by setting the bypass cookie
  res.setDraftMode({ enable: true });

  // Redirect to the path from the fetched post. We don't redirect to
  // req.query.slug as that might lead to open redirect vulnerabilities.
  // A client-side redirect (instead of a 307) makes sure the cookie is
  // stored before the post is requested, also inside Contentful's iframe.
  const url = `/posts/${encodeURIComponent(post.slug)}`;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.end(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" /><script>window.location.href = '${url}'</script></head></html>`,
  );
}
