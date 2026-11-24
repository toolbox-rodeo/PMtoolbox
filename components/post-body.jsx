import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "../styles/markdown-styles.module.css";

function renderOptions(links) {
  const assets = new Map(
    (links?.assets?.block ?? []).map((asset) => [asset.sys.id, asset]),
  );

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assets.get(node.data.target.sys.id);
        if (!asset) return null;

        return (
          <img src={asset.url} alt={asset.description || asset.title || ""} />
        );
      },
    },
  };
}

export default function PostBody({ content }) {
  return (
    <div className={markdownStyles.markdown}>
      {documentToReactComponents(content.json, renderOptions(content.links))}
    </div>
  );
}
