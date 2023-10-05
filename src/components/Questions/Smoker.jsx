import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";

function Age({ theme, setActivePageIndex, setIsSmoker }) {
  return (
    <ThemeProvider theme={theme}>
      <FormLabel sx={{ marginBottom: "1%" }}>Do you smoke?</FormLabel>
      <Button
        variant="contained"
        onClick={() => {
          setIsSmoker(true);
          setActivePageIndex(3);
        }}
        sx={{ marginTop: "10%" }}
      >
        Yes
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setIsSmoker(false);
          setActivePageIndex(3);
        }}
        sx={{ marginTop: "10%" }}
      >
        No
      </Button>
    </ThemeProvider>
  );
}

export default Age;
