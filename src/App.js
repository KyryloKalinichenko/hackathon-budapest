import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuotationParentPage from "./components/QuotationParentPage";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<QuotationParentPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
