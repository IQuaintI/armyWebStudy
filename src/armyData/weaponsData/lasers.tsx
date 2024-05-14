import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Lasers() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Lasers",
      sections: [
        {
          question: "What is an pointer?",
          answer: [
            "A pointer is an infrared beam that provides a small dot on the target.",
            "It operates between 400 and 800 nanometers and can only be seen through I2 optics (night vision goggles or other image intensifiers).",
          ],
        },
        {
          question: "What is an illuminator?",
          answer: [
            "An illuminator is an infrared beam that provides a flood of light on the target and is often used in close quarters.",
            "It can be seen through I2 optics .",
          ],
        },
        {
          question: "What is a laser?",
          answer: [
            "A laser is a beam of light that is used to aim weapons and is visible to the naked eye.",
            "Some PEQs have a visible laser that is used for training purposes and can be seen during the day.",
            <span>
              <strong>
                Laser stands for Light Amplification by Stimulated Emission of
                Radiation but it is often used as a noun!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Laser Aiming Devices",
      sections: [
        {
          question: "What is a AN/PEQ-2?",
          answer: [
            "A AN/PEQ-2 is a laser aiming device that has both a precise and flood light beam with each beam being able to be zeroed independently.",
            "They are designed to be used alongside night vision goggles and can be be mounted to a weapon or held in the hand.",
            "It has an optical baffle that prevents off-site viewing and is powered by a pair of AA battery.",
            <span>
              <strong>
                AN/PEQ is a military designation that stands for: AN =
                Army/Navy, P = Portable, E = Laser, Q = Special or Combination!
              </strong>
            </span>,
            <span>
              <strong>The AN/PEQ-2 does NOT have a visible laser!</strong>
            </span>,
          ],
        },
        {
          question: "What is a AN/PEQ-15?",
          answer: [
            "A AN/PEQ-15 is a laser aiming device that has both a visible laser for close quarters engagements and an infrared laser for covert engagements that are zeroed together.",
            "They are designed to be used alongside night vision goggles and can be be mounted to a weapon or held in the hand.",
            <span>
              <strong>
                The AN/PEQ-15 does have a high power mode that is only yto be
                used when engaging targets at targets exceeding 220 meters!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a AN/PEQ-15A?",
          answer: [
            "A AN/PEQ-15 is a laser aiming device that has both a visible laser for close quarters engagements and an infrared laser for covert engagements that are zeroed together.",
            "They are designed to be used alongside night vision goggles and can be be mounted to a weapon or held in the hand.",
            <span>
              <strong>
                The AN/PEQ-15A has similar features to the AN/PEQ-15 but it has
                a redesigned chassis!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a AN/PSQ-23?",
          answer: [
            "The AN/PSQ-23 (colloquially referred  to as the STORM laser) is a a laser system with range finding capabilities and a digital magnetic compass.",
            "The range finder is accurate from 20m to 10,000m within 1.5m.",
            "The com
            "It has a visible laser for close quarters engagements and an infrared laser for covert engagements that are zeroed together.",
            "It features a an infrared illuminator that is zeroed differently from the lasers.",
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
              header="Lasers"
              content={[
                "Lasers are used to aim weapons and are used in conjunction with the aiming devices.",
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

export default Lasers;
