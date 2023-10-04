import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import LandingPage from "./LandingPage";
import QuotationQuestions from "./QuotationQuestions";
import { createTheme } from "@mui/material/styles";
import { deepOrange, grey } from "@mui/material/colors";

function QuotationParentPage() {
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

  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div style={{ flex: "2" }}>
        <Header />
      </div>
      <Divider />
      <div style={{ flex: "10", paddingTop: "40px" }}>
        {activePageIndex === 0 ? (
          <LandingPage theme={theme} setActivePageIndex={setActivePageIndex} />
        ) : undefined}
        {activePageIndex > 0 && activePageIndex < 3 ? (
          <QuotationQuestions
            theme={theme}
            activePageIndex={activePageIndex}
            setActivePageIndex={setActivePageIndex}
          />
        ) : undefined}

        {/* {activePageIndex === 4 ? (
          <QuotationResult
            theme={theme}
            setActivePageIndex={setActivePageIndex}
          />
        ) : undefined} */}
      </div>
    </div>
  );
}

export default QuotationParentPage;
