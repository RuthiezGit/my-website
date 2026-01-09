import React from 'react';

const experienceData = [
    {
        role: "Training in Robotics Development and Automation",
        company: "Robotics and Artificial Intelligence Nigeria (RAIN)",
        location: "Nigeria",
        period: "Feb 2023 – Dec 2025",
        description: [
            "Built a home-made self-defense taser.",
            "Programmed and configured CNC Pen Plotter Machine using G-code and Python.",
            "Assembled and controlled a bionic robot arm.",
            "Gained hands-on experience with microcontrollers (Arduino, ESP) and IoT systems."
        ]
    },
    {
        role: "Online ESL Tutor",
        company: "Superprof",
        location: "Ukraine",
        period: "May 2022 – Current",
        description: [
            "Helped clients perfect English skills, prepare for interviews and exams (IELTS, TOEFL, GCSE, Duolingo)."
        ]
    },
    {
        role: "Human Resources Advisory",
        company: "His Glory Pavilion Integrated Services Limited",
        location: "Nigeria",
        period: "Jan 2021 – Apr 2021",
        description: [
            "Joined, conducted, and supervised recruitment interviews.",
            "Gave opinionated ideas on recruitment processes and criteria."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Professional Experience</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experienceData.map((exp, index) => (
                        <div key={index} style={{
                            marginBottom: '40px',
                            borderLeft: '2px solid var(--accent-gold)',
                            paddingLeft: '20px',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
                            <h3 style={{ fontSize: '1.5rem' }}>{exp.role}</h3>
                            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>{exp.company}</h4>
                            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#888' }}>{exp.period} | {exp.location}</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
