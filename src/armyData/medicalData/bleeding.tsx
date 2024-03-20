import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Bleeding() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Checking for Bleeding",
      sections: [
        {
          question: "How do you check a casualty for bleeding?",
          answer: [
            "Check for blood on the casualty's clothing and equipment.",
            "Check for blood on the ground around the casualty.",
            "Do a blood sweep of the casualty's extremities.",
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
            <span>
              Pack gaping wounds with sterile gauze{" "}
              <strong>
                (Do NOT pack wounds in the torso area - It will do nothing!)
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you apply a pressure dressing?",
          answer: [
            "Apply the dressing with the white sterile side over the wound.",
            "Wrap the elastic portion around the limb and then once the wound is covered, run the excess through the pressure bar.",
            <span>
              Wrap the remaining tail in reverse until tight.{" "}
              <strong>
                (The dressing should be tight but not enough to cut off
                circulation!)
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you apply a tourniquet?",
          answer: [
            <span>
              If the bleeding has been deemed life-threatening, apply a
              tourniquet{" "}
              <strong>
                (In combat, the tourniquet is the primary means of dealing with
                blood loss!)
              </strong>
              ,
            </span>,
            "Pull the strap through the buckle and place the tourniquet around the limb.",
            "Place the tourniquet 2-3 inches above the wound.",
            "Tighten the tourniquet until the bleeding stops then secure the windlass.",
            `Mark the casualty's forehead with a "T" and the time the tourniquet was applied.`,
            "Tape the tourniquet to the casualty's limb to prevent it from moving in transit.",
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
              header="Bleeding"
              content={[
                "Bleeding is the loss of blood from the body. It can be external or internal and can occur in various parts of the body.",
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

export default Bleeding;
