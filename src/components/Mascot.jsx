import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

const CharacterModel = ({ activeSection }) => {
    const group = useRef();
    const { scene, animations } = useGLTF('/models/robot_assistant.glb');
    const { actions } = useAnimations(animations, group);

    // Animation mapping based on section
    useEffect(() => {
        const animationMap = {
            hero: 'Wave',
            about: 'Sitting',
            experience: 'Standing',
            skills: 'Jump',
            projects: 'Dance',
            contact: 'ThumbsUp',
        };

        const actionName = animationMap[activeSection] || 'Idle';
        if (actions[actionName]) {
            Object.values(actions).forEach(action => action.fadeOut(0.5));
            actions[actionName].reset().fadeIn(0.5).play();
        }
    }, [activeSection, actions]);

    // Scroll-based rotation logic (centering model)
    useFrame((_state) => {
        if (!group.current) return;

        // Default targets (centered in bubble)
        let targetX = 0;
        let targetY = -0.8;
        let targetRotationY = 0;

        // Adjust rotation based on section for focus
        if (activeSection === 'about') {
            targetRotationY = 0.5;
        } else if (activeSection === 'contact') {
            targetRotationY = -0.3;
        }

        // Smooth lerping
        group.current.position.x += (targetX - group.current.position.x) * 0.05;
        group.current.position.y += (targetY - group.current.position.y) * 0.05;
        group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.05;
    });

    return (
        <group ref={group} dispose={null} scale={0.45}>
            <primitive object={scene} />
        </group>
    );
};

const Mascot = ({ activeSection }) => {
    const messages = {
        hero: "Hey there! I'm your portfolio guide. Feel free to rotate me or scroll to explore!",
        about: "Avisekh handles complex problems with ease. Here is his academic background.",
        experience: "Check out his professional journey at Microace Software!",
        skills: "A versatile stack for building powerful, modern applications.",
        projects: "Welcome to the 'Museum'! Interact with these 3D artifacts.",
        contact: "Need a full-stack expert? Let's start a conversation right here!",
    };

    // Define container positioning based on section
    const getContainerStyles = () => {
        switch (activeSection) {
            case 'about': return { right: 'auto', left: '2rem', bottom: '2rem' };
            case 'projects': return { right: '50%', transform: 'translateX(50%)', bottom: '2rem' };
            default: return { right: '2rem', left: 'auto', bottom: '2rem' };
        }
    };

    return (
        <motion.div
            initial={false}
            animate={getContainerStyles()}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed z-[100] w-64 h-64 pointer-events-none md:block hidden"
        >
            {/* Speech Bubble */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 pointer-events-auto"
                >
                    <div className="glass p-4 rounded-3xl border-white/10 text-[10px] font-bold text-violet-300 uppercase tracking-widest leading-normal shadow-2xl backdrop-blur-xl text-center">
                        {messages[activeSection] || "Scanning..."}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 glass rotate-45 border-r border-b border-white/10" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* 3D Mascot Canvas */}
            <div className="w-full h-full pointer-events-auto">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 5], fov: 35 }}
                    style={{ cursor: 'grab' }}
                >
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" />

                    <Suspense fallback={null}>
                        <CharacterModel activeSection={activeSection} />
                        <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} />
                        <Environment preset="city" />
                    </Suspense>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Canvas>
            </div>
        </motion.div>
    );
};

export default Mascot;
