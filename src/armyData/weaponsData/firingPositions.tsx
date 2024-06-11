import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function FiringPositions() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Types of Firing Positions",
      sections: [
        {
          question: "What are the different types of firing positions?",
          answer: [
            "There are 12 different firing positions that Soldiers can use to engage targets.",
            "Standing: Supported and Unsupported",
            "Kneeling: Supported and Unsupported",
            "Prone: Supported, Unsupported, Roll-Over, and Reverse Roll-Over",
            "Sitting: Open leg, Crossed leg, and Crossed ankle",
            "Squatting",
          ],
        },
        {
          question: "Elaborate on standing unsupported.",
          answer: [
            "Standing unsupported is the most unstable position and leaves the shooter most exposed to enemy fire.",
            "This position is used when the shooter needs to engage a target quickly and does not have time to assume a more stable position.",
            <span>
              <strong>Lean into the weapon to help stabilize it!</strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on standing supported.",
          answer: [
            "Standing supported allows for the Soldier to use their rear leg to push the weapon into the support to help stabilize it.",
            "The non-firing hand will change positions depending on the support used, but will typically maintain a C-grip on the handguard while gently pushing forward.",
            <span>
              <strong>
                The handguard touches the support NOT the barrel otherwise shot
                placement will be erratic!
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on kneeling unsupported.",
          answer: [
            "The kneeling unsupported is often used when the Soldier requires a more stable platform but still needs to be able to move quickly.",
            "The non-firing elbow will NOT sit upon the knee but will be placed in front or behind the kneecap, since it rolls with the body when the Soldier moves.",
            "The The non-firing leg will be bent 90 degrees with the firing leg perpendicular to the non-firing leg.",
            'A more aggressive posture can be used if the the non-firing leg is not placed perpendicular and instead kept at a "lunge" position allowing for easy standing.',
            <span>
              <strong>
                In the less aggressive position, the Soldier can rest their
                weight on their heel should they be so flexible!
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on kneeling supported.",
          answer: [
            "Kneeling supported is used when the Soldier has access to a more stable platform but it is not quite low enough to go prone or use standing supported.",
            "The non-firing elbow can be pressed up against the stabilizing platform depending on the height of the support.",
            "The non-firing hand will be placed on the under-side of the handguard and will be pushed against the support to help stabilize the weapon.",
            <span>
              <strong>Do NOT let the barrel touch the support!</strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on prone unsupported.",
          answer: [
            "The prone unsupported position is the most stable position that a Soldier can assume without the use of a bipod or other support and is often used to minimize exposure to enemy fire.",
            "Both elbows are used to minimize the movement of the weapon and the Soldier's body.",
            "The legs can be spread out with feet running along side the ground or the firing leg can be bent at the knee to help reduce stomach pressure.",
            <span>
              <strong>
                The magazine can be rested on the ground to be allow for some
                support without the risk of malfunction!
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on prone supported.",
          answer: [
            "The prone supported position is the most stable position that a Soldier can assume and takes the most amount of time to assume.",
            "The non-firing hand is placed under the handguard and is used pull the weapon into the shoulder.",
            "The legs can be spread out with feet running along side the ground or the firing leg can be bent at the knee to help reduce stomach pressure.",
          ],
        },
      ],
    },
    {
      heading: "Non-Standard Firing Positions",
      sections: [
        {
          question: "Elaborate on sitting crossed-ankle / crossed-leg.",
          answer: [
            "The sitting crossed-ankle position is used to provide a stable platform for the Soldier to engage targets from since most of the body weight is behind the weapon.",
            "Th non-firing ankle crosses over the firing ankle.",
            "The sitting crossed-leg position provides similar advantages as the crossed-ankle position, but Soldiers can experience a strong pulse crossed-leg due to lack of blood flow to the legs which can increase wobble.",
            "The non-firing leg is crossed over the firing leg.",
          ],
        },
        {
          question: "Elaborate on sitting open-leg.",
          answer: [
            "The open-leg position is the sitting position most used when wearing body armor since the armor restricts the Soldier's ability to cross their legs due to the added weight and bulk.",
            "Due to the weight not being behind the weapon as much as the crossed positions, the Soldier may experience more wobble.",
            "Legs are spread out with knees bent and the firing elbow sitting against the firing knee.",
          ],
        },
        {
          question: "Elaborate on prone roll-over.",
          answer: [
            "The prone roll-over position is used when the Soldier needs to engage targets under cover that are too low to engage from a standard prone position.",
            "This position has the firing arm against the ground and the non-firing arm supporting the weapon.",
            <span>
              <strong>
                This position is inaccurate and gets worse the further the
                target is!
              </strong>
            </span>,
          ],
        },
        {
          question: "Elaborate on prone reverse roll-over.",
          answer: [
            "The prone reverse roll-over position is used when a Soldier needs to engage targets under cover that are too low to engage from a standard prone position.",
            "This position has the Soldier on their back with the firing arm across the body and the non-firing arm supporting the weapon.",
            <span>
              <strong>
                This position is inaccurate and gets worse the further the
                target is!
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
              header="Firing Positions"
              content={[
                "Firing positions are the positions that Soldiers use to engage targets with their weapon systems.",
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

export default FiringPositions;
