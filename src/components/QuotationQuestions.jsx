import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import boy from "../assets/images/watercolours/boy.png";
import { GridStyle, theme } from "./Styling/Styles";
import BirthDate from "./Questions/Birthdate";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function QuotationQuestions(activePageIndex, setActivePageIndex) {
  console.log("activePageIndex:", activePageIndex);
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={6} sx={{ GridStyle, border: "1px solid #eee" }}>
        {activePageIndex.activePageIndex === 1 ? (
          <BirthDate
            theme={theme}
            activePageIndex={activePageIndex}
            setActivePageIndex={setActivePageIndex}
          />
        ) : undefined}
        {/* <FormControl>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Button variant="contained">Continue</Button> */}
      </Grid>
      <Grid item xs={6} sx={{ GridStyle, border: "1px solid #eee" }}>
        {/* change absolute width to a responsive one */}

        <img src={boy} width="150px" />
      </Grid>
    </ThemeProvider>
  );
}

export default QuotationQuestions;
