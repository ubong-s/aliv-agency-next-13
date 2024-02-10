"use client";

import { Logo } from "@/components";
import { useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const tl = useRef<gsap.core.Timeline | null>(null);
  const transitionRef = useRef<HTMLDivElement | null>(null);

  const playTransition = () => {
    tl.current?.play(0);
  };

  const stopTransition = () => {};

  useIsomorphicLayoutEffect(() => {
    if (!transitionRef.current) return;

    const grid = transitionRef.current.children;
    const overlay = transitionRef.current;

    gsap.set(overlay, { zIndex: -4 });
    gsap.set(grid, { autoAlpha: 1 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(overlay, { zIndex: 2, backgroundColor: "white" })
      .to(
        grid,
        {
          transformOrigin: "50% 50%",
          ease: "power4.in",
          scaleX: 0,
          stagger: {
            grid: "auto",
            from: "start",
            each: 0.05,
            ease: "power4.in",
          },
        },
        "-=0.3"
      )
      .to(overlay, { zIndex: -4, backgroundColor: "none" }, "-=0.3");

    return () => {
      tl.current?.kill();
    };
  }, []);

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={500}
          classNames="page"
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
      <div
        className="fixed top-0 left-0  w-full h-full z-1000 pointer-events-none grid"
        style={{
          gridTemplateColumns: "repeat(10, 1fr)",
        }}
        ref={transitionRef}
      >
        {[...Array(10)].map((_, i) => {
          return <div key={i} className="col-auto bg-black invisible" />;
        })}
      </div>
    </>
  );
}
