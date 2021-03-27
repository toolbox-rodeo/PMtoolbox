import { Button, Box, Heading, Badge, Text, HStack, Icon } from '@chakra-ui/react'
import { FaClock, FaUserFriends } from 'react-icons/fa';

import Link from 'next/link'

export default function PostPreview({
  title,
  excerpt,
  slug,
  duration,
  peopleNeeded,
  tags = []
}) {
  return (<>
    <Link href={`/posts/${slug}`}>
      <a>
        <Box maxW="sm" p="5" borderWidth="1px" rounded="md" boxShadow="0px 1px 0px #E2DDD5">
          <Heading size="md" mb="1">
            {title}
          </Heading>
          <Box mb={6}>
            {
              tags.map(({ name, hex})=>{
                <Badge>{name}</Badge>
              })
            }
          </Box>
          <Box>
            <Text fontSize="sm">
              {excerpt}
            </Text>
          </Box>
          <HStack mt={6}>
            <Icon viewBox="0 0 200 200" boxSize={3} as={FaClock} />
            <Text fontSize="xs">{duration} min</Text>
            <Icon viewBox="0 0 200 200" boxSize={4} as={FaUserFriends} />
            <Text fontSize="xs">{peopleNeeded}+</Text>
          </HStack>
        </Box>
      </a>
    </Link>
  </>
  )
}
