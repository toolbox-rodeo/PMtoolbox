import { Badge } from "@chakra-ui/react";
import NextLink from "next/link";
import { badgeColors } from "./constants";

// Each tag links to the home page, filtered by that tag (/?search=<tag>).
// `onSelect` lets the home page apply the filter right away, also when the
// URL already contains the same tag.
export default function TagList({ tags, onSelect }) {
  return tags.map(({ name, hex }) => (
    <Badge
      key={name}
      as={NextLink}
      href={{ pathname: "/", query: { search: name } }}
      onClick={onSelect && (() => onSelect(name))}
      title={`Show all posts tagged “${name}”`}
      mr={1}
      variant="subtle"
      colorScheme={badgeColors[hex]}
    >
      {name}
    </Badge>
  ));
}
