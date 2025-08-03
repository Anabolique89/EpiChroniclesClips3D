import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import scene from '../assets/3D/gislinge_viking_boat.glb'

export function VikingBoat({currentAnimation, ...props}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const {actions} = useAnimations(animations, group);

  useEffect(() => {
console.log(actions)

//   Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rigging_Pin_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-73.647, 62.374, 83.811]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rigging_Pin001_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[72.429, 62.374, -151.984]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rigging_Pin002_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-72.66, 62.374, -151.984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sail_Full_Sail_Full_0.geometry}
        material={materials.Sail_Full}
        position={[4.14, 420.924, 12.833]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sail_Ropes_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[4.14, 420.924, 12.833]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yard_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[0, 425, 6.355]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yard_Rope_Raised_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[6.189, 95.831, 6.088]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mast_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[0, 18.506, 6.355]}
        rotation={[0, 1.484, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shrouds_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stay_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[0, 92.012, 334.647]}
        rotation={[-0.729, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yard_Rope_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-6.632, 38.041, -73.104]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keel_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stems_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Planking_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frames_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stanchions_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rudder_Frame_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringer_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Thole_Straps_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rudder_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-30.279, 68.369, -325.946]}
        rotation={[0.37, 0.079, 0.257]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tiller_Ship_Oak_Aged_0.geometry}
        material={materials.Ship_Oak_Aged}
        position={[-2.408, 105.155, -311.127]}
        rotation={[0.28, 0, 0]}
      />
    </group>
  )
}

export default VikingBoat;
