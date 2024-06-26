import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import UniLogo from "@/components/ui/NavSingleContainer";
import Image from "next/image";
import HamBurgerIcon from "@/components/MobileNavMenu";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unicago",
  description: "For The Love of Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center "></div>
        <Navbar />
        <HamBurgerIcon/>
        <UniLogo redirect="/">
          <Image src="/uni-logo.svg" alt="uni-logo" height={24} width={24} />
        </UniLogo>


        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
