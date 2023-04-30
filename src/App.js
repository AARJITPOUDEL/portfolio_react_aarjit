import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import About from "./about";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <div></div>
      <div className="about-sec">
        <About />
      </div>
      <Login />
    </div>
  );
};
export default App;
