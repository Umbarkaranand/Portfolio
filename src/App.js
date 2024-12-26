import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Nvabar";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Front from "./Components/Front";
import Certification from "./Components/Certification";

function App() {
  return (
    <div className="App container-fluid" style={{ width:'100vw'}}>
      <Navbar /> {/* Make sure the navbar is at the top */}
      
      <div className="check ms-4" > {/* Margin to avoid overlap */}
        <section id="home"><Front /></section>
        <section id="skills"><Skill /></section>
        <section id="projects"><Project /></section>
        <section id="certification"><Certification /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
