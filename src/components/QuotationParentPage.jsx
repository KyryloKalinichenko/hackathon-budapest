import { React } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Footer from "./Footer";

function QuotationParentPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "5px solid #ee7f00",
        height: "100vh",
      }}
    >
      <div style={{ flex: "2" }}>
        <Header />
      </div>
      <Divider />
      <div style={{ flex: "9", paddingTop: "40px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={6}>
            <FormControl
              fullWidth
              sx={{ m: 1 }}
              style={{ paddingBottom: "20px" }}
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">€</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <Button
              variant="contained"
              disableRipple
              disableElevation
              sx={{ backgroundColor: "#ea650d" }}
              fullWidth
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div style={{ flex: "1" }}>
        <Footer />
      </div>
    </div>
  );
}

export default QuotationParentPage;
