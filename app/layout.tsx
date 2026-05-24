import type { Metadata } from "next";
import { Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Araura Fashion",
  description: "Fashion and garment designers in Harare, Zimbabwe. We create unique and stylish afro-centric clothing for everyone.",
  icons: {
    icon: "favicon.ico"
  },
  metadataBase: new URL('https://araura-fashion.vercel.app'),
  openGraph: {
    title: 'Araura Fashion',
    description: "Fashion and garment designers in Harare, Zimbabwe. We create unique and stylish afro-centric clothing for everyone.",
    url: 'https://araura-fashion.vercel.app',
    siteName: 'Araura Fashion',
    locale: 'en_ZW',
    type: 'website',
  },
  other:{
    'geo.region': 'ZW',
    'geo.placename': 'Harare',
  },
  alternates: {
    canonical: 'https://araura-fashion.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${raleway.variable}`}>
      <body className="font-raleway antialiased cursor-crosshair bg-[#05050a]">
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
