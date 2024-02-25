import "../css/Carousel.scss";

interface StaticImageProps {
  image: string; // Assuming you want to display just one image
  alt: string; // Alt text for the image
}

function Carousel({ image, alt }: StaticImageProps) {
  return <img id="carousel" src={image} alt={alt} />;
}

export default Carousel;
