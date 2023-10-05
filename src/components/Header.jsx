import { React } from "react";
import Grid from "@mui/material/Grid";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <Grid
      container
      style={{
        padding: "20px 0",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Grid>
        <img src={logo} style={{ width: 120, height: 66, paddingLeft: 20 }} />
      </Grid>
    </Grid>
  );
}

export default Header;
