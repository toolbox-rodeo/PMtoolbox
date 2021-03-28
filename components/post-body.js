import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className={markdownStyles['markdown']}>
      {documentToReactComponents(content.json)}
    </div>
  )
}
