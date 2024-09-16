import React from "react";
import linkedin from "./Images/linkedin.png";
import email from "./Images/email.png";
import github from "./Images/github.png";
import resume from "./Images/Anand_Resume.pdf";
import pasportphoto from "./Images/pasportphoto.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Front = () => {
  const openped = () => {
    window.open(resume, "._blank");
  };

  const style = {
    typedOut: {
      overflow: "hidden",
      borderRight: ".30em solid orange",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      animation: "typing 2s steps(20, end) forwards, blinking 1.2s 3",
    },
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="frontpage" data-aos="fade-right" data-aos-duration="2000">
        <div class="row featurette m-4 g-4">
          <div class="col-md-7 ">
            <h2>Hi, I am</h2>
            <h1 className="name"> Anand Umbarkar</h1>
            <h1 className="webdeveloper typed-text" style={style.typedOut}>
              Web Developer
            </h1>
            <br />
            <div className="">
              <a
                href="https://www.linkedin.com/in/anand-umbarkar-9a6509287"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  className="img-fluid me-4 socoicon1"
                  alt="LinkedIn Icon"
                />
              </a>

              <a href="https://github.com/Umbarkaranand" target="_blank">
                <img
                  src={github}
                  class="img-fluid me-4 socoicon2"
                  alt="..."
                ></img>
              </a>

              <a href="mailto:anandumbarkar3@gmail.com">
                <img src={email} class="img-fluid socoicon3" alt="..."></img>
              </a>
            </div>
            <br />
            <button
              type="button"
              onClick={openped}
              class="btn btn-outline-danger btn-lg"
            >
              View Resume
            </button>
          </div>
          <div class="col-md-5 text-center">
            <img src={pasportphoto} class="img-fluid image" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
