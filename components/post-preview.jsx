import { Box, Heading, Badge, Text } from "@chakra-ui/react";

import Link from "next/link";
import { badgeColors } from "./constants";
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
    <>
      <Link href={`/posts/${slug}`}>
        <a>
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
            </Box>
            <Box>
              <Text fontSize="sm">{excerpt}</Text>
            </Box>
            <CardIcons duration={duration} peopleNeeded={peopleNeeded} />
          </Box>
        </a>
      </Link>
    </>
  );
}
