import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Container from "../components/container";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import CardsGrid from "../components/cards-grid";
import { getAllPostsForHome } from "../lib/api";
import { filterPosts } from "../lib/search";

export default function Index({ preview, allPosts }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const posts = filterPosts(allPosts, searchTerm);

  // Apply ?search=… from the URL whenever it changes, e.g. after clicking a
  // tag on a post page or when navigating back and forth between filtered
  // views. (The query is only known once the router is ready.)
  const searchParam = router.isReady ? (router.query.search ?? "") : null;
  const [appliedSearchParam, setAppliedSearchParam] = useState(null);
  if (searchParam !== appliedSearchParam) {
    setAppliedSearchParam(searchParam);
    if (typeof searchParam === "string") setSearchTerm(searchParam);
  }

  return (
    <div style={{ background: "#F5F2F0" }}>
      <Layout preview={preview}>
        <Head>
          <title>PM Toolbox</title>
        </Head>
        {/* Google Tag Manager + iubenda cookie consent (see public/head.js) */}
        <Script src="/head.js" strategy="afterInteractive" />

        <Container>
          <InputGroup marginBottom="13">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              variant="outline"
              placeholder="Search posts or tags"
              aria-label="Search posts or tags"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </InputGroup>

          {posts.length > 0 ? (
            <CardsGrid>
              {posts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  duration={post.duration}
                  peopleNeeded={post.peopleNeeded}
                  tags={post.tagsCollection.items}
                  onTagSelect={setSearchTerm}
                />
              ))}
            </CardsGrid>
          ) : (
            searchTerm && (
              <Text color="brown.500" textAlign="center" py={10}>
                No posts match “{searchTerm}”.
              </Text>
            )
          )}
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const allPosts = await getAllPostsForHome(draftMode);
  return {
    props: { preview: draftMode, allPosts },
  };
}
