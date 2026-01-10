import React from 'react';

const skills = [
    "Python", "C++", "HTML", "CSS", "JavaScript", "Flask", "SQL",
    "Arduino", "ESP Modules", "Raspberry Pi", "Robotics", "OpenCV"
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Skills</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{
                            padding: '15px 30px',
                            border: '1px solid var(--accent-gold)',
                            borderRadius: '30px',
                            fontSize: '1.1rem',
                            color: 'var(--text-color)',
                            background: 'rgba(212, 175, 55, 0.1)'
                        }}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
