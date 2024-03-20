import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Shock() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "What to do in the event of shock?",
      sections: [
        {
          question: "What are some signs and symptoms of shock?",
          answer: [
            "Pale, cold, clammy skin.",
            "Restlessness, nausea, and an altered mental state.",
            "Severe blood loss",
          ],
        },
        {
          question:
            "How do you position a casualty that is going through shock?",
          answer: [
            "Move them out of direct sunlight and lay them in a position that allows for easy breathing.",
            "Elevate their legs above their heart and loosen any tight clothing.",
            "Wrap the casualty as to prevent heat loss and provide reassurance.",
            <span>
              <strong>
                Do NOT place the casualty on the ground as this can increase
                heat loss and do NOT loosen the clothing if in a chemical
                environment!
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
              header="Shock"
              content={[
                "Shock is a critical condition where blood circulation decreases drastically, impairing the delivery of oxygen and nutrients to the body's tissues, potentially leading to organ failure.",
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

export default Shock;
