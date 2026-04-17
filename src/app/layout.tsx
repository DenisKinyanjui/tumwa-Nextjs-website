import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tumwa App – Errand Services in Nairobi",
  description:
    "Send errands, deliveries, and tasks across Nairobi using trusted, verified runners. Fast, secure, and reliable. Download Tumwa on Android or iOS.",
  keywords: [
    "errand app Nairobi",
    "errand delivery Kenya",
    "send errands Nairobi",
    "errand runner app Kenya",
    "grocery delivery Nairobi",
    "Tumwa app",
    "on-demand errands Kenya",
  ],
  authors: [{ name: "Tumwa", url: "https://tumwaapp.com" }],
  openGraph: {
    title: "Tumwa App – Errand Services in Nairobi",
    description:
      "Send errands, deliveries, and tasks across Nairobi using trusted runners. Fast, secure, and reliable.",
    url: "https://tumwaapp.com",
    siteName: "Tumwa",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tumwa App – Errand Services in Nairobi",
    description:
      "Send errands, deliveries, and tasks across Nairobi using trusted runners.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
