import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Therapy for Real Life",
  description: "A calm, human-centered therapy practice for adults, couples, and young adults in Newbury Park and online across California."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}