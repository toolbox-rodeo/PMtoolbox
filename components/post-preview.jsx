import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import TagList from "./tag-list";
import CardIcons from "./card-icons";

// The whole card links to the post (LinkOverlay); the tags are separate links
// on top of it, which avoids nesting links inside a link.
export default function PostPreview({
  title,
  excerpt,
  slug,
  duration,
  peopleNeeded,
  tags = [],
  onTagSelect,
}) {
  return (
    <LinkBox
      as="article"
      p="5"
      borderWidth="1px"
      borderColor="brown.100"
      rounded="md"
      boxShadow="0px 1px 0px #E2DDD5"
      background="white"
    >
      <Heading size="md" mb="1">
        <LinkOverlay as={NextLink} href={`/posts/${slug}`}>
          {title}
        </LinkOverlay>
      </Heading>
      <Box mb={6}>
        <TagList tags={tags} onSelect={onTagSelect} />
      </Box>
      <Text fontSize="sm">{excerpt}</Text>
      <CardIcons duration={duration} peopleNeeded={peopleNeeded} />
    </LinkBox>
  );
}
