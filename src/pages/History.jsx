import './History.css';

const History = () => {
    const timelineEvents = [
        {
            period: 'Vedic Period (1500–500 BCE)',
            title: 'The Origins',
            description: 'The earliest mention of Yoga is found in the Rig Veda. It was a period of ritual sacrifice and deep contemplation. The Rishis (seers) sought the ultimate truth through intense meditation and mantras. Key text: Rig Veda.',
            icon: '📜'
        },
        {
            period: 'Pre-Classical (500–200 BCE)',
            title: 'The Upanishads & Bhagavad Gita',
            description: 'Yoga began to take a more defined form. The Upanishads explored the self (Atman) and the ultimate reality (Brahman). The Bhagavad Gita introduced the three paths: Jnana (Knowledge), Bhakti (Devotion), and Karma (Action) Yoga.',
            icon: '🕉️'
        },
        {
            period: 'Classical (200 BCE – 200 CE)',
            title: 'Yoga Sutras of Patanjali',
            description: 'The systematization of Yoga into the "Eight Limbs" (Ashtanga): Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and Samadhi. This period defined Yoga as a mental discipline to cease the fluctuations of the mind.',
            icon: '🧠'
        },
        {
            period: 'Post-Classical (800–1700 CE)',
            title: 'Hatha Yoga & Tantra',
            description: 'A radical shift towards the body. Yogis realized the body must be purified and strengthened to handle enlightenment. Hatha Yoga Pradipika was written, focusing on Asanas, Shatkarmas (cleansing), and Pranayama.',
            icon: '🧘'
        },
        {
            period: 'Modern Period (1893–Present)',
            title: 'Global Global Renaissance',
            description: 'Swami Vivekananda introduced Yoga to the West in Chicago (1893). Later, masters like T. Krishnamacharya, B.K.S. Iyengar, and Pattabhi Jois revolutionized physical yoga, making it accessible to millions worldwide.',
            icon: '🌍'
        }
    ];

    return (
        <div className="history-page">
            <section className="history-hero">
                <div className="container">
                    <h1 className="page-title">The Timeless Journey of Yoga</h1>
                    <p className="page-subtitle">From ancient Vedic hyms to a global movement for wellness.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="timeline">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className="timeline-item animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="timeline-content card">
                                    <div className="timeline-header">
                                        <span className="timeline-period">{event.period}</span>
                                        <span className="timeline-icon">{event.icon}</span>
                                    </div>
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section lineages-section">
                <div className="container">
                    <h2 className="section-title text-center">Major Lineages</h2>
                    <div className="lineages-grid">
                        <div className="lineage-card">
                            <h3>Hatha Yoga</h3>
                            <p>The foundation of most modern physical yoga. Focuses on balancing the solar (Ha) and lunar (Tha) energies.</p>
                        </div>
                        <div className="lineage-card">
                            <h3>Ashtanga Yoga</h3>
                            <p>A rigorous, athletic style founded by K. Pattabhi Jois, involving synchronized breath and movement.</p>
                        </div>
                        <div className="lineage-card">
                            <h3>Iyengar Yoga</h3>
                            <p>Founded by B.K.S. Iyengar, known for its focus on precision, alignment, and the use of props.</p>
                        </div>
                        <div className="lineage-card">
                            <h3>Vinyasa</h3>
                            <p>A fluid, movement-intensive practice where poses flow into one another, often set to music.</p>
                        </div>
                        <div className="lineage-card">
                            <h3>Kundalini</h3>
                            <p>Focuses on awakening dormant energy (Kundalini) at the base of the spine through chanting, breathing, and movement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default History;
