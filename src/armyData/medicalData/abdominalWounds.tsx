//Admin
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

//CSS
import "../css/Page.scss";

function Page() {
  return (
    <Grid
      container
      id="page"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={3} md={3} lg={2} className="left-container">
        <Sidebar items={[{ title: "Home", href: "/" }]} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={9}
        md={9}
        lg={10}
        container
        direction="column"
        className="right-container"
      >
        <Grid item className="item-spacing">
          <BlockQuote
            header="Header"
            content="Content"
            source="Source of the Content"
          />
        </Grid>
        <Grid item className="item-spacing">
          <Carousel
            images={[
              { src: "https://via.placeholder.com/800x400?text=1", alt: "1" },
              { src: "https://via.placeholder.com/800x400?text=2", alt: "2" },
              { src: "https://via.placeholder.com/800x400?text=3", alt: "3" },
            ]}
          />
        </Grid>
        <Grid item>
          <Accordion />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page;
