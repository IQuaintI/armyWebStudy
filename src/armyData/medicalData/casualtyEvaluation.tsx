import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function CasualtyEvaluation() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Care Under Fire",
      sections: [
        {
          question: "How do you preform care under fire?",
          answer: [
            "Return fire as needed",
            "Tell the casualty to return fire, move to cover, apply self-aid if able, or play dead if unable to move.",
            "Approach the casualty in pairs and stop any life-threatening bleeding with a tourniquet.",
            "Move the casualty and their equipment to cover if possible.",
            <span>
              <strong>Always re-asses tourniquets after every movement!</strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Tactical Field Care",
      sections: [
        {
          question: "How do you assess for bleeding in tactical field care?",
          answer: [
            "Assess the casualty's injuries and their level of consciousness.",
            "If they are conscious, ask them to describe their injuries and any pain they are experiencing.",
            "Re-asses the casualty's tourniquets and ensure they are still effective.",
            "Sweep the extremities (front and back) for bleeding and expose the wounds as needed.",
            "Place your hands behind the casualty's neck and work upwards looking for blood.",
            <span>
              <strong>
                If life-threatening bleeding is found, control the bleeding
                prior to moving on with the inspection!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you assess for breathing in tactical field care?",
          answer: [
            "Expose the chest, inspect the chest for any wounds, and look for the equal rise and fall of the chest.",
            <span>
              <strong>
                When inspecting the chest, place your ear over the casualty's
                mouth to feel and hear their breathing!
              </strong>
            </span>,
            <span>
              <strong>
                If wounds are located, stop the inspection, treat the wounds,
                and make sure to check for an exit wound!
              </strong>
            </span>,
            "Insert a nasopharyngeal airway if the casualty is breathing.",
            "Tend to any other non life-threatening injuries and reassess earlier work.",
          ],
        },
      ],
    },
    {
      heading: "Tactical Evacuation Care",
      sections: [
        {
          question: "How do you preform tactical evacuation care?",
          answer: [
            "Transport the casualty to the evacuation point and provide care as needed.",
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
              header="Casualty Evaluation"
              content={[
                "Casualty evaluation is the systematic process of assessing a victim's condition, including vital signs, injuries, and potential need for immediate medical intervention, to prioritize treatment and resources effectively.",
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

export default CasualtyEvaluation;
