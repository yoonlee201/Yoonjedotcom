'use client';
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useSceneColors } from '@/app/_components/homePage/3DComponents';
import * as THREE from 'three';
import Yoonje from '~/public/models/Yoonje.glb';

const Model = () => {
    const { scene } = useGLTF(Yoonje);
    const modelRef = useRef();
    const { camera } = useThree();
    const { modelColor } = useSceneColors();
    console.log(Yoonje);

    useEffect(() => {
        const model = modelRef.current;
        if (model) {
            const traverseModel = (obj: THREE.Object3D) => {
                if (obj instanceof THREE.Mesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                    obj.material.color.set(modelColor);
                }
                obj.children.forEach(traverseModel);
            };

            traverseModel(model);

        }
    }, [camera, modelColor]);

    return (
        <primitive
            ref={modelRef}
            object={scene}
            castShadow
            position={[0, 0, 0]} // Center the model
        />
    );
};

useGLTF.preload(Yoonje);

export default Model;
