'use client';
//to be continue
import { lazy, Suspense } from 'react';
import { Canvas} from '@react-three/fiber';
import {
    useSceneColors,
    SunLight,
    BackgroundPlane,
    RestrictedOrbitControls,
} from '@/app/_components/homePage/3DComponents';


const ModelComponent = lazy(
    () => import('@/app/_components/homePage/Model')
);


const Name = () => {
    const { backgroundColor } = useSceneColors();
    return (
        <Suspense fallback={'loading'}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 10], fov: 50 }}>
                <color
                    attach="background"
                    args={[backgroundColor]}
                />
                <ambientLight intensity={0.5} />
                <SunLight />
                <ModelComponent/>
                <RestrictedOrbitControls />
            </Canvas>
        </Suspense>
    );
};

export default Name;
