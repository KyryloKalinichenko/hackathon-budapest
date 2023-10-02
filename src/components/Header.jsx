import { React } from "react";
import Grid from "@mui/material/Grid";

function Header() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 700,
            lineHeight: "36px",
            color: "#ea650d",
            fontFamily: "Consolas",
            textAlign: "center",
            border: "1px solid #ee7f00",
          }}
        >
          NN Quotation Tool
        </h1>
      </Grid>
    </Grid>
  );
}

export default Header;
