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
            "Ensure the casualty is face-up and their head is supported.",
          ],
        },
        {
          question: "How do you preform a cradle-drop drag?",
          answer: [
            "Kneel at the casualty's head and place their arms above their head.",
            "Grasp the casualty's arms and drag them towards you.",
            "Roll the casualty towards you and drag them to safety.",
          ],
        },
      ],
    },
    {
      heading: "Litters",
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
      heading: "Loading onto a Vehicle",
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
