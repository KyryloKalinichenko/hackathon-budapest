import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function LandingPage({ theme, setActivePageIndex }) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={6}>
          infos so interesting insurance
          <Button
            variant="contained"
            onClick={() => {
              setActivePageIndex(1);
            }}
          >
            Start Quotation
          </Button>
        </Grid>
        <Grid item xs={6}>
          image placeholder
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LandingPage;
