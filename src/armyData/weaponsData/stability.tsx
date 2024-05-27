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
          question: "What is stabilization failure?",
          answer: [
            "A failure in stabilization is the inability to maintain a stable firing platform.",
            "It often occurs due to inability to support the weapon, inability to barrel movement, or inability to maintain sight picture.",
            "This failure can be corrected by adjusting firing positions and correcting errors in firing skills.",
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
            "Butt Stock",
            "Stock Weld",
            "Center of Gravity",
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
            "When standing, the feet should be shoulder width apart, slightly staggered, and the knees should be slightly bent.",
            "When kneeling, the non-firing knee should be placed on the ground and the firing knee should be bent at a 90 degree angle.",
            "When prone, the legs should be shoulder width apart and the knees should be slightly bent.",
          ],
        },
        {
          question: "Elaborate on the butt stock.",
          answer: [
            "The proper placement of the butt stock is needed for a proper stock weld.",
            "The butt stock should be placed in a location that allows for sighting at upright head position.",
          ],
        },
        {
          question: "Elaborate on the stock weld.",
          answer: [
            "A stock weld is the placement of the cheek on the stock of the weapon",
            "The proper placement of the stock weld is needed for sight alignment.",
            "The full weight of the head is rested on the stock weld.",
            <span>
              <strong>
                This is the most important aspect of sight alignment!
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on the center of gravity.",
          answer: [
            "The proper center of gravity is needed for balancing the weapon system.",
            "It allows for leaning into the weapon system and provides a more stable platform.",
            <span>
              <strong>This does not apply when prone!</strong>
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
              header="Stability"
              content={[
                "Stability is the ability to create a stable firing platform.",
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
