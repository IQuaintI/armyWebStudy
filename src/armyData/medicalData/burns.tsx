import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Burns() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Burns",
      sections: [
        {
          question: "What do you do for a thermal burn?",
          answer: [
            "Remove the casualty from the source of the burn and if the casualty's clothes are on fire cover them with a large piece of non-synthetic material then roll them around.",
          ],
        },
        {
          question: "What do you do for a chemical burn?",
          answer: [
            "Flush liquid chemicals from the casualty with water.",
            "Remove dry chemicals with a dry cloth or flush with water.",
            "Burns caused by white phosphorus should be covered with a wet cloth and then flushed with water.",
          ],
        },
        {
          question: "What do you do for an electrical burn?",
          answer: [
            <span>
              Ensure the power source is off before approaching the casualty{" "}
              <strong>
                (If you touch the casualty or electrical source, you can be
                injured!)
              </strong>
            </span>,
            "If the electricity cannot be turned off, then use non-conductive material to move the electrical source or casualty away from each other.",
          ],
        },
      ],
    },
    {
      heading: "How to Treat a Burn",
      sections: [
        {
          question: "How do you uncover a burn?",
          answer: [
            <span>
              Cut the cloth from the burned area and then remove the clothing{" "}
              <strong>
                (Do not remove clothing that is stuck to the burn or pull
                clothing over burns!)
              </strong>
            </span>,
            "If the casualty has burns on their wrists or hands, remove jewelry and place them in their pocket.",
          ],
        },
        {
          question: "How do you dress a burn?",
          answer: [
            "Apply the dressing over the wound but do NOT wrap the til over the wound.",
            "The bandage should be snug as to not slip but not tight.",
            "If the casualty is conscious, offer them water to drink.",
            <span>
              <strong>
                Do NOT dress the face or genitals, do NOT apply ointments, and do NOT break blisters!
              </strong>
            </span>
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
              header="Burns"
              content={[
                "Burns are injuries to tissues caused by heat, chemicals, electricity, sunlight, or radiation, which can vary in severity from minor superficial damage to deep tissue destruction.",
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

export default Burns;
