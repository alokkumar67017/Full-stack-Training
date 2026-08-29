import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <p>GET IN TOUCH</p>

        <h1>We'd Love To Hear From You</h1>

        <span>
          Have a question, want to place an order, or simply want
          to say hello? Get in touch with Sweet Dreams.
        </span>
      </section>


      {/* Contact Information */}
      <section className="contact-info">

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Visit Us</h3>
          <p>
            123 Bakery Street
            <br />
            Rajkot, Gujarat
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>
            +91 98765 43210
            <br />
            +91 98765 12345
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <p>
            sweetdreams@gmail.com
            <br />
            info@sweetdreams.com
          </p>
        </div>

      </section>


      {/* Contact Form */}
      <section className="contact-section">

        <div className="contact-form-container">

          <div className="contact-form-info">
            <p className="contact-label">
              SEND US A MESSAGE
            </p>

            <h2>
              Let's Talk About
              <br />
              Something Sweet
            </h2>

            <p>
              Whether you have a question about our bakery products,
              courses or custom cakes, our team is always happy to help.
            </p>

            <div className="opening-hours">

              <h3>Opening Hours</h3>

              <p>
                Monday - Saturday
                <span>9:00 AM - 9:00 PM</span>
              </p>

              <p>
                Sunday
                <span>10:00 AM - 7:00 PM</span>
              </p>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* Map */}
      <section className="map-section">

        <div className="map-content">
          <div className="map-icon">📍</div>

          <h2>Come Visit Sweet Dreams</h2>

          <p>
            We'd love to welcome you at our bakery.
          </p>

          <button>
            Get Directions
          </button>
        </div>

      </section>

    </main>
  );
}

export default Contact;