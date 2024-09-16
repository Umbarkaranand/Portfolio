import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EMS from "./Images/EMS.jpg";
import SRM from "./Images/SRM.jpg";
import WFA from "./Images/WFA.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledProject
      data-aos="fade-up"
      data-aos-duration="1000"
    
    >
      <h1 className="text-center" style={{ marginTop: "5%" }}>Projects</h1>

      <div className="row m-3" onClick={toggleContentVisibility}>
        <div className="col-4">
          <img
            src={EMS}
            alt="Employee Management System"
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h4 className="m-2">Employee Management System</h4>
          <h7 className="mt-2">
            The Employee Management System Project is a
          </h7>{" "}
          {isContentVisible && (
            <h7>
              {" "}
              comprehensive solution designed to enhance efficiency and security
              in organizational workforce management. Developed primarily for
              desktop use, this project leverages HTML, CSS, and Bootstrap for
              the frontend, while utilizing MySQL database and PHP for backend
              operations.
              <p className="mt-2">
                github link : <a href="">Click here.</a>
              </p>
            </h7>
          )}
        </div>
      </div>

      <div className="row m-3" onClick={toggleContentVisibility}>
        <div className="col-4">
          <img
            src={SRM}
            alt="Employee Management System"
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h4 className="m-2">Student Review System</h4>
          <h7 className="mt-2">The Student Review System Project is </h7>{" "}
          {isContentVisible && (
            <h7>
              a sophisticated platform designed to empower students by providing
              them with a centralized space to submit insightful reviews and
              feedback on various aspects of their educational journey,
              including courses, instructors, and overall educational
              experiences.
              <p className="mt-2">
                github link :{" "}
                <a href="https://github.com/Umbarkaranand/PBL-/tree/f8900762be3eb3221f8b9cf15c567a57724e510d/PBL">
                  Click here.
                </a>{" "}
              </p>
            </h7>
          )}
        </div>
      </div>

      <div className="row m-3" onClick={toggleContentVisibility}>
        <div className="col-4">
          <img
            src={WFA}
            alt="Employee Management System"
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h4 className="m-2">Weather Forecast App</h4>
          <h7 className="mt-2">The Weather Forecast Web Application </h7>{" "}
          {isContentVisible && (
            <h7>
              {" "}
              is a sophisticated web-based tool meticulously crafted to provide
              users with real-time weather information based on the inputted
              city names. Designed with a focus on user experience and data
              accuracy, the application utilizes an API to fetch and display
              weather conditions, including temperature and humidity, for the
              specified locations.
              <p className="mt-2">
                github link :{" "}
                <a href="https://github.com/Umbarkaranand/TAI-IP/tree/2aff94e702cb20afbc14547b13f64bc4bd4a314b/Whether%20App%20(Task%20No.%202)">
                  Click here.
                </a>
              </p>
            </h7>
          )}
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  .row:hover {
    cursor: pointer;
    background-color: #f0f0f0; /* Change to your desired hover background color */
  }
  margin: 50px auto;
`;

export default Project;
