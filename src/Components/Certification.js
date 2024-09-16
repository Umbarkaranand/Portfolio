import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export const Certification = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="text-center mt-5"
      data-aos="fade-right"
      data-aos-duration="2000"
    
    >
      <h1 style={{ marginTop: "5%" }}>Certifications</h1>
      <StyledProject className="text-center">
        <img
          src={require("./Images/wdt.jpg")}
          class="img-fluid border border-secondary"
          alt="..."
        ></img>
      </StyledProject>
      <StyledProject className="text-center">
        <img
          src={require("./Images/techaintern.jpg")}
          class="img-fluid border border-secondary"
          alt="..."
        ></img>
      </StyledProject>
      <StyledProject className="text-center">
        <img
          src={require("./Images/android.jpg")}
          class="img-fluid border border-black"
          alt="..."
        ></img>
      </StyledProject>

      <StyledProject className="text-center">
        <img
          src={require("./Images/java.jpg")}
          class="img-fluid border border-black"
          alt="..."
        ></img>
      </StyledProject>

      <StyledProject className="text-center">
        <img
          src={require("./Images/sql.jpg")}
          class="img-fluid border border-black"
          alt="..."
        ></img>
      </StyledProject>
    </div>
  );
};

export default Certification;

const StyledProject = styled.div`
  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
  margin: 50px auto;
`;
