import { Footer } from "./(components)/Footer";
import { Header } from "./(components)/Header";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "Aliv - Building Brands, One Success Story at a Time.",
  description: "Building Brands, One Success Story at a Time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <div className="bg-white min-h-screen">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
