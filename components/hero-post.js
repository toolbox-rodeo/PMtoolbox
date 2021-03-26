import { LinkBox, Box, Heading, Text, Link } from "@chakra-ui/react";

import ReachLink from 'next/link'

export default function HeroPost({
  title,
  excerpt,
  slug,
}) {
  return (
    <LinkBox maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        13 days ago
      </Box>
      <Heading size="md" my="2">
        <Link as={ReachLink} to={slug}>{title}</Link>
      </Heading>
      <Text>
        {excerpt}
      </Text>
    </LinkBox>
  )
}
