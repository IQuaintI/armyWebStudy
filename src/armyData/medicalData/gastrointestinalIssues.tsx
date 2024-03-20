import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function GastrointestinalIssues() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Constipation",
      sections: [
        {
          question: "What is constipation?",
          answer: [
            "Constipation is the infrequent or difficult passage of hard stool.",
            "It is often caused by a lack of fiber in the diet, dehydration, or a lack of physical activity.",
            "In cold weather, personnel are less inclined to drink water and often resist the urge, which can lead to dehydration and constipation.",
          ],
        },
        {
          question: "What are some signs of constipation?",
          answer: ["Stomach cramps, headaches, and bloating."],
        },
        {
          question:
            "What are some treatments and preventions for constipation?",
          answer: [
            "Drink plenty of water and eat fruit.",
            "Prevention is the best treatment for constipation, but seek medical personnel if symptoms are persistent.",
          ],
        },
      ],
    },
    {
      heading: "Diarrhea",
      sections: [
        {
          question: "What is diarrhea?",
          answer: [
            "Diarrhea is the frequent passage of loose, watery stools.",
            "It is often caused by a viral or bacterial infection, parasites, or food poisoning.",
          ],
        },
        {
          question: "What are some signs of diarrhea?",
          answer: ["Abdominal pain, cramping, and dehydration."],
        },
        {
          question: "What are some treatments and preventions for diarrhea?",
          answer: [
            "Drink plenty of water and eat bland foods.",
            "Prevention is the best treatment for diarrhea, but seek medical personnel if symptoms are persistent.",
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
              header="Gastrointestinal Issues"
              content={[
                "Gastrointestinal issues encompass a range of disorders affecting the digestive tract, leading to symptoms such as abdominal pain, bloating, diarrhea, and constipation.",
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

export default GastrointestinalIssues;
