import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-body-secondary" data-aos="fade-up" >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2732829148936!2d73.75906487496627!3d18.651728782467465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1704895415766!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container p-2" style={{ width: "70%" }}>
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
      </div>
    </div>
  );
};

export default Contact;
