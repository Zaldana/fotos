import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "A beautiful photography portfolio showcasing nature and travel photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <Providers>
          {/* Hero Section - Fixed background */}
          <div className="fixed inset-0 z-0">
            <Image
              src="/hero-image-1920.jpg"
              alt="Photography Portfolio Hero"
              fill
              className="object-cover object-[37%_center] md:object-center"
              priority
              sizes="100vw"
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Scrollable content */}
          <div className="relative z-10" style={{ marginTop: 'calc(100vh - 4rem)' }}>
            <div className="bg-white min-h-screen">
              <Navigation />
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
