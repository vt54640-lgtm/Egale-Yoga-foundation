import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/mockData';
import './CourseDetail.css';

const CourseDetail = () => {
    const { level } = useParams();
    const course = coursesData.find(c => c.id === level);

    if (!course) {
        return (
            <div className="container section">
                <h1>Course not found</h1>
                <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div className="course-detail-page">
            {/* Hero */}
            <section className="course-detail-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/courses">Courses</Link> / <span>{course.title}</span>
                    </div>
                    <h1 className="course-detail-title">{course.title}</h1>
                    <p className="course-detail-subtitle">{course.subtitle}</p>
                    <div className="course-detail-meta">
                        <span>⏱️ {course.duration}</span>
                        <span>👥 {course.students.toLocaleString()} students</span>
                        <span>⭐ {course.rating} rating</span>
                        <span>📊 {course.difficulty}</span>
                    </div>
                </div>
            </section>

            <div className="container section">
                <div className="course-detail-grid">
                    {/* Main Content */}
                    <div className="course-main-content">
                        <section className="content-section">
                            <h2>About This Course</h2>
                            <p>{course.description}</p>
                        </section>

                        <section className="content-section">
                            <h2>What You'll Learn</h2>
                            <ul className="features-list">
                                {course.features.map((feature, index) => (
                                    <li key={index}>✓ {feature}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="content-section">
                            <h2>Course Curriculum</h2>
                            <div className="curriculum-list">
                                {course.curriculum.map((week, index) => (
                                    <div key={index} className="curriculum-item card">
                                        <div className="curriculum-header">
                                            <h3>Week {week.week}: {week.title}</h3>
                                        </div>
                                        <ul className="curriculum-topics">
                                            {week.topics.map((topic, idx) => (
                                                <li key={idx}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="content-section">
                            <h2>Benefits</h2>
                            <div className="benefits-list">
                                {course.benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-item">
                                        <span className="benefit-icon">✨</span>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="course-sidebar">
                        <div className="enrollment-card card">
                            <div className="enrollment-price">
                                <div className="price-inr">₹{course.priceINR.toLocaleString()}</div>
                                <div className="price-usd">${course.priceUSD} USD</div>
                            </div>
                            <button className="btn btn-primary btn-block btn-lg">
                                Enroll Now
                            </button>
                            <Link to="/ai-health-test" className="btn btn-outline btn-block">
                                Take Health Test First
                            </Link>
                            <div className="enrollment-features">
                                <h4>This course includes:</h4>
                                <ul>
                                    <li>📹 {course.features[1]}</li>
                                    <li>⏰ {course.duration} program</li>
                                    <li>📱 Mobile & desktop access</li>
                                    <li>🏆 Certificate of completion</li>
                                    <li>♾️ Lifetime access</li>
                                    <li>💬 Community support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
