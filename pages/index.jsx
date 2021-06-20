import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import PostPreview from "../components/post-preview";
import CardsGrid from "../components/cards-grid";

export default function Index({ preview, allPosts }) {
  return (
    <div style={{ background: "#F5F2F0" }}>
      <Layout preview={preview}>
        <Head>
          <title>PM Toolbox</title>
        </Head>

        <Container>
          {allPosts.length > 0 && (
            <CardsGrid>
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  duration={post.duration}
                  peopleNeeded={post.peopleNeeded}
                  tags={post.tagsCollection.items}
                />
              ))}
            </CardsGrid>
          )}
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
