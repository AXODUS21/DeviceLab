"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
          start: "center bottom",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex justify-end px-14 overflow-hidden">
      <div ref={textRef} className="w-1/3">
        <h2 className="text-4xl mb-8">Test your responsive site</h2>
        <p className="text-2xl">
          The different models of phones and tablets allow you to test your
          responsive site on different resolutions. From the smallest iPhone 5
          (320px) through the iPhone 15 PRO (393px) to the iPad Air (1280px) In
          one click and you can change your phone, really simple and fast.
        </p>
      </div>
    </div>
  );
};

export default Content2;
