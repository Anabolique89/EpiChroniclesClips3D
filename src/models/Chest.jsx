import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3D/enchanted_chest_animation_draco.glb';

export function Chest({currentAnimation, onClick, ...props}){
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions)
    
    Object.values(actions).forEach((action) => action.stop());
    
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group 
      ref={group}
      {...props}
      onClick={onClick}
      onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
      onPointerOut={(e) => (document.body.style.cursor = 'auto')}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="33fed897b7684269862b5fa44d3f1ceefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="Object_5" position={[0.023, -0.069, 0.145]} />
                  <primitive object={nodes.Possessed_ChestBase_00} />
                  <group
                    name="Possessed_ChestRPlatform_08"
                    position={[0.061, 0, 1.382]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  />
                  <group name="MESH_PossessedChest">
                    <group name="MESH_Base" position={[0.023, -0.069, 0.145]} />
                  </group>
                  <group name="Possessed_Chest" rotation={[Math.PI / 2, 1.571, 0]} />
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_6"
            geometry={nodes.Object_6.geometry}
            material={materials.MAT_Chest}
            skeleton={nodes.Object_6.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

// Remove the conflicting default export
// export default Chest;