import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Safety() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Rules of Firearm Safety",
      sections: [
        {
          question: "What is the first rule of firearm safety?",
          answer: [
            "Treat every weapon as if it were loaded.",
            <span>
              <strong>
                This means treating weapons you know are unloaded the same way
                you would treat a loaded weapon!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the second rule of firearm safety?",
          answer: [
            "Never point a weapon at anything you do not intend to shoot.",
            <span>
              <strong>
                If this is not possible, then the amount of time the muzzle is
                pointed towards someone or something they do not intend to shoot
                should be minimized.
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the third rule of firearm safety?",
          answer: [
            "Keep your finger straight and off the trigger until you are ready to fire.",
            <span>
              <strong>
                You are the most important safety feature of any weapon!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the fourth rule of firearm safety?",
          answer: [
            "Ensure positive identification of the target and its surroundings.",
            <span>
              <strong>
                You are responsible for every round you fire including where it
                lands!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Safety Status",
      sections: [
        {
          question: "What is weapon safety status?",
          answer: [
            "It is a color used to represent the readiness of a weapon in regards to its munitions.",
          ],
        },
        {
          question: "What is weapon safety status GREEN?",
          answer: [
            "The weapon is on safe, the chamber is clear, the magazine is removed, and the bolt is forward or locked to the rear.",
          ],
        },
        {
          question: "What is weapon safety status AMBER?",
          answer: [
            "The weapon is on safe, the chamber is clear, and the magazine is inserted.",
            <span>
              <strong>
                It is not possible to go back to AMBER from RED or BLACK without
                first going to GREEN!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is weapon safety status RED?",
          answer: [
            "The weapon is on safe and the the bolt is forward with a round in the chamber.",
          ],
        },
        {
          question: "What is weapon safety status BLACK?",
          answer: ["The weapon is on fire with a loaded chamber."],
        },
      ],
    },
    {
      heading: "Control Status",
      sections: [
        {
          question: "What is weapon control status?",
          answer: [
            "It refers to the readiness of a weapon in regards to its anticipated use.",
            // Additional topics...
          ],
        },
        {
          question: "What does WEAPONS HOLD mean?",
          answer: [
            "Engage when ordered to do so or when engaged by the enemy.",
          ],
        },
        {
          question: "What does WEAPONS TIGHT mean?",
          answer: [
            "Engage only if the enemy has been positively identified as an enemy combatant.",
          ],
        },
        {
          question: "What does WEAPONS FREE mean?",
          answer: [
            "Engage only if the enemy has been positively identified as an enemy combatant.",
          ],
        },
      ],
    },
    {
      heading: "Overmatch",
      sections: [
        {
          question: "What is overmatch?",
          answer: [
            "The Soldiers ability to utilize theirs skills and equipment to defeat the enemy.",
          ],
        },
        {
          question: "What are the four attributes of overmatch?",
          answer: [
            "Lethal - The ability to kill or destroy the enemy.",
            "Precise - Consistent and accurate target engagement.",
            "Fast - Physical and mental outmaneuvering of the enemy.",
            "Smart - Understanding changes in the environment and adapting to them.",
          ],
        },
        {
          question: "What are the components of overmatch?",
          answer: [
            "Engagement Range",
            "Target Detection, Acquisition, and Identification",
            "Precision",
            "Limited Visibility",
            "Terminal performance",
            "Speed",
          ],
        },
        {
          question: "What is the engagement range?",
          answer: [
            "Soldiers require a weapon system that can engage the enemy at a range that is greater than the enemy's weapon system.",
            <span>
              <strong>
                Range overmatch is most useful in giving the Soldier greater
                time to utilize precision fires!
              </strong>
            </span>,
          ],
        },
        {
          question:
            "What is target detection, acquisition, and identification?",
          answer: [
            "Soldier must be able to detect, acquire, and identify targets at ranges further than the maximum effective range of their weapons.",
          ],
        },
        {
          question: "What is precision?",
          answer: [
            "Soldiers have to be well-trained to fully utilize the maximum effective range of their weapons and munitions.",
          ],
        },
        {
          question: "What is limited visibility?",
          answer: [
            "Soldiers must be able to engage targets in all light conditions and this is often done with the use of aiming devices that minimize limited visibility.",
            <span>
              <strong>
                Systems that allow for optical overmatch have shortcomings, so
                it is important that the Soldier is aware of what they are!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is speed?",
          answer: [
            "Soldiers must be able to identify, engage, and destroy targets as quickly as possible.",
            <span>
              <strong>Speed is built through training!</strong>
            </span>,
          ],
        },
        {
          question: "What is terminal performance?",
          answer: [
            "Soldiers must understand the ability and limitations of their ammunition to ensure that they can defeat the enemy.",
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
              header="Safety"
              content={[
                "Weapons safety involves adhering to strict guidelines and practices to handle, store, and use firearms or other weapons responsibly to prevent accidents and ensure the safety of all individuals involved.",
              ]}
              source={["- TC 3-22.9"]}
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

export default Safety;
