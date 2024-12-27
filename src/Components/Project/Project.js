import React, { useEffect } from "react";
import EMS from "./Images/EMS.mp4";
import parking from "./Images/parking.png";
import WFA from "./Images/WFA.mp4";
import ML from "./Images/ML.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { CDBCard, CDBCardBody, CDBBtn, CDBContainer, CDBView } from "cdbreact";
import styled from "styled-components"; // Import styled-components

const StyledImage = styled.img`
  height: 230px; /* Default height */
  
  @media (max-width: 576px) {
    height: 180px; /* Height for small screens */
  }
`;

const Project = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

        .jacques-francois-shadow-regular {
          font-family: "Jacques Francois Shadow", serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      <br />
      <br />
      <h1 className="mt-4 jacques-francois-shadow-regular text-center">PROJECTS</h1>
      <br />
      <br />

      <CDBContainer>
        <div className="row d-flex justify-content-center">
          {/* First Card */}
          <div data-aos="fade-right" data-aos-duration="2000" className="col-lg-4 col-md-6 mb-4">
            <CDBCard className="text-center p-4" style={{ borderRadius: "50px", height: "500px" }}>
              <CDBView className="img-fluid d-flex justify-content-center">
                <video autoPlay loop muted src={EMS} className="img-fluid" style={{ height: "230px" }} />
              </CDBView>
              <CDBCardBody className="d-flex flex-column align-items-center">
                <h5>Employee Management System</h5>
                <p style={{ fontSize: '0.7rem' }}>
                  The Employee Management System Project is a comprehensive solution designed to enhance efficiency and security in organizational workforce management. Developed primarily for desktop use, this project leverages HTML, CSS, and Bootstrap for the frontend.
                </p>
                <a href="https://github.com/Umbarkaranand" style={{ textDecoration: "none" }}>
                  <CDBBtn color="dark">GitHub</CDBBtn>
                </a>
              </CDBCardBody>
            </CDBCard>
          </div>

          {/* Repeat the above block for other cards */}
          <div className="col-lg-4 col-md-6 mb-4">
            <CDBCard data-aos="fade-down" data-aos-duration="2000" className="text-center p-4" style={{ borderRadius: "50px", height: "500px" }}>
              <CDBView className="img-fluid d-flex justify-content-center">
                <StyledImage src={parking} alt="Student Review System" className="img-fluid" />
              </CDBView>
              <br />
              <CDBCardBody className="d-flex flex-column align-items-center">
                <h5>Smart Parking System</h5>
                <p style={{ fontSize: '0.8rem' }}>
                  Designed a user-friendly web application for real-time parking availability checks, eliminating the need for physical presence at parking facilities. Implemented robust administrative features for managing and updating parking slot statuses.
                </p>
                <a href="https://github.com/Umbarkaranand/Smart-Parking-System" style={{ textDecoration: "none" }}>
                  <CDBBtn color="dark">GitHub</CDBBtn>
                </a>
              </CDBCardBody>
            </CDBCard>
          </div>

          <div data-aos="fade-left" data-aos-duration="2000" className="col-lg-4 col-md-6 mb-4">
            <CDBCard className="text-center p-4" style={{ borderRadius: "50px", height: "500px" }}>
              <CDBView className="img-fluid d-flex justify-content-center">
                <video autoPlay loop muted src={WFA} className="img-fluid" style={{ height: "230px" }} />
              </CDBView>
              <br />
              <CDBCardBody className="d-flex flex-column align-items-center">
                <h5>Weather Forecast App</h5>
                <p style={{ fontSize: '1rem' }}>
                  A sophisticated web-based tool crafted to provide users with real-time weather information based on the inputted city names.
                </p>
                <a href="https://github.com/Umbarkaranand/TAI-IP/tree/main/Whether%20App%20(Task%20No.%202)" style={{ textDecoration: "none" }}>
                  <CDBBtn color="dark">GitHub</CDBBtn>
                </a>
              </CDBCardBody>
            </CDBCard>
          </div>

          <div data-aos="fade-left" data-aos-duration="2000" className="col-lg-4 col-md-6 mb-4 align-items-center">
            <CDBCard className="text-center p-4" style={{ borderRadius: "50px", height: "500px" }}>
              <CDBView className="img-fluid d-flex justify-content-center">
                <StyledImage src={ML} alt="Machine Learning" className="img-fluid" />
              </CDBView>
              <br />
              <CDBCardBody className="d-flex flex-column align-items-center">
                <h5>Sentiments Analysis</h5>
                <p style={{ fontSize: '0.8rem' }}>
                  Trained and evaluated Machine Learning with the Maximum Entropy classifier. Enhanced skills in natural language processing, machine learning, and data analysis, with applications in social media monitoring and customer feedback analysis.
                </p>
                <a href="https://github.com/Umbarkaranand/Sentiment-Analysis" style={{ textDecoration: "none" }}>
                  <CDBBtn color="dark">GitHub</CDBBtn>
                </a>
              </CDBCardBody>
            </CDBCard>
          </div>
        </div>
      </CDBContainer>
    </div>
  );
};

export default Project;
