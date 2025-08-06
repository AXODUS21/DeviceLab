// components/ScrollPinnedWrapper.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinnedWrapper({
  children,
  enabled = false,
}: {
  children: React.ReactNode;
  enabled?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !wrapperRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    });

    return () => {
      trigger.kill();
    };
  }, [enabled]);

  return (
    <div ref={wrapperRef} id="scroll-proxy" className="h-[200vh]">
      {children}
    </div>
  );
}
