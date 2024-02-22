import { Grid } from "@mui/material";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Grid
        container
        id="header"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Header
            title="ACS"
            subtitle="Explore ACS"
            home="Home"
            sections={[
              { link: "/page", title: "Testing" },
              { link: "https://www.google.com", title: "Google" },
              { link: "https://www.bing.com", title: "Bing" },
            ]}
          />
        </Grid>
      </Grid>

      <AppRoutes />
    </>
  );
}

export default App;
