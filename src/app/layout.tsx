import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import WspButton from "./components/wsp";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitality",
  description: "Potencia tu marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen ">
          <div className="flex-grow">
            <Navbar />
            {children}
            <Analytics />
            <WspButton />
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
