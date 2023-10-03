import { React } from "react";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Grid
      container
      // style={{ position: "fixed", bottom: 0, border: "1px solid #ee7f00" }}
    >
      <Grid item xs={12}>
        <p
          style={{
            fontSize: 20,
            lineHeight: "36px",
            color: "#414141",
            fontFamily: "Consolas",
            textAlign: "center",
          }}
        >
          Contact an NN employee
        </p>
      </Grid>
    </Grid>
  );
}

export default Footer;
