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
                If you have to ask yourself it constitutes an "open" chest wound
                - treat it like one!
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
            "Do not touch the adhesive side of the chest seal and ensure that edges of the seal extend two inches beyond the wound.",
            "If wound is not airtight, tape from the casualty's IFAK can be used to secure the edges of the chest seal, while avoiding the vents.",
          ],
        },
        {
          question:
            "How do you apply an improvised chest seal to an open chest wound?",
          answer: [
            "Apply that you and the casualty both have a mask on.",
            "If the casualty is awake, have them clear their mask.",
            "Ensure the protective hood is on and the put the casualty in the recovery position.",
            "Use the casualty's auto-injector's to administer up to three doses of the ATNAA.",
            <span>
              <strong>
                If the casualty improves after the a dose do NOT give them any
                more, but continue to monitor!
              </strong>
            </span>,
            "If the casualty needs to be given a third injection, a CANA auto-injector is to be administered after the third injection.",
            "The injection site and administering is the same as the ATNAAs.",
            "Bend the used needles into hooks and account for them.",
            "Done the rest of their protective gear and continue to monitor the casualty.",
            <span>
              <strong>
                When administering the injections, do NOT kneel down as you may
                be exposed to the nerve agent!
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
