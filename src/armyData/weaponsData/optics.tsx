import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Optics() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Optics",
      sections: [
        {
          question: "What is an iron sight?",
          answer: [
            "Some versions of the M16 have integrated iron sights that are used to aim the weapon.",
            "The iron sights have adjustments for windage and elevation.",
            "The iron sight may come with two different apertures, a smaller one for longer ranges and a larger one for closer ranges.",
          ],
        },
        {
          question: "What is a back up iron sight?",
          answer: [
            "A back up iron sight (BUIS) is a flip-up sight that is used in conjunction with the front sight post.",
            "It is typically remains on the rail and can be sighted up to 600 meters.",
          ],
        },
        {
          question: "What is a close combat optic?",
          answer: [
            "The M68 Close Combat Optic (CCO) is a non-magnifying sight that is used for close combat.",
            "The CCO is superior in nearly every respect to iron sights except for the fact that it requires batteries and lacks the ability to range targets.",
            "The red-dot is either a 4 MOA-sized dot or 2 MOA-sized dot depending on the model.",
            <span>
              <strong>
                CCO's are zeroed to a weapon and are not interchangeable!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a rifle combat optic?",
          answer: [
            "The Rifle Combat Optic (RCO) is a 4x magnification sight that is used for engagements up to 800 meters via the bullet drop compensator.",
            "It is a durable optic that can be used in low light conditions.",
            "The magnification does provide a disadvantage in closer engagements, there is an absence of stadia lines, and the optic can produce glare.",
            <span>
              <strong>
                The 300 meter aim point is under the triangle and the 100 meter
                aim point is at the tip of the triangle!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Thermal Optics",
      sections: [
        {
          question: "What is a thermal sight?",
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
                    The detector can pick up differences as small as 1 degree Celsius!
                </strong>
            </span>
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
              header="Optics"
              content={[
                "Optics are used to enhance the Soldiers ability to detect, recognize, and identify targets.",
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

export default Optics;
