import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";  // Corrected import path
import Footer from "../components/Footer";  // Corrected import path
import SessionWrapper from "../components/SessionWrapper";  // Corrected import path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai - A website for funding your projects",
  description: "This website is for crowdfunding for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar /> {/* Corrected import of Navbar */}

          {/* Apply radial gradient background with a minimum height of the screen */}
          <div className="text-white min-h-screen bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            {children}
          </div>

          <Footer /> {/* Corrected import of Footer */}
        </SessionWrapper>
      </body>
    </html>
  );
}
