import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import wdtImage from "./Images/wdt.jpg";
import techInternImage from "./Images/techaintern.jpg";
import androidImage from "./Images/android.jpg";
import javaImage from "./Images/java.jpg";
import sqlImage from "./Images/sql.jpg";
import celebalImage from "./Images/Celebal.jpg";


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
            <style>{`

@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

.jacques-francois-shadow-regular {
font-family: "Jacques Francois Shadow", serif;
font-weight: 400;
font-style: normal;
}

`}

</style>
<br/>
<br/>
<h1 className=" mt-4 jacques-francois-shadow-regular text-center">CERTIFICATES</h1>
<br/>
<br/>
      <StyledProject  data-aos="fade-left" data-aos-duration="2000" className="m-4 text-center">
      <img src={celebalImage} className="img-fluid border border-secondary" alt="..." />
      </StyledProject>
      <StyledProject  data-aos="fade-down" data-aos-duration="2000" className="m-4 text-center">
      <img src={wdtImage} className="img-fluid border border-secondary" alt="..." />
      </StyledProject>
      <StyledProject data-aos="fade-right" data-aos-duration="2000" className="m-4 text-center">
      <img src={techInternImage} className="img-fluid border border-secondary" alt="..." />
      </StyledProject>
      <StyledProject data-aos="fade-up" data-aos-duration="2000" className="m-4 text-center">
      <img src={androidImage} className="img-fluid border border-secondary" alt="..." />
      </StyledProject>

      <StyledProject data-aos="fade-right" data-aos-duration="2000" className="m-4 text-center">
      <img src={javaImage} className="img-fluid border border-secondary" alt="..." />
      </StyledProject>

      <StyledProject data-aos="fade-left" data-aos-duration="2000" className="text-center m-4">
      <img src={sqlImage} className="img-fluid border border-secondary" alt="..." />
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
  
`;
