import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@emotion/react";
import boy from "../assets/images/watercolours/boy.png";
import { GridStyle, theme } from "./Styling/Styles";
import BirthDate from "./Questions/Birthdate";

function QuotationQuestions(activePageIndex, setActivePageIndex) {
  console.log("activePageIndex:", activePageIndex);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={6}
        sx={{
          GridStyle,
          // border: "1px solid #eee",
          marginTop: "5%",
        }}
      >
        {activePageIndex.activePageIndex === 1 ? (
          <Grid container sx={{ GridStyle }}>
            <Grid item>
              <BirthDate
                theme={theme}
                activePageIndex={activePageIndex}
                setActivePageIndex={setActivePageIndex}
              />
            </Grid>
          </Grid>
        ) : undefined}
      </Grid>
      <Grid item xs={6} sx={{ GridStyle }}>
        {/* change absolute width to a responsive one */}

        <img src={boy} width="150px" />
      </Grid>
    </ThemeProvider>
  );
}

export default QuotationQuestions;
