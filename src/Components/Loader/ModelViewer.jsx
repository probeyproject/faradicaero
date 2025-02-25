
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
function DroneModel() {
  const { scene } = useGLTF("/dronemodel.glb"); // Path to your .glb model
  const modelRef = useRef();

  // Function to handle scroll events
  const handleScroll = (event) => {
    if (modelRef.current) {
      const deltaY = event.deltaY * 0.006; // Adjust sensitivity for Y-axis rotation
      const deltaX = event.deltaX * 0.0006; // Adjust sensitivity for X-axis rotation
      modelRef.current.rotation.y += deltaY;
      modelRef.current.rotation.y += deltaX;
    }
  };

  return (
    <div
      className="relative p-2 md:p-1 md:-left-36 md:-top-40 md:h-screen h-96" 
      onWheel={handleScroll} // Attach the scroll handler
    >
      <Canvas camera={{ position: [1,4,6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

     
     

      <OrbitControls enableZoom={false} />
        <primitive object={scene} ref={modelRef} />

      </Canvas>
    </div>
  );
}

const ModelViewer = () => {
  return (
    <div className=" ">
      <DroneModel />
    </div>
  );
};

export default ModelViewer;
