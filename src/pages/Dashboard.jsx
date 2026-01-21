import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/auth';
import './Dashboard.css';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            navigate('/login');
            return;
        }
        setUser(currentUser);
    }, [navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="dashboard-page">
            <div className="container">
                <header className="dashboard-header card">
                    <div className="user-welcome">
                        <div className="user-avatar">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1>Namaste, {user.name}!</h1>
                            <p>Welcome to your personal wellness space.</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
                </header>

                <div className="dashboard-grid">
                    {/* Main Content */}
                    <div className="dashboard-main">
                        <section className="section-card card">
                            <div className="section-header">
                                <h2>My Courses</h2>
                                <Link to="/courses" className="text-link">Browse All</Link>
                            </div>

                            {user.enrolledCourses && user.enrolledCourses.length > 0 ? (
                                <div className="enrolled-courses-grid">
                                    {user.enrolledCourses.map((course, index) => (
                                        <div key={index} className="course-progress-card">
                                            <h3>Course Level {course.courseId}</h3>
                                            <div className="progress-bar-bg">
                                                <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                                            </div>
                                            <div className="progress-text">{course.progress}% Complete</div>
                                            <button className="btn btn-primary btn-sm mt-3">Continue Learning</button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <span className="empty-icon">🧘</span>
                                    <p>You haven't enrolled in any courses yet.</p>
                                    <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
                                </div>
                            )}
                        </section>

                        <section className="section-card card">
                            <h2>Recent Activity</h2>
                            <div className="activity-list">
                                <div className="activity-item">
                                    <span className="activity-icon">✅</span>
                                    <div>
                                        <h4>Account Created</h4>
                                        <span className="activity-date">{new Date(user.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="dashboard-sidebar">
                        <div className="sidebar-widget card">
                            <h3>Quick Actions</h3>
                            <ul className="action-list">
                                <li><Link to="/ai-health-test">⚕️ Take Health Test</Link></li>
                                <li><Link to="/diet-plans">🥗 Get Diet Plan</Link></li>
                            </ul>
                        </div>

                        <div className="sidebar-widget card gradient-widget">
                            <h3>Daily Quote</h3>
                            <p className="quote">"Yoga is the journey of the self, through the self, to the self."</p>
                            <span className="quote-author">- The Bhagavad Gita</span>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
