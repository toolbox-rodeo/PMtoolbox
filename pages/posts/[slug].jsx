import Head from "next/head";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getAllPostSlugs, getPostBySlug } from "../../lib/api";

export default function Post({ post, preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <div className="max-w-2xl mx-auto pb-40">
          <article>
            <Head>
              <title>{post.title}</title>
              {post.coverImage?.url && (
                <meta property="og:image" content={post.coverImage.url} />
              )}
            </Head>
            <PostHeader
              tags={post.tagsCollection.items}
              title={post.title}
              peopleNeeded={post.peopleNeeded}
              duration={post.duration}
            />
            <PostBody content={post.content} />
          </article>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, draftMode = false }) {
  const post = await getPostBySlug(params.slug, draftMode);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { preview: draftMode, post },
  };
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // Posts published after the last build are rendered on first request.
    fallback: "blocking",
  };
}
