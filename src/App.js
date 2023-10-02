import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Quotation from "./components/Quotation";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Quotation />} />
              {/* <Route exact path="/setup-date" element={<SetupDate />} />
              <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </BrowserRouter>
          {/* <Outlet /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
