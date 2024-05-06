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
                The detector can pick up differences as small as 1 degree
                Celsius!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the AN/PAS-13?",
          answer: [
            "The AN/PAS-13 is a series of thermal sights that are available for use on light, medium, and heavy weapons.",
            "They are small. lightweight, quiet, have a long batter life, and provide an image in real-time.",
            "They can be used on a variety of weapons and the G and F model can be attached to one another allowing for greater precision.",
            "The AN/PAS-13 can NOT view all ranges of the infrared band, is not always capable of seeing markings on uniforms, and is reliant on batteries.",
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
