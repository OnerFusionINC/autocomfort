'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container flex justify-between items-center navbar-container">
                <div className="logo">
                    <Link href="/">
                        AUTO<span className="text-accent">COMFORT</span>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link href="#services">Services</Link>
                    <Link href="#about">About</Link>
                    <Link href="#gallery">Gallery</Link>
                    <Link href="#contact" className="btn btn-primary">Book Now</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
