import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function CarbonMonoxidePoisoning() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Signs and Treatments",
      sections: [
        {
          question: "What is carbon monoxide poisoning?",
          answer: [
            "Carbon monoxide is a colorless, odorless, and tasteless gas that is produced by the incomplete combustion of carbon-containing materials.",
            "It is often caused by faulty heating systems and indoor use of stoves, fires, or combustion engines.",
          ],
        },
        {
          question: "What are symptoms of carbon monoxide poisoning?",
          answer: [
            "Headaches, dizziness, weakness, upset stomach, vomiting, chest pain, and confusion.",
            "If someone is found unconscious in an enclosed area, then it is safe to assume that carbon monoxide poisoning may be a cause.",
          ],
        },
        {
          question: "What is the treatment for carbon monoxide poisoning?",
          answer: [
            "The first step is to remove the individual from the source of carbon monoxide.",
            "Keep them warm and if they are not breathing, administer mouth-to-mouth resuscitation and chest compressions.",
          ],
        },
        {
          question: "How do you prevent carbon monoxide poisoning?",
          answer: [
            "Use stove and heaters properly, and have them inspected regularly.",
            "Do not warm up with an engine exhaust.",
            "Shut off stove and heaters before going to bed.",
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
              header="Carbon Monoxide Poisoning"
              content={[
                "Carbon monoxide poisoning occurs when carbon monoxide gas is inhaled, preventing oxygen from being transported in the blood, leading to tissue damage and potentially fatal outcomes.",
              ]}
              source={["- TC 21-3 (1986)"]}
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

export default CarbonMonoxidePoisoning;
