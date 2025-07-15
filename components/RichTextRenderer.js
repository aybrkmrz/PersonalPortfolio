// components/RichTextRenderer.js
export default function RichTextRenderer({ content }) {
  if (!Array.isArray(content)) return null;

  const renderText = (children) => {
    return children.map((child, index) => {
      let text = child.text;

      if (child.bold) text = <strong key={index}>{text}</strong>;
      if (child.italic) text = <em key={index}>{text}</em>;
      if (child.underline) text = <u key={index}>{text}</u>;

      return <span key={index}>{text}</span>;
    });
  };

  const renderNode = (node, index) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-4 leading-7 text-lg">
            {renderText(node.children)}
          </p>
        );
      case "heading":
        return (
          <h2 key={index} className="text-3xl font-bold my-4">
            {renderText(node.children)}
          </h2>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 pl-4 italic text-gray-600"
          >
            {renderText(node.children)}
          </blockquote>
        );
      case "list-item":
        return <li key={index}>{renderText(node.children)}</li>;
      default:
        return (
          <p key={index} className="mb-4">
            {renderText(node.children)}
          </p>
        );
    }
  };

  return <div className="prose prose-lg max-w-none">{content.map(renderNode)}</div>;
}
