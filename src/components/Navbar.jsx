import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/courses', label: 'Courses' },
        { path: '/ai-health-test', label: 'AI Health Test' },
        { path: '/ai-consultant', label: 'Eagle AI' },
        { path: '/blog', label: 'Blog' },
        { path: '/diet-plans', label: 'Diet Plans' },
        { path: '/history', label: 'History' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">🦅</div>
                    <span className="logo-text">Eagle Yoga Foundation</span>
                </Link>

                <button
                    className={`navbar-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-nav">
                        {navLinks.map((link) => (
                            <li key={link.path} className="nav-item">
                                <Link
                                    to={link.path}
                                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <Link to="/login" className="btn btn-outline" onClick={() => setIsOpen(false)}>
                            Login
                        </Link>
                        <Link to="/courses" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
