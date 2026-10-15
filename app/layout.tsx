import "./globals.css";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google"
import Image from "next/image"
import PrintForgeLogo from "@/public/printforge-logo.svg"
import PrintForgeLogoIcon from "@/public/printforge-logo-icon.svg"
import Link from "next/link"
import Navbar from "@/app/components/Navbar";
 

const albertSans = Albert_Sans({
  subsets:["latin"],
  display: "swap"

})
const montserratAlternates = Montserrat_Alternates({
  subsets:["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        <header className="w-full bg-white">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
