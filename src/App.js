import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuotationParentPage from "./components/QuotationParentPage";
import QuotationResult from "./components/QuotationResult";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<QuotationParentPage />} />
              <Route exact path="/result" element={<QuotationResult />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
