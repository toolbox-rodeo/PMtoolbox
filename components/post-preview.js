import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import Avatar from '../components/avatar'

export default function PostPreview({
  title,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </Box>
  )
}
