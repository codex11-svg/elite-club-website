import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Elite Tech Club | Build. Learn. Lead.",
  description:
    "Elite Tech Club is the premier community for aspiring developers, designers, and innovators. Join 250+ members building the future.",
  keywords: ["tech club", "hackathon", "workshop", "coding", "programming", "students"],
  openGraph: {
    title: "Elite Tech Club | Build. Learn. Lead.",
    description: "Join 250+ members building the future, one project at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
