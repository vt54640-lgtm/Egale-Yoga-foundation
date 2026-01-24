import React from 'react';
import { Link } from 'react-router-dom';
import Eagle3DOverlay from '../components/Eagle3DOverlay';
import './Home.css';

const Home = () => {
    // Splash screen removed for simple opening

    const features = [
        {
            icon: '/images/expert-instructors.png',
            title: 'Expert Instructors',
            description: 'Learn from certified yoga masters with decades of experience',
            isImage: true
        },
        {
            icon: '/images/ai-guidance.png',
            title: 'AI-Powered Guidance',
            description: 'Get personalized recommendations from our Eagle Yoga AI',
            isImage: true
        },
        {
            icon: '/images/learn-anywhere.png',
            title: 'Learn Anywhere',
            description: 'Access courses on any device, anytime, anywhere',
            isImage: true
        },
        {
            icon: '/images/certified-courses.png',
            title: 'Certified Courses',
            description: 'Earn recognized certifications upon course completion',
            isImage: true
        },
        {
            icon: '/images/health-assessment.png',
            title: 'Health Assessment',
            description: 'AI-powered health analysis and personalized plans',
            isImage: true
        },
        {
            icon: '/images/community-support.png',
            title: 'Community Support',
            description: 'Join thousands of students on their wellness journey',
            isImage: true
        }
    ];

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Level 3 Graduate',
            image: '/images/user-priya.png',
            text: 'Eagle Yoga Foundation transformed my life. The AI health test was incredibly accurate!',
            isImage: true
        },
        {
            name: 'Rahul Verma',
            role: 'Level 2 Student',
            image: '/images/user-rahul.png',
            text: 'Best investment I made in my health. The instructors are world-class.',
            isImage: true
        },
        {
            name: 'Anjali Patel',
            role: 'Level 1 Graduate',
            image: '/images/user-anjali.png',
            text: 'The Eagle AI consultant helped me create a perfect wellness routine.',
            isImage: true
        }
    ];

    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title animate-fade-in">
                            Transform Your Life with <span className="text-gradient">Eagle Yoga</span>
                        </h1>
                        <p className="hero-subtitle animate-fade-in">
                            Experience the ancient wisdom of yoga combined with cutting-edge AI technology.
                            Join thousands of students on their journey to wellness, strength, and inner peace.
                        </p>
                        <div className="hero-actions animate-fade-in">
                            <Link to="/courses" className="btn btn-primary btn-lg">
                                Explore Courses
                            </Link>
                            <Link to="/ai-health-test" className="btn btn-secondary btn-lg">
                                Take AI Health Test
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">10,000+</span>
                                <span className="stat-label">Students</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Classes</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose Eagle Yoga Foundation?</h2>
                    <p className="section-subtitle text-center">
                        Experience the perfect blend of traditional yoga wisdom and modern technology
                    </p>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card card animate-fade-in">
                                <div className="feature-icon">
                                    {feature.isImage ? (
                                        <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
                                    ) : (
                                        feature.icon
                                    )}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Preview */}
            <section className="section courses-preview">
                <div className="container">
                    <h2 className="section-title text-center">Our Course Levels</h2>
                    <p className="section-subtitle text-center">
                        Choose the perfect course for your journey
                    </p>
                    <div className="courses-grid">
                        <div className="course-preview-card card">
                            <div className="course-badge">Beginner</div>
                            <h3>Level 1</h3>
                            <div className="course-price">
                                <span className="price-inr">₹5,999</span>
                                <span className="price-usd">$72 USD</span>
                            </div>
                            <ul className="course-features">
                                <li>✓ 4 Weeks Duration</li>
                                <li>✓ Basic Asanas & Breathing</li>
                                <li>✓ Meditation Fundamentals</li>
                                <li>✓ Certificate of Completion</li>
                            </ul>
                            <Link to="/courses/level-1" className="btn btn-primary">Learn More</Link>
                        </div>

                        <div className="course-preview-card card featured">
                            <div className="course-badge popular">Most Popular</div>
                            <h3>Level 2</h3>
                            <div className="course-price">
                                <span className="price-inr">₹8,999</span>
                                <span className="price-usd">$108 USD</span>
                            </div>
                            <ul className="course-features">
                                <li>✓ 6 Weeks Duration</li>
                                <li>✓ Advanced Asanas</li>
                                <li>✓ Pranayama Mastery</li>
                                <li>✓ Diet & Lifestyle Guidance</li>
                            </ul>
                            <Link to="/courses/level-2" className="btn btn-primary">Learn More</Link>
                        </div>

                        <div className="course-preview-card card">
                            <div className="course-badge">Advanced</div>
                            <h3>Level 3</h3>
                            <div className="course-price">
                                <span className="price-inr">₹16,999</span>
                                <span className="price-usd">$204 USD</span>
                            </div>
                            <ul className="course-features">
                                <li>✓ 8 Weeks Duration</li>
                                <li>✓ Expert Level Practice</li>
                                <li>✓ Teaching Methodology</li>
                                <li>✓ Instructor Certification</li>
                            </ul>
                            <Link to="/courses/level-3" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Features */}
            <section className="section ai-features">
                <div className="container">
                    <div className="ai-grid">
                        <div className="ai-content">
                            <h2 className="section-title">AI-Powered Wellness</h2>
                            <p className="section-description">
                                Experience the future of yoga with our cutting-edge AI technology.
                                Get personalized health assessments, custom workout plans, and 24/7
                                consultation from Eagle Yoga AI.
                            </p>
                            <div className="ai-benefits">
                                <div className="benefit">
                                    <div className="benefit-icon">
                                        <img src="/images/ai-icon-analysis.png" alt="Health Analysis" className="ai-icon-img" />
                                    </div>
                                    <div>
                                        <h4>AI Health Analysis</h4>
                                        <p>Advanced facial recognition and health assessment</p>
                                    </div>
                                </div>
                                <div className="benefit">
                                    <div className="benefit-icon">
                                        <img src="/images/ai-icon-chat.png" alt="AI Consultant" className="ai-icon-img" />
                                    </div>
                                    <div>
                                        <h4>24/7 AI Consultant</h4>
                                        <p>Get instant answers to your yoga and wellness questions</p>
                                    </div>
                                </div>
                                <div className="benefit">
                                    <div className="benefit-icon">
                                        <img src="/images/ai-icon-tracking.png" alt="Progress Tracking" className="ai-icon-img" />
                                    </div>
                                    <div>
                                        <h4>Progress Tracking</h4>
                                        <p>Monitor your journey with detailed analytics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ai-actions">
                                <Link to="/ai-health-test" className="btn btn-primary">
                                    Try AI Health Test
                                </Link>
                                <Link to="/ai-consultant" className="btn btn-outline">
                                    Chat with Eagle AI
                                </Link>
                            </div>
                        </div>
                        <div className="ai-visual">
                            <div className="ai-card card-glass">
                                <div className="ai-icon">
                                    <img src="/images/eagle-ai-avatar.png" alt="Eagle Yoga AI" className="eagle-ai-img" />
                                </div>
                                <h3>Eagle Yoga AI</h3>
                                <p>Your personal wellness companion powered by Google Gemini</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <h2 className="section-title text-center">What Our Students Say</h2>
                    <p className="section-subtitle text-center">
                        Join thousands of satisfied students worldwide
                    </p>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card card">
                                <div className="testimonial-avatar">
                                    {testimonial.isImage ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                                    ) : (
                                        testimonial.image
                                    )}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Begin Your Journey?</h2>
                        <p className="cta-text">
                            Join Eagle Yoga Foundation today and transform your life through the power of yoga
                        </p>
                        <div className="cta-actions">
                            <Link to="/courses" className="btn btn-primary btn-lg">
                                Enroll Now
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
