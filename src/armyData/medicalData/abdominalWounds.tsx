//Admin
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import BlockQuote from "../../components/BlockQuote";

//CSS
import "../../css/Page.scss";

function Page() {
  return (
    <Grid
      container
      id="page"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={3} md={3} lg={2} className="left-container">
        <Sidebar items={[{ title: "Home", href: "/" }]} />
      </Grid>

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
            header="Abdominal Wounds"
            content="Abdominal wounds are injuries to the belly area that can damage skin, muscles, and internal organs which require immediate medical attention for proper healing and to prevent complications."
            source="TC 4-02.1 (2016) - First Aid Chapter 17"
          />
        </Grid>
        <Grid item className="item-spacing">
          <Carousel
            images={[
              { src: "https://via.placeholder.com/800x400?text=1", alt: "1" },
              { src: "https://via.placeholder.com/800x400?text=2", alt: "2" },
              { src: "https://via.placeholder.com/800x400?text=3", alt: "3" },
            ]}
          />
        </Grid>
        <Grid item>
          <Accordion
            sections={[
              {
                question:
                  "What is the most important concern in the initial first aid for abdominal injuries?",
                answer: "Shock",
              },
              {
                question:
                  " When working with an abdominal wound, you should not apply pressure to which area?",
                answer: "The wound or exposed organs",
              },
              {
                question:
                  "What is the best method to prevent further injury to a casualty with abdominal wounds?",
                answer:
                  "Do not touch the exposed organs <br /> Do not try to push any exposed organs back into the body <br />  Do not tie the dressing tails tightly or directly over the wound <br /> Do not give the casualty anything by mouth",
              },
              {
                question:
                  "When transporting a casualty with an abdominal wound, how should they be positioned?",
                answer: "On their back, face up with knees flexed",
              },
              {
                question:
                  "When treating an abdominal wound, you should not attempt to __?",
                answer:
                  "Replace protruding internal organs or remove protruding foreign objects",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page;
