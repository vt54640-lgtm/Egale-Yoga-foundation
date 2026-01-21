import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Get in Touch</h1>
                    <p className="page-subtitle">We'd love to hear from you. Reach out for any queries or support.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info card">
                            <h2>Contact Information</h2>
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <h3>Visit Us</h3>
                                    <p>Eagle Yoga Foundation HQ<br />Bandrah, Mumbai - 400050<br />India</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>support@eagleyoga.com<br />info@eagleyoga.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📱</span>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 98765 43210<br />Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-icon">📷</a>
                                    <a href="#" className="social-icon">🐦</a>
                                    <a href="#" className="social-icon">📘</a>
                                    <a href="#" className="social-icon">▶️</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container card">
                            <h2>Send a Message</h2>
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✅</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        >
                                            <option value="">Select a topic...</option>
                                            <option>Course Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Partnership</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
