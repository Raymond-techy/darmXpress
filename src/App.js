import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./Pages/Services";
import { Nav } from "./Components/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
