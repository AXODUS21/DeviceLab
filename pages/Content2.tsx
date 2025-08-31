"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ui/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Content2 = () => {
  return (
    <div className="min-h-screen flex justify-end px-14 overflow-hidden">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="text-3xl"
        containerClassName="w-1/3"
      >
        Testing responsiveness has never been easier. Simply choose a device
        model and watch your site adjust in real time—fast, simple, and
        effective.
      </ScrollReveal>
    </div>
  );
};

export default Content2;
