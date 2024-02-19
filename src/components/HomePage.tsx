//Admin
import { Grid } from "@mui/material";
import Card from "../components/Card";

//CSS

//Images
// import heroBanner from "/heroBanner.png";

function HomePage() {
  const cards = [
    {
      title: "Title 1",
      subtitle: "Subtitle 1",
      link: "/testing",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 2",
      link: "/page",
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
    {
      title: "Title 5",
      link: "https://www.bing.com",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      {/* Body */}
      <Grid
        container
        id="body"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              title={card.title}
              content={`Content ${index + 1}`}
              image={card.image}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
