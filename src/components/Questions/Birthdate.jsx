import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import * as React from "react";


function Birthdate({ theme, activePageIndex, setActivePageIndex }) {
  const [value, setValue] = React.useState();
  return (
    <ThemeProvider theme={theme}>
      
      <Button
        variant="contained"
        onClick={() => {
          activePageIndex.setActivePageIndex(activePageIndex++);
        }}
        sx={{ marginTop: "10%" }}
      >
        Continue
      </Button>
    </ThemeProvider>
  );
}

export default Birthdate;
