import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import PostPreview from "../components/post-preview";
import CardsGrid from "../components/cards-grid";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Select,
  } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { Component } from "react";
import { useState } from "react";


export default function Index({ preview, allPosts }) {

const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ background: "#F5F2F0" }}>
      <Layout preview={preview}>
        <Head>
          <title>PM Toolbox</title>
        </Head>

        <Container>

          <div>
          <InputGroup marginBottom="13">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300"/>}
            />
            <Input variant="outline" placeholder="Search for posts" onChange={event => {setSearchTerm(event.target.value)}}/>
          </InputGroup>
          </div>

          {allPosts.length > 0 && (
            <CardsGrid>
              {allPosts.filter((post)=> {
                if (searchTerm == ""){
                  return post
                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return post
                }
               }).map((post) => (
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
