import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    // Show only the first 3 featured projects on the home page
    const displayedProjects = projectsData.filter(p => p.featured).slice(0, 3);

    return (
        <section id="projects" className="section" style={{ backgroundColor: '#181818' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                    {displayedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -10 }}
                            style={{
                                background: '#252525',
                                borderRadius: '8px',
                                overflow: 'hidden', // Ensure image stays inside border radius
                                borderBottom: '3px solid var(--accent-gold)'
                            }}
                        >
                            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: '#333' }}></div>
                                )}
                            </div>

                            <div style={{ padding: '25px' }}>
                                <h3 style={{ marginBottom: '15px' }}>{project.title}</h3>
                                <p style={{ marginBottom: '20px', color: '#ccc', fontSize: '0.95rem' }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.8rem', padding: '5px 10px', background: '#333', borderRadius: '15px' }}>{tag}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--accent-gold)' }}>
                                        View Project <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/projects">
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
                            View All Projects <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
