"use client"
import React from 'react'

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "@/models/Iphone";
import { Macbook } from '@/models/Macbook';

const ModelView = () => {
  
  return (
      <>
        <Canvas camera={{ position: [-80, 40, -60], fov: 3 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <Environment preset="studio" />
          <OrbitControls
            enableZoom={false}
            target={[0, 0, 0]}
            minDistance={0.5}
            maxDistance={5}
          />
          <Model/>
        </Canvas>
      </>
  );
}

export default ModelView