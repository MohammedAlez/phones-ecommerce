import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Open_Sans } from 'next/font/google'
import Footer from "./components/Footer";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "phones & laptops",
  description: "Hello world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >
        <NavBar />
        <div className="bg-[#ecf0f1] pb-60">
          <div className="min-h-[100vh] max-w-[1200px] mx-auto px-4">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
