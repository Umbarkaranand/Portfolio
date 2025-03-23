import React, { useEffect } from "react";
import EMS from "./Images/EMS.mp4";
import parking from "./Images/parking.png";
import WFA from "./Images/WFA.mp4";
import ML from "./Images/ML.gif";
import news from "./Images/news.png";
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
      <h1 className="mt-4 jacques-francois-shadow-regular text-center">
        PROJECTS
      </h1>
      <br />
      <br />

      <CDBContainer>
        <div className="row d-flex justify-content-center gx-4 gy-4">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={project.aosEffect}
              data-aos-duration="2000"
              className="col-lg-4 col-md-6 mb-4"
            >
              <CDBCard
                className="text-center p-4 d-flex flex-column justify-content-between"
                style={{ borderRadius: "50px", minHeight: "500px" }}
              >
                <CDBView className="img-fluid d-flex justify-content-center">
                  {project.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      src={project.image}
                      className="img-fluid"
                      style={{ height: "230px" }}
                    />
                  ) : (
                    <StyledImage
                      src={project.image}
                      alt={project.title}
                      className="img-fluid"
                    />
                  )}
                </CDBView>
                <br />
                <CDBCardBody className="d-flex flex-column align-items-center">
                  <h5>{project.title}</h5>
                  <p style={{ fontSize: "0.8rem" }}>{project.description}</p>

                  <div className="mt-auto w-100 d-flex justify-content-center gap-3">
                    <a
                      href={project.githubLink}
                      style={{ textDecoration: "none", width: "40%" }}
                    >
                      <CDBBtn color="dark" className="p-1 w-100">
                        GitHub
                      </CDBBtn>
                    </a>
                    <a
                      href={project.demoLink}
                      style={{ textDecoration: "none", width: "40%" }}
                    >
                      <CDBBtn color="danger" className="p-1 w-100">
                        Demo
                      </CDBBtn>
                    </a>
                  </div>
                </CDBCardBody>
              </CDBCard>
            </div>
          ))}
        </div>
      </CDBContainer>
    </div>
  );
};

export default Project;

// Project Data
const projects = [
  {
    title: "Employee Management System",
    image: EMS,
    isVideo: true,
    description:
      "The Employee Management System Project is a comprehensive solution designed to enhance efficiency and security in organizational workforce management. Developed primarily for desktop use, this project leverages HTML, CSS, and Bootstrap for the frontend.",
    githubLink: "https://github.com/Umbarkaranand",
    demoLink: "",
    aosEffect: "fade-right",
  },
  {
    title: "Smart Parking System",
    image: parking,
    isVideo: false,
    description:
      "Designed a user-friendly web application for real-time parking availability checks, eliminating the need for physical presence at parking facilities. Implemented robust administrative features for managing and updating parking slot statuses.",
    githubLink: "https://github.com/Umbarkaranand/Smart-Parking-System",
    demoLink: "https://smart-parking-system-a30af.netlify.app/",
    aosEffect: "fade-down",
  },
  {
    title: "Weather Forecast App",
    image: WFA,
    isVideo: true,
    description:
      "A sophisticated web-based tool crafted to provide users with real-time weather information based on the inputted city names.",
    githubLink:
      "https://github.com/Umbarkaranand/React-Project/tree/main/weatherApp",
      demoLink: "https://weather-app-a30af.netlify.app/",
    aosEffect: "fade-left",
  },
  {
    title: "Sentiments Analysis",
    image: ML,
    isVideo: false,
    description:
      "Trained and evaluated Machine Learning with the Maximum Entropy classifier. Enhanced skills in natural language processing, machine learning, and data analysis, with applications in social media monitoring and customer feedback analysis.",
    githubLink: "https://github.com/Umbarkaranand/Sentiment-Analysis",
    demoLink: "#",
    aosEffect: "fade-up",
  },
  {
    title: "News Web App",
    image: news,
    isVideo: false,
    description:
      "News Web application that provides real-time, up-to-date news from around the world to the users . Designed with a clean and user-friendly interface, the platform delivers breaking news across various categories, ensuring that users stay informed on current events.",
    githubLink: "https://github.com/Umbarkaranand/React-Project/tree/main/newsApp",
    demoLink: "https://news-app-a30af.netlify.app/",
    aosEffect: "fade-right",
  }
];
