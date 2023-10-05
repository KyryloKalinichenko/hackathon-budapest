import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import hero from "../assets/images/family.jpg";
import mother from "../assets/images/mother.jpg";
import { theme } from "./Styling/Styles";

function LandingPage({ setActivePageIndex }) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <div sx={{ display: "flex" }}>
            <div>
              <img src={hero} width="100%" />
            </div>
          </div>
        </Grid>

        <Grid item sx={{ padding: "3%" }}>
          <h3 style={{ fontFamily: "Calibri" }}>
            Protect your family’s income{" "}
          </h3>
          <p style={{ fontFamily: "Calibri" }}>
            With a life insurance policy, you can offer your family financial
            protection tailored to their needs. That’s because you choose the
            capital insured and the frequency of your premiums.  You can’t limit
            the suffering of your loved ones, But you can ease the financial
            consequences of your death. For example, you can provide extra
            income for your relatives and ease their financial burden by taking
            out debt balance insurance. All good reasons to stop and think about
            it... and maybe also to start that conversation with your loved
            ones. {" "}
          </p>
          <Button
            sx={{ width: "30%", marginLeft: "60%" }}
            variant="contained"
            onClick={() => {
              setActivePageIndex(1);
            }}
          >
            Start Quotation
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={mother} width="100%" />
        </Grid>
        <Grid item xs={6} sx={{ padding: "3%" }}>
          <h3 style={{ fontFamily: "Calibri" }}>How does it work?</h3>
          <p style={{ fontFamily: "Calibri" }}>
            You specify the capital that you want to insure, the duration of
            your cover and the beneficiaries. You choose the capital according
            to your specific situation: your income, your current and future
            needs of your partner and family, the age of your children, etc.
            Discuss with your broker what best suits your situation. Your
            beneficiaries receive the insured capital if you die as a result of
            illness or accident before the end date of the contract.
          </p>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LandingPage;
