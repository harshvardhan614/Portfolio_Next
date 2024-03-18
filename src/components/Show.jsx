"use client"
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./models/Avatar";


export const Show = () => {
  return (
    <>
      <OrbitControls 
      autoRotate
      rotateSpeed={2.0}
      enableZoom={false} 
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <group position={[0, -1, 0]}>
        <Avatar />
        <ambientLight intensity={2} />
      </group>
    </>
  );
};