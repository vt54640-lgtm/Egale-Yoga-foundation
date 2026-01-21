# 🦅 Eagle Yoga Foundation

A premium, full-stack yoga learning platform with AI-powered health assessment and personalized consultation.

## 🌟 Features

### 🎓 Learning Management System (LMS)
- **3-Level Course Structure:**
  - Level 1 (Beginner): ₹5,999 / $72 USD
  - Level 2 (Intermediate): ₹8,999 / $108 USD
  - Level 3 (Advanced): ₹16,999 / $204 USD
- Detailed curriculum with module-wise content
- Progress tracking and certificates
- Video lessons and downloadable resources

### 🤖 AI-Powered Features
- **Eagle Yoga AI Consultant:** Gemini-powered virtual yoga advisor
- **AI Health Test:** Facial analysis and comprehensive health assessment
- Personalized recommendations based on health profile
- Downloadable health reports

### 💳 Payment & Authentication
- **Razorpay Integration:** Secure global payments (INR & USD)
- **Multi-Auth Support:**
  - Email/OTP authentication
  - Mobile number verification
  - Social login options

### 📚 Rich Content Library
- Yoga history and philosophy
- Blog posts on wellness and yoga practices
- Customized diet plans
- Learner benefits and success stories

### 🎨 Premium UI/UX
- **Neon-Zen Dark Theme:** Modern dark mode with vibrant red accents
- Glassmorphism effects and smooth animations
- Fully responsive design
- Micro-interactions for enhanced UX

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **CSS3** with custom design system
- **Google Fonts** (Inter, Outfit)

### Backend & Services
- **Supabase:** Database and authentication
- **Razorpay:** Payment processing
- **Google Gemini AI:** AI consultation and health analysis

### Deployment
- **Vercel:** Frontend hosting
- **GitHub:** Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Supabase account
- Razorpay account
- Google Gemini API key

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/eagle-yoga-foundation.git
cd eagle-yoga-foundation
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. **Run development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## 📁 Project Structure

```
eagle-yoga-foundation/
├── public/
│   ├── logo.png
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── AIHealthTest.jsx
│   │   ├── AIConsultant.jsx
│   │   ├── Blog.jsx
│   │   └── ...
│   ├── services/
│   │   ├── supabase.js
│   │   ├── razorpay.js
│   │   └── gemini.js
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## 🎯 Key Pages

- **Home:** Landing page with hero section and features
- **Courses:** All course levels with detailed curriculum
- **AI Health Test:** Comprehensive health assessment
- **Eagle Yoga AI:** AI-powered consultation
- **Blog:** Wellness articles and yoga insights
- **Diet Plans:** Personalized nutrition guidance
- **History:** Yoga philosophy and origins
- **About:** Foundation mission and team
- **Contact:** Get in touch

## 💰 Pricing

| Level | Price (INR) | Price (USD) | Duration |
|-------|-------------|-------------|----------|
| Level 1 | ₹5,999 | $72 | 4 weeks |
| Level 2 | ₹8,999 | $108 | 6 weeks |
| Level 3 | ₹16,999 | $204 | 8 weeks |

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `VITE_RAZORPAY_KEY_ID` | Razorpay key for payments |
| `VITE_GEMINI_API_KEY` | Google Gemini API key |

## 📝 License

This project is proprietary and confidential.

## 👥 Contact

**Eagle Yoga Foundation**
- Website: [eagleyoga.com](https://eagleyoga.com)
- Email: info@eagleyoga.com
- Phone: +91 XXXXX XXXXX

---

Built with ❤️ by Eagle Yoga Foundation Team
