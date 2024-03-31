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
            "Sit the casualty up, support the fracture, remove restrictive articles, and expose the injury.",
          ],
        },
        {
          question: "How to splint a fractured wrist?",
          answer: [
            "A formable splint is folded to become double layered with one end being about 1 inch longer than the other.",
            "Roll the longer end towards the shorter end to form a cylinder.",
            "Shape the splint to the wrist and forearm by folding the splint around the wrist and forearm of the healthy arm.",
            "Place the splint on the injured wrist and forearm and tie one cravat (proximal) above and one below (distal) the wrist.",
            "Tie the cravats securely but not so tight as to impair circulation and cut the tails.",
            "Apply a sling and swathe to support the arm.",
          ],
        },
        {
          question: "How to splint an elbow fracture?",
          answer: [
            "The injured arm is placed in a V position across the torso.",
            "Fold a splint in half and then again across the long axis to form a V shape.",
            "Place the splint on the injured arm and secure it with cravats above and below the elbow.",
          ],
        },
        {
          question: "How to splint an elbow fracture?",
          answer: [
            "The injured arm is placed in a V position across the torso.",
            "Fold a splint in half and then again across the long axis to form a V shape.",
            "Place the splint on the injured arm and secure it with cravats above and below the elbow.",
          ],
        },
        {
          question: "How to splint a fractured long-bone (humerus)?",
          answer: [
            "Fold the splint so that there is about 12 inches of double sided splint.",
            "Support the casualty's arm into an L shape",
            "Place the splint on the injured arm and secure it with with elastic bandages taped over.",
            "Apply a sling and swathe to support the arm.",
          ],
        },
      ],
    },
    {
      heading: "Lower Extremities",
      sections: [
        {
          question: "How to split a lower extremity?",
          answer: [
            "Sit the casualty up, support the fracture, remove the foot gear and expose the injury.",
            "Check for distal pulses (wrist) and capillary refill (press the nail bed and see if it turns white and then pink again).",
            <span>
              <strong>
                Use manual traction to assist in pulse restoration and if it
                does not work, then splint the injury and evacuate the casualty
                immediately!
              </strong>
            </span>,
          ],
        },
        {
          question: "How to splint an ankle injury?",
          answer: [
            "Wrap the ankle in padding and fold a 36-inch splint in equal halves.",
            "Fold the sides of the splint to form a U shape.",
            "Place the splint over the injured ankle in the stirrup position (heel in the U).",
            "Secure the splint across the shin and calf with elastic bands and tape.",
          ],
        },
        {
          question: "How to splint a tibula and/or fibula fracture?",
          answer: [
            "Wrap the ankle in padding and keep the 36-inch in full length.",
            "Curve about 6 inches of the splint to form a J shape.",
            "Curve the rest of teh splint into a U shape.",
            "Do the same for a second splint.",
            "Apply the splint to the injured leg with the J splint on the inside of the leg and the U splint on the outside.",
            "Secure the splints with elastic bands and tape.",
            <span>
              <strong>Ensure that there is a pulse at the ankle!</strong>
            </span>,
          ],
        },
        {
          question: "How to splint a femur?",
          answer: [
            <span>
              <strong>
                Do NOT move the casualty unless absolutely necessary!
              </strong>
            </span>,
            <span>
              <strong>
                Do NOT attempt to straighten the leg or apply traction!
              </strong>
            </span>,
            <span>
              <strong>
                A broken femur is the most serious fracture and requires
                immediate medical attention!
              </strong>
            </span>,
            "Apply board splints along the length of the leg and ensure they are padded.",
            "Anatomical splints can be used, with the uninjured leg being used as a guide.",
            "Cravats are tied above and below the fracture site.",
            'The splint is secured to the torso via a "harness" of cravats and bandages.',
            "Check the distal pulse and check for swelling.",
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
