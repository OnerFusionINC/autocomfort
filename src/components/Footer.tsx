import Image from 'next/image';
import logoImg from '../../public/logo.png';
import whatsappIcon from '../../public/whatsapp-icon.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container grid grid-cols-3 gap-lg footer-content">
                <div className="footer-col">
                    <Image src={logoImg} alt="Autocomfort Accessories" height={40} className="footer-logo" />
                    <p className="text-secondary mt-sm">
                        Providing exceptional auto upholstery, premium paint protection film, and
                        ceramic coating in Dubai since 1991.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Contact Details</h4>
                    <ul className="footer-links">
                        <li><strong>Address:</strong> Al Quoz Industrial Area 1, Dubai, PO.Box: 1234, UAE</li>
                        <li className="flex items-center gap-xs">
                            <strong>Phone:</strong> 
                            <a href="tel:+971556532991" className="hover:text-accent transition-colors">(+971) 55 653 2991</a>
                        </li>
                        <li className="flex items-center gap-xs">
                            <strong>WhatsApp:</strong>
                            <a href="https://wa.me/971558362115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:text-accent transition-colors">
                                <Image src={whatsappIcon} alt="WhatsApp" width={20} height={20} className="inline-block" />
                                (+971) 55 836 2115
                            </a>
                        </li>
                        <li className="flex items-center gap-xs">
                            <strong>Email:</strong> 
                            <a href="mailto:autocomfortuae@gmail.com" className="hover:text-accent transition-colors">autocomfortuae@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-links flex gap-md mt-sm">
                        <a href="https://www.instagram.com/autocomfortaccessories/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://twitter.com/autocomfort" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/pages/autocomfort" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container text-center text-secondary">
                    <p>&copy; {new Date().getFullYear()} Autocomfort Accessories. All rights reserved. | Designed by <a href="https://www.onerfusion.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">OnerFusion</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
