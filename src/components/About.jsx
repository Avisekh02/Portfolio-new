import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
    const education = [
        {
            degree: "M.C.A.",
            institution: "JIS College of Engineering, Kalyani",
            year: "2022 – 2024"
        },
        {
            degree: "B.Sc. in Computer Science",
            institution: "Kanchrapara College",
            year: "2019 – 2022"
        }
    ];

    return (
        <section id="about" className="py-24 bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-16 items-start"
                >
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">
                            Solving Practical Problems <br />
                            <span className="text-violet-500 not-italic">Through Technology.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Motivated Full Stack Developer with hands-on experience in React, Express.js, Firebase, and MySQL.
                            Currently employed at <span className="text-white font-medium">Microace Software</span>,
                            delivering web solutions using modern technologies, blockchain, and AI.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="text-violet-500" size={20} />
                                <span>Kolkata, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Award className="text-violet-500" size={20} />
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full grid gap-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                            <GraduationCap className="text-violet-500" /> Education
                        </h3>
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="glass p-6 rounded-2xl border-white/5"
                            >
                                <h4 className="font-bold text-white text-lg">{edu.degree}</h4>
                                <p className="text-violet-400 font-medium">{edu.institution}</p>
                                <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
