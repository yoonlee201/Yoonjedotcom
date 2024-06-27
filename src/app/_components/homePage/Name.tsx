'use client';
//to be continue
import { Canvas} from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import Yoonje from '@/assets/Yoonje_.glb';
import {
    useSceneColors,
    SunLight,
    BackgroundPlane,
    Model,
    RestrictedOrbitControls,
} from '@/app/_components/homePage/3DComponents';

const Name = () => {
    const { backgroundColor } = useSceneColors();
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 10], fov: 50 }}>
            <color
                attach="background"
                args={[backgroundColor]}
            />{' '}
            <ambientLight intensity={0.5} />
            <SunLight />
            <BackgroundPlane />
            <Model url={Yoonje} />
            <RestrictedOrbitControls />
            <Stats />
        </Canvas>
    );
};

export default Name;
