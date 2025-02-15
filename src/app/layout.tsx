import type { Metadata } from "next";
import { PoppinsMedium } from "../config/fonts";
import "./globals.css";
import { HeaderComponent } from "./_components/header";


export const metadata: Metadata = {
  title: "Portfolio - Yuri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${PoppinsMedium} bg-[#020014] text-white`}>
        <HeaderComponent>
          {children}
        </HeaderComponent>
      </body>
    </html>
  );
}
