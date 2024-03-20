import { Grid } from "@mui/material";
import Carousel from "../../components/Carousel";
import CustomAccordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

function ColdWeatherInjuries() {
  // Define topics here if they need dynamic rendering or pass them as props
  const topics = [
    {
      heading: "Hypothermia",
      sections: [
        {
          question: "What is hypothermia and how does it occur?",
          answer: [
            "Hypothermia is caused when the body's core temperature drops below 95°F.",
            "It occurs when the body loses heat faster than it can produce heat.",
            <span>
              <strong>
                This can be immediate (submersion), occur over several days
                (survival), or in temperatures above freezing if the person is
                wet.
              </strong>
            </span>,
          ],
        },
        {
          question: "How is the body tested for hypothermia?",
          answer: [
            "A rectal thermometer is used since oral and ear measurements will not be accurate in cold temperatures.",
          ],
        },
        {
          question: "What are some signs of hypothermia?",
          answer: [
            "Shivering (which may decrease as the body temperature drops)",
            "Shallow breathing or low respiration rate",
            "Weak pulse or low heart rate",
            "Drowsiness or exhaustion",
            "Poor control of body movements or slow reactions",
            "Unconsciousness",
          ],
        },
        {
          question: "How do you treat hypothermia?",
          answer: [
            "Move the casualty to a warm area (avoid unnecessary movement) and replace wet clothing.",
            "Warm the casualty with dry blankets or clothing.",
            "If the casualty is conscious, offer them caloric warm fluids.",
            <span>
              <strong>
                Do NOT give the casualty alcohol, caffeine, or tobacco products!
              </strong>
            </span>,
          ],
        },
      ],
    },

    {
      heading: "Frostbite",
      sections: [
        {
          question: "What is frostbite and how does it occur?",
          answer: [
            "Frostbite is caused by the freezing of body tissues, usually on exposed skin such as the nose, ears, cheeks, and chin, but it is also common on fingers and toes.",
            "It can develop over time or from sudden exposure to super-cooled liquids or cold metals.",
          ],
        },
        {
          question: "What are some signs and symptoms of frostbite?",
          answer: [
            "Tingling, numbness, or pain in the affected area",
            "Skin looks white or grayish-yellow or grayish on darker skin",
            "Affected areas feel stiff and hurt after re-warming.",
            "More severe cases may result in frozen tissue that may die and auto-amputate via sloughing.",
            <span>
              <strong>
                When the skin begins blanching and tingling, it is a sign of the
                cold but when it stops tingling, it is a sign of frostbite!
              </strong>
            </span>,
          ],
        },
        {
          question: "How do you treat frostbite?",
          answer: [
            "Warm at room temperature or with body heat.",
            "Do NOT thaw the affected area if there is a chance of refreezing.",
            "Protect the affected area from further cold or trauma.",
            "AVOID excessive heat and do NOT massage the frozen parts.",
            "If the affected area is on the feet, do NOT allow the casualty to walk on them.",
            <span>
              <strong>
                If they are suffering from frostbite, there is a high chance of
                them suffering from hypothermia as well. Treat them for
                hypothermia as well!
              </strong>
            </span>,
          ],
        },
      ],
    },
    {
      heading: "Non-Freezing Cold Injuries",
      sections: [
        {
          question: "What are non-freezing cold injuries?",
          answer: [
            "Prolonged exposure to environments between 32\u00B0 and 60\u00B0F can cause cold weather injuries to extremities.",
            "Skin coming into prolonged contact with cold metals or super-cooled liquids can also cause non-freezing cold injuries.",
            "Circulation restriction from tight clothing or boots can cause non-freezing cold injuries.",
            "Windchill can also cause non-freezing cold injuries.",
          ],
        },
        {
          question: "What is Chilblain?",
          answer: [
            "Chilblain is a non-freezing cold weather injury that occurs after prolonged exposure to temperatures between 32\u00B0 and 50\u00B0F.",
            "It is usually found on the face, ears, hands, and other exposed areas of skin.",
            <span>
              <strong>
                There are no permanent effects from chilblain, but it can be
                very painful!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are symptoms of Chilblain and how do you treat it?",
          answer: [
            "Lesions form on the skin, which are red (the skin darkens on dark-skinned Soldiers), hot to touch when re-warming, swollen, and itchy.",
            "Treat chilblain by warming the affected area and avoiding further exposure to cold.",
          ],
        },
        {
          question: "What is Trench Foot?",
          answer: [
            "Trench foot (immersion syndrome of the feet) is a non-freezing cold weather injury that occurs after prolonged exposure to wet and damp conditions.",
            "It is usually found on the feet, but can also occur on the hands.",
            "If left untreated, the tissue becomes septic and gangrene develops which can lead to amputation.",
            <span>
              <strong>
                Permanent damage can occur if the condition is not treated!
              </strong>
            </span>,
          ],
        },
        {
          question: "What are symptoms of Trench Foot and how do you treat it?",
          answer: [
            "Feet become numb and may become hot with pain.",
            "Swelling and bleeding turn the skin pale or blue.",
            "Aches and loss of sensation lead to edema and gangrene.",
            "Treat trench foot by drying the feet and keeping them warm.",
            "Do NOT pop blisters, rub the feet, or allow Soldier to walk on feet.",
          ],
        },
        {
          question: "What is Snow Blindness?",
          answer: [
            "Snow blindness is a non-freezing cold weather injury that occurs after prolonged exposure to the sun's UV rays reflecting off of snow.",
            "It can also occur from artificial light reflecting off of snow or from welding arcs.",
          ],
        },
        {
          question:
            "What are symptoms of Snow Blindness and how do you treat it?",
          answer: [
            "Scratchy and watery eyes, pain, and light sensitivity.",
            "Pain and and the reluctance to open eyes.",
            "Treat snow blindness by covering the eyes and keeping them in the dark.",
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
              header="Cold Weather Injuries"
              content={[
                "Cold weather injuries result from prolonged exposure to low temperatures, leading to the freezing of skin and other tissues or a dangerous drop in body temperature.",
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

export default ColdWeatherInjuries;
