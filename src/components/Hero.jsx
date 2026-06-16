import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px', // accounts for fixed header
            position: 'relative', // for absolute children
            overflow: 'hidden'
        }}>
            {/* Elegant Vertical Projects CTA on the right */}
            <motion.a
                href="#projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    right: '30px',
                    top: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    zIndex: 10,
                    cursor: 'pointer'
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={24} />
                </motion.div>
                <span style={{
                    writingMode: 'vertical-rl',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                    opacity: 0.8
                }}>
                    RECENT WORKS
                </span>
            </motion.a>

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '40px' }}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent-gold)',
                            margin: '0 auto 20px',
                            background: '#333',
                            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                        }}
                    >
                        <img src={`${import.meta.env.BASE_URL}images/my_dp.jpg`} alt="Ruth Deemua" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{ fontSize: '3rem', marginBottom: '10px' }}
                    >
                        Ruth Ewonubari Deemua
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '20px' }}
                    >
                        Aspiring Mechatronics Engineer & Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#aaa' }}
                    >
                        Passionate about robotics, programming, and innovation. Experienced in building and automating systems using Python, C++, and embedded technologies. Driven to create solutions that make a real impact.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link to="/#contact" className="btn btn-primary" style={{
                        background: 'var(--accent-gold)',
                        color: '#000',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
                    }}>Hire Me</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
