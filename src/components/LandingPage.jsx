import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GridStyle, theme } from "./Styling/Styles";

function LandingPage({ setActivePageIndex }) {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={6} sx={{ GridStyle, border: "1px solid #eee" }}>
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
      <Grid item xs={6} sx={{ GridStyle, border: "1px solid #eee" }}>
        image placeholder
      </Grid>
    </ThemeProvider>
  );
}

export default LandingPage;
