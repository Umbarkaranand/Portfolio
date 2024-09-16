import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  const fontstyle = {
    fontFamily: "PT Serif, serif",
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="" data-aos="fade-down" data-aos-duration="2000">
      <div className="text-center" style={{ margin: "40px" }}>
        <h1 style={{ marginTop: "5%" }}>Skills</h1>

        <div>
          <div className="row text-center">
            <div className="col-3 ">
              <Box>
                <img
                  src={require("./Images/html (1).png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>HTML</h6>
              </Box>
            </div>
            <div className="col-3">
              <Box>
                <img
                  src={require("./Images/js.png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>JS</h6>
              </Box>
            </div>
            <div className="col-3">
              <Box>
                <img
                  src={require("./Images/bootsrap.png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>Bootsrap</h6>
              </Box>
            </div>
            <div className="col-3">
              <Box>
                <img
                  src={require("./Images/dbms.png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>DBMS</h6>
              </Box>
            </div>
          </div>

          <div className="row text-center m-2">
            <div className="col-3">
              <Box>
                <img
                  src={require("./Images/c.png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>C/C++</h6>
              </Box>
            </div>

            <div className="col-3">
              <Box>
                <img
                  src={require("./Images/java.png")}
                  class="img-fluid"
                  alt="..."
                ></img>
                <h6 style={fontstyle}>Java</h6>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const Box = styled.div`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  }
  padding: 10px;
`;
