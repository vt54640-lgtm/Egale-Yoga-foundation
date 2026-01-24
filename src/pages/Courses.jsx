import { Link } from 'react-router-dom';
import { coursesData } from '../data/mockData';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-page">
            {/* Hero Section */}
            <section className="courses-hero">
                <div className="container">
                    <h1 className="page-title">Our Yoga Courses</h1>
                    <p className="page-subtitle">
                        Choose the perfect course for your journey. From beginner to advanced instructor training,
                        we have a path for everyone.
                    </p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="section">
                <div className="container">
                    <div className="courses-container">
                        {coursesData.map((course) => (
                            <div key={course.id} className={`course-card card ${course.level === 2 ? 'featured' : ''}`}>
                                {course.level === 2 && (
                                    <div className="popular-badge">Most Popular</div>
                                )}

                                <div className="course-header">
                                    <div className="course-level">Level {course.level}</div>
                                    <div className="course-difficulty">{course.difficulty}</div>
                                </div>

                                <h2 className="course-title">{course.title}</h2>
                                <p className="course-subtitle">{course.subtitle}</p>
                                <p className="course-description">{course.description}</p>

                                <div className="course-meta">
                                    <div className="meta-item">
                                        <span className="meta-icon">⏱️</span>
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">👥</span>
                                        <span>{course.students.toLocaleString()} students</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">⭐</span>
                                        <span>{course.rating} rating</span>
                                    </div>
                                </div>

                                <div className="course-price-section">
                                    <div className="price-main">
                                        <span className="price-inr">₹{course.priceINR.toLocaleString()}</span>
                                        <span className="price-usd">${course.priceUSD} USD</span>
                                    </div>
                                </div>

                                <div className="course-features-preview">
                                    <h4>What's Included:</h4>
                                    <ul>
                                        {course.features.slice(0, 5).map((feature, index) => (
                                            <li key={index}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="course-actions">
                                    <Link to={`/courses/${course.id}`} className="btn btn-primary btn-block">
                                        View Details
                                    </Link>
                                    <Link to={`/courses/${course.id}`} className="btn btn-outline btn-block">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-choose-section">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose Eagle Yoga Foundation?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card card">
                            <div className="benefit-icon">🎓</div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from certified yoga masters with decades of experience</p>
                        </div>
                        <div className="benefit-card card">
                            <div className="benefit-icon">📱</div>
                            <h3>Learn Anywhere</h3>
                            <p>Access courses on any device, anytime, anywhere</p>
                        </div>
                        <div className="benefit-card card">
                            <div className="benefit-icon">🏆</div>
                            <h3>Certified Programs</h3>
                            <p>Earn recognized certifications upon completion</p>
                        </div>
                        <div className="benefit-card card">
                            <div className="benefit-icon">💬</div>
                            <h3>Community Support</h3>
                            <p>Join thousands of students on their wellness journey</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box card">
                        <h2>Not Sure Which Course to Choose?</h2>
                        <p>Take our AI-powered health assessment to get personalized course recommendations</p>
                        <div className="cta-actions">
                            <Link to="/ai-health-test" className="btn btn-primary btn-lg">
                                Take AI Health Test
                            </Link>
                            <Link to="/ai-consultant" className="btn btn-outline btn-lg">
                                Chat with Eagle AI
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
