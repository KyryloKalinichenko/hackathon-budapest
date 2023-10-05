import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import TextField from "@mui/material/TextField";

function Age({ theme, setActivePageIndex, setAge }) {
  return (
    <ThemeProvider theme={theme}>
      <FormLabel sx={{ marginBottom: "1%" }}>What is your age?</FormLabel>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(event) => setAge(event.target.value)}
        type={"number"}
      />

      <Button
        variant="contained"
        onClick={() => {
          setActivePageIndex(2);
        }}
        sx={{ marginTop: "10%" }}
      >
        Continue
      </Button>
    </ThemeProvider>
  );
}

export default Age;
