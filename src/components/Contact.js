import React,{useState} from 'react';
import { database, ref, push } from '../firebase.js';
import '../css/contact.css';
import Navbar from '../components/Navbar.js';
import Footer from  '../components/Footer.js';

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactRef = ref(database, "contacts"); // 'contacts' is your DB path
      await push(contactRef, formData);
      alert("Message submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting message: " + error.message);
    }
  };
  return (
    
      <div>
        <Navbar/>
    <div className="contact-container">
      
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We would love to hear from you. Please fill out the form below.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}  required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
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
    <Footer/>
  </div>
  );
};

export default Contact;
