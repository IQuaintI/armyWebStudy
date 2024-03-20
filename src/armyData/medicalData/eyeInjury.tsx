import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function EyeInjury() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Assessment and Treatment of Eye Injuries",
      sections: [
        {
          question: "How do you asses an eye injury?",
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
              header="Eye Injury"
              content={[
                "Eye injuries can range from minor irritations, such as scratches to the cornea, to severe trauma potentially leading to vision loss or permanent damage to the eye.",
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

export default EyeInjury;
