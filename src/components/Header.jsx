import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navStyles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(31, 31, 31, 0.95)',
            zIndex: 1000,
            backdropFilter: 'blur(5px)',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--accent-gold)',
        },
        navLinks: {
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
        },
        link: {
            fontSize: '1rem',
            cursor: 'pointer',
        },
        hamburger: {
            display: 'none', // Hidden on desktop
            flexDirection: 'column',
            cursor: 'pointer',
            gap: '5px',
        },
        bar: {
            width: '25px',
            height: '3px',
            backgroundColor: 'var(--accent-gold)',
        }
    };

    return (
        <header style={navStyles.header}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={navStyles.logo}>Ruth.Dev</div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul style={navStyles.navLinks}>
                        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <li key={item}>
                                {item === 'About' ? (
                                    <Link
                                        to="/about"
                                        style={navStyles.link}
                                        className="nav-link"
                                    >
                                        {item}
                                    </Link>
                                ) : (
                                    <a
                                        href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                        style={navStyles.link}
                                        className="nav-link"
                                    >
                                        {item}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Icon (Placeholder for now, css usually helps hide/show) */}
            </div>
        </header>
    );
};

export default Header;
