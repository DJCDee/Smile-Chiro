import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smile Chiropractic",
  description: "Smile Chiropractic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}


function Header(){
  return (
    <header>
      <h1>Smile Chiropractic</h1>
    </header>
  )
}

function Footer(){
  return (
    <footer>
      <p>Smile Chiropractic</p>
    </footer>
  )
}