import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function HeatInjury() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Heat Illnesses",
      sections: [
        {
          question: "What is a heat injury?",
          answer: [
            "It is a spectrum of conditions that occur when the body is unable to cool itself adequately.",
          ],
        },
        {
          question: "What are signs and symptoms of heat exhaustion?",
          answer: [
            "Headaches and dizziness",
            "Weakness and upset stomach",
            "Cramps, profuse sweating, and cool, clammy skin",
            <span>
              <strong>
                Heat cramps and and heat exhaustion are the warning signs of a
                heat stroke!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you treat heat exhaustion?",
          answer: [
            "Rest in shaded area",
            "Loosen clothing and remove gear",
            "Drink two quartz of water over one hour",
            "If conditions do not improve after 30 minutes, seek medical attention",
          ],
        },
        {
          question: "What are signs and symptoms of a heat stroke?",
          answer: [
            "Hot and dry skin (may be moist at the beginning)",
            "Dizziness and convulsions",
            "Respiratory distress and a weak, rapid pulse",
            "Confusion, combativeness, and unconsciousness",
          ],
        },
        {
          question: "How do you treat a heat stroke?",
          answer: [
            "Cool the body by any means necessary even if clothing needs to be removed",
            "Cool the body with cold water immersion",
            "Wrap the casualty in an ice sheet, but leave the face exposed",
            "Place ice packs in the armpits, neck and groin",
            "Stop cooling when the body starts to shiver",
            <span>
              <strong>Give NOTHING by mouth!</strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Hyponatremia",
      sections: [
        {
          question: "What is hyponatremia?",
          answer: [
            "Hyponatremia or water intoxication is a condition that occurs when the body's sodium levels are too low and can be mistaken for a heat injury",
            <span>
              <strong>This often occurs in initial entry training!</strong>
            </span>,
          ],
        },
        {
          question: "What are signs and symptoms of hyponatremia?",
          answer: [
            "Altered mental status",
            "Vomiting, clear urine, and bloating",
            "Lack of food consumption and a history of over-hydration",
          ],
        },
        {
          question: "How do you treat hyponatremia?",
          answer: [
            "If the casualty is conscious, give salty foods",
            "If the casualty is unconscious, seek medical attention",
            <span>
              <strong>Do NOT give water or IV fluids!</strong>
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
              header="Heat Injuries"
              content={[
                "Heat illnesses range from mild conditions like heat cramps to severe ones such as heat exhaustion and heat stroke, caused by prolonged exposure to high temperatures and dehydration, impairing the body's ability to regulate temperature.",
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

export default HeatInjury;
