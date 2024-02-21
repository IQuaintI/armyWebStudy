import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import Accordion from "./Accordion";
import BlockQuote from "./BlockQuote";
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

      {/* Use the class names from Page.scss */}
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
            header="CPR"
            content="What it is."
            source="Source of the CPR"
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
