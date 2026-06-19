'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import logoImg from '../../public/logo.png';
import whatsappIcon from '../../public/whatsapp-icon.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container flex justify-between items-center navbar-container">
                <div className="logo">
                    <Link href="/">
                        <Image src={logoImg} alt="Autocomfort Accessories" height={52} className="logo-img" priority />
                    </Link>
                </div>

                <div className="nav-actions flex items-center gap-sm">
                    {/* Desktop Menu */}
                    <nav className="nav-links">
                        <Link href="#services">Services</Link>
                        <Link href="#about">About</Link>
                        <Link href="#gallery">Gallery</Link>
                        <Link href="#contact" className="btn btn-primary">Book Now</Link>
                    </nav>
                </div>
            </div>

            {/* Floating Contact Buttons */}
            <a href="https://wa.me/971558362115" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-float" aria-label="WhatsApp">
                <Image src={whatsappIcon} alt="WhatsApp" width={60} height={60} />
            </a>
            <a href="tel:+971556532991" className="floating-btn phone-float" aria-label="Call Us">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
        </header>
    );
};

export default Navbar;
