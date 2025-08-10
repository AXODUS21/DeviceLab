"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollReveal from "@/components/ui/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Content2 = () => {
 const textRef = useRef(null);


  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: 700,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex justify-end px-14 overflow-hidden">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName='text-3xl'
        containerClassName='w-1/3'
      > 
          The different models of phones and tablets allow you to test your
          responsive site on different resolutions. From the smallest iPhone 5
          (320px) through the iPhone 15 PRO (393px) to the iPad Air (1280px) In
          one click and you can change your phone, really simple and fast.
      </ScrollReveal>
    </div>
  );
};

export default Content2;
