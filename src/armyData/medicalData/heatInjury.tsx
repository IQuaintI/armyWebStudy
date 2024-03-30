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
            <span>
              <strong>
                Open fractures are more serious than closed fractures because
                they are subject to infection!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a dislocation?",
          answer: [
            "A dislocation is the displacement of a bone from its joint.",
          ],
        },
        {
          question: "What is a sprain?",
          answer: ["A sprain is the stretching or tearing of ligaments."],
        },
        {
          question: "What are signs and symptoms of a fracture?",
          answer: [
            "Pain and tenderness",
            "Swelling and deformity",
            "Discoloration and loss of function",
            "Bleeding",
          ],
        },
      ],
    },
    {
      heading: "Splint",
      sections: [
        {
          question: "What is a split?",
          answer: [
            "A splint is a rigid device used to immobilize a fractured or dislocated bone.",
            "Splints do NOT impair circulation.",
            "Splints are held in place by bandages, tape or other materials that can be secured in the field.",
            <span>
              <strong>
                Use gloves to prevent infection when applying a splint!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Upper Extremities",
      sections: [
        {
          question: "How to split an upper extremity?",
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
