//Admin
import { Grid } from "@mui/material";
import Card from "../components/Card";
import "../css/Homepage.scss";

function HomePage() {
  const cards = [
    {
      title: "Armaments",
      link: "/testing",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Medical",
      link: "/medical",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 3",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 4",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="page-container">
      <Grid container id="body">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card title={card.title} image={card.image} link={card.link} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
