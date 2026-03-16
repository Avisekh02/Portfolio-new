import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Microace Software",
            period: "Apr 2025 – Present",
            location: "Kolkata, India",
            achievements: [
                "Developing Taste N Bite POS System with billing, inventory management, and reporting features.",
                "Building responsive UI with Next.js and managing MySQL operations.",
                "Collaborating with teams to improve performance and scalability."
            ]
        },
        {
            role: "Software Development Intern",
            company: "Microace Software",
            period: "Apr 2025 – May 2025",
            location: "Kolkata, India",
            achievements: [
                "Contributed to Ritika Finance project feature implementation.",
                "Built frontend with React and backend with Express.js.",
                "Integrated Firebase authentication and real-time data.",
                "Delivered code under tight deadlines."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-violet-500">Experience</span></h2>
                    <p className="text-gray-400">My journey in building production-grade software.</p>
                </motion.div>

                <div className="relative border-l-2 border-violet-500/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                        >
                            {/* Dot */}
                            <div className="absolute top-0 w-8 h-8 bg-violet-600 rounded-full border-4 border-[#030014] -left-10 md:left-auto md:right-0 md:translate-x-1/2 flex items-center justify-center">
                                <Briefcase size={14} className="text-white" />
                            </div>

                            <div className="glass p-8 rounded-3xl border-white/5 shadow-xl">
                                <span className="text-violet-400 font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">{exp.role}</h3>
                                <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                                <ul className={`text-gray-400 space-y-3 ${idx % 2 === 0 ? 'md:items-end' : ''}`}>
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                                            <span className="text-sm leading-relaxed text-left">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
