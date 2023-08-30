import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./contactForm.css"
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path =`/thanks`; 
    navigate(path);
  }

  const handleSubmit = async (e) => {
    localStorage.setItem('savedName', e);
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', formData);
      console.log('Response:', response.data); 
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='contact-form'>
      <h2 className='contact-form-h2 '>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='contact-form-label'>Name</label>
          <input
          className='contact-form-input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className='contact-form-label'>Email</label>
          <input
          className='contact-form-input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className='contact-form-label'>Message</label>
          <textarea
          className='contact-form-textarea'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className='contact-form-button' type="submit" onClick={routeChange}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
