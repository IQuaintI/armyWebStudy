import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function CommonEngagements() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Aim",
      sections: [
        {
          question: "What is aim?",
          answer: [
            "Aiming is the continuous process of aligning the sights with the target and maintaining that alignment pre-shot, during the shot, and post-shot.",
          ],
        },
        {
          question: "Where should the Soldier focus when aiming?",
          answer: [
            "Soldiers should focus on striking the most largest and most vital part of the target.",
            "The sight should be placed on the center of visible mass of the target.",
            <span>
              <strong>
                Center of visible mass does include what the anticipated center
                of the overall target is!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Aspects of Sight",
      sections: [
        {
          question: "How should a Soldier align their sights?",
          answer: [
            "The tip of the front sight post is placed in the center of the rear sight aperture.",
            "Ensure that the CCO reticle is in the center of the optic and the ACOG chevron is in the center of the optic.",
            <span>
              <strong>
                Focus on the aiming device and NOT the target when aligning the
                sights!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are the types of sight pictures?",
          answer: [
            "Pre-shot sight picture is where the weapon is aiming at prior to the shot.",
            "Post-shot sight picture is where the weapon is aiming at after the shot.",
            "The post-shot sight picture is used to determine if the Soldier needs to make adjustments to their aim based on how far the weapon has moved since the pre-shot sight picture.",
          ],
        },
        {
          question:
            "What does a Soldier do with point of aim and point of impact?",
          answer: [
            "Point of aim is where the aiming device is placed on the target.",
            "Point of impact is where the round actually strikes the target.",
            "Within the 300m confirmed zero, the Soldier can aim their M4 at the center of the target and expect the round to strike the target.",
            <span>
              <strong>
                Point of aim does include changes in elevation and windage!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Sighting Errors",
      sections: [
        {
          question: "What are the most common sighting errors?",
          answer: [
            "Improper range estimation - Soldier inaccurately estimates the range to the target.",
            "Improper sight alignment - Soldier does not properly align the sights.",
            "Improper sight picture - Typically occurs when the target is concealed, moving, or when there is unaccounted windage or elevation.",
            "Poor visibility - Soldier cannot see the target due to weather conditions, low lighting, or artificial obscurants.",
            "Incorrect zero - Soldier has not properly zeroed their weapon.",
            "Non-dominant eye - Soldier's should use their dominant eye to aim their weapon even if the dominant eye is not their dominant hand.",
          ],
        },
        {
          question: "Where should the Soldier focus when aiming?",
          answer: [
            "Soldiers should focus on striking the most largest and most vital part of the target.",
            "The sight should be placed on the center of visible mass of the target.",
            <span>
              <strong>
                Center of visible mass does include what the anticipated center
                of the overall target is!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Weapon Alignment",
      sections: [
        {
          question: "What is horizontal weapon alignment?",
          answer: [
            "Covers the left and right alignment of the weapon.",
            "Where the Soldier is facing is 12 o'clock, the Soldier's left is 9 o'clock, the Soldier's right is 3 o'clock, and the Soldier's rear is 6 o'clock.",
          ],
        },
        {
          question: "What is vertical weapon alignment?",
          answer: [
            "If teh weapon needs to brought above shoulder level, the Soldier should use the high port position.",
            "If the weapon needs to be brought below shoulder level, the Soldier should use the low port position.",
            <span>
              <strong>
                This is often done in urban or mountainous environments!
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
              header="Common Engagement"
              content={[
                "Common Engagements are any engagement where aiming center mass will result in a hit.",
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

export default CommonEngagements;
