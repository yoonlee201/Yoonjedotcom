import { useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';

import * as THREE from 'three';

export const RestrictedOrbitControls = () => {
    const controlsRef = useRef<any>(null);
    const { camera } = useThree();

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.minAzimuthAngle = -Math.PI / 4; // -45 degrees
            controlsRef.current.maxAzimuthAngle = Math.PI / 4; // 45 degrees
            controlsRef.current.minPolarAngle = Math.PI / 3; // Prevent looking too low
            controlsRef.current.maxPolarAngle = (Math.PI * 2) / 3; // Prevent looking too high
            controlsRef.current.minDistance = 1;
            controlsRef.current.maxDistance = 5;
        }
    }, [camera]);

    return (
        <OrbitControls
            ref={controlsRef}
            makeDefault
            enableZoom={true}
            enablePan={false}
        />
    );
};

export const SunLight = () => {
    const lightRef = useRef<THREE.DirectionalLight>(null);

    const { intensity, x, y, z, shadowMapSize } = useControls('Sun Light', {
        intensity: { value: 9, min: 0, max: 20, step: 1 },
        x: { value: 5, min: -10, max: 10, step: 0.1 },
        y: { value: 5, min: -10, max: 10, step: 0.1 },
        z: { value: 5, min: -10, max: 10, step: 0.1 },
        shadowMapSize: { value: 2048, min: 512, max: 4096, step: 512 },
    });

    useEffect(() => {
        if (lightRef.current) {
            lightRef.current.shadow.mapSize.width = 2048;
            lightRef.current.shadow.mapSize.height = 2048;
            lightRef.current.shadow.camera.near = 1;
            lightRef.current.shadow.camera.far = 50;
        }
    }, [shadowMapSize, x, y, z]);

    return (
        <directionalLight
            ref={lightRef}
            position={[-4.0, 0.6, 9.1]}
            intensity={3}
            castShadow
        />
    );
};

export const useSceneColors = () => {
    return useControls('Color', {
        modelColor: '#85899d', //#425c8d', //85899d
        backgroundColor: '#ffeccc', //fbf6ea})
    });
};
export const BackgroundPlane = () => {
    const { backgroundColor } = useSceneColors();

    return (
        <mesh
            position={[0, 0, 0]} // Positioned 5 units behind the origin
            receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial
                color={backgroundColor}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

export const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef();
    const { camera } = useThree();
    const { modelColor } = useSceneColors();

    const { modelRotationX } = useControls('Suzanne', {
        modelRotationX: {
            value: Math.PI / 2,
            min: -Math.PI,
            max: Math.PI * 2,
            step: 0.01,
        },
    });

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
            model.rotation.x = modelRotationX;

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
            if (model.parent) {
                model.parent.updateMatrixWorld();
            }
        }
    }, [camera, modelRotationX, modelColor]);

    return (
        <primitive
            ref={modelRef}
            object={scene}
            castShadow
            position={[0, 0, 0]} // Center the model
        />
    );
};
