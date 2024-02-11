import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Scroller } from "@/components/Scroller/Scroller";
import { Footer } from "@/components/Footer/Footer";

const ZenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Diaz",
  description: "Portfolio of Justin Diaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="32x32" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={ZenDots.className}>
        <div className="layoutWrapper">
          <Navbar />
          {children}
          <Footer />
          <Scroller />
        </div>
      </body>
    </html>
  );
}
