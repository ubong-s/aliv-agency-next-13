"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Provider } from "react-redux";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
import { Manrope } from "next/font/google";
import { Cart, Header } from "@/app/(site)/(components)";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  return (
    <SessionProvider>
      <Provider store={store}>
        <RLSProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          location={pathname}
          onLocationChange={(scroll: any) =>
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          }
          containerRef={containerRef}
        >
          <body
            suppressHydrationWarning={true}
            data-scroll-container
            data-scroll-section={false}
            ref={containerRef}
            className={`${manrope.variable} font-sans`}
          >
            {children}
            <Cart />
          </body>
        </RLSProvider>
      </Provider>
    </SessionProvider>
  );
}
