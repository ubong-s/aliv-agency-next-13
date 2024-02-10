"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";

import { Toaster } from "react-hot-toast";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "./Loader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BodyContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".loader", { scale: 0, opacity: 0, zIndex: -1000 })
        .to(".content", {
          autoAlpha: 1,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white relative " data-scroll-section ref={container}>
      <Toaster
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />

      <div className="content min-h-screen opacity-0">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
      <div className="loader fixed top-0 left-0 w-full h-full flex items-center justify-center z-[1000]">
        <Loader />
      </div>
    </div>
  );
}
