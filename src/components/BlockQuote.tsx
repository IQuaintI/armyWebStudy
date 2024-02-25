import "../css/BlockQuotes.scss";

interface BlockQuoteProps {
  header?: string;
  content?: string[]; // Expecting an array of strings
  source?: string[]; // Expecting an array of strings
}

function BlockQuote({ header, content, source }: BlockQuoteProps) {
  // Ensure content and source are treated as arrays, even if undefined
  const safeContent = Array.isArray(content) ? content : [content].filter(Boolean);
  const safeSource = Array.isArray(source) ? source : [source].filter(Boolean);

  return (
    <blockquote className="blockquote">
      <h3>{header}</h3>
      {safeContent.map((item, index) => <p key={index}>{item}</p>)}
      <footer>
        {safeSource.map((item, index) => <cite key={index}>{item}</cite>)}
      </footer>
    </blockquote>
  );
}

export default BlockQuote;
