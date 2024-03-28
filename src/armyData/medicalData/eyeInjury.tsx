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
            "Check if the pupils are round and reactive to light.",
            "Check for any foreign objects in the eye.",
            <span>
              <strong>
                Only appropriate medical personnel should remove embedded
                foreign objects, while the casualty may remove superficial
                objects!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you a foreign object in the eye?",
          answer: [
            "Cover the eye with a paper cup or piece of cardboard to prevent further injury.",
            "Apply sterile dressing around the eye to hold the cup or cardboard in place.",
            "Cover the uninjured eye to prevent movement of the injured eye.",
            "Do NOT probe the eye or put pressure on it.",
            "Do NOT give suppressants to the casualty as it may mask symptoms which can be used to diagnose the injury.",
            "If treatment will not occur for longer than three hours, the casualty should be given antibiotics so long as it does not cause nausea.",
            <span>
              <strong>
                The eyes move in tandem an leaving the uninjured eye uncovered
                may cause the injured eye to move potentially causing further
                injury!
              </strong>
            </span>,
            <span>
              <strong>
                In hazardous conditions, the casualty should have the uninjured
                eye left uncovered to maintain situational awareness!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you use a eye shield?",
          answer: [
            "The eye shield should be used first before other covers are tried.",
            "NOTHING should be placed between the eye and the shield.",
            <span>
              <strong>
                Only appropriate medical personnel should remove embedded
                foreign objects, while the casualty may remove superficial
                objects.
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
