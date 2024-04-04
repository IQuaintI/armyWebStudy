import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function ChestWounds() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Open Chest Wounds",
      sections: [
        {
          question: "What is treatment for an open chest wound?",
          answer: [
            "Put on the gloves that is in the casualty's IFAK.",
            "Expose the wound unless it is stick or you are in a CBRN environment.",
            <span>
              <strong>
                Any wounds between the neck and the navel are considered chest!
                wounds!
              </strong>
            </span>,
            <span>
              <strong>Treat wounds in the order they are found!</strong>
            </span>,
            "The back of the hand can be used to apply pressure to the wound until an occlusive dressing is applied.",
          ],
        },
      ],
    },
    {
      heading: "Chest Seals",
      sections: [
        {
          question:
            "How do you apply a commercial chest seal to an open chest wound?",
          answer: [
            "Remove the chest seal from the casualty's IFAK and remove the backing from the adhesive.",
            "Remove any debris or liquid from the casualty's chest.",
            "If the casualty is conscious, tell them to exhale before applying the chest seal otherwise wait for the exhale.",
            <span>
              <strong>
                A vented chest seal is preferred, but a non-vented chest seal is
                applied in a similar manner!
              </strong>
            </span>,

            <span>
              <strong>
                Do not touch the adhesive side of the chest seal and ensure that
                edges of the seal extend two inches beyond the wound!
              </strong>
            </span>,
            <span>
              <strong>
                If wound is not airtight, tape from the casualty's IFAK can be
                used to secure the edges of the chest seal, while avoiding the
                vents!
              </strong>
            </span>,
            "Sit the patient upright and then inspect the back for any wounds and treat any found as chest wounds.",
            "Place the casualty in a position that they find comfortable and ask that they breathe normally.",
            "If the casualty is unconscious, place them in the recovery position and monitor their breathing.",
            "If the casualty develops issues with breathing, remove the chest seal, wipe down the area, then re-apply or replace the chest seal.",
          ],
        },
        {
          question:
            "How do you apply an improvised chest seal to an open chest wound?",
          answer: [
            "The process for applying an improvised chest seal is similar to that of a commercial chest seal save that the improvised chest seal MUST be taped on three sides.",
            <span>
              <strong>Do NOT tape the side closest to the ground!</strong>
            </span>,
            "The material used for the improvised chest seal should be non-porous, airtight, and should extend two inches beyond the wound.",
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
              header="Chest Wounds"
              content={[
                "Chest wounds are a common battlefield injury that can be caused by a variety of factors, including bullets, shrapnel, and other projectiles.",
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

export default ChestWounds;
