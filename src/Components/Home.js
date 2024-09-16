
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Front from "./Front";
import Certification from "./Certification";

import ExpandableComponent from "./ExpandableComponent";

const Home = () => {
  return (
    <div>
      <Front />
      <About />
      <ExpandableComponent title="Skill/Knowledge">
        <Skill />
      </ExpandableComponent>
      <ExpandableComponent title="Projects">
        <Project />
      </ExpandableComponent>
      <ExpandableComponent title="Certification">
        <Certification />
      </ExpandableComponent>

      <Contact />
    </div>
  );
};

export default Home;
