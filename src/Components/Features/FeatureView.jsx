import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

const SwingingModel = () => {
  const modelRef = useRef();

  // Swing animation using react-spring
  const { rotation } = useSpring({
    from: { rotation: [-0.4, 10, 30] },  // Initial swing angle
    to: async (next) => {
      while (true) {
        await next({ rotation: [0.2, 0, 0] });
        await next({ rotation: [-0.2, 0, 0] });
        await next({ rotation: [-0.2, .2, .5] });
        await next({ rotation: [-0.2, .6, .7] });
        await next({ rotation: [-0.2, .4, .10] });
      }
    },
    config: { tension: 100, friction: 10 },
    loop: true,
  });

  // Load 3D model (replace with your own GLTF/GLB model)
  const { scene } = useGLTF("./drone.glb");

  return (
    <a.group ref={modelRef} rotation={rotation} >
      <primitive object={scene} position={[.1,-2,.3]} />
    </a.group>
  );
};

const FeatureView = () => {
  return (
    <div  className="relative w-full h-screen bg-gray-300 flex items-center justify-center overflow-hidden">
      <h1 className="absolute text-9xl font-bold text-center text-red-500 opacity-90">ESPACIO AERONEXT</h1>
  <div className="">
   <div className="">
   <div></div>
    <div className="">  <Canvas camera={{ position: [1,2,3] }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[.1,.1,.1]} />
      <SwingingModel />
    </Canvas></div>
   </div>
  </div>
  </div>
  );
};

export default FeatureView;
