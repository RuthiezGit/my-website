import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: '#181818' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Get In Touch</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                    <div>
                        <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Mail color="var(--accent-gold)" />
                            <a href="mailto:deemuabae007@gmail.com">deemuabae007@gmail.com</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <span style={{ color: 'var(--accent-gold)' }}>📞</span>
                            <a href="tel:+2348104289851">+234 810 428 9851</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <MapPin color="var(--accent-gold)" />
                            <span>Port Harcourt, Nigeria</span>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                            <a href="https://github.com/RuthiezGit" target="_blank" rel="noopener noreferrer"><Github size={30} /></a>
                            <a href="https://linkedin.com/in/ruthiedee" target="_blank" rel="noopener noreferrer"><Linkedin size={30} /></a>
                        </div>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Your Name" style={{ padding: '15px', background: '#333', border: 'none', color: '#fff', borderRadius: '4px' }} />
                        <input type="email" placeholder="Your Email" style={{ padding: '15px', background: '#333', border: 'none', color: '#fff', borderRadius: '4px' }} />
                        <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', background: '#333', border: 'none', color: '#fff', borderRadius: '4px' }}></textarea>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
