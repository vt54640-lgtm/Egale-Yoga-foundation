import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlogBySlug } from '../data/blogData';
import { generateBlogContent } from '../services/gemini';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const post = getBlogBySlug(id);
    const [detailedContent, setDetailedContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (post && !detailedContent) {
            loadDetailedContent();
        }
    }, [post]);

    const loadDetailedContent = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Generate comprehensive 1500+ line content using Gemini AI
            const content = await generateBlogContent(post.title);
            setDetailedContent(content);
        } catch (err) {
            console.error('Error loading blog content:', err);
            setError('Failed to load full article content. Showing preview instead.');
            setDetailedContent(post.content); // Fallback to basic content
        } finally {
            setIsLoading(false);
        }
    };

    if (!post) {
        return (
            <div className="container section">
                <div className="not-found card">
                    <h1>Blog Post Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                    <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            {/* Hero Section */}
            <section className="post-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/blog">Blog</Link> / <Link to={`/blog?category=${post.category}`}>{post.category}</Link> / <span>{post.title}</span>
                    </div>

                    <div className="post-header">
                        <div className="post-icon-large">{post.image}</div>
                        <span className="post-category">{post.category}</span>
                        <h1 className="post-title">{post.title}</h1>
                        <p className="post-excerpt">{post.excerpt}</p>

                        <div className="post-meta">
                            <div className="author-section">
                                <span className="author-avatar-large">{post.authorImage}</span>
                                <div className="author-details">
                                    <span className="author-name">{post.author}</span>
                                    <div className="post-info">
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="post-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container">
                    <div className="post-layout">
                        {/* Main Content */}
                        <article className="post-content card">
                            {isLoading ? (
                                <div className="loading-state">
                                    <div className="loading-spinner"></div>
                                    <p>Loading comprehensive article content...</p>
                                    <p className="loading-note">Generating detailed 1500+ line content using AI...</p>
                                </div>
                            ) : (
                                <div className="content-text">
                                    {error && <p className="text-sm text-yellow-500 mb-4 italic border-l-2 border-yellow-500 pl-3">Note: {error}</p>}
                                    <div className="markdown-body">
                                        {(detailedContent || post.content).split('\n').map((line, i) => {
                                            const parseBold = (text) => {
                                                return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={index} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                });
                                            };

                                            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-primary">{line.replace('## ', '')}</h2>;
                                            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-secondary">{line.replace('### ', '')}</h3>;
                                            if (line.trim().startsWith('- ')) {
                                                return (
                                                    <div key={i} className="flex items-start mb-2 ml-4">
                                                        <span className="mr-2 text-primary">•</span>
                                                        <span>{parseBold(line.trim().substring(2))}</span>
                                                    </div>
                                                );
                                            }
                                            if (!line.trim()) return <div key={i} className="h-3"></div>;
                                            return <p key={i} className="mb-4 leading-relaxed text-gray-300">{parseBold(line)}</p>;
                                        })}
                                    </div>
                                </div>
                            )}

                            {!isLoading && (
                                <div className="post-footer-section">
                                    <div className="share-section">
                                        <h3>Share this article:</h3>
                                        <div className="share-buttons">
                                            <button className="share-btn">📘 Facebook</button>
                                            <button className="share-btn">🐦 Twitter</button>
                                            <button className="share-btn">💼 LinkedIn</button>
                                            <button className="share-btn">📧 Email</button>
                                        </div>
                                    </div>

                                    <div className="cta-box">
                                        <h3>Ready to Deepen Your Practice?</h3>
                                        <p>Join our comprehensive yoga courses and learn from expert instructors.</p>
                                        <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
                                    </div>
                                </div>
                            )}
                        </article>

                        {/* Sidebar */}
                        <aside className="post-sidebar">
                            <div className="sidebar-card card">
                                <h3>About the Author</h3>
                                <div className="author-bio">
                                    <div className="author-avatar-large">{post.authorImage}</div>
                                    <h4>{post.author}</h4>
                                    <p>Expert yoga instructor and wellness consultant at Eagle Yoga Foundation.</p>
                                </div>
                            </div>

                            <div className="sidebar-card card">
                                <h3>Categories</h3>
                                <ul className="category-list">
                                    <li><Link to="/blog?category=Practice">Practice</Link></li>
                                    <li><Link to="/blog?category=Wellness">Wellness</Link></li>
                                    <li><Link to="/blog?category=Philosophy">Philosophy</Link></li>
                                    <li><Link to="/blog?category=Nutrition">Nutrition</Link></li>
                                    <li><Link to="/blog?category=Mental Health">Mental Health</Link></li>
                                </ul>
                            </div>

                            <div className="sidebar-card card">
                                <h3>Get Personalized Advice</h3>
                                <p>Have questions? Take our AI Health Test for instant guidance!</p>
                                <Link to="/ai-health-test" className="btn btn-outline btn-block">
                                    Start Health Test
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
