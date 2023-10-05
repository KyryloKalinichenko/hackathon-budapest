import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function TypeOfCalculation({
  theme,
  setActivePageIndex,
  setTypeOfCalculation,
}) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Which type of calculation do you want to use?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="fixed"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="fixed"
            control={<Radio />}
            label="Fixed Amount"
            onChange={() => setTypeOfCalculation("fixed")}
          />
          <FormControlLabel
            value="increasing"
            control={<Radio />}
            label="Increasing Amount"
            onChange={() => setTypeOfCalculation("increasing")}
          />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          setActivePageIndex(4);
        }}
        sx={{ marginTop: "10%" }}
      >
        Continue
      </Button>
    </ThemeProvider>
  );
}

export default TypeOfCalculation;
