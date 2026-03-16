import { motion } from 'framer-motion';
import { Code2, Server, Database, Box } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Box className="text-blue-500" />,
            skills: ["React", "Angular", "Next.js", "HTML5", "CSS3", "Three.js"]
        },
        {
            title: "Backend",
            icon: <Server className="text-violet-500" />,
            skills: ["Express.js", "Django", "Flask", "Node.js", "REST API", "JWT"]
        },
        {
            title: "Databases",
            icon: <Database className="text-emerald-500" />,
            skills: ["MySQL", "Firebase", "Oracle", "PostgreSQL"]
        },
        {
            title: "Languages & More",
            icon: <Code2 className="text-amber-500" />,
            skills: ["C/C++", "Java", "JavaScript", "Python", "PHP", "Solidity", "Git"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-[#030014]/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-violet-500">Toolkit</span></h2>
                    <p className="text-gray-400">The technologies I use to bring ideas to life.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="glass p-8 rounded-3xl border-white/5 hover:border-white/20 transition-all group"
                        >
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
