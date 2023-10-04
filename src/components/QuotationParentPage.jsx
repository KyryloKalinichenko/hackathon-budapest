import { React } from "react";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Footer from "./Footer";
import QuotationQuestions from "./QuotationQuestions";

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
      <div style={{ flex: "9", paddingTop: "40px" }}>
        <QuotationQuestions />
      </div>
      <Divider />
      <div style={{ flex: "1" }}>
        <Footer />
      </div>
    </div>
  );
}

export default QuotationParentPage;
