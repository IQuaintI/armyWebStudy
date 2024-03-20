import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function StingsAndBites() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Spiders and Scorpions",
      sections: [
        {
          question: "What to do in the event of an animal bite?",
          answer: [
            "Expose the injury and remove constricting items in case of swelling.",
            "Determine the nature of the bite and the animal that caused it.",
            "Ask the victim if they have an idea to what bit them.",
            <span>
              <strong>
                If the casualty shows signs of anaphylaxis (wheezing,
                hoarseness, swelling of the throat, or shock) they are to be
                expedited to a medical facility immediately!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are signs and symptoms of a black widow bite?",
          answer: [
            "A sharp pain at the site of the bite that becomes a dull ache.",
            "Painful muscle cramps, abdominal pain, and weakness.",
            "Dizziness, vomiting, and respiratory distress.",
          ],
        },
        {
          question: "What are signs and symptoms of a brown recluse bite?",
          answer: [
            "Initial bite is painless.",
            "Bite area becomes bluish with a white ring around it and eventually turns into a bulls-eye like appearance.",
            "The bite area becomes an ulcer after about a week.",
          ],
        },
        {
          question:
            "What are signs and symptoms of a non-deadly scorpion bite?",
          answer: [
            "The severity of the sting depends on the amount of venom injected.",
            "Most stings occur on the hand and cause a sharp pain that can last up to 72 hours.",
            <span>
              <strong>
                Most scorpion stings are not life-threatening and can be treated
                with local wound care and pain management!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are signs and symptoms of a deadly scorpion bite?",
          answer: [
            "Extreme pain at sight of injection.",
            "Severe muscle contractions, seizures, and cardiac failure",
            <span>
              <strong>
                The Arizona bark scorpion is the only scorpion in the United
                States that can cause life-threatening symptoms!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Bees and wasps",
      sections: [
        {
          question: "What are signs and symptoms of a non-deadly sting?",
          answer: [
            "Pain at the site of the sting.",
            "Redness, swelling, and the appearance of wheals.",
            <span>
              <strong>
                A wasp or yellow jacket sting retains its stinger but a honey
                bee does not!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are signs and symptoms of a deadly sting?",
          answer: [
            "Itching over the entire body",
            "Hives, swelling of the face, and difficulty breathing.",
            "Abdominal cramps and anaphylactic shock.",
          ],
        },
      ],
    },
    {
      heading: "Fire ants and ticks",
      sections: [
        {
          question: "What are signs and symptoms of a fire ant bite?",
          answer: [
            "Intense pain and itching at the site of the bite.",
            "Bites are circular in nature and form pustules.",
            "Skin tend to scar after the pustules burst.",
          ],
        },
        {
          question: "What are signs and symptoms of a tick bite?",
          answer: [
            "Itching and redness at the site of the bite.",
            "Fevers and headaches.",
            "Pain in the muscles and joints.",
            "Swollen lymph nodes and potential paralysis.",
            <span>
              <strong>
                A tick bite can cause Lyme disease, Rocky Mountain spotted
                fever, and other diseases, but this requires the tick to be
                attached for four to six hours!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you treat stings or bites?",
          answer: [
            "Keep the casualty calm and still.",
            "Remove constricting items in case of swelling.",
            "Cleanse the wound with soap and water but do NOt scrub.",
            "If it is a tick, remove them prior to cleansing the wound.",
            "Treat for anaphylaxis if necessary.",
          ],
        },
      ],
    },
    {
      heading: "Snakes",
      sections: [
        {
          question: "How to determine if a snake is venomous?",
          answer: [
            "Non-venomous snakes have no fangs and four to six rows of teeth.",
            "Venomous snakes have fangs and two rows of teeth.",
            "Venomous snakes have elliptical pupils and a pit between the eye and nostril.",
            "Venomous snakes are colored with bright patterns and have a triangular head.",
            <span>
              <em>
                Coral snakes are an exception as they have no fangs, and have
                round pupils.
              </em>
            </span>,
            <span>
              <strong>
                Assume all snakes are venomous and treat accordingly!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are signs and symptoms of a venomous snakebite?",
          answer: [
            "A noticeable bite mark followed by severe pain and swelling.",
            "Respiratory distress, fatigue, paralysis, and a coma may occur.",

            <span>
              <strong>Do NOT delay treatment to catch the snake!</strong>
            </span>,
          ],
        },
        {
          question: "How do you treat a non-venomous snakebite?",
          answer: [
            "Wash the area with soap and water/saline.",
            "If the casualty is up to date on their tetanus shot, no further treatment is necessary otherwise they should be expedited to a medical facility.",
          ],
        },
        {
          question: "How do you treat a venomous snake-bite?",
          answer: [
            "Wash the area with soap and water/saline.",
            "Immobilize the bitten area and keep it below the level of the heart.",
            "Remove any constricting items in case of swelling.",
            "Limit their movement and transport them to a medical facility that has antivenom.",
            <span>
              <strong>
                Continue observing the casualty for signs of anaphylaxis and
                treat accordingly!
              </strong>
            </span>,
          ],
        },
      ],
    },
    // Additional topics...
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
              header="Stings and Bites"
              content={[
                "Stings and bites from insects or animals can cause reactions ranging from mild irritation and swelling to severe allergic responses and potentially life-threatening conditions.",
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

export default StingsAndBites;
