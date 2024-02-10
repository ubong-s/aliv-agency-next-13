import BodyContent from "./(components)/BodyContent";
import "node_modules/locomotive-scroll/bundled/locomotive-scroll.css";
import "../globals.css";

import { Providers } from "@/providers/Provider";
import PageTransition from "@/providers/PageTransition";

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
        <PageTransition>
          <BodyContent>{children}</BodyContent>
        </PageTransition>
      </Providers>
    </html>
  );
}
