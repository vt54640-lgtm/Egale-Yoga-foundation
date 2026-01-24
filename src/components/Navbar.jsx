import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Activity, FileText, Utensils, Clock, Info, Phone, UserCircle, ShieldCheck } from 'lucide-react';
import './Navbar.css';
import Eagle3DOverlay from './Eagle3DOverlay';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFlying, setIsFlying] = useState(false);
    const location = useLocation();

    const handleLogoClick = (e) => {
        if (!isFlying) {
            setIsFlying(true);
            setTimeout(() => {
                setIsFlying(false);
            }, 10000); // 10 seconds flight
        }
    };

    const navLinks = [
        { path: '/', label: 'Home', icon: <Home size={18} /> },
        { path: '/courses', label: 'Courses', icon: <BookOpen size={18} /> },
        { path: '/ai-health-test', label: 'AI Health', icon: <Activity size={18} /> },
        { path: '/blog', label: 'Blog', icon: <FileText size={18} /> },
        { path: '/diet-plans', label: 'Diet', icon: <Utensils size={18} /> },
        { path: '/history', label: 'History', icon: <Clock size={18} /> },
        { path: '/about', label: 'About', icon: <Info size={18} /> },
        { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <Eagle3DOverlay isFlying={isFlying} onClose={() => setIsFlying(false)} />
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
                    <div className={`logo-icon-wrapper ${isFlying ? 'eagle-out' : 'eagle-in'}`}>
                        <img src="/images/eagle-sitting.png" alt="Eagle Logo" className="logo-eagle-img" />
                    </div>
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
                                    <span className="nav-icon">{link.icon}</span>
                                    <span className="nav-text">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <Link to="/login" className="nav-module-btn login-module">
                            <div className="module-icon"><UserCircle size={18} /></div>
                            <span className="module-label">Login</span>
                        </Link>
                        <Link to="/admin" className="nav-module-btn admin-module">
                            <div className="module-icon"><ShieldCheck size={18} /></div>
                            <span className="module-label">Admin</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
