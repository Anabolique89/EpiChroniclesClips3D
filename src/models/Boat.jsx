
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import boatScene from "../assets/3D/gislinge_viking_boat_draco.glb"; 

 const Boat = ({ ...props }) => {
  const { nodes, materials } = useGLTF(boatScene, true, '/draco/')
  const boatRef = useRef();
  return (
    <a.group ref={boatRef} {...props} rotation={[0, Math.PI/2, 0]}>
      <mesh
    
        geometry={nodes.Rigging_Pin_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-73.647, 62.374, 83.811]}
      />
      {/* <mesh
      
        geometry={nodes.Rigging_Pin001_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[72.429, 62.374, -151.984]}
        rotation={[-Math.PI, 0, -Math.PI]}
      /> */}
      {/* <mesh
       
        geometry={nodes.Rigging_Pin002_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-72.66, 62.374, -151.984]}
      /> */}
      <mesh
     
        geometry={nodes.Sail_Full_Sail_Full_0.geometry}
        material={materials.Sail_Full}
        position={[4.14, 420.924, 12.833]}
        rotation={[0, Math.PI / 6, 0]}
      />
  
      <mesh
   
        geometry={nodes.Yard_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[0, 425, 6.355]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
      
        geometry={nodes.Yard_Rope_Raised_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[6.189, 95.831, 6.088]}
      />
  
      <mesh
       
        geometry={nodes.Shrouds_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
  
      <mesh
       
        geometry={nodes.Keel_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
       
        geometry={nodes.Stems_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
       
        geometry={nodes.Planking_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        
        geometry={nodes.Frames_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      
     
      <mesh
      
        geometry={nodes.Stringer_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      
      <mesh
      
        geometry={nodes.Rudder_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-30.279, 68.369, -325.946]}
        rotation={[0.37, 0.079, 0.257]}
      />
     
    </a.group>
  )
}
useGLTF.preload('/assets/3D/gislinge_viking_boat_draco.glb');
export default Boat;

