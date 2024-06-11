import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'
import FooterComponent from "@/components/footer/Footer";
import NavBarComponent from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice Project",
  description: "Developed by Saad Naeeme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarComponent />
        {children}
        {/* <FooterComponent /> */}

      </body>
    </html>
  );
}
