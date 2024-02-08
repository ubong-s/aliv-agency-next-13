import { Manrope } from "next/font/google";
import BodyContent from "./(components)/BodyContent";

import "node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "../globals.css";

import { Providers } from "@/providers/Provider";

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
      <Providers>
        <BodyContent>{children}</BodyContent>
      </Providers>
    </html>
  );
}
