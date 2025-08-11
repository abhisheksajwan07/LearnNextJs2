// src/app/layout.tsx

import Navbar from "@/components/Navbar";

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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {children}
    </div>
  );
}
