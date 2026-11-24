import assert from "node:assert/strict";
import { test } from "node:test";
import { filterPosts } from "./search.js";

const post = (title, ...tags) => ({
  title,
  tagsCollection: { items: tags.map((name) => ({ name })) },
});

const posts = [
  post("Kinds of MVPs", "Delivery", "Discovery"),
  post("RICE", "Prioritization"),
  post("Untagged post"),
];

test("returns all posts for an empty or blank search", () => {
  assert.deepEqual(filterPosts(posts, ""), posts);
  assert.deepEqual(filterPosts(posts, "   "), posts);
});

test("matches the title case-insensitively", () => {
  assert.deepEqual(filterPosts(posts, "mvp"), [posts[0]]);
});

test("matches any tag, not just the first one", () => {
  assert.deepEqual(filterPosts(posts, "discovery"), [posts[0]]);
  assert.deepEqual(filterPosts(posts, "PRIORI"), [posts[1]]);
});

test("handles posts without tags", () => {
  assert.deepEqual(filterPosts(posts, "untagged"), [posts[2]]);
  assert.deepEqual(filterPosts(posts, "nothing matches"), []);
});
