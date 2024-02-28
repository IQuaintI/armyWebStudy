import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";
import "../../css/Page.scss";

function AbdominalWounds() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "What to do for Abdominal Wounds",
      sections: [
        {
          question:
            "What is the most important concern in regards to abdominal injuries?",
          answer: [
            "Shock.",
            <strong>
              Warning: Shock may be not be present immediately and can develop
              later!
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
      ],
    },
    {
      heading: "Moving a Casualty with an Abdominal Wound",
      sections: [
        {
          question:
            "How should a casualty with an abdominal wound be positioned?",
          answer: [
            "On their backs with their knees flexed.",
            "If the casualty vomits, then the casualties head should be turned to the side.",
          ],
        },
        // More sections related to controlling bleeding...
      ],
    },
    // Additional topics...
  ];

  return (
    <>
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
                "Abdominal wounds are injuries to the belly area that can damage skin, muscles, and internal organs which require immediate medical attention for proper healing.",
              ]}
              source={["- TC 4-02.1 (2016)"]}
            />
          </Grid>
          <Grid item className="image">
            <Carousel
              image="https://www.placehold.it/550x350"
              alt="Placehold.it image"
            />
          </Grid>
          {topics.map((topic, index) => (
            <Grid item key={index} className="topic-container">
              <CustomAccordion topics={[topic]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default AbdominalWounds;
