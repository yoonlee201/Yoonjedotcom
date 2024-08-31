'use client'
import { useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const RestrictedOrbitControls = () => {
    const controlsRef = useRef<any>(null);
    const { camera } = useThree();

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.minAzimuthAngle = -Math.PI / 3; // -45 degrees
            controlsRef.current.maxAzimuthAngle = Math.PI / 3; // 45 degrees
            controlsRef.current.minPolarAngle = Math.PI / 5; // Prevent looking too low
            controlsRef.current.maxPolarAngle = (Math.PI) / (1/2); // Prevent looking too high
            controlsRef.current.minDistance = 10;
            controlsRef.current.maxDistance = 30;
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

    useEffect(() => {
        if (lightRef.current) {
            // lightRef.current.shadow.camera.near = 2;
            // lightRef.current.shadow.camera.far = 50;
        }
    }, []);

    return (
        <directionalLight
            ref={lightRef}
            position={[-4.0, 0.6, 9.1]}
            intensity={5}
            castShadow
        />
    );
};

export const useSceneColors = () => {
    return {
        modelColor: '#85899d', //#425c8d', //85899d
        backgroundColor: '#fbf6ea', //'#ffeccc', //fbf6ea})
    };
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
