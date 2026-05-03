import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kiran Kumar — Full-Stack Growth Executive",
  description:
    "Marketing and technology executive with 20+ years building loyalty platforms, personalization engines, and data-driven growth at Safeway, Albertsons, Petco, and World Market.",
  openGraph: {
    title: "Kiran Kumar — Full-Stack Growth Executive",
    description:
      "CMO | CPO | Board Director | Loyalty, CRM, MarTech & eCommerce leader. San Francisco Bay Area.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}<Analytics /></body>
    </html>
  );
}
