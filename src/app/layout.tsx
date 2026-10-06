import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnapackagingindustry.com"),
  title: "Krishna Packaging Industry | Leading Packaging Machinery Exporter & Manufacturer Faridabad",
  description:
    "Delivering heavy-duty Form Fill Seal (FFS), Collar Type Cup Fillers, Multihead Weighers, Auger Fillers, and Horizontal Flow Wrap Packaging Machines in Faridabad, Haryana, India.",
  keywords: [
    "Krishna Packaging Industry",
    "Packaging machine manufacturer Faridabad",
    "FFS Packaging Machine",
    "Collar Type Cup Filler Machine",
    "Collar Auger Filling Packaging Machine",
    "Horizontal Flow Wrap Pillopack Packaging",
    "Multihead Weighing Packaging Machine",
    "Bakery Rusk Packaging Machine",
    "Pouch Packing Machine Haryana",
    "Food packaging automation India",
  ],
  authors: [{ name: "Krishna Packaging Industry" }],
  openGraph: {
    title: "Krishna Packaging Industry | Industrial Packaging Machinery Manufacturer",
    description:
      "Renowned exporter, manufacturer, and supplier of Form-Fill-Seal, Auger, Multihead, and Flow Wrap packaging machines since 2010.",
    url: "https://krishnapackagingindustry.com",
    siteName: "Krishna Packaging Industry",
    images: [
      {
        url: "/images/ABOUT-US-3.webp",
        width: 1200,
        height: 630,
        alt: "Krishna Packaging Industry Machinery Factory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/cropped-kpi-logo-60x59.png",
    shortcut: "/images/cropped-kpi-logo-60x59.png",
    apple: "/images/cropped-kpi-logo-60x59.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-slate-950">
        <Suspense fallback={<div className="h-28 bg-white border-b border-slate-200" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
