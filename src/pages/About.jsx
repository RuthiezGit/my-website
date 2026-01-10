import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, User, Briefcase, Award, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/about';

const SectionHeader = ({ icon: Icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <Icon size={32} color="var(--accent-gold)" />
        <h2 style={{ fontSize: '2rem', margin: 0 }}>{title}</h2>
    </div>
);

const About = () => {
    return (
        <section style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '40px 20px', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: 'var(--accent-gold)' }}
                >
                    About Me
                </motion.h1>

                {/* Biography Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ background: '#1e1e1e', padding: '40px', borderRadius: '12px', marginBottom: '50px', borderLeft: '4px solid var(--accent-gold)' }}
                >
                    <SectionHeader icon={User} title="Who I Am" />
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                        {aboutData.bio}
                    </p>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '50px' }}
                >
                    <SectionHeader icon={BookOpen} title="Education" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {aboutData.education.map((edu, index) => (
                            <div key={index} style={{ background: '#252525', padding: '25px', borderRadius: '8px' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{edu.degree}</h3>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>{edu.school}, {edu.location}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#888', marginBottom: '10px' }}>{edu.year}</p>
                                <p style={{ color: '#ccc' }}>{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '50px' }}
                >
                    <SectionHeader icon={Briefcase} title="Experience" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {aboutData.experience.map((exp, index) => (
                            <div key={index} style={{
                                background: '#252525',
                                padding: '25px',
                                borderRadius: '8px',
                                borderLeft: '3px solid var(--accent-gold)'
                            }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>{exp.company}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#888', marginBottom: '15px' }}>{exp.period} | {exp.location}</p>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', color: '#ccc', display: 'flex', gap: '10px' }}>
                                            <span style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>



                {/* Leadership & Engagement Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ marginTop: '50px' }}
                >
                    <SectionHeader icon={Heart} title="Leadership & Engagement" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {aboutData.leadership.map((vol, index) => (
                            <div key={index} style={{ background: '#1e1e1e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '5px' }}>{vol.role}</h3>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{vol.organization}</p>
                                <p style={{ fontSize: '0.95rem', color: '#ccc' }}>{vol.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, marginTop: '20px' }}
                    whileInView={{ opacity: 1, marginTop: '50px' }}
                    viewport={{ once: true }}
                >
                    <SectionHeader icon={CheckCircle} title="Certifications & Honors" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {aboutData.certifications.map((cert, index) => (
                            <div key={index} style={{
                                padding: '20px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid #444',
                                borderRadius: '12px'
                            }}>
                                <h4 style={{ color: '#fff', marginBottom: '5px' }}>{cert.title}</h4>
                                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{cert.details}</p>
                                <span style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '2px 8px', borderRadius: '4px' }}>
                                    {cert.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
