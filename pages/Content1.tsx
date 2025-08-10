"use client"
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
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
        textClassName='text-4xl'
        containerClassName='w-1/3'
      > 
          Smartphone and tablet simulator on computer to test your mobile
          site. Several models available, iPhone 15, Galaxy S22, Google Pixel 6,
          iPad Air and many others.
      </ScrollReveal>
    </div>
  );
}

export default Content1