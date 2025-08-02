"use client"
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Content1 = () => {
  const textRef = useRef(null);

   useGSAP(() => {
     gsap.fromTo(
       textRef.current,
       { 
        x: -700,
        opacity: 0,
      },
       {
         opacity: 0.5,
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
    <div className="min-h-screen flex justify-start px-14 items-center overflow-hidden">
      <p ref={textRef} className='w-1/3 text-4xl '>
        Smartphone and tablet simulator on computer to test your mobile
        site. Several models available, iPhone 15, Galaxy S22, Google Pixel 6,
        iPad Air and many others.
      </p>
    </div>
  );
}

export default Content1