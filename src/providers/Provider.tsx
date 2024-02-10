"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
import { Manrope } from "next/font/google";
import { Cart, Header } from "@/app/(site)/(components)";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [pathname]);

  return (
    <SessionProvider>
      <Provider store={store}>
        <body
          suppressHydrationWarning={true}
          data-scroll-container
          data-scroll-section={false}
          className={`${manrope.variable} font-sans`}
        >
          {children}
          <Cart />
        </body>
      </Provider>
    </SessionProvider>
  );
}
