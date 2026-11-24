// Case-insensitive search over a post's title and all of its tag names.
export function filterPosts(posts, searchTerm) {
  const term = searchTerm.trim().toLowerCase();
  if (!term) return posts;

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(term) ||
      post.tagsCollection.items.some((tag) =>
        tag.name.toLowerCase().includes(term),
      ),
  );
}
