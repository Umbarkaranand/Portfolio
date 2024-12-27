import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();

    // Dynamically load Visme's embed script
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="" data-aos="fade-up">
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
      <h1 className=" mt-2 jacques-francois-shadow-regular text-center">
        CONTACT ME
      </h1>
      <br />
    


        {/*<div className="container p-2" style={{ width: "70%" }}>
        <h1 className="text-center mt-4">Contact</h1>
        <form
          action="https://formspree.io/f/xwkgpkbn"
          method="POST"
          className="contactForm"
          style={{ width: "100%" }}
        >
          <div className="mb-3">
            <label
              htmlFor="nameInput"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="emailInput"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="_replyto"
              required
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="messageTextarea"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="messageTextarea"
              name="message"
              required
              rows="3"
            ></textarea>
          </div>
          <div className="mt-2 d-grid gap-2 col-12 mx-auto">
            <button
              type="submit"
              className="btn btn-outline-danger mt-2 mb-4"
              style={{ fontWeight: "500" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>*/}



      {/* Visme Form Embed */}
      <div
        className="visme_d"
        data-title="Client Contact Form"
        data-url="q69ze8xd-client-contact-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="93586"
      ></div>

       {/* Google Maps Embed */}
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2732829148936!2d73.75906487496627!3d18.651728782467465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1704895415766!5m2!1sen!2sin"
        width="100%"
        height="300px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="location"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
