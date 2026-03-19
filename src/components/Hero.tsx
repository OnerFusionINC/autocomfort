import Link from 'next/link';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero flex items-center justify-center">
            <div className="hero-overlay"></div>
            <div className="container hero-content text-center animate-fade-in">
                <h1 className="hero-title">
                    PREMIUM <span className="text-accent">PROTECTION</span> FOR YOUR VEHICLE
                </h1>
                <p className="hero-subtitle delay-100">
                    Experience the ultimate in automotive care with our industry-leading Paint Protection Film, Exterior Ceramic Coating, and Fabric & leather seats Ceramic Coating in Dubai.
                </p>
                <div className="flex justify-center gap-md hero-buttons delay-200">
                    <Link href="#services" className="btn btn-primary">Our Services</Link>
                    <Link href="#contact" className="btn btn-outline">Get a Quote</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
