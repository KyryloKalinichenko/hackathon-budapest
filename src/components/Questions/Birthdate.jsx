import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import * as React from "react";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Birthdate({ theme, activePageIndex, setActivePageIndex }) {
  const [value, setValue] = React.useState();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          label="Controlled field"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        onClick={() => {
          activePageIndex.setActivePageIndex(activePageIndex++);
        }}
      >
        Continue
      </Button>
    </ThemeProvider>
  );
}

export default Birthdate;
