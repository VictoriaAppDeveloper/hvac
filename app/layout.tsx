import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "FlowHVAC — HVAC Business Management Software";
const description =
  "Manage jobs, technicians, customers, estimates, invoices, and payments from one simple platform built for HVAC businesses.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["HVAC business management software", "HVAC scheduling software", "HVAC dispatch software"],
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
