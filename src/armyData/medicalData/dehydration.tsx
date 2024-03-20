import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Dehydration() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Signs and Treatments",
      sections: [
        {
          question: "What are symptoms of dehydration?",
          answer: [
            "Fatigue, dizziness, dry mouth, headache, and decreased urine output.",
          ],
        },
        {
          question: "How do you prevent dehydration?",
          answer: [
            "Drink water regularly even if you are not thirsty.",
            "Avoid alcohol and caffeine.",
            "Check urine color; if it is dark yellow or brown, then you are dehydrated.",
            "When operating in a cold environment, the recommended minimum water intake is 3.5 quartz per day.",
            <span>
              <strong>
                By the time you are thirsty, you are already dehydrated!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you treat dehydration?",
          answer: ["Drink water slowly.", "Rest in a cool area."],
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
              header="Dehydration"
              content={[
                "Dehydration is a condition resulting from excessive loss of body fluids, primarily water, surpassing the amount taken in, leading to impaired bodily functions.",
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

export default Dehydration;
