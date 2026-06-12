import "./globals.css";

export const metadata = {
  title: "Shubhojit Deb | Frontend-Focused Full-Stack Developer",
  description: "Portfolio of Shubhojit Deb, a frontend-focused Full-Stack Developer based in Kolkata, India, building modern web applications with MERN & Next.js.",
};

import SocialSidebar from "@/components/common/SocialSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
