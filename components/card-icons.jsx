import { Text, HStack, Icon } from "@chakra-ui/react";

import { FaClock, FaUserFriends } from "react-icons/fa";

export default function CardIcons({ duration, peopleNeeded }) {
  return (
    <HStack mt={6}>
      <Icon color="brown.500" viewBox="0 0 200 200" boxSize={3} as={FaClock} />
      <Text color="brown.500" fontSize="xs">
        {duration} min
      </Text>
      <Icon
        color="brown.500"
        viewBox="0 0 200 200"
        boxSize={4}
        as={FaUserFriends}
      />
      <Text color="brown.500" fontSize="xs">
        {peopleNeeded}+
      </Text>
    </HStack>
  );
}
