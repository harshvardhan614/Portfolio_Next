"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./Loader";

function MyRender({ children}) {
  return (
    <Canvas
    className="-z-10"
      frameloop="demand"
      shadows
      camera={{ position: [0, 2, 5], fov: 30 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader/>}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
}

export default MyRender;
