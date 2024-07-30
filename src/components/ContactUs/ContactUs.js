import React, { useState } from 'react';
import './ContactUs.css'; 
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        source: '',
        zip: '',
        updates: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="contact-us-page">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="source">How did you hear about us?</label>
                <select id="source" name="source" value={formData.source} onChange={handleChange}>
                    <option value="social-media">Social Media</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="friend">Friend</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="zip">Your Zip Code*</label>
                <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />

                <label>
                    <input type="checkbox" id="updates" name="updates" checked={formData.updates} onChange={handleChange} />
                    Stay Up to Date
                </label>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;
