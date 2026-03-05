<<<<<<< HEAD
# Next.js Project 🚀

This project is a Next.js application bootstrapped with `create-next-app`. It leverages a modern tech stack to provide a robust and scalable foundation for building web applications. It includes features like user authentication, database integration, and API endpoints for managing user data and messages. The project aims to provide a streamlined development experience with a focus on performance, security, and maintainability.

> AI feature not implemented currently
## 🚀 Key Features

- **User Authentication:** Secure user authentication using NextAuth.js with Credentials provider.
- **Database Integration:** MongoDB integration using Mongoose for data persistence.
- **API Endpoints:** RESTful API endpoints for user management, message retrieval, and account verification.
- **Real-time Notifications:** Implemented using `sonner` for displaying toast notifications.
- **UI Components:** Utilizes Radix UI and other UI libraries for a modern and accessible user interface.
- **Form Handling:** React Hook Form and Zod for robust form validation and handling.
- **Theming:** Customizable themes with light and dark mode support.
- **Email Functionality:** Email sending capabilities using Resend.
- **AI Integration:** Potentially integrates AI features using `@ai-sdk/react` and `openai`.
- **TypeScript:** Fully typed codebase for enhanced code quality and maintainability.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Next.js
    - Tailwind CSS
    - Radix UI
    - `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`
    - `lucide-react`
    - `react-hook-form`
    - `@hookform/resolvers`
    - `usehooks-ts`
    - `next-themes`
    - `embla-carousel-*`
    - `@react-email/components`
    - `sonner`
- **Backend:**
    - Node.js
    - Next.js API Routes
- **Database:**
    - MongoDB
    - Mongoose
- **Authentication:**
    - NextAuth.js
- **AI Tools:**
    - `@ai-sdk/react`
    - `openai`
- **Email:**
    - `resend`
- **Validation:**
    - `zod`
- **Linting & Formatting:**
    - ESLint
    - Prettier (configured implicitly via ESLint)
- **Build Tools:**
    - TypeScript
    - PostCSS
    - `autoprefixer`
- **Other:**
    - `axios`
    - `bcryptjs`
    - `dayjs`
    - `dotenv`
    - `tsx`

## 📦 Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn or pnpm or bun
- MongoDB database

### Installation

1.  Clone the repository:

    ```bash
    [git clone <repository_url>](https://github.com/abhisheksajwan07/LearnNextJs2.git)
    
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install or pnpm install or bun install
    ```

3.  Set up environment variables:

    - Create a `.env.local` file in the root directory.
    - Add the following environment variables, replacing the placeholders with your actual values:

    ```
    MONGODB_URI=<your_mongodb_connection_string>
    NEXTAUTH_SECRET=<a_long_random_string>
    NEXTAUTH_URL=http://localhost:3000 # or your deployed URL
    RESEND_API_KEY=<your_resend_api_key>
    OPENAI_API_KEY=<your_openai_api_key> # If using AI features
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev or pnpm dev or bun dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

- The application should now be running in your local environment.
- You can start exploring the different pages and features.
- Refer to the Next.js documentation for more information on how to develop and customize the application.

## 📂 Project Structure

```
.
├── public/                     # Static assets
├── src/
│  ├── app/                     # App Router
│  │  ├── (app)/               # UI/app group (not in URL)
│  │  ├── (auth)/              # Auth routes group
│  │  ├── api/                 # Route Handlers: app/api/**/route.ts
│  │  └── u/                   # Dynamic user routes (e.g., u/[username])
│  ├── components/              # Reusable UI
│  ├── context/                 # React providers
│  ├── helpers/                 # Utilities/helpers
│  ├── lib/                     # Server utilities (db, auth, services)
│  ├── model/                   # DB models
│  ├── schemas/                 # Validation (e.g., Zod)
│  └── types/                   # Global TS types
├── middleware.ts               # Edge middleware (auth/rewrites)
├── next.config.ts              # Next.js config
├── tailwind.config.js          # Tailwind config
└── package.json                # Scripts/deps

```


=======
# True Feedback 

True Feedback is a sleek, minimalist web application that allows users to receive anonymous messages and feedback from anyone. It features a secret dashboard, public profile links, and AI-suggested messages to help spark conversations.

![True Feedback](https://img.shields.io/badge/Next.js-15-black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-black?logo=mongodb)

## ✨ Features
- **Anonymous Messaging**: Receive honest, unfiltered feedback via a unique public link.
- **AI Message Suggestions**: Writers block? Use AI to generate thoughtful message suggestions.
- **Sleek Minimalist UI**: Clean, black-and-white interface focused on content and usability.
- **Toggle Visibility**: Control whether you are actively accepting messages from your dashboard.
- **Secure Authentication**: Built with NextAuth for secure and seamless login/signup flows.

## 🚀 Tech Stack
- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: MongoDB with Mongoose
- **AI Integration**: OpenAI (for suggesting messages)
- **Validation**: Zod & React Hook Form

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/true-feedback.git
   cd true-feedback
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   RESEND_API_KEY=your_resend_api_key
   NEXTAUTH_SECRET=your_random_nextauth_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Deployment (Vercel)

The easiest way to deploy this application is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Log in to Vercel and import the repository.
3. Don't forget to **add all the environment variables** from your `.env.local` file in the Vercel project settings before deploying.
4. Click **Deploy**.

## 📝 License

This project is open-source and available under the MIT License.
>>>>>>> bf95dcb (readme)
