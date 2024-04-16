import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Transportation() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Vehicle Extraction",
      sections: [
        {
          question: "How do you preform a lateral vehicle extraction?",
          answer: [
            "This requires two soldiers to grab the arms and legs of the casualty and lift them out of the vehicle.",
            "Ensure that the head is supported and the neck is not twisted.",
            <span>
              <strong>
                Medical personnel may utilize a backboard to stabilize the spine
                and prevent further injury!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you preform a vertical vehicle extraction?",
          answer: [
            "Wrap something around the casualty's chest and under their arms to lift them out of the vehicle.",
            "If a wrap is not available, two soldiers can grab the casualty's arms and lift them out of the vehicle.",
            "Ensure that the head is supported and the neck is not twisted.",
          ],
        },
      ],
    },
    {
      heading: "Types of Carries",
      sections: [
        {
          question: "What are some types of carries?",
          answer: [
            "The neck drag is used when the casualty is in a dangerous area and needs to be moved quickly.",
            "The cradle-drop drag is used when the casualty cannot walk and needs to be moved up or down stairs.",
            "The fireman's carry is used when the casualty is unconscious or badly wounded.",
            <span>
              <strong>
                It is almost impossible to lift a fully-loaded soldier on your
                shoulders and move quickly!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you preform a fireman's carry?",
          answer: [
            "Kneel at the casualty's uninjured side and place their arm above their head.",
            "Cross the casualty's ankles from the uninjured side over the injured side.",
            "Grasp the casualty's shoulder and thigh then roll the casualty towards you.",
            "Straddle the casualty's body, wrap your arms around their waist, and stand up while ensuring the casualty's legs are locked.",
            "Raise one of the casualty's arms and place it across your shoulders while supporting the casualty's weight with your shoulder and other arm.",
            "Place a foot between the casualty's feet and use the arm not supporting the casualty to grasp the casualty's wrist.",
            "Couch down and place the supporting arm under the casualty's thigh and stand up while lifting the casualty.",
          ],
        },
        {
          question: "How do you preform a neck drag?",
          answer: [
            "Ensure the casualty is face-up and straddle them with one leg on each side of their body.",
            "Come down so that you are face to face with the casualty and have them place their arms around your neck.",
            "If the casualty is unconscious, the neck drag is still possible by tieing their wrists and putting your head through.",
            <span>
              <strong>
                Protect the casualty's head if the casualty is unconscious!
              </strong>
            </span>,
            "Crawl forward will looking ahead.",
          ],
        },
        {
          question: "How do you preform a cradle-drop drag?",
          answer: [
            "Have the casualty supine and kneel behind their head.",
            "Sit them up and rest the back of their torso on your knee.",
            "Run your arms under the casualty's armpits and clasp your hands.",
            "Stand up, lift the casualty, and walk backwards.",
          ],
        },
      ],
    },
    {
      heading: "Litters",
      sections: [
        {
          question: "How do you prepare a flexible litter for use?",
          answer: [
            "Remove the litter from its carrying case and unfold it.",
            "Ensure the litter is flat and the straps are not twisted.",
            "Prior to putting the casualty in the litter, take note of the headboard and footboard.",
          ],
        },
        {
          question: "How do you secure a casualty to a flexible litter?",
          answer: [
            "Place the litter besides the casualty and ensure the headboard is at the casualty's head.",
            "Place the straps under the board and roll the casualty onto their side.",
            "Slide the litter under the casualty and roll them back onto the litter.",
            "Carefully slide the casualty to the center of the litter.",
            "Pull out the straps, bring them across the casualty, and hook them to the buckles on the opposing side.",
          ],
        },
        {
          question: "How do you move a casualty in a flexible litter?",
          answer: [
            "With two soldiers on each side, have them grab the handles on the sides of the litter.",
            'The preparatory command of "Prepare to Lift" is given and the command of "Lift" is given to lift the litter in a smooth motion.',
          ],
        },
        {
          question: "How do you prepare a folding litter for use?",
          answer: [
            "Remove the litter from the bag, stand it upright, and undo the buckles.",
            "Place it on the ground and pull it open until it is fully extended.",
            "Ensure that the spreader bars are locked and the straps are not twisted.",
            <span>
              <strong>
                This is easier to do with two soldiers, one on each side of the
                litter!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you secure a casualty to a folding litter?",
          answer: [
            "Place the litter besides the casualty and ensure one end is level with the casualty's head.",
            "Roll the casualty onto their side and place the litter under them.",
            "Slide the litter under the casualty and roll them back onto the litter.",
            "Carefully slide the casualty to the center of the litter.",
            "Strap the casualty to the litter by placing the straps under the litter and buckling them on the opposing side.",
          ],
        },
        {
          question: "How do you move a casualty in a folding litter?",
          answer: [
            "With two soldiers, one at the head and one at the foot, have them grab the handles on the sides of the litter.",
            'The preparatory command of "Prepare to Lift" is given and the command of "Lift" is given to lift the litter in a smooth motion.',
          ],
        },
        {
          question: "How do you use a poncho as an improvised litter?",
          answer: [
            "Open the poncho and lay two poles running vertically along the length of the poncho.",
            "Fold one-third of the poncho over a pole and the other third over the other pole.",
            "Place the casualty on the poncho and place the casualty in the center of the poles.",
          ],
        },
        {
          question: "How do you use a jacket as an improvised litter?",
          answer: [
            "Turn tow jackets inside out, leave the sleeves inside, and zip them up.",
            "Run a pole through the sleeves of the jackets and place the casualty in the center of the jackets.",
          ],
        },
        {
          question: "How do you move a casualty in an improvised litter?",
          answer: [
            "With two soldiers on each side, have them grab the handles on the sides of the litter.",
            'The preparatory command of "Prepare to Lift" is given and the command of "Lift" is given to lift the litter in a smooth motion.',
          ],
        },
      ],
    },
    {
      heading: "Loading onto a Vehicle",
      sections: [
        {
          question: "How do you load a casualty onto an ambulance?",
          answer: [
            "Ensure that the casualty is secured to the litter and load the casualty head first in the direction of travel.",
            "Secure the litter to the ambulance and ensure the casualty is comfortable.",
            <span>
              <strong>
                The most injured casualty should be loaded last so that they are
                the first to be unloaded!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you load a casualty onto an air ambulance?",
          answer: [
            "Stay 50 yards away from the helicopter until motioned to approach.",
            "Stay in view of the aircrew and ensure that they can accurately distinguish personnel.",
            "Approach a UH-60/UH-1 from the sides, the CH-47 from the rear, the MH-53 from the sides to the rear, the M/C-130//C-17//C-5B from the rear.",
            "Load the most seriously injured casualty first and place them in the direction of travel lengthwise.",
            "When loading the litters, load the upper berth first and the lower second to prevent the upper berth from falling on the lower berth.",
            "Secure the litter to the aircraft and ensure the casualty is comfortable.",
            <span>
              <strong>
                Listen to the flight medic's instructions and NEVER approach a
                UH-60/UH-1 from the rear!
              </strong>
            </span>,
          ],
        },
        {
          question:
            "How do you load a casualty onto a non-medical ground vehicle?",
          answer: [
            "Ensure that the casualty is secured to the litter and load the casualty head first in the direction of travel.",
            "Secure each litter to the vehicle as they are placed and ensure that the casualty is comfortable.",
            <span>
              <strong>
                Non-medical ground vehicles used for casualty evacuation are
                called CASEVAC!
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
              header="Transportation"
              content={[
                "Transporting a casualty is a critical part of the medical evacuation process.",
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

export default Transportation;
