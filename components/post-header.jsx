import { Badge, Box } from "@chakra-ui/react";
import PostTitle from "./post-title";
import { badgeColors } from "./constants";
import CardIcons from "./card-icons";

export default function PostHeader({ title, tags, duration, peopleNeeded }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box mb={6}>
        {tags.map(({ name, hex }) => (
          <Badge
            key={name}
            mr={1}
            variant="subtle"
            colorScheme={badgeColors[hex]}
          >
            {name}
          </Badge>
        ))}
        <CardIcons duration={duration} peopleNeeded={peopleNeeded} />
      </Box>
    </>
  );
}
