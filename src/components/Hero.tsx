import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';
import heroBg from '../../public/hero-bg.jpg';

const Hero = () => {
    return (
        <section className="hero flex items-center justify-center">
            <Image 
                src={heroBg} 
                alt="Premium Car Protection" 
                fill 
                priority 
                className="hero-bg-image"
                style={{ objectFit: 'cover' }}
            />
            <div className="hero-overlay"></div>
            <div className="container hero-content text-center animate-fade-in">
                <h1 className="hero-title">
                    PREMIUM <span className="text-accent">PROTECTION</span> FOR YOUR VEHICLE
                </h1>
                <p className="hero-subtitle delay-100">
                    Experience the ultimate in automotive care with our industry-leading Paint Protection Film, Exterior Ceramic Coating, and Fabric & leather seats Ceramic Coating in Dubai.
                </p>
                <div className="hero-badge delay-200">
                    <span className="badge-highlight">5-7 Years Warranty</span> Included on PPF & Coatings
                </div>
                <div className="flex justify-center gap-md hero-buttons delay-300">
                    <Link href="#services" className="btn btn-primary">Our Services</Link>
                    <Link href="#contact" className="btn btn-outline">Get a Quote</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
