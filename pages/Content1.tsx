"use client"
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from '@/components/ui/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Content1 = () => {

  return (
    <div className="min-h-screen flex justify-start px-14 items-center overflow-hidden">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="text-4xl"
        containerClassName="w-1/3"
      >
        The ultimate browser extension for web developers, designers, and
        digital creators who need fast and accurate responsive testing. Run it
        on any website and instantly see how your site looks on mobiles,
        tablets, laptops, TVs, and even smartwatches.
      </ScrollReveal>
    </div>
  );
}

export default Content1