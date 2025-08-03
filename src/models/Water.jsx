
import { useRef, useEffect } from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import waterScene from "../assets/3D/water_wave_for_ar.glb"; 
import { a } from '@react-spring/three';
import { useGLTF, useAnimations } from '@react-three/drei'

const Water = (props)=>{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(waterScene)
  const { actions } = useAnimations(animations, group)
  return (
    <a.group  ref={group} {...props}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="root">
            <a.group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <a.group name="Sketchfab_model_7" rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.486, 1]}>
                <a.group name="f814d653bbee4d4dbc628e0d057694efabccleanermaterialmergergle_6">
                  <a.group name="Object_2_5" rotation={[Math.PI / 2, 0, 0]}>
                    <a.group name="Object_3_4">
                      <a.group
                        name="Object_13_3"
                        position={[365.286, -.732, -213.008]}
                        rotation={[0, 0.146, 0]}>
                        <a.group name="Object_14_2">
                          <a.group name="MorphMainGroup_1">
                            <a.group name="PlaneShape_0">
                              <mesh
                                name="mesh_0"
                                geometry={nodes.mesh_0.geometry}
                                material={materials.PlaneShape}
                                morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                                morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                              />
                            </a.group>
                          </a.group>
                        </a.group>
                      </a.group>
                    </a.group>
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  )
}

useGLTF.preload('/water_wave_for_ar.glb');
export default Water;
