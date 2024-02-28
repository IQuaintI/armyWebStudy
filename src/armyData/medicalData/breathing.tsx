import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Breathing() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "How to Open the Airway",
      sections: [
        {
          question: "How do you position a casualty to open the airway?",
          answer: [
            "Place the casualty on their back and kneel besides them. (Ensure that the body is not twisted if movement is necessary.)",
            "Raise the casualty's arm closest to you above their head and align their legs.",
            "Place a hand on the back of the casualty's head and neck .",
            "Check for blood in the casualty's mouth, nose, and ears.",
            "If the casualty is conscious, ask where it hurts.",
          ],
        },
      ],
    },
    {
      heading: "Controlling Bleeding",
      sections: [
        {
          question: "What are the three ways to control bleeding?",
          answer: ["Direct Pressure.", "Pressure Dressing.", "Tourniquet."],
        },
        {
          question: "How do you apply direct pressure?",
          answer: [
            "Expose the wound and place a sterile dressing over the wound.",
            "Apply pressure directly over the wound.",
            "Pack gaping wounds with sterile gauze.",
            <strong>
              Do NOT pack wounds in the torso area - It will do nothing!
            </strong>,
          ],
        },
        {
          question: "How do you apply a pressure dressing?",
          answer: [
            "Apply the dressing with the white sterile side over the wound.",
            "Wrap the elastic portion around the limb and then once the wound is covered, run the excess through the pressure bar.",
            "Wrap the remaining tail in reverse until tight.",
            <strong>
              The dressing should be tight but not enough to cut off
              circulation.
            </strong>,
          ],
        },
        {
          question: "How do you apply a tourniquet?",
          answer: [
            "If the bleeding has been deemed life-threatening, apply a tourniquet.",
            "Pull the strap through the buckle and place the tourniquet around the limb.",
            "Place the tourniquet 2-3 inches above the wound.",
            "Tighten the tourniquet until the bleeding stops then secure the windlass.",
            `Mark the casualty's forehead with a "T" and the time the tourniquet was applied.`,
            "Tape the tourniquet to the casualty's limb to prevent it from moving in transit.",
            <strong>
              In combat, the tourniquet is the primary means of dealing with
              blood loss.
            </strong>,
          ],
        },
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
              header="Airway"
              content={[
                "Opening the airway involves tilting the head back and lifting the chin to ensure that the breathing passage is clear and unobstructed for air to flow freely.",
              ]}
              source={["- TC 4-02.1 (2016) / STP 21-1-SMCT (2015)"]}
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

export default Breathing;
