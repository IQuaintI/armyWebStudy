import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Stability() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Stability",
      sections: [
        {
          question: "What is stability?",
          answer: [
            "Stability is the ability to create a stable firing platform.",
            "It is created from a mixture of weapon hold, body position, and external platforms.",
          ],
        },
        {
          question:
            "What is the four major functions that create a stable firing platform?",
          answer: [
            "Muscle relaxation, recoil management, natural point of aim, and support.",
            <span>
              <strong>
                Support can be natural (comes from the users body) or artificial
                (everything else).
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the importance of muscle relaxation?",
          answer: [
            "Keeping the major muscles relaxed allows for prolonged stability due to a lack of fatigue.",
            "Using the bones to support the weapon system is preferable since they do not tire.",
          ],
        },
        {
          question: "What is the importance of recoil management?",
          answer: [
            "Recoil management is essential for maintaining sight picture for follow-up shots.",
            "Firing position plays a critical role distribution of recoil.",
          ],
        },
        {
          question: "What is the importance of field of view?",
          answer: [
            "Field of view is the area that a Soldier can see WITHOUT optics or magnification.",
            "It has the most immediate impact on one's situational awareness.",
          ],
        },
        {
          question: "What is the importance of shooter-gun angle?",
          answer: [
            "The shooter-gun angle is the relationship between the shooters upper body and the direction of the weapon.",
            "This angle differs from position to position, but it greatly influences the shooter's ability to maintain a stable platform.",
            <span>
              <strong>
                Right-handed shooters can be put on the left flank with
                left-handed shooters on the right flank due to the their natural
                muzzle sway being outwards (It is easier to turn inwards than
                outwards)!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Types of Support",
      sections: [
        {
          question: "What are the types of support?",
          answer: [
            "Firing elbow",
            "Non-firing elbow",
            "Firing hand",
            "Non-firing hand",
            "Legs",
            "Butt Stock - The proper placement of the butt stock is needed for recoil management.",
            "Stock Weld - The proper placement of the stock weld is needed for sight alignment.",
            "Center of Gravity - The proper placement of the center of gravity is needed to provides the ability to lean into the weapon.",
          ],
        },
        {
          question: "Elaborate on the firing elbow.",
          answer: [
            "The proper placement of the firing elbow provides a firm hand grip.",
          ],
        },
        {
          question: "Elaborate on the non-firing elbow.",
          answer: [
            "The proper placement of the non-firing elbow supports the rifle.",
          ],
        },
        {
          question: "Elaborate on the firing hand.",
          answer: [
            "The proper placement of the firing hand is needed for trigger control.",
            "The hand should form a V around the pistol grip between the thumb and index finger.",
            "The index finger is in line with the lower receiver.",
            "The firing thumb sits on top of the safety selector.",
            "There should be no space on the grip between fingers.",
          ],
        },
        {
          question: "Elaborate on the non-firing hand.",
          answer: [
            "The proper placement of the non-firing hand is needed for support the rifle and recoil management.",
            "Non-supported and supported positions will result in different hand placements.",
            "The non-firing hand pulls the rifle into the shoulder pocket and pulls the rifle down from recoil.",
            <span>
              <strong>
                The non-firing hand is to be placed as far forward as possible
                without being uncomfortable.
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on the legs.",
          answer: [
            "The proper placement of the legs provides a stable base for the entire body.",
          ],
        },
        {
          question: "Elaborate on the butt stock.",
          answer: [
            "The butt stock should be placed in the pocket of the shoulder.",
            "The butt stock should be placed in the same spot every time.",
            "The butt stock should be placed in the same spot every time.",
          ],
        },
        {
          question: "Elaborate on the stock weld.",
          answer: [
            "The stock weld is the placement of the cheek on the stock.",
            "The stock weld should be consistent.",
            "The stock weld should be placed on the same spot every time.",
          ],
        },
        {
          question: "Elaborate on the center of gravity.",
          answer: [
            "The center of gravity is the balance point of the weapon.",
            "The center of gravity should be placed in the shoulder pocket.",
            "The center of gravity should be placed in the same spot every time.",
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
              header="Reticle"
              content={[
                "The reticle is the aiming point of the weapon system and is often measured in MILS or MOA.",
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

export default Stability;
