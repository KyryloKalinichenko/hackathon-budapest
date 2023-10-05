import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import LandingPage from "./LandingPage";
import QuotationQuestions from "./QuotationQuestions";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import QuotationResult from "./QuotationResult";
import progress1 from "../assets/images/visuals/progress1.png";

function QuotationParentPage() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [age, setAge] = useState(0);
  const [isSmoker, setIsSmoker] = useState(false);
  const [typeOfCalculation, setTypeOfCalculation] = useState("fixed");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div style={{ flex: "1" }}>
        <Header />
      </div>
      <Divider />
      <div style={{ flex: "11" }}>
        {/* {activePageIndex > 0 && activePageIndex < 4 ? (
          activePageIndex === 1 ? (
            // <img src={progress1} />
            
          ) : undefined
        ) : undefined} */}
        <Grid
          container
          sx={{ justifyContent: "center", padding: "15%" }}
          spacing={5}
        >
          {activePageIndex === 0 ? (
            <LandingPage setActivePageIndex={setActivePageIndex} />
          ) : undefined}
          {activePageIndex > 0 && activePageIndex < 4 ? (
            <QuotationQuestions
              activePageIndex={activePageIndex}
              setActivePageIndex={setActivePageIndex}
              age={age}
              setAge={setAge}
              isSmoker={isSmoker}
              setIsSmoker={setIsSmoker}
              typeOfCalculation={typeOfCalculation}
              setTypeOfCalculation={setTypeOfCalculation}
            />
          ) : undefined}

          {activePageIndex === 4 ? <QuotationResult /> : undefined}
        </Grid>
      </div>
    </div>
  );
}

export default QuotationParentPage;
