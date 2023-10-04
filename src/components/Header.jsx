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
      <Grid item xs={12}>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 700,
            lineHeight: "36px",
            color: "#ea650d",
            fontFamily: "Consolas",
            textAlign: "center",
          }}
        >
          NN Quotation Tool
        </h1>
      </Grid>
      <Grid>
        <img src={logo} style={{ width: 120, height: 66 }} />
      </Grid>
    </Grid>
  );
}

export default Header;
