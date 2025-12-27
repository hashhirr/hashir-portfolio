import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Fix NaN values in geometry
  React.useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const positions = child.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            positions[i] = 0;
          }
        }
        child.geometry.attributes.position.needsUpdate = true;
        child.geometry.computeBoundingSphere();
      }
    });
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0.6, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile && ( // Hide on mobile screens
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            target={[0, 0.3, 0]}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
      </Canvas>
    )
  );
};

export default ComputersCanvas;
