import type { Metadata } from "next";

import { Montserrat, Sora, Manrope, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"], // Define the subset you need
  weight: ["400", "700"], // Specify weights to include (e.g., normal and bold)
  variable: "--font-montserrat", // Define a CSS variable for Montserrat
});

const sora = Sora({
  subsets: ["latin"], // Specify subsets
  weight: ["600"], // Add the weights you need
  variable: "--font-sora", // Define a CSS variable
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sora.variable} ${manrope.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
