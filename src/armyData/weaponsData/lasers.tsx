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
            "The compass can detect azimuths within +/- 0.5 degrees to +/- 1.5 degrees and elevation within +/- 0.2 degrees.",
            "It has a visible laser for close quarters engagements and an infrared laser for covert engagements that are zeroed together.",
            "It features a an infrared illuminator that is zeroed differently from the lasers.",
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
