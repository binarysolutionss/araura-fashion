import type { Metadata } from "next";
import { Bebas_Neue, Raleway } from "next/font/google";
import "./globals.css";

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
  title: "Araura Fashion — Fashion designers in Hrare",
  description: "Wear Your Truth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${raleway.variable}`}>
      <body className="font-raleway antialiased cursor-crosshair">{children}</body>
    </html>
  );
}
