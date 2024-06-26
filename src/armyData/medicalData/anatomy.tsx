import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function Anatomy() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Blood",
      sections: [
        {
          question: "What is blood?",
          answer: [
            "It is a mixture of cells and plasma that circulates through the body that circulate throughout the body and delivers essential substances like oxygen and nutrients to the body's cells.",
            <span>
              <strong>
                There are about 5 liters of blood in the human body and it takes
                about 20 seconds for blood to circulate through the entire body.
              </strong>
            </span>,
          ],
        },
        {
          question: "What are blood vessels?",
          answer: [
            "Blood vessels are the various types of tubes that carry blood throughout the body.",
            "Arteries carry oxygenated blood away from the heart to the body's tissues.",
            "Arterioles are small arteries that connect to capillaries.",
            "Capillaries are tiny blood vessels that connect arterioles to venules.",
            "Venules are small veins that connect to veins.",
            "Veins carry deoxygenated blood back to the heart.",
          ],
        },
      ],
    },
    {
      heading: "Respiratory System",
      sections: [
        {
          question: "What is the respiratory system?",
          answer: [
            "Human being requires oxygen to survive and the respiratory system is responsible for bringing oxygen into the body and expelling carbon dioxide.",

            "Adults breathe about 12-20 times per minute.",

            "Children (1-10 years) breathe about 15-30 times per minute.",

            "Infants (6-12 months) breathe about 25-50 times per minute.",

            "Infants (0-6 months) breathe about 25-40 times per minute.",

            "Infants (0-6 months) breathe about 25-40 times per minute.",
          ],
        },
        {
          question: "What are the components of the respiratory system?",
          answer: [
            "The lungs are a pair of organs that are full of air sacs covered called a pleura that are covered by a airtight membrane called the pleura.",
            "The rib cage is a series of bones that are connected by muscles which join the sternum and the spine.",
            "The airways are the tubes that carry air to the lungs and are composed of the nose, mouth, throat, voice box, and windpipe.",
          ],
        },
      ],
    },
    {
      heading: "Musculoskeletal System",
      sections: [
        {
          question: "What is the musculoskeletal system?",
          answer: [
            "The musculoskeletal system is responsible for the body's form, support, stability, and movement.",
          ],
        },
        {
          question: "What are the components of the musculoskeletal system?",
          answer: [
            "The bones are the body's framework and are made up of calcium and phosphorus.",
            <span>
              <strong>
                The human body has 206 bones with 80 in the axial skeleton
                (head, ribs, spine, and sternum) and 126 in the appendicular
                skeleton (the rest of the body).
              </strong>
            </span>,
            "Joints are the connections between bones that allow for movement.",
            "Muscles are the tissues that contract and relax to move the body.",
            <span>
              <strong>
                There are three types of muscles: skeletal (voluntary and move
                the body), smooth (involuntary and serves as the boundary for
                arteries and bowels), and cardiac (involuntary and walls the
                heart).
              </strong>
            </span>,
            "Cartilage is the tissue that cushions the joints.",
            "Ligaments are the tissues that connect bones to bones.",
            "Tendons are the tissues that connect muscles to bones.",
          ],
        },
      ],
    },
    {
      heading: "Circulatory System",
      sections: [
        {
          question: "What is the circulatory system?",
          answer: [
            "The circulatory system is responsible for transporting blood throughout the body.",
          ],
        },
        {
          question: "What is a heartbeat?",
          answer: [
            "A heartbeat is the sound of the heart valves closing as the heart contracts and relaxes.",

            "Adults have a heartbeat of about 60-100 beats per minute.",

            "Children (1-6 years) have a heartbeat of about 70-120 beats per minute.",

            "Infants (6-12 months) have a heartbeat of about 80-140 beats per minute.",

            "Infants (0-6 months) have a heartbeat of about 90-140 beats per minute.",
            <span>
              <strong>
                Soldiers, like athletes, may have a lower heartbeat (40 - 60
                BPM) due to physical conditioning!
              </strong>
            </span>,
          ],
        },
        {
          question: "What is the heart?",
          answer: [
            "The heart is a muscle that pumps blood throughout the body.",
            "The right side of the heart pumps blood to the lungs where it receives oxygen.",
            "The left side of the heart pumps blood to the body's tissues.",
          ],
        },
        {
          question: "What is a pulse?",
          answer: [
            "A pulse is the rhythmic throbbing of the arteries as blood is pumped through them.",
            "It is the most common way a physiological assessment is made in the field.",
            "The carotid artery is in the neck and is checked by placing two fingers aside the Adam's apple",
            "The femoral artery is in the groin and is checked by placing two fingers in the crease between the thigh and the abdomen.",
            "The posterior tibial artery is in the ankle and is checked by placing two fingers on the inside of the ankle.",
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
              header="Anatomy"
              content={[
                "Anatomy is the scientific study of the structure of living organisms, including their systems, organs, and tissues, essential for understanding bodily functions and the basis of medical science.",
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

export default Anatomy;
