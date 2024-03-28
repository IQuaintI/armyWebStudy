import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Fractures() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Fractures",
      sections: [
        {
          question: "What is a fracture?",
          answer: [
            "A fracture is a break in the continuity of a bone.",
            "Closed fractures are those in which the skin is not broken.",
            "Open fractures are those in which the skin is broken.",
            "Recovery is often without complication but the initial first aid is critical to this outcome.",
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

export default Fractures;
