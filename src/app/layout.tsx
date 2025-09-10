// app/layout.tsx
import './globals.scss'; 
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap", weight: ["300","400","500","600","700"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Active Star Trading Company | Business Card",
  description: "Modern digital business card for Active Star Trading Company. Contact info, location, phone numbers, and social links all in one place.",
  keywords: ["Active Star Trading", "Business Card", "Digital Card", "Amman Jordan", "Contact Info"],
  authors: [{ name: "Active Star Trading" }],
  creator: "Active Star Trading",
  publisher: "Active Star Trading",
  icons: {
    icon: "/icon.png", 
    apple: "/icon.png", 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Active Star Trading" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
