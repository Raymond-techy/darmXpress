import ScrollToTop from "./Components/ScrollTotop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./Components/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Plumbing from "./Pages/Plumbing";
import Contact from "./Pages/Contact";
import { ClothingShop } from "./Components/DryCleaning/Page1";
import Cleaning from "./Pages/Cleaning";

// import { ClothingShop } from "./Components/DryCleaning/Page1";
import { ElectricalShop } from "./Components/Electrical/index";
import { PlumbingShop } from "./Components/Plumbing/Index";

import Electrical from "./Pages/Electrical";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/electrical" element={<Electrical />} />

        <Route path="/services/shop/dryCleaning" element={<ClothingShop />} />
        <Route path="/services/shop/plumbing" element={<PlumbingShop />} />
        <Route path="/services/shop/electrical" element={<ElectricalShop />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
