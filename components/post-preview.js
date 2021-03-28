import { Box, Heading, Badge, Text, HStack, Icon } from '@chakra-ui/react'
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
  const badgeColors = {
    "497351":'whatsapp',
    "4C495C":'twitter',
    "545AB3":'orange',
    "5653CD":'green',
    "724ACF":'purple',
    "703497":'pink',
    "D23B7E":'yellow',
    "DB3E4B":'facebook',
    "D4492D":'blackAlpha',
    "BF5427":'cyan',
  }
  return (<>
    <Link href={`/posts/${slug}`}>
      <a>
        <Box p="5" borderWidth="1px" borderColor="brown.100" rounded="md" boxShadow="0px 1px 0px #E2DDD5" background="white">
          <Heading size="md" mb="1">
            {title}
          </Heading>
          <Box mb={6}>
            {
              tags.map(({ name, hex})=> (
                <Badge mr={1} variant="subtle" colorScheme={badgeColors[hex]}>
                  {name}
                </Badge>
              ))
            }
          </Box>
          <Box>
            <Text fontSize="sm">
              {excerpt}
            </Text>
          </Box>
          <HStack mt={6}>
            <Icon color="brown.500" viewBox="0 0 200 200" boxSize={3} as={FaClock} />
            <Text color="brown.500" fontSize="xs">{duration} min</Text>
            <Icon color="brown.500" viewBox="0 0 200 200" boxSize={4} as={FaUserFriends} />
            <Text color="brown.500" fontSize="xs">{peopleNeeded}+</Text>
          </HStack>
        </Box>
      </a>
    </Link>
  </>
  )
}
