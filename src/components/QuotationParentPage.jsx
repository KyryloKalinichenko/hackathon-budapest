import { React } from "react";
import Divider from "@mui/material/Divider";
import Header from "./Header";
// import LandingPage from "./LandingPage";
import QuotationQuestions from "./QuotationQuestions";
import QuotationResult from "./QuotationResult";

function QuotationParentPage() {
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
        {/* <LandingPage /> */}
        <QuotationQuestions />
        {/* <QuotationResult /> */}
      </div>
      {/* <Divider /> */}
      {/* <div style={{ flex: "1" }}>
        <Footer />
      </div> */}
    </div>
  );
}

export default QuotationParentPage;
