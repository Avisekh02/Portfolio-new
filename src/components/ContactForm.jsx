import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            // Reset form after success
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact-form" className="py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-16 rounded-[2.5rem] border-white/5 shadow-2xl relative z-10"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-white">Send a <span className="text-violet-500">Message</span></h2>
                        <p className="text-gray-400">Have a question or want to work together? Drop me a line!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full py-5 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-3 ${status === 'success' ? 'bg-emerald-600' : 'bg-violet-600 hover:bg-violet-700'
                                }`}
                        >
                            {status === 'idle' && (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </>
                            )}
                            {status === 'loading' && (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            )}
                            {status === 'success' && (
                                <>
                                    <span>Message Sent!</span>
                                    <CheckCircle size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-emerald-400 text-sm mt-4 font-medium"
                        >
                            Thank you! Your message has been sent successfully.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
