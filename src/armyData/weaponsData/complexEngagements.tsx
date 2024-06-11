import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function ComplexEngagements() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Hold",
      sections: [
        {
          question: "What is hold?",
          answer: [
            "Hold is the act of aiming the weapon at a specific point on the target to compensate for the effects of gravity, wind, and range.",
          ],
        },
        {
          question: "What is an immediate hold?",
          answer: [
            "Immediate holds are holds based without the use of ballistic computations.",
            "This is commonly used for targets within 300m.",
          ],
        },
        {
          question: "What is bullet compensation for an immediate hold?",
          answer: [
            "100m - Aim -1/4 low of the target's center mass (belly button).",
            "200m - Aim -1/4 low of the target's center mass (belly button).",
            "300m - Aim Center of Visible Mass (CVM) of the target.",
            "400m - Aim 1/2 head high of the target.",
            "500m - Aim 1 form over the head of the target.",
          ],
        },
        {
          question: "What is a deliberate hold?",
          answer: [
            "Deliberate holds are holds based on ballistic computations.",
            "This is commonly used for targets past 300m especially when the target is moving or obscured.",
          ],
        },
      ],
    },
    {
      heading: "Methods of Range Estimation",
      sections: [
        {
          question: "What is optimal in close quarters engagements?",
          answer: [
            "A close quarters engagement is one in which the target is within 50m of the firer.",
            "Overmatch is not based on perfect sight alignment but rapid acquisition of sight picture and target suppression.",
            <span>
              <strong>
                The larger rear sight aperture is recommended for close quarters
                engagements!
              </strong>
            </span>,
          ],
        },
        {
          question: "Explain the benefit of a range finder.",
          answer: [
            "The AN / PSQ-23 (STORM) is a range finder that can be used to determine the range to a target.",
            "It is especially useful for targets at distance due to its accurate range estimation.",
          ],
        },
        {
          question: "What is the front sight post method of range estimation?",
          answer: [
            "Targets at different ranges take up different amounts of space in the front sight post.",
            "If the target is wider than the front sight post, it is safe to assume the target is within 300m.",
            "If the target is narrower than the front sight post, it is safe to assume the target is past 300m.",
            <span>
              <strong>The battle sight zero is not effective past 300m!</strong>
            </span>,
          ],
        },
        {
          question: "What is the 100-meter method of range estimation?",
          answer: [
            "The shooter estimates how many 100m spaces (football fields) can fit between them and the target.",
            "This is a quick method, but's accuracy is dependent on the shooter's ability to estimate distance.",
            <span>
              <strong>
                Highly inefficient if spacing between the firer and target is
                obscured!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the recognition method of range estimation?",
          answer: [
            "The Soldier can estimate range based on how visible the features of the target are.",
            "100m - Facial features are easily distinguishable.",
            "200m - Facial features are less distinguishable, but skin color and equipment are visible.",
            "300m - Skin color of the face is visible, but the Soldier can clearly see the outline of the target.",
            "400m - Outline is clear but the Soldier cannot determine details.",
            "500m - Head and shoulders blend into each other as the outline becomes less clear.",

            <span>
              <strong>
                Highly inefficient if spacing between the firer and target is
                obscured!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Moving Targets",
      sections: [
        {
          question:
            "What are the bullet compensations for moving targets while the firer is walking?",
          answer: [
            "100m - Aim Center of Visible Mass (CVM) of the target.",
            "200m - Aim 1/4 favor of the direction of movement (Aim in between the center and edge).",
            "300m - Aim 1/2 edge of the direction of movement (Aim at the edge).",
            "400m - Aim 1 form of the direction of movement (Imagine a copy side-by-side with the moving target and at that center).",
            "500m - Deliberate hold based on the target's speed and direction of movement.",
          ],
        },
        {
          question:
            "What are the bullet compensations for moving targets while the firer is range walking?",
          answer: [
            "100m - Aim 1/4 favor of the direction of movement (Aim in between the center and edge).",
            "200m - Aim 1/2 edge of the direction of movement (Aim at the edge).",
            "300m - Aim 1 form of the direction of movement (Imagine a copy side-by-side with the moving target and at that center).",
            "400m - Deliberate hold based on the target's speed and direction of movement.",
            "500m - Deliberate hold based on the target's speed and direction of movement.",
          ],
        },
        {
          question: "What is an oblique moving target?",
          answer: [
            "An oblique moving target is one that is moving at an angle to the firer.",
            "To hit an oblique target, imagine the target moving on a line an aim down that line using the same bullet compensations as a moving target based on firer's movement.",
            <span>
              <strong>
                Oblique targets tend to appear to be moving slower than they
                really are!
              </strong>
            </span>,
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
              header="Complex Engagements"
              content={[
                "Complex engagements are any engagement where aiming center mass will not result in a hit.",
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

export default ComplexEngagements;
