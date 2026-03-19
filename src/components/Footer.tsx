import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container grid grid-cols-3 gap-lg footer-content">
                <div className="footer-col">
                    <h3 className="footer-logo">AUTO<span className="text-accent">COMFORT ACCESSORIES</span></h3>
                    <p className="text-secondary mt-sm">
                        Providing exceptional auto upholstery, premium paint protection film, and
                        ceramic coating in Dubai since 1991.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Contact Details</h4>
                    <ul className="footer-links">
                        <li><strong>Address:</strong> Al Quoz Industrial Area 1, Dubai, PO.Box: 1234, UAE</li>
                        <li><strong>Phone:</strong> (+971) 55 653 2991</li>
                        <li><strong>WhatsApp:</strong> (+971) 55 836 2115</li>
                        <li><strong>Email:</strong> autocomfortuae@gmail.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.instagram.com/autocomfortaccessories/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://twitter.com/autocomfort" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://www.facebook.com/pages/autocomfort" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container text-center text-secondary">
                    <p>&copy; {new Date().getFullYear()} Autocomfort Accessories. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
