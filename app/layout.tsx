import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";
import { ScrollLinked } from "@/components/Scroll/ScrollLinked";

// Charger les polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const soraFont = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sandjon Yves portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${soraFont.variable} antialiased`}>
        <ScrollLinked />
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
