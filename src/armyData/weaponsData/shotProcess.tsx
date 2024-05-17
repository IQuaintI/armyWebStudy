import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function ShotProcess() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Engagement",
      sections: [
        {
          question: "What is a rifleman's primary goal?",
          answer: [
            "A rifleman's primary goal is to engage the enemy with well-aimed shots.",
            <span>
              <strong>
                A rifleman's marksmanship is judged not by their trigger speed,
                but by their ability to engage enemies with high precision and
                accuracy!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are the three fundamentals of marksmanship?",
          answer: [
            "Trigger Control - Trigger usage that does not disturb the sight picture.",
            "Sight Alignment - The relationship between the firer and the aiming device.",
            "Sight Picture - The relationship between the aiming device and the target.",
          ],
        },
      ],
    },
    {
      heading: "Shot Process",
      sections: [
        {
          question: "What are the phases of the shot process?",
          answer: ["Pre-Shot, Shot, and Post-Shot."],
        },
        {
          question: "What are the elements of the shot process?",
          answer: [
            "Aim - The process of aligning the weapon with the target.",
            "Stability - The Soldier provides a base for the weapon to disperse recoil.",
            "Control - The Soldier's conscious effort to manipulate the weapon to include safety, trigger control, and follow-through.",
            "Movement - The Soldier's ability to maneuver while maintaining the weapon's alignment with the target.",
            <span>
              <strong>
                The most complex shooting conditions is when both the shooter
                and target are moving under low-visibility!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Target Acquisition",
      sections: [
        {
          question: "What is target acquisition?",
          answer: [
            "Target acquisition is the process of discerning targets from friendly forces, non-combatants, and the environment.",
          ],
        },
        {
          question: "What are the elements of the shot process?",
          answer: [
            "Aim - The process of aligning the weapon with the target.",
            "Stability - The Soldier provides a base for the weapon to disperse recoil.",
            "Control - The Soldier's conscious effort to manipulate the weapon to include safety, trigger control, and follow-through.",
            "Movement - The Soldier's ability to maneuver while maintaining the weapon's alignment with the target.",
            <span>
              <strong>
                The most complex shooting conditions is when both the shooter
                and target are moving under low-visibility!
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
              header="Shot Process"
              content={[
                "The shot process is the sequence of events that take place from the time the firer decides to engage a target until the round is fired.",
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

export default ShotProcess;
