import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import htmlIcon from "./Images/html (1).png";
import jsIcon from "./Images/js.png";
import bootstrapIcon from "./Images/bootsrap.png";
import dbmsIcon from "./Images/dbms.png";
import cIcon from "./Images/c.png";
import javaIcon from "./Images/java.png";
import nodejsIcon from "./Images/nodejs.png";
import reactIcon from "./Images/react.png";
import mongodbIcon from "./Images/mongodb.png";
import pythonIcon from "./Images/python.jpg";
import mlIcon from "./Images/machinelearning.png";

const Skill = () => {
  const fontstyle = {
    fontFamily: "PT Serif, serif",
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mt-5" data-aos="fade-down" data-aos-duration="2000">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');
        .jacques-francois-shadow-regular {
          font-family: "Jacques Francois Shadow", serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      <div className="text-center" style={{ margin: "40px" }}>
        <br/>
        <br/>
        <h1 className="jacques-francois-shadow-regular">SKILLS</h1>
        <div className="mt-5 row text-center">
          {/* HTML */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-right" data-aos-duration="2000">
            <img src={htmlIcon} className="img-fluid" alt="HTML" />
              <br />
              <h6 style={fontstyle}>HTML</h6>
            </Box>
          </div>

          {/* JavaScript */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-down" data-aos-duration="2000">
            <img src={jsIcon} className="img-fluid" alt="JavaScript" />
              <br />
              <h6 style={fontstyle}>JavaScript</h6>
            </Box>
          </div>

          {/* Bootstrap */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-up" data-aos-duration="2000">
            <img src={bootstrapIcon} className="img-fluid" alt="Bootsrap" />
              <br />
              <h6 style={fontstyle}>Bootstrap</h6>
            </Box>
          </div>

          {/* DBMS */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-left" data-aos-duration="2000">
            <img src={dbmsIcon} className="img-fluid" alt="DBMS" />
              <br />
              <h6 style={fontstyle}>DBMS</h6>
            </Box>
          </div>

          {/* C/C++ */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-right" data-aos-duration="2000">
            <img src={cIcon} className="img-fluid" alt="C/C++" />
              <br />
              <h6 style={fontstyle}>C/C++</h6>
            </Box>
          </div>

          {/* Java */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-right" data-aos-duration="2000">
            <img src={javaIcon} className="img-fluid" alt="Java" />
              <br />
              <h6 style={fontstyle}>Java</h6>
            </Box>
          </div>

          {/* NodeJS */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-up" data-aos-duration="2000">
            <img src={nodejsIcon} className="img-fluid" alt="NodeJS" />
              <br />
              <h6 style={fontstyle}>NodeJS</h6>
            </Box>
          </div>

          {/* React */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-left" data-aos-duration="2000">
            <img src={reactIcon} className="img-fluid" alt="React" />
              <br />
              <h6 style={fontstyle}>React</h6>
            </Box>
          </div>

          {/* MongoDB */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-right" data-aos-duration="2000">
            <img src={mongodbIcon} className="img-fluid" alt="MongoDB" />
              <br />
              <h6 style={fontstyle}>MongoDB</h6>
            </Box>
          </div>

          {/* Python */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-up" data-aos-duration="2000">
            <img src={pythonIcon} className="img-fluid" alt="Python" />
              <br />
              <h6 style={fontstyle}>Python</h6>
            </Box>
          </div>

          {/* Machine Learning */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <Box data-aos="fade-left" data-aos-duration="2000">
            <img src={mlIcon} className="img-fluid" alt="ML" />
              <br />
              <h6 style={fontstyle}>Machine Learning</h6>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer; /* Enables pointer cursor */
  transition: box-shadow 0.3s;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2); /* Adds shadow */

 
`;
