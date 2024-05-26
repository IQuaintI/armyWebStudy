import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function ShotProcess() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Engagement",
      sections: [
        {
          question: "What is a rifleman's primary goal?",
          answer: [
            "A rifleman's primary goal is to engage the enemy with well-aimed shots.",
            <span>
              <strong>
                A rifleman's marksmanship is judged not by their trigger speed,
                but by their ability to engage enemies with high precision and
                accuracy!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are the three fundamentals of marksmanship?",
          answer: [
            "Trigger Control - Trigger usage that does not disturb the sight picture.",
            "Sight Alignment - The relationship between the firer and the aiming device.",
            "Sight Picture - The relationship between the aiming device and the target.",
          ],
        },
      ],
    },
    {
      heading: "Shot Process",
      sections: [
        {
          question: "What are the phases of the shot process?",
          answer: ["Pre-Shot, Shot, and Post-Shot."],
        },
        {
          question: "What are the elements of the shot process?",
          answer: [
            "Aim - The process of aligning the weapon with the target.",
            "Stability - The Soldier provides a base for the weapon to disperse recoil.",
            "Control - The Soldier's conscious effort to manipulate the weapon to include safety, trigger control, and follow-through.",
            "Movement - The Soldier's ability to maneuver while maintaining the weapon's alignment with the target.",
            <span>
              <strong>
                The most complex shooting conditions is when both the shooter
                and target are moving under low-visibility!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Target Acquisition",
      sections: [
        {
          question: "What is target acquisition?",
          answer: [
            "Target acquisition is the process of discerning targets from friendly forces, non-combatants, and the environment.",
          ],
        },
        {
          question: "What are the three elements of target acquisition?",
          answer: [
            "Detection - The ability to recognize a target.",
            "Identification - The ability to determine if the target is a threat.",
            "Prioritization - The ability to determine which target to engage first.",
          ],
        },
        {
          question: "What are the three elements of target detection?",
          answer: [
            "Scan - The ability to search for targets in a systematic manner.",
            "Acquire - The ability to fine tune a search when an irregularity is detected.",
            "Locate - The ability to pinpoint the target's location.",
          ],
        },
        {
          question: "What are the five different scanning techniques?",
          answer: [
            "Rapid Scan - A brief ocular pat-down that reveals immediate threats and is usually used first.",
            "Slow Scan - If the rapid scan does not reveal a threat, the slow scan is a more detailed search often done with aiming devices.",
            "Detailed Scan - The most thorough search that is done when a threat is not detected and is done with a variety of mechanical aids.",
            "Vertical Scan - A scan used predominately in urban environments to detect threats at different elevations.",
            "Horizontal Scan - A scan that prioritizes threats at key points of interest.",
            <span>
              <strong>
                A Soldier is not necessarily looking for a person, but for
                "signatures" that indicate that an asset of military value is or
                has been present!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Target Identification",
      sections: [
        {
          question: "What is are the three types of targets?",
          answer: [
            "Friend - Soldiers, vehicles, and equipment that are part of the same or allied forces.",
            "Non-Combatants - Individuals or organizations that are not belligerents.",
            "Foe - Soldiers, vehicles, and equipment that are part of the opposing force.",
            <span>
              <strong>
                Journalist, medical personnel, chaplains, wounded, or members of
                the Red Cross/Red Crescent are considered non-combatants!
              </strong>
            </span>,
          ],
        },
        {
          question:
            "What are some ways that Soldiers discriminate between friends and foes?",
          answer: [
            "Panels - VS-17 panels are used to identify allied forces during daylight operations and do not provide a thermal signature.",
            "Lighting - Chemical lights are often used for low-light operations although they cannot be seen via thermal imaging outside of an IR variant.",
            "Symbols - Unit symbols can be applied to vehicles to identify them as friendly.",
            "Beacons / Strobes - These are battery powered devices that are seen through night vision optics, but can not be seen through thermal imaging.",
            "Markings - Markings are unit SOP determined and are standardized to prevent fratricide.",
          ],
        },
      ],
    },
    {
      heading: "Target Acquisition",
      sections: [
        {
          question: "How are threats prioritized?",
          answer: [
            "Most Dangerous - A threat that is capable of causing harm and is preparing to do so; must be engaged first.",
            "Dangerous - A threat that is capable of causing harm but is not preparing to do so",
            "Least Dangerous - A threat that is not capable of causing harm, but has the ability to coordinate with more dangerous threats; killed last.",
          ],
        },
        {
          question: "What is the order of engagement?",
          answer: [
            "Near before far.",
            "Front before flank.",
            "Stationary before moving.",
            <span>
              <strong>
                This is standard and optimizes overmatch potential!
              </strong>
            </span>,
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
              header="Shot Process"
              content={[
                "The shot process is the sequence of events that take place from the time the firer decides to engage a target until the round is fired.",
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

export default ShotProcess;
