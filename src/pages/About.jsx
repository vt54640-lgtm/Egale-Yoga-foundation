import './About.css';

const About = () => {
    const teamMembers = [
        {
            name: 'Dr. Vivek Tiwari',
            role: 'Founder & Lead Instructor',
            image: '🧘‍♂️',
            bio: 'A certified Yoga Master with 15+ years of experience in Hatha and Ashtanga Yoga. Dedicated to merging ancient wisdom with modern science.',
        },
        {
            name: 'Sarah Johnson',
            role: 'Senior Meditation Coach',
            image: '🧘‍♀️',
            bio: 'Specializes in mindfulness and stress reduction techniques. She has guided thousands of students to mental clarity.',
        },
        {
            name: 'Raj Patel',
            role: 'Ayurvedic Nutritionist',
            image: '🥗',
            bio: 'Expert in Ayurvedic diet and holistic wellness. Helps students find balance through food and lifestyle.',
        },
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">About Eagle Yoga Foundation</h1>
                    <p className="page-subtitle">
                        Bridging the gap between ancient tradition and future technology.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                At Eagle Yoga Foundation, we believe that yoga is for everyone, everywhere.
                                Our mission is to democratize access to authentic yoga teachings by leveraging
                                cutting-edge AI technology to provide personalized guidance that was once
                                only possible in 1-on-1 sessions.
                            </p>
                            <p>
                                We strive to create a world where physical health, mental peace, and spiritual
                                growth are accessible to all, regardless of location or budget.
                            </p>
                        </div>
                        <div className="mission-image">
                            <div className="image-placeholder">🦅</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section team-section">
                <div className="container">
                    <h2 className="section-title text-center">Meet Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card card">
                                <div className="member-image">{member.image}</div>
                                <h3>{member.name}</h3>
                                <div className="member-role">{member.role}</div>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
