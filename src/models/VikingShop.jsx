import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import houseScene from "../assets/3D/viking_house.glb"; 
import { a } from '@react-spring/three';

const VikingShop = ({isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props}) =>{
    const { nodes, materials } = useGLTF(houseScene);
    const shopRef = useRef();
    const { gl, viewport} = useThree();
     const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    }
     const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    //mistake avoided - moved to "move"
    }
     const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if(isRotating) {

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;

      const delta = (clientX - lastX.current) / viewport.width;
      shopRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    }

     const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft'){
        if(!isRotating) setIsRotating(true);
        shopRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
       }else if (e.key === 'ArrowRight'){
        if(!isRotating) setIsRotating(true);
        shopRef.current.rotation.y -= 0.01 * Math.PI;  
       rotationSpeed.current = -0.0125;     }
     }
     const handleKeyUp = (e) => {
if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
  setIsRotating(false);
}
     }

// Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      shopRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }
// for laptop pad 

const handleWheel = (e) => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault();
    const delta = e.deltaX / 100; // Adjust sensitivity as needed
    shopRef.current.rotation.y += delta * 0.01 * Math.PI;
    rotationSpeed.current = delta * 0.01 * Math.PI;
    setIsRotating(true);
  }
};


useFrame(() => {
  if(!isRotating){
    rotationSpeed.current *= dampingFactor;
    if(Math.abs(rotationSpeed.current) < 0.001){
      rotationSpeed.current = 0;
    } 
    shopRef.current.rotation.y += rotationSpeed.current;
  }else{
    const rotation = islandRef.current.rotation.y;
const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

//set current stage based on house orientation - we start at stage 0 and move on step by step
switch (true) {
  case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
    setCurrentStage(4);
    break;
  case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
    setCurrentStage(3);
    break;
  case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
    setCurrentStage(2);
    break;
  case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
    setCurrentStage(1);
    break;
  default:
    setCurrentStage(null);
}

  }
})

    useEffect(() => {
      //attach to the canvas, not regular DOM
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
       document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyDown);
         canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

      return () =>{
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
         canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener('wheel', handleWheel);

      }

    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])


  return (
    <a.group ref={shopRef} {...props} >
      <a.group rotation={[-Math.PI / 2, 0, 0]} scale={212.766}>
        <a.group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
         
            geometry={nodes.pCube125_lambert2_0.geometry}
            material={materials.lambert2}
          />
          <mesh
    
            geometry={nodes.pCube125_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
          
            geometry={nodes.pCube125_lambert3_0.geometry}
            material={materials.lambert3}
          />
        </a.group>
      </a.group>
    </a.group>
  )
}


export default VikingShop;

useGLTF.preload('/viking_house.glb')