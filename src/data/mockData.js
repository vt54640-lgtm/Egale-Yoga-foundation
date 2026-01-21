// Course Data
export const coursesData = [
    {
        id: 'level-1',
        level: 1,
        title: 'Beginner Level - Foundation of Yoga',
        subtitle: 'Start Your Yoga Journey',
        priceINR: 5999,
        priceUSD: 72,
        duration: '4 Weeks',
        difficulty: 'Beginner',
        students: 5420,
        rating: 4.8,
        description: 'Perfect for beginners, this course introduces you to the fundamentals of yoga, including basic asanas, breathing techniques, and meditation practices.',
        features: [
            '4 weeks of structured learning',
            '30+ video lessons',
            'Basic Asanas & Postures',
            'Breathing Techniques (Pranayama)',
            'Meditation Fundamentals',
            'Yoga Philosophy Introduction',
            'Certificate of Completion',
            'Lifetime Access',
            'Community Support'
        ],
        curriculum: [
            {
                week: 1,
                title: 'Introduction to Yoga',
                topics: ['Yoga History', 'Basic Principles', 'Safety Guidelines', 'Warm-up Exercises']
            },
            {
                week: 2,
                title: 'Foundation Asanas',
                topics: ['Mountain Pose', 'Downward Dog', 'Child\'s Pose', 'Warrior Poses']
            },
            {
                week: 3,
                title: 'Breathing & Meditation',
                topics: ['Basic Pranayama', 'Mindful Breathing', 'Guided Meditation', 'Relaxation Techniques']
            },
            {
                week: 4,
                title: 'Integration & Practice',
                topics: ['Complete Sequences', 'Daily Routine', 'Self-Practice Tips', 'Final Assessment']
            }
        ],
        benefits: [
            'Improved flexibility and strength',
            'Better posture and alignment',
            'Stress reduction and relaxation',
            'Enhanced body awareness',
            'Foundation for advanced practice'
        ]
    },
    {
        id: 'level-2',
        level: 2,
        title: 'Intermediate Level - Deepening Practice',
        subtitle: 'Advance Your Skills',
        priceINR: 8999,
        priceUSD: 108,
        duration: '6 Weeks',
        difficulty: 'Intermediate',
        students: 3280,
        rating: 4.9,
        description: 'Build upon your foundation with advanced asanas, pranayama techniques, and deeper meditation practices. Includes personalized diet and lifestyle guidance.',
        features: [
            '6 weeks of intensive training',
            '50+ video lessons',
            'Advanced Asanas',
            'Pranayama Mastery',
            'Deep Meditation Practices',
            'Personalized Diet Plans',
            'Lifestyle Guidance',
            'One-on-One Sessions',
            'Certificate of Achievement',
            'Lifetime Access'
        ],
        curriculum: [
            {
                week: 1,
                title: 'Advanced Foundation',
                topics: ['Review & Assessment', 'Advanced Warm-ups', 'Strength Building', 'Flexibility Training']
            },
            {
                week: 2,
                title: 'Intermediate Asanas',
                topics: ['Balance Poses', 'Inversions Intro', 'Backbends', 'Twists & Binds']
            },
            {
                week: 3,
                title: 'Pranayama Techniques',
                topics: ['Alternate Nostril Breathing', 'Kapalabhati', 'Bhastrika', 'Ujjayi Breathing']
            },
            {
                week: 4,
                title: 'Meditation & Mindfulness',
                topics: ['Chakra Meditation', 'Mantra Practice', 'Visualization', 'Mindfulness Techniques']
            },
            {
                week: 5,
                title: 'Yoga Lifestyle',
                topics: ['Ayurvedic Diet', 'Daily Routines', 'Sleep & Recovery', 'Stress Management']
            },
            {
                week: 6,
                title: 'Integration & Mastery',
                topics: ['Complete Sequences', 'Personal Practice', 'Teaching Basics', 'Final Certification']
            }
        ],
        benefits: [
            'Mastery of intermediate poses',
            'Enhanced energy and vitality',
            'Improved mental clarity',
            'Personalized wellness plan',
            'Preparation for advanced practice'
        ]
    },
    {
        id: 'level-3',
        level: 3,
        title: 'Advanced Level - Teacher Training',
        subtitle: 'Become a Certified Instructor',
        priceINR: 16999,
        priceUSD: 204,
        duration: '8 Weeks',
        difficulty: 'Advanced',
        students: 1560,
        rating: 5.0,
        description: 'Comprehensive teacher training program covering advanced practices, teaching methodology, anatomy, and business skills. Become a certified yoga instructor.',
        features: [
            '8 weeks comprehensive training',
            '100+ video lessons',
            'Expert Level Asanas',
            'Teaching Methodology',
            'Anatomy & Physiology',
            'Business & Marketing Skills',
            'Practicum & Teaching Practice',
            'Mentor Support',
            'Instructor Certification',
            'Job Placement Assistance',
            'Lifetime Access'
        ],
        curriculum: [
            {
                week: 1,
                title: 'Advanced Asana Practice',
                topics: ['Advanced Inversions', 'Arm Balances', 'Deep Backbends', 'Complex Sequences']
            },
            {
                week: 2,
                title: 'Anatomy & Physiology',
                topics: ['Skeletal System', 'Muscular System', 'Nervous System', 'Injury Prevention']
            },
            {
                week: 3,
                title: 'Advanced Pranayama',
                topics: ['Advanced Techniques', 'Energy Work', 'Bandhas & Mudras', 'Kundalini Practices']
            },
            {
                week: 4,
                title: 'Yoga Philosophy',
                topics: ['Yoga Sutras', 'Bhagavad Gita', 'Eight Limbs of Yoga', 'Modern Applications']
            },
            {
                week: 5,
                title: 'Teaching Methodology',
                topics: ['Class Planning', 'Sequencing', 'Adjustments', 'Voice & Presence']
            },
            {
                week: 6,
                title: 'Specialized Practices',
                topics: ['Prenatal Yoga', 'Therapeutic Yoga', 'Restorative Yoga', 'Yin Yoga']
            },
            {
                week: 7,
                title: 'Business & Marketing',
                topics: ['Building Your Brand', 'Marketing Strategies', 'Online Teaching', 'Studio Management']
            },
            {
                week: 8,
                title: 'Practicum & Certification',
                topics: ['Teaching Practice', 'Peer Review', 'Final Exam', 'Certification Ceremony']
            }
        ],
        benefits: [
            'Certified Yoga Instructor credential',
            'Mastery of advanced techniques',
            'Teaching skills and confidence',
            'Business development knowledge',
            'Career opportunities in yoga'
        ]
    }
];

