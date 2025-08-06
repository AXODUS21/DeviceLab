"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useCarouselStore } from "@/pages/Carousel";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

function Scene({
  position,
  fov,
}: {
  position: [number, number, number];
  fov: number;
}) {
  const model = useCarouselStore((state) => state.currentModel);
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!modelRef.current) return;

    // Set initial state
    gsap.set(modelRef.current.position, { y: -1, opacity: 0 });

    // Animate in when model changes
    gsap.to(modelRef.current.position, {
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.fromTo(
      modelRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [model]);

  return (
    <Canvas camera={{ position, fov }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      <group ref={modelRef}>{model}</group>
    </Canvas>
  );
}

export default function ModelView({
  position,
  fov,
}: {
  position: [number, number, number];
  fov: number;
}) {
  return <Scene position={position} fov={fov} />;
}
