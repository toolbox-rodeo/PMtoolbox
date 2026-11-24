import { Badge } from "@chakra-ui/react";
import { badgeColors } from "./constants";

export default function TagList({ tags }) {
  return tags.map(({ name, hex }) => (
    <Badge key={name} mr={1} variant="subtle" colorScheme={badgeColors[hex]}>
      {name}
    </Badge>
  ));
}
