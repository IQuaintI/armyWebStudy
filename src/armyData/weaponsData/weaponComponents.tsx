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
            "Feeding - Feeding is the process of the bolt stripping a round from the magazine.",
            "Chambering - Chambering is the process of the round being placed into the chamber.",
            "Locking - Locking is the process of the bolt moving forward and locking into the barrel.",
            "Firing - Firing is the process of the weapon discharging a round.",
            "Unlocking - Unlocking is the process of the bolt unlocking from the barrel and moving rearward.",
            "Extracting - Extracting is the process of the spent casing being removed from the chamber.",
            "Ejecting - Ejecting is the process of the spent casing being ejected from the weapon.",
            "Cocking - Cocking is the process of the hammer being reset.",
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
