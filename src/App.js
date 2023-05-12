import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./Pages/Services";
import { Nav } from "./Components/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Contact from "./Pages/Contact";
import { Clothing } from "./Components/DryCleaning/Page1";
import { Electrical } from "./Components/Electrical";
import { Plumbing } from "./Components/Plumbing/Index";
import Cleaning from "./Pages/Cleaning";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Cleaning />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/dryCleaning" element={<Clothing />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/electrical" element={<Electrical />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
