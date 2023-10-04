import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { deepOrange, grey } from "@mui/material/colors";

function QuotationQuestions() {
  const theme = createTheme({
    palette: {
      primary: deepOrange,
      secondary: {
        main: grey[200],
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            width: "100%",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid item xs={12}>
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item>progress bar</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              padding: "0 30px",
            }}
            spacing={2}
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
                  sx={{ borderColor: "#ee7f00" }}
                />
              </FormControl>
              <Button
                variant="contained"
                disableRipple
                disableElevation
                // sx={{
                //   bgcolor: "#ea650d",
                //   "&:hover": { bgcolor: "#ee7f00" },
                //   width: "50%",
                //   margin: "0 auto",
                // }}
              >
                Continue
              </Button>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default QuotationQuestions;
