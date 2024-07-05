import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function TriggerControl() {
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
    {
      heading: "Trigger Control",
      sections: [
        {
          question: "What is the importance of stability in trigger control?",
          answer: [
            "The easier it is to control the weapon, the easier it is to maintain a consistent smooth trigger squeeze.",
          ],
        },
        {
          question: "Where is finger placed on the trigger?",
          answer: [
            "There is no specific place for finger placement, instead the Soldier rests their finger where it is most comfortable for them.",
            "The trigger is pulled in a smooth manner and the Soldier maintains a consistent sight picture during trigger reset.",
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
    {
      heading: "Breath Control",
      sections: [
        {
          question: "What is breathing control?",
          answer: [
            "The body moves with each breath, causing the weapon to move as well - breathing with the intent to minimize movement is breathing control.",
            <span>
              <strong>
                Firing on the natural respiratory pause is the most common
                breathing technique.
              </strong>
            </span>,
          ],
        },
        {
          question: "What issue is caused by a lack of breathing control?",
          answer: [
            "Vertical movement during the firing process is caused by a lack of breathing control.",
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
              header="Trigger Control"
              content={[
                "Trigger control is the act of manipulating the trigger to fire the weapon without disturbing the sight picture.",
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

export default TriggerControl;
