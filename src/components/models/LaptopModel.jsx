/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const LaptopModel = React.memo(function LaptopModel(props) {
  const modelRef = useRef();
  
  // Move hooks outside the try...catch block
  const { scene } = useGLTF("/models/laptop-transformed.glb");
  
  useFrame((state) => {
    if (modelRef.current) {
      // Gentle floating animation
      modelRef.current.position.y = 0 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      // Slow rotation
      modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, 0, 0]}
      scale={[0.002, 0.002, 0.002]}
      rotation={[0, 0, 0]}
      {...props}
    />
  );
});

export default LaptopModel;
useGLTF.preload("/models/laptop-transformed.glb"); 