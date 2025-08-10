// src/app/layout.tsx

import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthProvider";

export const metadata = {
  title: "My App",
  description: "Next.js app with NextAuth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
