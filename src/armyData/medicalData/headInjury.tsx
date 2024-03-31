import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function HeadInjury() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Closed Head Injury",
      sections: [
        {
          question: "What are signs of a closed head injury?",
          answer: [
            "Deformity of the skull",
            "Blood or clear fluid leaking from the ears or nose",
            "Bruising behind the ears (battle signs)",
            "Bruising around the eyes (raccoon eyes)",
            "Casualty pulse is slow even if the casualty has not lost a lot of blood",
          ],
        },
        {
          question: "What are signs of rising intracranial pressure?",
          answer: [
            "Change in pupil size and symmetry",
            "Respiratory distress and an elevated blood pressure",
            "Headaches and potential unconsciousness",
            "Nausea and vomiting",
            "Restlessness (sign of inadequate oxygen) and loss of motor function",
            <span>
              <strong>
                Loss of motor functions does not need to occur immediately after
                and can develop over time!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a concussion?",
          answer: [
            "It is a temporary loss of brain function that can be followed by a loss of consciousness.",
            <span>
              <strong>A direct blow to the skull can bruise the brain!</strong>
            </span>,
          ],
        },
        {
          question: "What is a contusion?",
          answer: [
            "A contusion is a bruise on the brain that may lead to internal bleeding, swelling, and death.",
          ],
        },
      ],
    },
    {
      heading: "Open Head Injury",
      sections: [
        {
          question: "What are signs of an open head injury?",
          answer: [
            "Penetrating wound (no exit wound) or Perforating wound (exit wound).",
            "Deformed skull and exposed brain tissue.",
            "Paralysis or unconsciousness.",
            "Lacerated scalp.",
            "Pupil dilation",
          ],
        },
      ],
    },
    {
      heading: "Treatment",
      sections: [
        {
          question: "How do you stabilize a head injury?",
          answer: [
            "Place your hands on both sides of the casualty's head and hold it still.",
          ],
        },
        {
          question: "How do you asses a casualty's level of consciousness?",
          answer: [
            "Is the casualty alert?",
            "Does the casualty respond to verbal commands?",
            "Does the casualty respond to pain?",
            "Is the casualty unresponsive?",
            <span>
              <strong>
                AVPU (Alert, Verbal, Pain, Unresponsive) is a way to remember
                the levels of responsiveness!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you treat a superficial head injury?",
          answer: ["Dress the wound and watch the casualty for complications."],
        },
        {
          question: "How do you treat a traumatic head injury?",
          answer: [
            "Maintain an open airway and dress the wound.",
            "Monitor the casualty for signs of shock and seek immediate medical attention.",
            <span>
              <strong>Do NOT apply pressure to brain tissue!</strong>
            </span>,
            <span>
              <strong>Do NOT give the casualty anything orally!</strong>
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
              header="Head Injury"
              content={[
                "A head injury involves any trauma to the scalp, skull, or brain, ranging from a mild bump or bruise to a severe brain injury, potentially affecting brain function.",
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

export default HeadInjury;
