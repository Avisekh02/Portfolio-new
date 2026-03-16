import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const generateParticles = (count) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
};

const Particles = ({ count = 5000 }) => {
    const points = useRef();
    const particles = useMemo(() => generateParticles(count), [count]);

    useFrame((state) => {
        const { clock, mouse } = state;
        if (points.current) {
            points.current.rotation.y = clock.getElapsedTime() * 0.05;
            points.current.rotation.x = clock.getElapsedTime() * 0.03;

            // Subtle mouse interaction
            points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.5, 0.05);
            points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.5, 0.05);
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#7c3aed"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Particles />
            </Canvas>
        </div>
    );
};

export default Background3D;