// Blog Posts Data
export const blogPosts = [
    {
        id: 1,
        title: 'The Ancient Origins of Yoga: A Journey Through Time',
        excerpt: 'Discover the rich history of yoga, from its origins in ancient India to its modern global practice.',
        category: 'History',
        author: 'Dr. Ananya Sharma',
        date: '2026-01-15',
        readTime: '8 min read',
        image: '📜',
        content: `Yoga's history spans over 5,000 years, originating in ancient India as a comprehensive system for physical, mental, and spiritual development...`
    },
    {
        id: 2,
        title: '10 Essential Yoga Poses for Beginners',
        excerpt: 'Master these fundamental asanas to build a strong foundation for your yoga practice.',
        category: 'Practice',
        author: 'Rahul Verma',
        date: '2026-01-18',
        readTime: '6 min read',
        image: '🧘',
        content: `Starting your yoga journey can be overwhelming. These 10 essential poses will help you build strength, flexibility, and confidence...`
    },
    {
        id: 3,
        title: 'Pranayama: The Science of Breath Control',
        excerpt: 'Learn how ancient breathing techniques can transform your health and well-being.',
        category: 'Wellness',
        author: 'Priya Patel',
        date: '2026-01-20',
        readTime: '7 min read',
        image: '🌬️',
        content: `Pranayama, the yogic practice of breath control, is a powerful tool for managing stress, improving focus, and enhancing overall health...`
    }
];

