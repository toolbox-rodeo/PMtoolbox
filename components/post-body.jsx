import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "../public/markdown-styles.module.css";

function renderOptions(links) {
  const assetMap = new Map();
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return <img src={asset.url} alt="My image alt text" />;
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
