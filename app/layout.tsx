import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, trauma, panic, burnout, and perfectionism, with in-person and secure telehealth sessions across California.",
  keywords: [
    "Santa Monica therapist",
    "Santa Monica psychologist",
    "anxiety therapist Santa Monica",
    "trauma therapist Santa Monica",
    "burnout therapist Santa Monica",
    "EMDR therapist Santa Monica",
    "therapy for anxiety California",
    "telehealth therapist California"
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
    description:
      "Warm, grounded therapy for anxiety, trauma, panic, burnout, and high internal pressure.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
