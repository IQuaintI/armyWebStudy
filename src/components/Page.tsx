import "../css/Page.scss";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";

function Page() {
  return (
    <>
      <Grid
        container
        id="page"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Sidebar items={[{ title: "Home", href: "/" }]} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <h1>Page</h1>
          <p>This is a page.</p>
        </Grid>
      </Grid>
    </>
  );
}

export default Page;
