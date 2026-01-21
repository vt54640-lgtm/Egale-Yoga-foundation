# Eagle Yoga Foundation - Project Documentation

## 📋 Project Overview

Eagle Yoga Foundation is a premium, full-stack yoga learning platform that combines ancient yoga wisdom with cutting-edge AI technology. The platform offers a comprehensive Learning Management System (LMS) with three course levels, AI-powered health assessments, personalized consultation, and rich educational content.

## 🎯 Project Status

### ✅ Completed Features

#### 1. **Core Infrastructure**
- ✅ React 19 + Vite setup
- ✅ React Router for navigation
- ✅ Premium Neon-Zen dark theme design system
- ✅ Fully responsive layout
- ✅ Component architecture

#### 2. **Pages Implemented**
- ✅ Home page with hero, features, course preview, testimonials
- ✅ Courses listing page
- ✅ Course detail pages (Level 1, 2, 3)
- ✅ Navbar with mobile menu
- ✅ Footer with links and social media
- ✅ Placeholder pages for remaining features

#### 3. **Design System**
- ✅ CSS variables for theming
- ✅ Typography system (Inter + Outfit fonts)
- ✅ Color palette (dark theme with red/cyan accents)
- ✅ Reusable components (buttons, cards, grids)
- ✅ Animations and transitions
- ✅ Glassmorphism effects

#### 4. **Content**
- ✅ 3 Course levels with detailed curriculum
- ✅ Pricing (INR + USD)
- ✅ Course features and benefits
- ✅ Mock data for blogs, diet plans, testimonials

### 🚧 Features Requiring Integration

#### 1. **AI Features** (Requires Gemini API)
- ⏳ AI Health Test with facial recognition
- ⏳ Eagle Yoga AI Consultant (chatbot)
- ⏳ Personalized recommendations

#### 2. **Authentication** (Requires Supabase)
- ⏳ Email/OTP login
- ⏳ Mobile authentication
- ⏳ User profiles
- ⏳ Dashboard

#### 3. **Payment Integration** (Requires Razorpay)
- ⏳ Course enrollment payments
- ⏳ INR and USD support
- ⏳ Payment confirmation

#### 4. **Database** (Requires Supabase)
- ⏳ User data storage
- ⏳ Course progress tracking
- ⏳ Health test results
- ⏳ Enrollment records

#### 5. **Content Pages**
- ⏳ Full blog implementation
- ⏳ Diet plans with detailed recipes
- ⏳ Yoga history content
- ⏳ About page with team info
- ⏳ Contact form

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM 7.1.1** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Styling with custom design system
- **Lucide React** - Icon library

### Backend & Services (To Be Integrated)
- **Supabase** - Authentication & database
- **Razorpay** - Payment processing
- **Google Gemini AI** - AI features

### Deployment
- **Vercel** - Recommended for frontend
- **GitHub** - Version control

## 📁 Project Structure

```
eagle-yoga-foundation/
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│   │   ├── CourseDetail.jsx
│   │   ├── CourseDetail.css
│   │   ├── PlaceholderPages.jsx
│   │   └── PlaceholderPages.css
│   ├── data/                    # Mock data
│   │   └── mockData.js
│   ├── services/                # API services (to be implemented)
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── index.css                # Global styles & design system
│   └── main.jsx                 # Entry point
├── .env.example                 # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
└── DOCUMENTATION.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/eagle-yoga-foundation.git
cd eagle-yoga-foundation
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` and add your API keys:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- VITE_RAZORPAY_KEY_ID
- VITE_GEMINI_API_KEY

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 🎨 Design System

### Color Palette
- **Primary**: #ff3366 (Red)
- **Secondary**: #00ffcc (Cyan)
- **Background**: #0a0a0a, #121212, #1a1a1a
- **Text**: #ffffff, #b3b3b3, #808080

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Sizes**: 0.75rem to 3rem (responsive)

### Components
- Buttons: Primary, Secondary, Outline
- Cards: Standard, Glass, Featured
- Grids: 2, 3, 4 column responsive
- Forms: Inputs, Textareas, Selects

## 💰 Pricing Structure

| Level | Price (INR) | Price (USD) | Duration | Difficulty |
|-------|-------------|-------------|----------|------------|
| Level 1 | ₹5,999 | $72 | 4 weeks | Beginner |
| Level 2 | ₹8,999 | $108 | 6 weeks | Intermediate |
| Level 3 | ₹16,999 | $204 | 8 weeks | Advanced |

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Razorpay
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

# Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 📝 Next Steps for Full Implementation

### Phase 1: Authentication (Week 1)
1. Set up Supabase project
2. Implement email/OTP authentication
3. Create user registration flow
4. Build login/signup pages
5. Add protected routes

### Phase 2: Course Enrollment (Week 2)
1. Integrate Razorpay
2. Create payment flow
3. Store enrollment data in Supabase
4. Build student dashboard
5. Implement course access control

### Phase 3: AI Features (Week 3)
1. Integrate Google Gemini API
2. Build AI Health Test
3. Implement facial recognition
4. Create AI Consultant chatbot
5. Generate personalized reports

### Phase 4: Content & Polish (Week 4)
1. Add blog posts with CMS
2. Create detailed diet plans
3. Write yoga history content
4. Build contact form
5. Add email notifications

### Phase 5: Testing & Deployment (Week 5)
1. Unit testing
2. Integration testing
3. Performance optimization
4. SEO optimization
5. Deploy to Vercel

## 🐛 Known Issues

- None currently (project is in initial development)

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Razorpay Documentation](https://razorpay.com/docs)
- [Google Gemini API](https://ai.google.dev)

## 👥 Team

- **Developer**: Vivek Tiwari
- **AI Assistant**: Antigravity (Google Deepmind)

## 📄 License

Proprietary and Confidential - Eagle Yoga Foundation

---

**Last Updated**: January 21, 2026
**Version**: 1.0.0
**Status**: Initial Development Phase
