import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import PostPreview from "../components/post-preview";

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Product manager Toolbox</title>
        </Head>

        <Container>
          {allPosts.length > 0 &&
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  duration={post.duration}
                  peopleNeeded={post.peopleNeeded}
                  tags={post.tags}
                />
              ))}
            </div>
          }
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