// Diet Plans Data
export const dietPlans = [
    {
        id: 1,
        title: 'Beginner Yogic Diet',
        description: 'A balanced, sattvic diet plan for yoga beginners',
        level: 'Beginner',
        duration: '30 Days',
        meals: [
            {
                time: 'Morning (6:00 AM)',
                items: ['Warm lemon water', 'Soaked almonds (5-7)']
            },
            {
                time: 'Breakfast (8:00 AM)',
                items: ['Oatmeal with fruits', 'Herbal tea', 'Fresh fruit bowl']
            },
            {
                time: 'Mid-Morning (11:00 AM)',
                items: ['Fresh coconut water', 'Seasonal fruits']
            },
            {
                time: 'Lunch (1:00 PM)',
                items: ['Brown rice', 'Dal (lentils)', 'Mixed vegetables', 'Salad', 'Buttermilk']
            },
            {
                time: 'Evening (4:00 PM)',
                items: ['Green tea', 'Nuts and seeds mix']
            },
            {
                time: 'Dinner (7:00 PM)',
                items: ['Vegetable soup', 'Whole wheat roti', 'Steamed vegetables', 'Paneer/tofu']
            }
        ],
        guidelines: [
            'Eat fresh, seasonal foods',
            'Avoid processed and packaged foods',
            'Stay hydrated throughout the day',
            'Practice mindful eating',
            'Avoid eating 2-3 hours before bedtime'
        ]
    },
    {
        id: 2,
        title: 'Intermediate Wellness Plan',
        description: 'Advanced nutrition for dedicated practitioners',
        level: 'Intermediate',
        duration: '60 Days',
        meals: [
            {
                time: 'Pre-Dawn (5:30 AM)',
                items: ['Warm water with honey', 'Tulsi tea']
            },
            {
                time: 'Breakfast (8:30 AM)',
                items: ['Smoothie bowl', 'Sprouted grains', 'Herbal infusion']
            },
            {
                time: 'Mid-Morning (11:00 AM)',
                items: ['Fresh juice', 'Dates and figs']
            },
            {
                time: 'Lunch (1:30 PM)',
                items: ['Quinoa/millet', 'Seasonal vegetables', 'Salad with sprouts', 'Raita']
            },
            {
                time: 'Evening (5:00 PM)',
                items: ['Herbal tea', 'Homemade energy balls']
            },
            {
                time: 'Dinner (7:30 PM)',
                items: ['Light soup', 'Steamed vegetables', 'Whole grain bread']
            }
        ],
        guidelines: [
            'Follow sattvic principles',
            'Include superfoods and adaptogens',
            'Practice intermittent fasting',
            'Align meals with circadian rhythm',
            'Focus on alkaline foods'
        ]
    }
];

// Testimonials Data
export const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Level 3 Graduate',
        location: 'Mumbai, India',
        rating: 5,
        text: 'Eagle Yoga Foundation transformed my life completely. The AI health test was incredibly accurate and helped me understand my body better. Now I\'m a certified instructor!',
        image: '👩'
    },
    {
        id: 2,
        name: 'Rahul Verma',
        role: 'Level 2 Student',
        location: 'Delhi, India',
        rating: 5,
        text: 'Best investment I made in my health. The instructors are world-class, and the Eagle AI consultant is like having a personal yoga guru 24/7.',
        image: '👨'
    },
    {
        id: 3,
        name: 'Anjali Patel',
        role: 'Level 1 Graduate',
        location: 'Bangalore, India',
        rating: 5,
        text: 'The personalized diet plans and lifestyle guidance made all the difference. I feel healthier, stronger, and more peaceful than ever before.',
        image: '👩'
    }
];

// FAQ Data
export const faqs = [
    {
        question: 'What are the prerequisites for enrolling?',
        answer: 'Level 1 has no prerequisites - anyone can start! Level 2 requires completion of Level 1 or equivalent experience. Level 3 requires completion of Level 2.'
    },
    {
        question: 'How does the AI Health Test work?',
        answer: 'Our AI-powered health test uses advanced facial recognition and a comprehensive questionnaire to assess your health status. It provides personalized recommendations and a detailed report.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major payment methods through Razorpay, including credit/debit cards, UPI, net banking, and international payments in both INR and USD.'
    },
    {
        question: 'Is the certification recognized?',
        answer: 'Yes! Our Level 3 certification is recognized by major yoga alliances and qualifies you to teach yoga professionally.'
    },
    {
        question: 'Can I access courses on mobile devices?',
        answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile.'
    }
];
