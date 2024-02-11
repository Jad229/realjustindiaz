import type { Metadata } from "next";
import { Zen_Dots } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Scroller } from "@/components/Scroller/Scroller";

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
      <body className={ZenDots.className}>
        <div className="layoutWrapper">
          <Navbar />
          {children}
          <Scroller />
        </div>
      </body>
    </html>
  );
}
