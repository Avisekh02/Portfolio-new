import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-24 bg-black/40 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="text-violet-500">Connect.</span></h2>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Open for collaborations, interesting projects, or just a friendly chat about technology and code.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:avisekhkumartewari@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
                                    <Mail size={20} className="text-violet-400" />
                                </div>
                                <span>avisekhkumartewari@gmail.com</span>
                            </a>
                            <a href="tel:+919123828516" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
                                    <Phone size={20} className="text-violet-400" />
                                </div>
                                <span>+91-9123828516</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-end items-start md:items-end"
                    >
                        <div className="flex gap-4 mb-8">
                            <a href="https://github.com/Avisekh02" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:scale-110 transition-all text-white">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/avisekh-kumar-tewari-a42048253" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:scale-110 transition-all text-white">
                                <Linkedin size={24} />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm">Based in Kolkata, India • Remote Friendly</p>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs gap-4">
                    <p>© {new Date().getFullYear()} Avisekh Kumar Tewari. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <Heart size={12} className="text-red-500" /> using React & Three.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
