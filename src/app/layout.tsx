import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Walk App",
  description: "Developed by SANDUN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackProvider>
      <body className={inter.className}>{children}</body>
      </TanstackProvider>
    </html>
  );
}
