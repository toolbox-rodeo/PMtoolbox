import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import TagList from "./tag-list";
import CardIcons from "./card-icons";

export default function PostPreview({
  title,
  excerpt,
  slug,
  duration,
  peopleNeeded,
  tags = [],
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <Box
        p="5"
        borderWidth="1px"
        borderColor="brown.100"
        rounded="md"
        boxShadow="0px 1px 0px #E2DDD5"
        background="white"
      >
        <Heading size="md" mb="1">
          {title}
        </Heading>
        <Box mb={6}>
          <TagList tags={tags} />
        </Box>
        <Text fontSize="sm">{excerpt}</Text>
        <CardIcons duration={duration} peopleNeeded={peopleNeeded} />
      </Box>
    </Link>
  );
}
