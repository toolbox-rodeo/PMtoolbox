import { Box } from "@chakra-ui/react";
import PostTitle from "./post-title";
import TagList from "./tag-list";
import CardIcons from "./card-icons";

export default function PostHeader({ title, tags, duration, peopleNeeded }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box mb={6}>
        <TagList tags={tags} />
        <CardIcons duration={duration} peopleNeeded={peopleNeeded} />
      </Box>
    </>
  );
}
