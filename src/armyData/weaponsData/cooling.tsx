import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Cooling() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Cooling",
      sections: [
        {
          question: "Why is cooling important?",
          answer: [
            "The ignition of propellant can create heat in excess of a thousand degrees Fahrenheit which can cause the weapon to overheat.",
            "Thermal stress can warp the barrel and cook off rounds in the chamber.",
          ],
        },
      ],
    },
    {
      heading: "Cooling Methods",
      sections: [
        {
          question: "What are the types of cooling methods?",
          answer: [
            "Convection cooling, radiational cooling, and conduction cooling.",
          ],
        },
        {
          question: "Explain convection cooling.",
          answer: [
            "Air is circulated around the barrel to remove heat.",
            "The rail system and hand guard facilitates this process.",
            <span>
              <strong>Requires a constant flow of air!</strong>
            </span>,
          ],
        },
        {
          question: "Explain radiational cooling.",
          answer: [
            "Heat is transferred from the barrel to the surrounding air.",
            "This is the most common method of cooling.",
          ],
        },
        {
          question: "Explain conduction cooling.",
          answer: [
            "The weapon is put in contact with a cooler surface to transfer heat.",
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
              header="Cooling"
              content={[
                "Cooling is the act of reducing the temperature of a weapon system to prevent overheating.",
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

export default Cooling;
