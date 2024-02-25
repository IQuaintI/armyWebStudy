/*

//Admin
import { Grid } from "@mui/material";
 import Carousel from "../../components/Carousel";
 import Accordion from "../../components/Accordion";
 import BlockQuote from "../../components/BlockQuote";

//CSS
import "../../css/Page.scss";

function Bleeding() {
  return (
    <Grid
      container
      id="page"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
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
            source="Source"
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
          <Accordion
            sections={[
              {
                question:
                  "Question",
                answer: [
                  "Answer",
                ],
              },
              {
                question:
                  "Question",
                answer: [
                  "Answer",
                ],
              },

              {
                question:
                  "Question", 
                answer: [
                  "Answer",
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Bleeding;
*/