//Admin
import { Grid } from "@mui/material";
import Header from "./components/Header";
import Card from "./components/Card";

//CSS
import "./css/App.scss";

//Images
// import heroBanner from "/heroBanner.png";

function App() {
  const cards = [
    {
      title: "Title 1",
      link: "https://www.google.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 2",
      link: "https://www.google.com",
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
      {/* Header */}
      <Grid
        container
        id="header"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Header
            title="ACS"
            subtitle="Explore ACS"
            home="Home"
            sections={cards} // Passing the combined titles and links
          />
        </Grid>
      </Grid>

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

export default App;
