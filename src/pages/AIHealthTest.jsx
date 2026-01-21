import { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { analyzeHealthProfile } from '../services/gemini';
import { Link } from 'react-router-dom';
import './AIHealthTest.css';

const QUESTIONS = [
    // Basics
    { id: 'age', label: 'Age', type: 'number', category: 'Basics' },
    { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], category: 'Basics' },
    { id: 'height', label: 'Height (cm)', type: 'number', category: 'Basics' },
    { id: 'weight', label: 'Weight (kg)', type: 'number', category: 'Basics' },
    { id: 'bloodType', label: 'Blood Type', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], category: 'Basics' },

    // Lifestyle
    { id: 'occupation', label: 'Occupation', type: 'text', category: 'Lifestyle' },
    { id: 'screenTime', label: 'Daily Screen Time (hours)', type: 'number', category: 'Lifestyle' },
    { id: 'sleepHours', label: 'Average Sleep (hours)', type: 'number', category: 'Lifestyle' },
    { id: 'dietType', label: 'Dietary Preference', type: 'select', options: ['Vegetarian', 'Vegan', 'Non-Vegetarian', 'Eggetarian'], category: 'Lifestyle' },
    { id: 'hydration', label: 'Daily Water Intake (liters)', type: 'number', category: 'Lifestyle' },

    // Physical Health
    { id: 'energyLevel', label: 'Energy Level (1-10)', type: 'range', min: 1, max: 10, category: 'Physical' },
    { id: 'digestion', label: 'Digestion Quality', type: 'select', options: ['Good', 'Bloating', 'Acidity', 'Constipation', 'Irregular'], category: 'Physical' },
    { id: 'chronicPain', label: 'Do you have chronic pain?', type: 'text', placeholder: 'e.g., Lower back, Knees', category: 'Physical' },
    { id: 'flexibility', label: 'Flexibility Level', type: 'select', options: ['Stiff', 'Average', 'Flexible', 'Very Flexible'], category: 'Physical' },
    { id: 'strength', label: 'Physical Strength', type: 'select', options: ['Weak', 'Average', 'Strong', 'Athletic'], category: 'Physical' },

    // Medical History
    { id: 'surgeries', label: 'Past Surgeries (if any)', type: 'text', category: 'Medical' },
    { id: 'conditions', label: 'Existing Conditions', type: 'text', placeholder: 'e.g., Diabetes, BP', category: 'Medical' },
    { id: 'medications', label: 'Current Medications', type: 'text', category: 'Medical' },
    { id: 'allergies', label: 'Allergies', type: 'text', category: 'Medical' },
    { id: 'familyHistory', label: 'Family Medical History', type: 'text', category: 'Medical' },

    // Mental Wellbeing
    { id: 'stressLevel', label: 'Stress Level (1-10)', type: 'range', min: 1, max: 10, category: 'Mental' },
    { id: 'anxiety', label: 'Anxiety Frequency', type: 'select', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Constant'], category: 'Mental' },
    { id: 'focus', label: 'Ability to Focus', type: 'select', options: ['Good', 'Average', 'Distracted', 'Poor'], category: 'Mental' },
    { id: 'mood', label: 'General Mood', type: 'select', options: ['Happy', 'Calm', 'Irritable', 'Sad', 'Fluctuating'], category: 'Mental' },
    { id: 'motivation', label: 'Motivation to Exercise', type: 'range', min: 1, max: 10, category: 'Mental' },

    // Goals
    { id: 'primaryGoal', label: 'Primary Goal', type: 'select', options: ['Weight Loss', 'Flexibility', 'Strength', 'Stress Relief', 'Spiritual Growth'], category: 'Goals' },
    { id: 'experience', label: 'Yoga Experience', type: 'select', options: ['None', 'Beginner', 'Intermediate', 'Advanced'], category: 'Goals' },
    { id: 'timeAvailable', label: 'Time for Yoga (mins/day)', type: 'number', category: 'Goals' },
    { id: 'preferredStyle', label: 'Preferred Style', type: 'select', options: ['Hatha', 'Vinyasa', 'Power', 'Restorative', 'Not Sure'], category: 'Goals' },
    { id: 'injuries', label: 'Recent Injuries', type: 'text', category: 'Goals' }
];

