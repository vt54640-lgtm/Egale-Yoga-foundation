import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/auth';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let result;
            if (isLogin) {
                result = await login(formData.email, formData.password);
            } else {
                if (formData.password !== formData.confirmPassword) {
                    throw new Error('Passwords do not match');
                }
                result = await register(formData);
            }

            if (result.success) {
                navigate('/dashboard');
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="auth-card card">
                    <div className="auth-header">
                        <h1>{isLogin ? 'Welcome Back' : 'Join Eagle Yoga'}</h1>
                        <p>{isLogin ? 'Login to access your courses' : 'Start your yoga journey today'}</p>
                    </div>

                    {error && <div className="error-alert">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        {!isLogin && (
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {!isLogin && (
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                className="text-btn"
                                onClick={() => { setIsLogin(!isLogin); setError(''); }}
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
