import { Header, Footer, Cart } from "./(components)";
import { Manrope } from "next/font/google";
import "../globals.css";
import { Providers } from "@/redux/provider";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "Aliv Agency - Building Brands, One Success Story at a Time.",
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
        <div className="bg-white min-h-screen relative">
          <Providers>
            <Header />
            <Cart />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
