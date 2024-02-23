import "../css/BlockQuotes.scss";

interface BlockQuoteProps {
  header?: string;
  content?: string;
  source?: string;
}

function BlockQuote({ header, content, source }: BlockQuoteProps) {
  return (
    <blockquote className="blockquote">
      <h3>{header}</h3>
      <p>{content}</p>
      <footer>
        <cite>{source}</cite>
      </footer>
    </blockquote>
  );
}

export default BlockQuote;
