import React from 'react';
import './About.css'; // Ensure the path is correct

function About() {
    return (
        <div className="about">
            <div className="content">
                <section className="about-section">
                    <h1>What We Provide</h1>
                </section>
                <section className="service-section">
                    <h3>Blogs</h3>
                    <p>Our blogs provide valuable insights into women’s health, including hygiene practices, wellness strategies, and lifestyle tips. We cover menstrual health, self-care, and mental wellness, offering practical advice and expert guidance to support overall well-being.</p>
                </section>
                <section className="service-section">
                    <h3>Hygiene Maintenance</h3>
                    <p>We provide expert tips and recommend high-quality products designed to help you maintain optimal hygiene throughout your menstrual cycle. Our resources cover essential practices for comfort and cleanliness, including proper menstrual product usage, effective hygiene routines, and tips for managing menstrual health, ensuring you feel confident and comfortable every day.</p>
                </section>
                <section className="service-section">
                    <h3>Period Tracker</h3>
                    <p>Our period tracker is a valuable tool that allows you to accurately monitor your menstrual cycle, ovulation, and fertile days. By keeping detailed records, you can better understand your cycle patterns, plan ahead for optimal fertility, and manage your reproductive health with greater ease and precision, empowering you with personalized insights.</p>
                </section>
                <section className="contact-section">
                    <h3>Contact Us</h3>
                    <p>If you have any additional questions or need further assistance, please don’t hesitate to <a href="/contact">reach out to us</a>. We’re here to help and provide any information or support you may need.</p>
                </section>
            </div>
        </div>
    );
}

export default About;
