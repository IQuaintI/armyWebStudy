import "../css/Card.scss";

interface CardProps {
  image?: string;
  title?: string;
  content?: string;
  link?: string;
}

function Card({ image, title, content, link }: CardProps) {
  return (
    <>
      <div className="card">
        <img
          src={image ? image : "https://via.placeholder.com/150"}
          className="cardImage"
          alt="..."
          onClick={() => {
            link
              ? (window.location.href = link)
              : console.log("No link provided");
          }}
        />
        <div className="card-body">
          <h5 className="cardTitle">{title ? title : "Card title"}</h5>
          <p className="card-text">
            {content
              ? content
              : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
