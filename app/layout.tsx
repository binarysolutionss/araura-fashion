import type { Metadata } from "next";
import { Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  metadataBase: new URL("https://araura-fashion.vercel.app"),
  title: {
    default: "Araura Fashion | Curated Clothing & Accessories",
    template: "%s | Araura Fashion",
  },
  description:
    "Araura Fashion offers curated clothing and accessories for the modern individual. Discover unique pieces that blend style and comfort.",
  keywords: [
    "Araura Fashion",
    "curated clothing",
    "accessories",
    "fashion Zimbabwe",
    "style",
    "comfort",
    "designers Harare",
    "Zimbabwe fashion",
    "fashion design zimbabwe",
    "clothes zimbabwe",
  ],
  authors: [{ name: "Araura Fashion" }],
  creator: "Araura Fashion",
  publisher: "Araura Fashion",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://araura-fashion.vercel.app",
    siteName: "Araura Fashion",
    title: "Araura Fashion | Curated Clothing & Accessories",
    description:
      "Discover unique African heritage themed fashion pieces that blend style and comfort with Araura Fashion.",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "Araura Fashion Curated Clothing & Accessories",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Araura Fashion | Curated Clothing & Accessories",
  //   description:
  //     "Discover unique pieces that blend style and comfort with Araura Fashion.",
  //   images: ["/og-image.jpg"],
  //   creator: "@araurafashion", // Replace with your actual handle or remove
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://araura-fashion.vercel.app",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${raleway.variable}`}>
      <head>
      <Script 
        id="website-schema"
        type="appllication/id+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "webSite",
            "name": "Araura Fashion",
            "alternateName": "Araura Fashion Curated Clothing & Accessories",
            "url": "https://araura-fashion.vercel.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://araura-fashion.vercel.app/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      </head>
      <body className="font-raleway antialiased cursor-crosshair bg-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
