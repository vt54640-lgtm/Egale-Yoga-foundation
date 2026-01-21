import { Link } from 'react-router-dom';
import { useState } from 'react';
import blogPosts from '../data/blogData';
import './Blog.css';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Get unique categories
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter posts
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <h1 className="page-title">Yoga & Wellness Blog</h1>
                    <p className="page-subtitle">
                        Explore our comprehensive collection of 30+ in-depth articles on yoga, wellness, and holistic living
                    </p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="section">
                <div className="container">
                    <div className="blog-controls">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="category-filters">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="blog-grid">
                        {filteredPosts.map(post => (
                            <article key={post.id} className="blog-card card">
                                <div className="blog-card-header">
                                    <div className="blog-icon">{post.image}</div>
                                    <div className="blog-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>

                                <h2 className="blog-title">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>

                                <p className="blog-excerpt">{post.excerpt}</p>

                                <div className="blog-footer">
                                    <div className="blog-author">
                                        <span className="author-avatar">{post.authorImage}</span>
                                        <div className="author-info">
                                            <span className="author-name">{post.author}</span>
                                            <span className="read-time">{post.readTime}</span>
                                        </div>
                                    </div>

                                    <Link to={`/blog/${post.slug}`} className="read-more-btn">
                                        Read More →
                                    </Link>
                                </div>

                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-results">
                            <p>No articles found matching your criteria.</p>
                            <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box card">
                        <h2>Want Personalized Guidance?</h2>
                        <p>Chat with our Eagle Yoga AI for instant answers to your yoga and wellness questions!</p>
                        <Link to="/ai-consultant" className="btn btn-primary btn-lg">
                            Chat with Eagle AI
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
