import './App.css';
import Navbar from "./Components/Navbar/Nvabar";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Front from "./Components/Front/Front";
import Certification from "./Components/Certificates/Certification";

function App() {
  return (
    <div className="App container-fluid" style={{ width:'100vw'}}>
      <Navbar /> {/* Make sure the navbar is at the top */}
      
      <div className="check ms-5" > {/* Margin to avoid overlap */}
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
