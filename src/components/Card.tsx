import { Link } from "react-router-dom";
import "../css/Card.scss";

export interface CardProps {
  image?: string;
  title: string;
  content?: string;
  link: string;
}

function Card({ image, title, content, link }: CardProps) {
  // Check if the link is an internal route
  const isInternalLink = link.startsWith("/");

  const cardContent = (
    <div className="card">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={title}
        className="cardImage"
      />
      <div className="card-body">
        <h5 className="cardTitle">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );

  // Render the card content wrapped in a Link for internal routes or an anchor tag for external URLs
  return isInternalLink ? (
    <Link to={link}>{cardContent}</Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
}

export default Card;
