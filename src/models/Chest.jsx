
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3D/enchanted_chest_animation_draco.glb';

export function Chest({currentAnimation, ...props}){
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, a.group);

useEffect(() => {
console.log(actions)

  Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <a.group ref={group} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="33fed897b7684269862b5fa44d3f1ceefbx" rotation={[Math.PI / 2, 0, 0]}>
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="Object_4">
                  <a.group name="Object_5" position={[0.023, -0.069, 0.145]} />
                  <primitive object={nodes.Possessed_ChestBase_00} />
                  <a.group
                    name="Possessed_ChestRPlatform_08"
                    position={[0.061, 0, 1.382]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  />
                  <a.group name="MESH_PossessedChest">
                    <a.group name="MESH_Base" position={[0.023, -0.069, 0.145]} />
                  </a.group>
                  <a.group name="Possessed_Chest" rotation={[Math.PI / 2, 1.571, 0]} />
                </a.group>
              </a.group>
            </a.group>
          </a.group>
          <skinnedMesh
            name="Object_6"
            geometry={nodes.Object_6.geometry}
            material={materials.MAT_Chest}
            skeleton={nodes.Object_6.skeleton}
          />
        </a.group>
      </a.group>
    </a.group>
  )
}

export default Chest;
