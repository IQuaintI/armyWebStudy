import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function WeaponComponents() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Receivers",
      sections: [
        {
          question: "What does the upper receiver consist of?",
          answer: [
            "Ejection Port - Allows for the ejection of spent casings.",
            "Ejection Port Cover - Protects the internal components of the upper receiver from debris.",
            "Forward Assist - Allows the user to push the round into the chamber if it fails to seat properly.",
            "Slip Ring - A spring-locking mechanism that allows the user to remove the hand guards.",
            "Barrel - The tube that the bullet travels through.",
            "Flash Hider - Reduces the flash of the weapon and lowers barrel movement.",
            "Sling Swivel - The attachment point for the sling.",
            "Front Sight Assembly - The adjustable front sight post that is used to zero the weapon and often functions as a backup sight.",
            "Adapter Rail System - Allows for the attachment of accessories at a chosen length.",
          ],
        },
        {
          question: "What does the lower receiver consist of?",
          answer: [
            "Rifle Grip - An ambidextrous grip that allows the user to hold the weapon and mitigate recoil.",
            "Buttstock - Allows for shoulder placement and recoil mitigation.",
            "Magazine Catch - A spring-locked mechanism that allows the user to place and remove the magazine.",
            "Trigger Assembly - The mechanisms that allow the user to fire the weapon.",
            "Action spring - A spring that returns the bolt carrier back to the forward position.",
            "Lower Receiver Extension - Provides room for the action spring and buffer.",
            "Bolt Catch - A spring-locked mechanism that holds the bolt to the rear when the magazine is empty or when the user wants to lock the bolt to the rear.",
          ],
        },
      ],
    },
    {
      heading: "Cycle of Function",
      sections: [
        {
          question: "What is a cycle of function?",
          answer: [
            "A cycle of function is the process of a weapon undergoes when firing a round.",
          ],
        },
        {
          question: "What are the cycles of function for the M4 carbine?",
          answer: [
            "Feeding, Chambering, Locking, Firing, Unlocking, Extracting, Ejecting, and Cocking.",
            "The cycle begins when the bolt is locked to the rear, a magazine is inserted, and a round is chambered.",
          ],
        },
        {
          question: "What is FEEDING in the cycle of function?",
          answer: [
            "Feeding is the process of entering a round into the chamber.",
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
              header="Weapon Components"
              content={[
                "The M4 carbine is a 5.56mm, magazine-fed, gas-operated, air-cooled, shoulder-fired carbine.",
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

export default WeaponComponents;
