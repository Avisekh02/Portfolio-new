import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Torus, MeshWobbleMaterial } from '@react-three/drei';

const FloatingElements = () => {
    return (
        <>
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <Sphere args={[1, 100, 200]} scale={2.5} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#7c3aed"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0}
                    />
                </Sphere>
            </Float>

            <Float speed={3} rotationIntensity={3} floatIntensity={1} position={[4, 2, -2]}>
                <Torus args={[0.8, 0.2, 16, 100]} scale={1.2}>
                    <MeshWobbleMaterial color="#3b82f6" speed={1} factor={0.6} />
                </Torus>
            </Float>

            <Float speed={4} rotationIntensity={1} floatIntensity={3} position={[-5, -2, -3]}>
                <Sphere args={[0.5, 64, 64]} scale={1.5}>
                    <MeshDistortMaterial color="#10b981" distort={0.6} speed={3} />
                </Sphere>
            </Float>
        </>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* 3D Background Element */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                    <Suspense fallback={null}>
                        <FloatingElements />
                        <Environment preset="night" />
                    </Suspense>
                </Canvas>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-violet-400 text-sm font-semibold tracking-widest border border-violet-500/20"
                    >
                        AVISEKH KUMAR TEWARI • MCA
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tighter">
                        Full Stack <br />
                        <span className="text-gradient">Innovator.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-lg mb-12 leading-relaxed font-light">
                        Architecting <span className="text-white font-medium italic">immersive</span> web solutions
                        at the intersection of <span className="text-blue-400">Design</span>,
                        <span className="text-violet-400"> Engineering</span>, and <span className="text-emerald-400">AI</span>.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-bold shadow-2xl transition-all"
                        >
                            Explore Portfolio
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 glass text-white rounded-2xl font-bold transition-all"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <div className="hidden md:block">
                    {/* Space for additional visual elements if needed */}
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
            >
                <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center pt-3">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-violet-500 rounded-full"
                    />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-white uppercase font-bold">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
