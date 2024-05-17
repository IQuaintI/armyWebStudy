import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Mountables() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Mountable Weapons",
      sections: [
        {
          question: "What is an M320/M320A1 Grenade Launcher?",
          answer: [
            "The M320/M320A1 is a single-shot, breach-loaded, break-action grenade launcher.",
            "It serves as a replacement for the M203 due to the M320's ability to be used as a stand-alone weapon.",
            "It can be loaded with a variety of 40mm grenades to include high explosive, training, smoke, and illumination.",
          ],
        },
        {
          question: "What is an M26 Modular Accessory Shotgun System?",
          answer: [
            "The M26 Modular Accessory Shotgun System (MASS) is a 12-gauge shotgun that can be loaded with a 3 or 5 round magazine.",
            "It can be used to fire slugs, buckshot, and less-lethal rounds.",
          ],
        },
      ],
    },
    {
      heading: "Mountable Equipment",
      sections: [
        {
          question: "What is a bipod?",
          answer: [
            "A bipod is an adjustable stand that allows for greater stability when firing a weapon.",
            "While they are primarily used prone, they can also be used in other positions such as barricade shoots.",
            <span>
              <strong>
                A bipod greatly increases chance to hit on first round!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a vertical foregrip?",
          answer: [
            "A vertical foregrip is a grip that is attached to the front of a weapon that allows for greater transition between targets in close quarters.",
            "The further forward the grip is, the more control the shooter has over the weapon but to forward can be uncomfortable.",
            <span>
              <strong>
                Vertical foregrips with integrated bipods are common and
                typically have a smaller bipod than a standalone bipod!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is a mounted light?",
          answer: [
            "Mounted lights are common and used for target identification and engagement in low-light conditions.",
            "Most can alternate between white light and infrared light.",
            "They must be placed in a way that does not interfere with other attachments, the shooters capabilities to manipulate the weapon, and complies with SOP.",
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
              header="Mountable Equipment"
              content={[
                "Mountable equipment is used to enhance the capabilities of a weapon system.",
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

export default Mountables;