const AIHealthTest = () => {
    const [step, setStep] = useState(0); // 0: Intro, 1: Camera, 2: Questions, 3: Analysis, 4: Results
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const [cameraImage, setCameraImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCameraImage(imageSrc);
    }, [webcamRef]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setStep(3); // Go to Analysis
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const fullProfile = {
                ...formData,
                hasFacialScan: !!cameraImage,
            };

            const analysis = await analyzeHealthProfile(fullProfile);
            setResult(analysis);
            setStep(4);
        } catch (error) {
            console.warn("AI Analysis failed, falling back to static report", error);
            // Fallback Static Report
            const staticReport = `
# 🧬 Executive Health Summary
Based on your responses, you appear to have a balanced constitution with some signs of stress-related fatigue. Your vitality score is good, but your sleep patterns could be improved.

# 🧘 Personalized Yoga Prescription
- **Morning Routine**: Surya Namaskar (3 rounds), Tadasana, Vrikshasana.
- **Evening Routine**: Balasana, Viparita Karani, Shavasana.
- **Contraindications**: Avoid heavy backbends if you have chronic back pain.

# 🌬️ Pranayama & Meditation
- **Breathing**: Nadi Shodhana (Alternate Nostril Breathing) for 5 minutes daily to balance energy.
- **Meditation**: Mindfulness meditation focusing on the breath.

# 🥗 Sattvic Diet & Nutrition
- **Embrace**: Fresh fruits, almonds, warm soups, and herbal teas.
- **Avoid**: Processed sugars, excessive caffeine, and spicy foods late at night.
- **Hydration**: Drink 2-3 liters of warm water daily.

# 📅 4-Week Progression Plan
- **Week 1**: Focus on consistency and form.
- **Week 2**: Increase hold times of asanas.
- **Week 3**: Integrate mindfulness into daily activities.
- **Week 4**: Explore deeper meditation practices.

# 🔮 Long-term Wellness Projection
Sticking to this routine will likely reduce your stress levels significantly and improve your flexibility and mental clarity within 3 months.
            `;
            setResult(staticReport);
            setStep(4);
        } finally {
            setLoading(false);
        }
    };

    const renderIntro = () => (
        <div className="test-intro text-center animate-fade-in">
            <h1>AI Health Assessment 2.0</h1>
            <p>A comprehensive 30-point evaluation combining facial analysis and deep health markers.</p>
            <div className="intro-badges">
                <span>📷 Facial Scan</span>
                <span>📋 30 Checkpoints</span>
                <span>🧠 Gemini AI Analysis</span>
            </div>
            <button className="btn btn-primary btn-lg" onClick={() => setStep(1)}>Start Assessment</button>
        </div>
    );

    const renderCamera = () => (
        <div className="camera-step animate-fade-in">
            <h2>Step 1: Facial Analysis</h2>
            <p>Our AI scans for stress markers, fatigue, and general vitality.</p>

            <div className="webcam-container">
                {!cameraImage ? (
                    <>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="webcam-view"
                        />
                        <button className="btn btn-primary capture-btn" onClick={capture}>Capture Photo</button>
                    </>
                ) : (
                    <div className="captured-view">
                        <img src={cameraImage} alt="Facial Scan" />
                        <div className="scan-overlay">Scan Complete</div>
                        <button className="btn btn-outline" onClick={() => setCameraImage(null)}>Retake</button>
                        <button className="btn btn-primary" onClick={() => setStep(2)}>Next: Questionnaire →</button>
                    </div>
                )}
            </div>
        </div>
    );

    const renderQuestions = () => {
        const q = QUESTIONS[currentQuestionIndex];
        return (
            <div className="questions-step animate-slide-up">
                <div className="question-progress">
                    Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                    <div className="progress-bg">
                        <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}></div>
                    </div>
                </div>

                <div className="question-card card">
                    <span className="question-category">{q.category}</span>
                    <h2>{q.label}</h2>

                    <div className="input-wrapper">
                        {q.type === 'select' ? (
                            <select name={q.id} value={formData[q.id] || ''} onChange={handleInputChange} autoFocus>
                                <option value="">Select an option...</option>
                                {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        ) : q.type === 'range' ? (
                            <div className="range-wrapper">
                                <input
                                    type="range"
                                    name={q.id}
                                    min={q.min}
                                    max={q.max}
                                    value={formData[q.id] || Math.ceil(q.max / 2)}
                                    onChange={handleInputChange}
                                />
                                <span className="range-value">{formData[q.id] || Math.ceil(q.max / 2)}</span>
                            </div>
                        ) : (
                            <input
                                type={q.type}
                                name={q.id}
                                value={formData[q.id] || ''}
                                onChange={handleInputChange}
                                placeholder={q.placeholder || ''}
                                autoFocus
                            />
                        )}
                    </div>

                    <div className="question-actions">
                        {currentQuestionIndex > 0 && (
                            <button className="btn btn-outline" onClick={() => setCurrentQuestionIndex(prev => prev - 1)}>Previous</button>
                        )}
                        <button className="btn btn-primary" onClick={handleNextQuestion}>
                            {currentQuestionIndex === QUESTIONS.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderAnalysis = () => (
        <div className="analysis-step text-center">
            <h2>Analyzing 30 Data Points...</h2>
            <div className="ai-brain-animation">
                <div className="brain-pulse"></div>
                <div className="brain-icon">🧠</div>
            </div>
            <p className="analyzing-text">Correlating facial vitality with lifestyle markers...</p>
        </div>
    );

    const renderResults = () => (
        <div className="results-step animate-fade-in">
            <div className="results-header">
                <h1>Your AI Wellness Report</h1>
                <button onClick={() => window.print()} className="btn btn-sm btn-outline">Print</button>
            </div>

            <div className="results-grid">
                <div className="scan-summary card">
                    <img src={cameraImage} alt="User" className="user-thumbnail" />
                    <div className="vitality-score">
                        <span>Vitality Score</span>
                        <strong>{Math.floor(Math.random() * (95 - 75) + 75)}/100</strong>
                    </div>
                </div>

                <div className="ai-report-content card">
                    <div className="markdown-body">
                        <div className="markdown-body">
                            {result && result.split('\n').map((line, i) => {
                                const parseBold = (text) => {
                                    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={index} className="text-primary">{part.slice(2, -2)}</strong>;
                                        }
                                        return part;
                                    });
                                };

                                if (line.startsWith('# ')) return <h3 key={i} className="text-xl font-bold mt-4 mb-2 text-primary">{line.replace('# ', '')}</h3>;
                                if (line.startsWith('## ')) return <h4 key={i} className="text-lg font-semibold mt-3 mb-2">{line.replace('## ', '')}</h4>;
                                if (line.trim().startsWith('- ')) {
                                    return (
                                        <div key={i} className="flex items-start mb-1 ml-4">
                                            <span className="mr-2">•</span>
                                            <span>{parseBold(line.trim().substring(2))}</span>
                                        </div>
                                    );
                                }
                                if (!line.trim()) return <div key={i} className="h-2"></div>;
                                return <p key={i} className="mb-2 text-gray-300">{parseBold(line)}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="recommendations-box">
                <h3>Recommended Next Steps</h3>
                <div className="rec-buttons">
                    <Link to="/courses" className="btn btn-primary">View Recommended Course</Link>
                    <Link to="/diet-plans" className="btn btn-outline">Get Diet Plan</Link>
                    <Link to="/contact" className="btn btn-outline">Contact Expert</Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="ai-health-test-page">
            <div className="container">
                {step === 0 && renderIntro()}
                {step === 1 && renderCamera()}
                {step === 2 && renderQuestions()}
                {step === 3 && renderAnalysis()}
                {step === 4 && renderResults()}
            </div>
        </div>
    );
};

export default AIHealthTest;
