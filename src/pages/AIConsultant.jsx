import { useState, useRef, useEffect } from 'react';
import { chatWithEagleAI } from '../services/gemini';
import './AIConsultant.css';

const AIConsultant = () => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Namaste! 🙏 I am Eagle Yoga AI, your personal yoga and wellness consultant. I can help you with:\n\n• Yoga poses and techniques\n• Meditation guidance\n• Diet and nutrition advice\n• Course recommendations\n• Health and wellness tips\n• Personalized practice routines\n\nHow may I assist you on your journey to health and inner peace today?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const messagesEndRef = useRef(null);
    const synthesisRef = useRef(window.speechSynthesis);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle Speech
    const speakResponse = (text) => {
        if (synthesisRef.current.speaking) {
            synthesisRef.current.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        // Try to select a good English voice
        const voices = synthesisRef.current.getVoices();
        const preferredVoice = voices.find(voice => voice.name.includes('Google US English')) || voices.find(voice => voice.lang.includes('en-US'));
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        synthesisRef.current.speak(utterance);
    };

    const stopSpeaking = () => {
        if (synthesisRef.current.speaking) {
            synthesisRef.current.cancel();
            setIsSpeaking(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        stopSpeaking(); // Stop any current speech

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            // Prepare conversation history for Gemini
            const history = messages.slice(1).map(msg => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            }));

            // Get AI response
            const response = await chatWithEagleAI(userMessage, history);

            // Add AI response
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);

            // Speak the response automatically if it's not an error message
            if (!response.includes("Critical Error")) {
                speakResponse(response);
            }

        } catch (error) {
            console.error('Error:', error);
            const errorMsg = 'I apologize, but I encountered an error. Please check your connection and try again.';
            setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
            speakResponse(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = [
        'What yoga poses are best for beginners?',
        'How can I reduce stress with yoga?',
        'What should I eat as a yoga practitioner?',
        'Which course level is right for me?',
        'How do I start a meditation practice?',
        'What are the benefits of pranayama?'
    ];

    const handleQuickQuestion = (question) => {
        setInput(question);
    };

    return (
        <div className="ai-consultant-page">
            {/* Hero Section */}
            <section className="ai-hero">
                <div className="container">
                    <div className="ai-hero-content">
                        <div className="ai-icon-large">🤖</div>
                        <h1 className="page-title">Eagle Yoga AI Consultant</h1>
                        <p className="page-subtitle">
                            Your 24/7 personal yoga and wellness advisor powered by Google Gemini AI
                        </p>
                        <div className="ai-features">
                            <div className="feature-badge">💬 Instant Answers</div>
                            <div className="feature-badge">🗣️ Voice Enabled</div>
                            <div className="feature-badge">🧘 Personalized Advice</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chat Interface */}
            <section className="section chat-section">
                <div className="container">
                    <div className="chat-control-bar text-center mb-2">
                        <button
                            className={`speak-toggle-btn btn btn-outline ${isSpeaking ? 'speaking' : ''}`}
                            onClick={isSpeaking ? stopSpeaking : () => speakResponse(messages[messages.length - 1]?.content || '')}
                            title={isSpeaking ? "Stop Speaking" : "Read Last Message"}
                        >
                            {isSpeaking ? '🔇 Stop Speaking' : '🔊 Replay Last Message'}
                        </button>
                    </div>

                    <div className="chat-container card">
                        {/* Messages */}
                        <div className="messages-container">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
                                >
                                    <div className="message-avatar">
                                        {message.role === 'user' ? '👤' : '🦅'}
                                    </div>
                                    <div className="message-content">
                                        <div className="message-text">{message.content}</div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message ai-message">
                                    <div className="message-avatar">🦅</div>
                                    <div className="message-content">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        {messages.length === 1 && (
                            <div className="quick-questions">
                                <h3>Quick Questions:</h3>
                                <div className="questions-grid">
                                    {quickQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            className="quick-question-btn"
                                            onClick={() => handleQuickQuestion(question)}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Form */}
                        <form className="chat-input-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything about yoga, wellness, or our courses..."
                                disabled={isLoading}
                                className="chat-input"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="btn btn-primary send-btn"
                            >
                                {isLoading ? '...' : 'Send'}
                            </button>
                        </form>
                    </div>

                    {/* Info Cards */}
                    <div className="info-cards">
                        <div className="info-card card">
                            <h3>💡 What I Can Help With</h3>
                            <ul>
                                <li>Yoga pose instructions and modifications</li>
                                <li>Meditation and mindfulness techniques</li>
                                <li>Ayurvedic diet and nutrition advice</li>
                                <li>Course recommendations based on your level</li>
                                <li>Creating personalized practice routines</li>
                                <li>Answering questions about yoga philosophy</li>
                                <li>Wellness tips and lifestyle guidance</li>
                            </ul>
                        </div>

                        <div className="info-card card">
                            <h3>🎓 Ready to Learn More?</h3>
                            <p>
                                While I can provide guidance, nothing beats structured learning with expert instructors.
                                Explore our courses for comprehensive training!
                            </p>
                            <a href="/courses" className="btn btn-primary">
                                View Courses
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIConsultant;
