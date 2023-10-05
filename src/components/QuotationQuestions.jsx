import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@emotion/react";
import boy from "../assets/images/watercolours/boy.png";
import { GridStyle, theme } from "./Styling/Styles";
import Age from "./Questions/Age";
import Smoker from "./Questions/Smoker";
import TypeOfCalculation from "./Questions/TypeOfCalculation";

function QuotationQuestions({
  activePageIndex,
  setActivePageIndex,
  age,
  setAge,
  isSmoker,
  setIsSmoker,
  typeOfCalculation,
  setTypeOfCalculation,
}) {
  console.log("activePageIndex:", activePageIndex);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={6}
        sx={{
          GridStyle,
          marginTop: "4%",
        }}
      >
        <Grid container sx={{ GridStyle }}>
          <Grid item>
            {activePageIndex === 1 ? (
              <Age
                theme={theme}
                setActivePageIndex={setActivePageIndex}
                setAge={setAge}
              />
            ) : undefined}
            {activePageIndex === 2 ? (
              <Smoker
                theme={theme}
                setActivePageIndex={setActivePageIndex}
                setIsSmoker={setIsSmoker}
              />
            ) : undefined}
            {activePageIndex === 3 ? (
              <TypeOfCalculation
                theme={theme}
                setActivePageIndex={setActivePageIndex}
                setTypeOfCalculation={setTypeOfCalculation}
              />
            ) : undefined}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{ GridStyle }}>
        {/* change absolute width to a responsive one */}
        <img src={boy} width="150px" />
      </Grid>
    </ThemeProvider>
  );
}

export default QuotationQuestions;
