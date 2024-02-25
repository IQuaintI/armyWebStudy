//Admin
import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

//CSS
import "../../css/Page.scss";

function AbdominalWounds() {
  return (
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
        <Grid item>
          <Accordion
            sections={[
              {
                question: "What are the three ways to control bleeding?",
                answer: [
                  "Direct Pressure.",
                  "Pressure Dressing.",
                  "Tourniquet.",
                ],
              },
              {
                question: "How do you apply direct pressure?",
                answer: [
                  "Expose the wound and place a sterile dressing over the wound.",
                  "Apply pressure directly over the wound.",
                  "Pack gaping wounds with sterile gauze .",
                  <strong>
                    Do NOT pack wounds in the torso area - It will do nothing!
                  </strong>,
                ],
              },

              {
                question: "How do you apply a pressure dressing?",
                answer: [
                  "Apply the white side of the dressing over the wound.",
                  "Wrap the elastic bandage around the dressing and feed it through the pressure bar.",
                  "Reverse wrap the remainder of the tail over the wound while maintaining pressure.",
                  "Secure the tail with a knot or clip.",
                  <strong>
                    The dressing should be tight, but not tight enough to cause
                    a tourniquet-like effect (There should still be a pulse on
                    the limb).
                  </strong>,
                ],
              },

              {
                question: "How do you apply a tourniquet?",
                answer: [
                  "Pull the free end of the tourniquet though the buckle to create a ring.",
                  "Place the tourniquet two to three inches above the wound.",
                  "Tighten the band and fasten as tight as possible.",
                  "Secure the windlass in place.",
                  "Assess for a pulse below the tourniquet (There should NOT be one).",
                  "Place a T and the time the tourniquet was applied on the casualty's forehead.",
                ],
              },

              {
                question:
                  "Whose medical equipment do you use when handling a casualty?",
                answer: ["The casualty's medical equipment."],
              },

              {
                question: "When should a tourniquet be used?",
                answer: [
                  "Whenever the bleeding as been deemed life threatening.",
                ],
              },

              {
                question: "If bleeding per?",
                answer: [
                  "Preventing shock.",
                  <strong>
                    Warning: Shock may be not be present immediately and can
                    develop later!
                  </strong>,
                  "Always treat for shock regardless if the casualty has a wound or notify the casualty has an abdominal wound.",
                ],
              },
              {
                question: "When applying hemostatic dressing, how long does pressure need to be applied until it activates?",
                answer: [
                  "At least three minutes.",
                ],
              },
              {
                question: "What should you do if you suspect internal bleeding?",
                answer: [
                  "Monitor the casualty's airway, breathing, and circulation.",
                  "Keep the casualty warm and calm.",
                  "Seek medical attention as soon as possible.",
                ],
              }
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AbdominalWounds;
