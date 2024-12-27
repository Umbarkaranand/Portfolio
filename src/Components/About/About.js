
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

        <br/>
        <div className='row'>
          <div className='col'>
          <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
      <iframe
        src="https://giphy.com/embed/RbDKaczqWovIugyJmW"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="Giphy Embed"
      ></iframe>
    </div>
          </div>
          <div className='col me-5'>
          <h2>Hello,</h2>
            <h7 style={{ marginTop: '2rem'}}>I'm Anand Umbarkar, an engineer passionate about turning ideas into reality. Welcome to my portfolio, where I showcase my journey in Information Technology. From designing innovative solutions to tackling complex challenges, I bring a blend of technical expertise and creativity to every project. Explore my work, and let's connect to discuss how we can engineer a better future together.</h7>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-outline-danger btn-lg mt-2 " type="button">Explore</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
