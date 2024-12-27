import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "./Images/linkedin.png";
import email from "./Images/email.png";
import github from "./Images/github.png";
import resume from "./Images/Anand_Resume.pdf";
import passportphoto from "./Images/pasportphoto.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./front.css";

const Front = () => {
  const [isTyping, setIsTyping] = useState(true);

  const openResume = () => {
    window.open(resume, "_blank");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // Loop the typing effect
    const typingInterval = setInterval(() => {
      setIsTyping(false); // Reset the text
      setTimeout(() => setIsTyping(true), 500); // Start typing again after a short delay
    }, 4000); // Total duration of the animation + reset delay (3s animation + 1s idle)

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []);

  return (
    <section id="home">
      <Container
        fluid
        className="frontpage"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Container className="home-content">
          <Row className="row">
            <Col
              data-aos="fade-left"
              data-aos-duration="2000"
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center front-col"
            >
              <h2>
                Hi, I am <span className="name">Anand Umbarkar</span>
              </h2>

              <div className="">
                <h1
                  className={`webdeveloper ${
                    isTyping ? "typing-active" : "typing-inactive"
                  }`}
                >
                  FullStack Developer
                </h1>
              </div>
              {/* <h1 className="testwebname">Fullstack Developer</h1> */}

              <h5 className="dancing-script">
                An Enthusiastic Full Stack Web Developer with strong technical
                and non-technical skills and a dedication towards creating
                useful and interactive web applications.
              </h5>
              <br />

              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anand-umbarkar-9a6509287"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    className="img-fluid socoicon"
                    alt="LinkedIn Icon"
                  />
                </a>
                <a
                  href="https://github.com/Umbarkaranand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    className="img-fluid socoicon"
                    alt="GitHub Icon"
                  />
                </a>
                <a href="mailto:anandumbarkar3@gmail.com">
                  <img
                    src={email}
                    className="img-fluid socoicon"
                    alt="Email Icon"
                  />
                </a>
              </div>
              <br />
              <button
                type="button"
                onClick={openResume}
                className="btn btn-outline-dark btn-lg"
              >
                View Resume
              </button>
            </Col>
            <Col
              data-aos="fade-right"
              data-aos-duration="2000"
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center p-4 front-col"
            >
              <img src={passportphoto} className="img-fluid image" alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Front;
