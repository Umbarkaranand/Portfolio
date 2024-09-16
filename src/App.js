import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nvabar from "./Components/Nvabar";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import News from "./Components/News";
import Certification from "./Components/Certification";

function App() {
  return (
    <Router>
      <div className="App">
        <Nvabar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
