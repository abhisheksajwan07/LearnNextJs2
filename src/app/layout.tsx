// src/app/layout.tsx

import AuthProvider from '@/context/AuthProvider'

export const metadata = {
  title: 'My App',
  description: 'Next.js app with NextAuth',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
