//Admin
import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import BlockQuote from "../components/BlockQuote";

//CSS
import "../css/Page.scss";

function Medical() {
  return (
    <Grid
      container
      id="page"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={3} md={3} lg={2} className="left-container">
        <Sidebar
          items={[
            { title: "Home", href: "/" },
            { title: "Abdominal Wounds", href: "/medical/abdominal-wounds" },
          ]}
        />
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
        <Grid item className="item-spacing" style={{ textAlign: "center" }}>
          <BlockQuote
            header="This too shall pass."
            source=" Hakim Sanai "
          />
        </Grid>
       
      </Grid>
    </Grid>
  );
}

export default Medical;
