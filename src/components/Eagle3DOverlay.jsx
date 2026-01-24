import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Bird Component (Since we don't have a GLB file yet)
// This constructs a more complex bird shape using geometric primitives
const ProceduralEagle = (props) => {
    const group = useRef();
    const leftWing = useRef();
    const rightWing = useRef();
    const body = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Flapping animation
        if (leftWing.current && rightWing.current) {
            leftWing.current.rotation.z = Math.sin(time * 10) * 0.5 + 0.2;
            rightWing.current.rotation.z = -Math.sin(time * 10) * 0.5 - 0.2;
        }
        // Bobbing motion is handled by Float, but we can add forward tilt
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Body Group */}
            <group ref={body}>
                {/* Main Body Torso */}
                <mesh position={[0, -0.2, 0]} rotation={[1.57, 0, 0]} castShadow>
                    <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
                    <meshStandardMaterial color="#4A3728" roughness={0.6} text="Body" />
                </mesh>

                {/* White Head */}
                <mesh position={[0, 0.6, 0.2]} castShadow>
                    <sphereGeometry args={[0.32, 16, 16]} />
                    <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
                </mesh>

                {/* Beak */}
                <mesh position={[0, 0.55, 0.5]} rotation={[1.57, 0, 0]}>
                    <coneGeometry args={[0.12, 0.4, 8]} />
                    <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
                </mesh>

                {/* Eyes */}
                <mesh position={[0.15, 0.65, 0.4]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[-0.15, 0.65, 0.4]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="black" />
                </mesh>

                {/* Tail Feathers */}
                <mesh position={[0, -0.8, -0.2]} rotation={[-0.5, 0, 0]}>
                    <boxGeometry args={[0.6, 0.8, 0.1]} />
                    <meshStandardMaterial color="#FFFFFF" />
                </mesh>
            </group>

            {/* Left Wing */}
            <group position={[0.3, 0.2, 0]} ref={leftWing}>
                <mesh position={[1.2, 0, 0]} rotation={[0, 0, 0]} castShadow>
                    {/* Simplified Wing Shape */}
                    <boxGeometry args={[2.4, 0.1, 1]} />
                    <meshStandardMaterial color="#4A3728" />
                </mesh>
                {/* Wing Tips */}
                <mesh position={[2.4, 0, 0.2]} rotation={[0, -0.2, 0]}>
                    <boxGeometry args={[0.8, 0.05, 0.6]} />
                    <meshStandardMaterial color="#3E2723" />
                </mesh>
            </group>

            {/* Right Wing */}
            <group position={[-0.3, 0.2, 0]} ref={rightWing}>
                <mesh position={[-1.2, 0, 0]} rotation={[0, 0, 0]} castShadow>
                    <boxGeometry args={[2.4, 0.1, 1]} />
                    <meshStandardMaterial color="#4A3728" />
                </mesh>
                {/* Wing Tips */}
                <mesh position={[-2.4, 0, 0.2]} rotation={[0, 0.2, 0]}>
                    <boxGeometry args={[0.8, 0.05, 0.6]} />
                    <meshStandardMaterial color="#3E2723" />
                </mesh>
            </group>
        </group>
    );
};

const Eagle3DScene = ({ isFlying, onFlightEnd }) => {
    const eagleRef = useRef();

    useFrame((state, delta) => {
        if (!isFlying || !eagleRef.current) return;

        const time = state.clock.getElapsedTime();
        const duration = 10; // seconds

        // Flight Path Logic
        // We want to simulate the CSS keyframe animation but in 3D space
        // Starting from top-left far away, swooping down, then landing

        // Simple circular swoop for now as a POC
        const t = (time % duration) / duration;

        // Reset if done (handled by parent timeout usually, but we can do logic here)

        // Position math
        // Swoop from (-10, 10, -20) to (0, 0, 5) to (10, 10, -20)

        // Let's make it follow the cursor or just a path? USER said "fly whole screen"
        // Let's move it in a large figure 8 or curve relative to camera

        const x = Math.sin(time * 0.5) * 8;
        const y = Math.cos(time * 1.0) * 3;
        const z = Math.sin(time * 0.3) * 5;

        eagleRef.current.position.set(x, y, z);

        // Banking (rotation) based on movement
        eagleRef.current.rotation.z = -x * 0.1; // Bank turn
        eagleRef.current.rotation.y = Math.PI + (x * 0.2); // Face forward mostly

    });

    return (
        <group ref={eagleRef} position={[0, 0, 0]}>
            <Float speed={5} rotationIntensity={0.5} floatIntensity={1}>
                <ProceduralEagle scale={[0.5, 0.5, 0.5]} />
            </Float>
        </group>
    );
};

const Eagle3DOverlay = ({ isFlying, onClose }) => {
    if (!isFlying) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            pointerEvents: 'none', // Allow clicks to pass through if needed, but maybe not for full immersive
            background: 'rgba(0,0,0,0.1)' // Slight dim to show depth
        }}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Eagle3DScene isFlying={isFlying} />

                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default Eagle3DOverlay;
