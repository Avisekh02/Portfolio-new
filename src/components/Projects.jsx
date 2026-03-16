import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ project, idx }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="glass rounded-3xl overflow-hidden border-white/5 group flex flex-col h-full relative"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="h-48 bg-gradient-to-br from-violet-900/40 to-black p-8 flex items-center justify-center relative overflow-hidden"
            >
                <Layers className="text-white/20 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform" size={120} />
                <div className="relative z-10 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <span className="text-violet-400 font-bold tracking-widest text-xs uppercase">{project.type}</span>
                </div>
            </div>

            <div
                style={{ transform: "translateZ(50px)" }}
                className="p-8 flex flex-col flex-grow"
            >
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest rounded-md border border-white/5">{t}</span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <motion.a whileHover={{ scale: 1.2 }} href={project.link} className="text-white/70 hover:text-white transition-colors">
                        <Github size={20} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href={project.link} className="text-white/70 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Breast Cancer Prediction",
            description: "Research-based ML model using Ant Colony Optimization for feature selection and classification.",
            tech: ["Python", "ACO", "scikit-learn"],
            link: "#",
            type: "Research"
        },
        {
            title: "Taste N Bite POS",
            description: "Comprehensive POS system with billing, inventory management, and real-time reporting.",
            tech: ["React", "MySQL", "Next.js"],
            link: "#",
            type: "Full Stack"
        },
        {
            title: "Health Management System",
            description: "AI-powered secure health data system integrated with Blockchain technology.",
            tech: ["React", "Solidity", "Python"],
            link: "#",
            type: "Blockchain & AI"
        },
        {
            title: "Ritika Finance",
            description: "Real-time finance management platform with secure Firebase authentication.",
            tech: ["React", "Express.js", "Firebase"],
            link: "#",
            type: "FinTech"
        },
        {
            title: "Weather Prediction",
            description: "ML-based weather forecasting system using historical data analysis.",
            tech: ["Python", "scikit-learn"],
            link: "#",
            type: "Machine Learning"
        },
        {
            title: "Sound Vibe",
            description: "Experimental Three.js redesign for a music-centric web experience.",
            tech: ["Three.js", "React", "GLSL"],
            link: "https://github.com/Avisekh02",
            type: "3D Web"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black mb-4">Featured <span className="text-violet-500">Museum.</span></h2>
                        <p className="text-gray-400 text-lg">Hover to interact with our latest engineering artifacts.</p>
                    </div>
                    <a href="https://github.com/Avisekh02" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-violet-400 hover:text-white transition-all font-bold group">
                        All Projects <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
