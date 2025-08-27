# Next.js Project 🚀

This project is a Next.js application bootstrapped with `create-next-app`. It leverages a modern tech stack to provide a robust and scalable foundation for building web applications. It includes features like user authentication, database integration, and API endpoints for managing user data and messages. The project aims to provide a streamlined development experience with a focus on performance, security, and maintainability.

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
    git clone <repository_url>
    cd <project_directory>
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
nextjs/
├── .next/                # Next.js build output
├── node_modules/        # Node.js dependencies
├── public/              # Public assets (images, fonts, etc.)
├── src/                 # Source code
│   ├── app/             # Next.js app directory (pages, layouts, API routes)
│   │   ├── api/         # API routes
│   │   │   ├── auth/    # Authentication API routes
│   │   │   │   └── [...nextauth]/
│   │   │   │       ├── route.ts
│   │   │   │       └── options.ts
│   │   │   ├── get-messages/
│   │   │   │   └── route.ts
│   │   │   ├── verify-code/
│   │   │   │   └── route.ts
│   │   │   ├── accept-messages/
│   │   │   │   └── route.ts
│   │   ├── layout.tsx   # Root layout component
│   │   ├── page.tsx     # Main page component
│   │   └── index.css    # Global CSS styles
│   ├── components/      # Reusable React components
│   ├── context/         # React context providers
│   │   └── AuthProvider.tsx
│   ├── lib/             # Utility functions and database connection
│   │   └── dbConnect.ts
│   ├── model/           # Mongoose models
│   │   └── User.ts
├── .eslintrc.mjs        # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package-lock.json    # Dependency lockfile
├── package.json         # Project manifest
├── postcss.config.js    # PostCSS configuration
├── README.md            # This file
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```


