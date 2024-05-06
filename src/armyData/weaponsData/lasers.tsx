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
            "Thermal sights detect heat signatures and replicate the temperature differences on a screen.",
          ],
        },
        {
          question: "What are the components of a thermal sight?",
          answer: [
            "User Controls - Used to adjust the thermal sensitivity, magnification, and contrast.",
            "Sensor Assembly - The sensor processes the video signals into an image that is displayed on the screen.",
            "Detector Assembly - The detector converts the heat signatures into video signals.",
            "LCD Eyepiece - The eyepiece displays the image to the user.",
            "Objective Lens - The lens receives the heat signatures and focuses them onto the detector.",
            <span>
              <strong>
                The detector can pick up differences as small as 1 degree
                Celsius!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the AN/PAS-13?",
          answer: [
            "The AN/PAS-13 is a series of thermal sights that are available for use on light, medium, and heavy weapons.",
            "They are small. lightweight, quiet, have a long batter life, and provide an image in real-time.",
            "They can be used on a variety of weapons and the G and F model can be attached to one another allowing for greater precision.",
            "The AN/PAS-13 can NOT view all ranges of the infrared band, is not always capable of seeing markings on uniforms, and is reliant on batteries.",
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
