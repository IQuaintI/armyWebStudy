import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function CarryPositions() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Carry Positions",
      sections: [
        {
          question: "What is a hang?",
          answer: [
            "In a hang position, the weapon is slung across the body, safety is on, and the hands are free.",
            "It is used when there are threat are not likely and is often used in non-tactical situations.",
            "While providing the most amount of freedom, it is the slowest to bring to bear.",
            "Command: Assume Hang!",
            <span>
              <strong>
                Do NOT carry a weapon in a hang when the weapon is on RED (There
                is a round in the chamber), because the selector switch may be
                accidentally bumped to SEMI/AUTO!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a safe hang?",
          answer: [
            "In a safe hang position, the weapon is slung across the body, safety is on, and a hand is placed on the grip.",
            "This allows the Soldier to ensure that the selector switch is not accidentally bumped and that the barrel is pointing to the ground.",
            "Command: Assume Safe Hang!",
          ],
        },
        {
          question: "What is the collapsed low ready position?",
          answer: [
            "In the collapsed low ready position, the weapon is unslung, both hands are in their respective positions, and the weapon is pointed at the ground.",
            "This allows for greater control over the weapon and is typically used when moving through crowded areas.",
            "Command: Assume Collapsed!",
          ],
        },
        {
          question: "What is the low ready position?",
          answer: [
            "In the low ready position, the weapon is unslung, both hands are in their respective positions, the butt stock is placed in the shoulder pocket, and the weapon is kept at a 45 degree angle.",
            'The thumb is placed on the selector switch ready to switch to "FIRE" if needed.',
            "Command: Go Low Ready!",
            <span>
              <strong>
                This allows for the greatest field of view, while maintaining
                weapon readiness!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the high ready position?",
          answer: [
            "In the high ready position, the weapon is unslung, both hands are in their respective positions, the butt stock is placed in the shoulder pocket, and the weapon is kept at a 45 degree angle facing upwards.",
            'The thumb is placed on the selector switch ready to switch to "FIRE" if needed.',
            "This position is used when the threat is overhead or when an elevated barrel is needed for safety.",
            "Command: Go High Ready!",
            <span>
              <strong>
                This position is less effective than the low ready position as
                it obstructs vision and takes longer to bring to bear!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the ready position?",
          answer: [
            "In the ready position, the weapon is unslung, both hands are in their respective positions, the butt stock is placed in the shoulder pocket, the weapon is pointing towards the threat, and the shooter is aiming down the sights.",
            'The weapon is the at the most ready and the selector switch is on "FIRE" with the finger off the trigger unless ready to fire.',
            "This position has the least amount of lateral awareness since the shooter is focused on the threat.",
            "Command: Make Ready!",
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
              header="Weapon Carry Positions"
              content={[
                "Weapon carry positions are the different ways to carry a weapon system.",
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

export default CarryPositions;
