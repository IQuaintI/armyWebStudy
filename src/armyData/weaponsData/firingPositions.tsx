import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function FiringPositions() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Firing Positions",
      sections: [
        {
          question: "What are the different types of firing positions?",
          answer: [
            "There are 12 different firing positions that Soldiers can use to engage targets.",
            "Standing: Supported and Unsupported",
            "Kneeling: Supported and Unsupported",
            "Prone: Supported, Unsupported, Roll-Over, and Reverse Roll-Over",
            "Sitting: Open leg, Crossed leg, and Crossed ankle",
            "Squatting",
          ],
        },
        {
          question: "Elaborate on standing unsupported.",
          answer: [
            "Standing unsupported is the most unstable position and leaves the shooter most exposed to enemy fire.",
            "This position is used when the shooter needs to engage a target quickly and does not have time to assume a more stable position.",
            <span>
              <strong>Lean into the weapon to help stabilize it!</strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on standing supported.",
          answer: [
            "",
            <span>
              <strong>The handguard touches the support NOT the barrel!</strong>
            </span>,
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
              header="Firing Positions"
              content={[
                "Firing positions are the positions that Soldiers use to engage targets with their weapon systems.",
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

export default FiringPositions;
