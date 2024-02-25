//Admin
import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

//CSS
import "../../css/Page.scss";

function AbdominalWounds() {
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
            header="Abdominal Wounds"
            content={[
              "Abdominal wounds are injuries to the belly area that can damage skin, muscles, and internal organs which require immediate medical attention.",
            ]}
            source={["- TC 4-02.1 (2016) Chapter 17"]}
          />
        </Grid>
        <Grid item className="image">
          <Carousel
            image="https://www.placehold.it/550x350"
            alt="applying a tourniquet to a casualty's leg."
          />
        </Grid>
        <Grid item>
          <Accordion
            sections={[
              {
                question:
                  "What is the most important concern in regards to abdominal injuries?",
                answer: [
                  "Shock.",
                  <strong>
                    Warning: Shock may be not be present immediately and can
                    develop later!
                  </strong>,
                  "Always treat for shock regardless if the casualty has a wound or notify the casualty has an abdominal wound.",
                ],
              },
              {
                question:
                  "What should you NOT do when dealing with a casualty with an abdominal wound?",
                answer: [
                  "Do NOT apply pressure to the wound or exposed organs",
                  "Do NOT attempt to push any exposed organs back into the body",
                  "Do NOT give the casualty anything by mouth",
                  "Do NOT remove any impaled objects",
                  "Do NOT tie any dressing tails tightly or directly over the wound",
                ],
              },

              {
                question:
                  "How should a casualty with an abdominal wound be positioned?",
                answer: [
                  "On their backs with their knees flexed.",
                  "If the casualty vomits, then the casualties head should be turned to the side.",
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AbdominalWounds;
