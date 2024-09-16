
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  const fontsyle = {
    fontfamily: 'Roboto, sans-serif',
  };

  useEffect(() => {
    AOS.init();
   
  }, []);

  return (
    <div className='textcontainer shadow-sm rounded mt-5 p-5' data-aos="fade-up" data-aos-duration="2000" >
        <h1 style={fontsyle} >Let's Introduced about myself</h1>
        <br/>
      <h5>Hello,</h5>
     <p style={{ marginTop: '2rem'}}>I'm Anand Umbarkar, an engineer passionate about turning ideas into reality. Welcome to my portfolio, where I showcase my journey in Information Technology. From designing innovative solutions to tackling complex challenges, I bring a blend of technical expertise and creativity to every project. Explore my work, and let's connect to discuss how we can engineer a better future together.</p>
     <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-outline-danger btn-lg mt-2 " type="button">Explore</button>
    
    </div>
    </div>
  );
};

export default About;
