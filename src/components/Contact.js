import React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We would love to hear from you. Please fill out the form below.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      
      {/* <div className="contact-info">
        <h2>Softwallet</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@example.com</p>
        <p>Address: 123 Main St, City, Country</p>
      </div> */}
    </div>
  );
};

export default Contact;
