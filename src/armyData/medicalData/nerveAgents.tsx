import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function NerveAgents() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Mild Nerve Agents",
      sections: [
        {
          question: "What are signs and symptoms of mild nerve agent exposure?",
          answer: [
            "Runny nose and drooling",
            "Respiratory distress and difficulty seeing",
            "Headaches and nausea",
            "Tightness in the chest and localized sweating",
          ],
        },
        {
          question: "What is the treatment for mild nerve agent exposure?",
          answer: [
            "An Antidote Treatment Nerve Agent Auto-injector (ATNAA) is used to treat mild nerve agent exposure.",
            <span>
              <strong>
                ONLY self-administer the ATNAA do NOT self-administer the
                Convulsant Antitode for Nerve Agent (CANA) auto-injector!
              </strong>
            </span>,
            "The outside of the thigh is the preferred site for injection, but the upper, outer quarter of the buttocks can also be used if the individual is skinny.",
            "The location of the site on the thigh is one hands with below the hip joint and one hand above the knee joint.",
            <span>
              <strong>
                Be careful when using the buttocks site as there is a a nerve
                running across the buttocks that can cause paralysis if damaged!
              </strong>
            </span>,
            "Hold the ATNAA in a closed fist with the green side facing down and take the cap off with the other hand.",
            "Place the ATNAA against the thigh and push down until the needle is administered and hold for 10 seconds.",
            "Remove the needle. bend it it into a hook and keep track of it.",
            "Massage the injection site if possible.",
            <span>
              <strong>
                If you can walk, recall your name and where you are, do NOT take
                another injections!
              </strong>
            </span>,
            <span>
              <strong>
                If symptoms persist, have a battle look over your and administer
                the medicine as needed!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Severe Nerve Agents",
      sections: [
        {
          question:
            "What are signs and symptoms of severe nerve agent exposure?",
          answer: [
            "Pinpoint pupils and red, teary eyes",
            "Altered mental status that can lead to unconsciousness",
            "Convulsions and seizures",
            "Localized sweating",
            "Respiratory distress add vomiting",
          ],
        },
        {
          question: "What is the treatment for severe nerve agent exposure?",
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
              header="Nerve Agents"
              content={[
                "Nerve agents are highly toxic chemicals that disrupt the nervous system by blocking the enzyme that allows nerves to communicate, leading to overstimulation and potentially fatal respiratory failure.",
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

export default NerveAgents;
