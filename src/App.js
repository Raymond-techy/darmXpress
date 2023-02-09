import logo from "./logo.svg";
import "./App.css";
import Services from "./Pages/Services";
import { Nav } from "./Components/Navbar";
import Register from "./Pages/Register";
import Regular from "./Components/plans/regular";

function App() {
  return (
    <div className="App">
      <Nav />
      <Services />
      {/* <Regular /> */}
      {/* <Register /> */}
      {/* <Services />
      <Services /> */}
    </div>
  );
}

export default App;
