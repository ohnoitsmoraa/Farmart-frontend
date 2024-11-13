import React, { useState } from 'react';
import './Contact.css'; 
import yourImage from '../assets/Contact.jpg';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Submitting...');

    setTimeout(() => {
      setLoading(false);

      if (formData.name && formData.email && formData.message) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please fill all fields.');
      }
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="form-container">
        <div className="left-container">
          <img 
            src={yourImage} 
            alt="Laptop on Desk"
            className="contact-image"
          />
        </div>

        <div className="right-container">
          <h1>Get in touch with FarmArt</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
