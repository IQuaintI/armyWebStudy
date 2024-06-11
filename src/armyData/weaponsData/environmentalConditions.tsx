import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function EnvironmentalConditions() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Wind",
      sections: [
        {
          question: "Why is wind important to consider when shooting?",
          answer: [
            "Wind has the greatest effect on the trajectory of a bullet outside of firer error.",
            "It can push bullets off target and slow them down.",
          ],
        },
        {
          question: "What is wind direction and value?",
          answer: [
            "Wind blowing from one direction will push the bullet in the opposite direction - this is the wind direction.",
            "The value of the wind is the effect it has on the bullet's trajectory.",
            "Wind that blows from 2 - 4 o'clock and wind that blows from 8 - 10 o'clock is considered a full value wind (Wind is calculated at it's full speed).",
            "Wind that blows from 1,5,7, and 11 o'clock is considered a half value wind (Wind is calculated at half-speed ).",
            "Wind that blows from 12 and 6 o'clock has no effect on the bullet (Wind is not calculated).",
          ],
        },
        {
          question: "Where is wind speed determined?",
          answer: [
            "Wind speed is determined by calculating the average speed at the midpoint between the firer and the target.",
            "The wind speed at this point has the most effect since the bullet will have lost much of its once it passes its apex.",
          ],
        },
        {
          question: "How can wind speed be determined?",
          answer: [
            "0-3 mph - Barely noticeable, but smoke drifts.",
            "3-5 mph - Can feel it on your face.",
            "5-8 mph - Leaves rustle.",
            "8-12 mph - Loose paper blows around and dust drifts.",
            "12-15 mph - Small trees sway.",
          ],
        },
        {
          question:
            "What are the bullet compensations for wind speeds from 0-5 mph?",
          answer: [
            "100m - Aim Center of Visible Mass (CVM) of the target.",
            "200m - Aim Center of Visible Mass (CVM) of the target.",
            "300m - Aim Center of Visible Mass (CVM) of the target.",
            "400m - Aim Center of Visible Mass (CVM) of the target.",
            "500m - Aim 1/4 favor of the direction of movement (Aim in between the center and edge).",
          ],
        },
        {
          question:
            "What are the bullet compensations for wind speeds between 6-10 mph?",
          answer: [
            "100m - Aim 1/4 favor of the direction of movement (Aim in between the center and edge).",
            "200m - Aim 1/2 edge of the direction of movement (Aim at the edge).",
            "300m - Aim 1/2 edge of the direction of movement (Aim at the edge).",
            "400m - Aim 1 form of the direction of movement (Imagine a copy side-by-side with the moving target and at that center).",
            "500m - Aim 1 form of the direction of movement (Imagine a copy side-by-side with the moving target and at that center).",
          ],
        },
      ],
    },
    {
      heading: "Limited Visibility",
      sections: [
        {
          question:
            "How does a Soldier deal with shooting in limited visibility?",
          answer: [
            "The Soldier is expected to use the same fundamentals of marksmanship as in daylight and be comfortable with using a variety of aiming devices.",
            "If the target is lost, the Soldier can aim at where the target is expected to be and hold until the target is visible again to allow for rapid reacquisition.",
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
              header="Environmental Conditions"
              content={[
                "Environmental conditions are external factors that can affect the trajectory of a bullet.",
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

export default EnvironmentalConditions;
