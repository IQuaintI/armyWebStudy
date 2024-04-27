import { Grid } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import BlockQuote from "../components/BlockQuote";
import "../css/Page.scss";

function Weapons() {
  const location = useLocation(); // Hook to get the current location object

  return (
    <Grid
      container
      id="page"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ minHeight: "100vh" }} // Ensure the container takes at least the full viewport height
    >
      {/* Conditionally render BlockQuote only on the /medical route */}
      {location.pathname === "/weapon" && (
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            minHeight: "100vh", // Take up at least the full height of the viewport
          }}
        >
          {/* Ensure source is passed as an array of strings */}
          <BlockQuote
            header="Blessed are the meek, for they will inherit the earth."
            source={["Matthew 5:5"]}
          />
        </Grid>
      )}

      {/* Outlet for nested routes, ensuring it does not render simultaneously with the quote */}
      {location.pathname !== "/weapon" && (
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      )}
    </Grid>
  );
}

export default Weapons;
