import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function UnitsOfMeasurement() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Angular Measurements",
      sections: [
        {
          question: "What is a minute of angle (MOA)?",
          answer: [
            "A minute of angle is an angular measurement equal to 1/60th of a degree (about 1 inch at every 100 yards).",
            "This is often used when zeroing a weapon or adjusting sights.",
          ],
        },
        {
          question: "What is a MIL?",
          answer: [
            "A mil (milliradian) is an angular measurement equal to 1/6400th of a circle (1 mil at 100 meters is 10cm or about 4 inches).",
            "This is often used in direct and indirect fire.",
          ],
        },
      ],
    },
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
              header="Units of Measurement"
              content={[
                "Units of angular measurement are used to determine the direction of a target from the observer.",
              ]}
              source={["- TC 3-22.9"]}
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

export default UnitsOfMeasurement;
