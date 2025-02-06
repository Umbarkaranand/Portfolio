import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Front from "./Front";
import Certification from "./Certificates/Certification";

const Home = () => {
  return (
    <div>
      <Front />
      <About />
      <Skill />
      <Project />
      <Certification />
      <Contact />
    </div>
  );
};

export default Home;
