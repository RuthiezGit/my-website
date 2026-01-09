import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectsGallery = () => {
    return (
        <section style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '40px 20px', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: 'var(--accent-gold)' }}
                >
                    Projects Gallery
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}
                            style={{
                                background: '#1e1e1e',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #333'
                            }}
                        >
                            {project.image ? (
                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    />
                                </div>
                            ) : (
                                <div style={{ height: '180px', background: '#252525', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: '#555' }}>No Image Available</span>
                                </div>
                            )}

                            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{project.title}</h3>
                                <p style={{
                                    color: '#ccc',
                                    marginBottom: '10px',
                                    lineHeight: '1.5',
                                    fontSize: '0.9rem',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {project.longDescription || project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.7rem',
                                            padding: '3px 10px',
                                            background: 'rgba(255, 215, 0, 0.1)',
                                            color: 'var(--accent-gold)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255, 215, 0, 0.2)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'auto' }}>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                background: 'var(--accent-gold)',
                                                color: '#000',
                                                padding: '8px 16px',
                                                borderRadius: '4px',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            View Project <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span style={{ display: 'inline-block', padding: '8px 0', color: '#666', fontSize: '0.85rem' }}>Work in Progress</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGallery;
