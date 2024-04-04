import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function AnaphylacticShock() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Signs and Treatments",
      sections: [
        {
          question: "What are signs of anaphylactic shock on the skin?",
          answer: [
            "Flushed or pale skin.",
            "Swelling of the face, lips, or throat.",
            "Hives or rash.",
            "Itching.",
          ],
        },
        {
          question:
            "What are signs of anaphylactic shock on the respiratory system?",
          answer: [
            "Coughing, wheezing, or difficulty breathing.",
            "Phlegm that may be blood-tinged.",
            "Dizziness, vomiting, and respiratory distress.",
            "Respiratory arrest may occur if not treated promptly.",
          ],
        },
        {
          question:
            "What are signs of anaphylactic shock on the circulatory system?",
          answer: [
            "Dizziness, fainting, or loss of consciousness.",
            "Weak, rapid pulse and low blood pressure.",
          ],
        },
        {
          question: "How do you treat anaphylactic shock?",
          answer: [
            "The casualty's auto-injector is to be used if available.",
            "Single dose of epinephrine (0.3 mg) is administered in accordance with the manufacturer's instructions.",
            "Additional doses may be administered every 5-10 minutes if symptoms persist .",
            "Put the casualty on their back and elevate their legs.",
            "Rescue breathing and chest compressions may be required.",
            <span>
              <strong>Immediate medical intervention is required!</strong>
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
              header="Anaphylactic Shock"
              content={[
                "Anaphylactic shock is a severe, life-threatening allergic reaction that causes widespread inflammation, airway constriction, and a dramatic drop in blood pressure, requiring immediate medical intervention.",
              ]}
              source={["- TC 4-02.1 (2016)"]}
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

export default AnaphylacticShock;
