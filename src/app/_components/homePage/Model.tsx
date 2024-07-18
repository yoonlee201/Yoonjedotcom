'use client';
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useSceneColors } from '@/app/_components/homePage/3DComponents';
import * as THREE from 'three';
import Yoonje from 'public/models/Yoonje.glb'

const Model = () => {
    const { scene } = useGLTF(Yoonje);
    const modelRef = useRef();
    const { camera } = useThree();
    const { modelColor } = useSceneColors();

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
            (model as THREE.Object3D).rotation.x = Math.PI / 2;

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Position the camera to view the entire model
            const maxDim = Math.max(size.x, size.y, size.z);

            if (camera instanceof THREE.PerspectiveCamera) {
                const fov = camera.fov * (Math.PI / 180);
                let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
                cameraZ *= 1.5; // Zoom out a little so object is not filling entire screen

                camera.position.set(center.x, center.y, center.z + cameraZ);
                camera.lookAt(center);
                camera.updateProjectionMatrix();
            }

            // Update OrbitControls target
            if ((model as THREE.Object3D).parent) {
                (model as THREE.Object3D).parent?.updateMatrixWorld();
            }
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

export default Model;
