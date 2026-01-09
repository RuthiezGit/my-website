import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/about';

const AboutHome = () => {
    // Truncate bio for the preview
    const bioPreview = aboutData.bio.split('.').slice(0, 3).join('.') + '.';

    return (
        <section id="about" className="section" style={{ backgroundColor: '#121212' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
                        <User size={32} color="var(--accent-gold)" />
                        <h2 style={{ fontSize: '2.5rem', margin: 0 }}>About Me</h2>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '40px' }}>
                        {bioPreview}
                    </p>

                    <Link to="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--accent-gold)',
                                color: 'var(--accent-gold)',
                                padding: '12px 30px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            Read Full Bio <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHome;
