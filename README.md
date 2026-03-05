# True Feedback 🗣️

> A sleek, minimalist web app to receive **anonymous messages and feedback** from anyone — with AI-powered message suggestions.

🌐 **[Live Demo](https://learn-next-js2-inky.vercel.app/)**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-black?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

---

## ✨ Features

- 💬 **Anonymous Messaging** — Receive honest, unfiltered feedback via a unique public link
- 🤖 **AI Message Suggestions** — Writer's block? Let AI generate thoughtful message ideas
- 🎛️ **Toggle Visibility** — Control whether you're accepting messages from your dashboard
- 🔐 **Secure Authentication** — Login/signup with NextAuth.js Credentials provider
- 📧 **Email Verification** — Account verification emails powered by Resend
- 🌗 **Light & Dark Mode** — Fully themeable UI
- 📱 **Fully Responsive** — Works seamlessly on all devices

> ⚠️ AI feature not fully implemented yet

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router), React, Tailwind CSS, shadcn/ui |
| Backend | Next.js API Routes |
| Database | MongoDB + Mongoose |
| Auth | NextAuth.js |
| AI | OpenAI, @ai-sdk/react |
| Email | Resend, @react-email/components |
| Validation | Zod + React Hook Form |
| Language | TypeScript |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB database
- Resend API key
- OpenAI API key *(optional, for AI features)*

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/abhisheksajwan07/LearnNextJs2.git
cd LearnNextJs2
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_random_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
OPENAI_API_KEY=your_openai_api_key
```

**4. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (app)/          # Main UI routes
│   ├── (auth)/         # Auth routes (login, signup)
│   ├── api/            # API route handlers
│   └── u/              # Public user profile routes
├── components/         # Reusable UI components
├── context/            # React context providers
├── helpers/            # Utility functions
├── lib/                # DB, auth, and service configs
├── model/              # Mongoose models
├── schemas/            # Zod validation schemas
└── types/              # Global TypeScript types
```

---

## ☁️ Deployment (Vercel)

1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add all `.env.local` variables in **Vercel → Settings → Environment Variables**
4. Click **Deploy**

---

