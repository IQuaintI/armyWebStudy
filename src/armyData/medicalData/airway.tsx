import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Airway() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "How to Open the Airway",
      sections: [
        {
          question: "How do you position a casualty to open the airway?",
          answer: [
            "Place the casualty on their back and kneel besides them.",
            "Raise the casualty's arm closest to you above their head and align their legs.",
            "Place one hand on the back of the casualty's head and neck and another hand under the opposing side of the casualty's torso.",
            <span>
              Gently roll the casualty towards you{" "}
              <strong>
                (Ensure that the body is not twisted if movement is necessary.)
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you perform the Head-Tilt Chin-Lift?",
          answer: [
            <strong>
              Do NOT perform this if the casualty is suspected to have a neck or
              head injury!{" "}
            </strong>,

            "Place one hand on the casualty's forehead and apply firm, backward pressure with the palm.",
            "Place the fingertips of the other hand under the bony part of the lower jaw.",

            <span>
              <strong>
                Do not use the thumb to lift the chin, press into the soft
                tissue under the jaw, or close the casualty's mouth!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you perform the Jaw-Thrust Maneuver?",
          answer: [
            "Kneel behind the casualty's head and rest your elbows on the ground.",
            "Place one hand under on each side of the casualty's lower jaw right beneath each ear.",
            <span>
              <strong>
                Use the index fingers to push the lower jaw forward (Do NOT
                rotate the casualty's head).
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Checking for Breathing",
      sections: [
        {
          question: "What should you look for when checking for breathing?",
          answer: [
            "Look for the chest to rise and fall.",
            "Listen for air escaping during exhalation.",
            "Feel for the flow of air on the side of your face.",
          ],
        },
        {
          question: "How do you use a Nasal Pharyngeal Airway (NPA)?",
          answer: [
            "Place the casualty in the face-up position.",
            "Remove the NPA from sterile packaging and lubricate it (with water or the casualty's spit) if not pre-lubricated.",
            "Measure the NPA from the tip of the nose to the earlobe and cut the tube to size.",
            "Expose the right nostril and insert the tube so that the bevel is facing the septum.",
            <span>
              Advance the tube at a 90 degree angle towards the ground until the
              flange rests on the casualty's nostril{" "}
              <strong>(Do NOT force the tube).</strong>
            </span>,
            "Place the casualty in the recovery position and monitor the casualty",
          ],
        },
      ],
    },
    {
      heading: "Airway Obstruction",
      sections: [
        {
          question: "What do you do if there is an airway obstruction?",
          answer: [
            "If the casualty is capable of speaking, coughing, or breathing, do not interfere except to encourage.",
            "If the casualty is unable to speak or breathe, has a silent cough, or has skin that is turning blue, be ready to perform abdominal or chest thrusts.",
            "The casualty may be also asked if they are choking and if they nod, assist them.",
            // Additional topics...
          ],
        },
        {
          question: "How do you perform the Abdominal Thrust?",
          answer: [
            <span>
              <strong>
                Do NOT perform this if the casualty is pregnant, obese, or has a
                serious injury to the abdomen!
              </strong>
            </span>,
            "Stand behind the casualty and wrap your arms around their waist.",
            "Make a fist with one hand and place the thumb side of the fist against the casualty's abdomen, just above the navel and well below the breastbone.",
            "Grasp the fist with the other hand and press into the abdomen with a quick, upward thrust.",
            "Repeat until the object is expelled or the casualty becomes unconscious.",
          ],
        },
        {
          question: "How do you perform the Chest Thrust?",
          answer: [
            "Stand behind the casualty and wrap your arms under the casualty's armpits and around their chest.",
            "Make a fist with one hand and thrust until obstruction is cleared or the casualty becomes unconscious.",
          ],
        },
      ],
    },
    {
      heading: "Rescue Breathing",
      sections: [
        {
          question: "What are the two methods for rescue breathing?",
          answer: ["Mouth-to-Mouth", "Mouth-to-Nose"],
        },
        {
          question: "How do you perform Mouth-to-Mouth?",
          answer: [
            "Open the casualty's airway.",
            "Pinch the casualty's nose shut.",
            "Place your mouth over the casualty's mouth and give two full breaths.",
            "Check for chest rise and fall.",
          ],
        },
        {
          question: "How do you perform Mouth-to-Nose?",
          answer: [
            "Open the casualty's airway.",
            "Pinch the casualty's mouth shut.",
            "Place your mouth over the casualty's nose and give two full breaths.",
            "Check for chest rise and fall.",
          ],
        },

        {
          question: "How many breaths is an adult supposed to have per minute?",
          answer: ["12-20 breaths per minute"],
        },
        {
          question: "How many breaths is a child supposed to have per minute?",
          answer: ["15-30 breaths per minute"],
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
              header="Airway"
              content={[
                "Opening the airway involves tilting the head back and lifting the chin to ensure that the breathing passage is clear and unobstructed for air to flow freely.",
              ]}
              source={["- TC 4-02.1 (2016) / STP 21-1-SMCT (2015)"]}
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

export default Airway;
