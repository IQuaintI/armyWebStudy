import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Wobble() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Control",
      sections: [
        {
          question: "What is control in relation to shooting?",
          answer: [
            "Control is the totality of the a Soldier's ability to aim and fire their weapon.",
          ],
        },
        {
          question: "What is an arc of movement?",
          answer: [
            "The arc of movement or wobble is the sway of the weapon as the Soldier attempts to aim at a target.",
            "This occurs regardless of training, physical fitness, artificial support, or experience.",
            "The wobble can be vertical, horizontal, circular, or in a W pattern.",
          ],
        },
        {
          question: "What are the ways that a Soldier can minimize wobble?",
          answer: [
            "Breath control",
            "Trigger squeeze",
            "Follow-through",
            "Calling the shot (knowing where the round will hit before it does)",
            "Workspace",
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
              header="Arc of Movement"
              content={[
                "The arc of movement is the sway of the weapon as the Soldier attempts to aim at a target.",
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

export default Wobble;
